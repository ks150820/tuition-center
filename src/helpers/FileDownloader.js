import {DeviceEventEmitter} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {
  DOWNLOAD_STATUS,
  DOWNLOAD_TYPE,
  MAX_FOLDER_SIZE,
  PDF_DIRECTORY,
  REQUEST_TYPE,
  ROOT_DIRECTORY,
  VIDEO_DIRECTORY,
} from 'screens/video-player-screen/offline-videos/resources/values/constants';
import DownloadService from 'screens/video-player-screen/offline-videos/services/DownloadService';
import {
  createTable,
  getDBConnection,
  getDownloadedItem,
  getPendingDownloadItems,
  initializeDownload,
  updateDownloadItem,
} from '../localStorage/DownloadDatabase';
import {
  handleUpdateDownloadProgress,
  handleUpdateDownloadStatus,
  handleContentDownloadComplete,
  initializeContentDownload,
} from 'store/entities/downloadManager';
import COLORS from 'themes/colors';
import {TEXT_DOWNLOAD_FLOW} from 'screens/video-player-screen/offline-videos/resources/values/strings';
import RNFetchBlob from 'rn-fetch-blob';

// Offline content path
const offlineContentPath = `${RNFetchBlob.fs.dirs.DocumentDir}/${ROOT_DIRECTORY}`;
// Max retry count for interrupted downloads
const MAX_RETRY_DOWNLOAD_COUNT = 3;
// Max folder size in MB
const maxFolderSize = MAX_FOLDER_SIZE * 1024;

let db;
let fileSize = 0.0;
let folderContentSize = 0;
let isDownloadServiceInUse = false;
let retryDownloadCount = 0;
let pausedContentArray = [];
let task;

// Initialize File Downloader
const initializeDownloadInstance = async () => {
  // Initialize Database
  await initializeDatabase();
  // Make content directory
  await RNFetchBlob.fs
    .mkdir(offlineContentPath)
    .catch(reason => console.log(reason));
};

// Initialize Database
const initializeDatabase = async () => {
  if (!db) {
    db = await getDBConnection();
    await createTable(db);
  }
};

// Get directory path based on content type
const getDirectoryPath = contentDetail => {
  const userId = contentDetail.userId;
  const contentType = contentDetail.contentType;
  const subDir =
    contentType === DOWNLOAD_TYPE.TYPE_VIDEO ? VIDEO_DIRECTORY : PDF_DIRECTORY;
  // Return directory path based on content type
  return `${offlineContentPath}/${userId}/${subDir}`;
};

// Handle different action as per incoming request
export const handleContentRequest = (store, contentDetailStr) => {
  if (!contentDetailStr) {
    // IMP Log, Don't remove
    console.log('Download failed, contentDetail undefined..!!!');
    return;
  }
  const contentDetail = JSON.parse(contentDetailStr);
  const requestType = contentDetail?.requestType;
  if (requestType !== undefined) {
    if (requestType === REQUEST_TYPE.INITIATE_DOWNLOAD) {
      downloadContent(store, contentDetail);
    } else if (requestType === REQUEST_TYPE.PAUSE_DOWNLOAD) {
      onPauseDownloadRequest(store, contentDetail);
    } else if (requestType === REQUEST_TYPE.RESUME_DOWNLOAD) {
      onResumeDownloadRequest(store, contentDetail);
    } else if (requestType === REQUEST_TYPE.CANCEL_DOWNLOAD) {
      handleCancelDownloadRequest(store, contentDetail);
    }
  }
};

// Handle content download flow
export const downloadContent = async (store, contentDetail) => {
  const contentId = contentDetail.contentId;
  if (!contentId || contentId.trim().length === 0) {
    // IMP Log, Don't remove
    console.log('Download failed, contentId undefined or empty..!!!');
    return;
  }
  // Initialize File Downloader
  await initializeDownloadInstance();
  // Get content directory size
  const contentFolderSize =
    (await getDirectorySize(offlineContentPath)) / (1024 * 1024);
  console.log('contentFolderSize : ', `${contentFolderSize} MB`);
  // Check content directory size and throw error if user reached max limit
  if (contentFolderSize > maxFolderSize) {
    // IMP Log, Don't remove
    console.log('Maximum content storage limit reached..!!!');
    showNoSpaceSnackbarAlert();
    if (!isDownloadServiceInUse) {
      stopService();
    }
    return;
  }
  // Initialize content download process by storing it to db & store
  console.log('Database :: initializeDownload called..!!!!');
  await initializeDownload(db, contentDetail);
  store.dispatch(
    initializeContentDownload(
      contentId,
      contentDetail.contentName,
      contentDetail.contentDuration,
    ),
  );
  // If download service free than only look for further downloads
  if (!isDownloadServiceInUse) {
    checkForPendingContents(store);
  }
};

// Method to show no space snackbar alert
const showNoSpaceSnackbarAlert = () => {
  Snackbar.show({
    text: TEXT_DOWNLOAD_FLOW.NO_ENOUGH_SPACE.en,
    duration: Snackbar.LENGTH_LONG,
    action: {
      text: TEXT_DOWNLOAD_FLOW.GO_TO_DOWNLOADS.en,
      textColor: COLORS.grey,
      onPress: navigateToDownloadsScreen,
    },
  });
};

// Method to navigate to Downloads screen
const navigateToDownloadsScreen = () => {
  // navigation.navigate(SCREEN_NAME.MY_DOWNLOADS);
};

// Look for pending contents and start downloading
const checkForPendingContents = async store => {
  let isAnythingPending = false;
  // Get pending items from database
  const pendingDownloadItems = await getPendingDownloadItems(db);
  console.log('pendingDownloadItems : ', pendingDownloadItems);
  if (pendingDownloadItems && pendingDownloadItems.length > 0) {
    isAnythingPending = true;
    const pendingDownloadItem = pendingDownloadItems[0];
    console.log('Pending download found..!!!');
    // Here restart service to override notification with updated content details
    DownloadService.resetNotificationBuilder();
    DownloadService.startService(JSON.stringify(pendingDownloadItem));
    // Check if content is paused earlier, If found than resume else start from scratch
    const pausedContentIndex = pausedContentArray.findIndex(
      item => item.contentDetail.contentId === pendingDownloadItem.contentId,
    );
    if (pausedContentIndex !== -1) {
      const pausedContent = pausedContentArray[pausedContentIndex];
      handleResumeDownload(store, pausedContent.contentDetail);
    } else {
      startDownloadingPendingContent(store, pendingDownloadItem);
    }
  }
  // If no pending item found, Call stop service
  if (!isAnythingPending) {
    stopService();
  }
};

// Stop service if nothing in download queue
const stopService = () => {
  // Make service free
  retryDownloadCount = 0;
  isDownloadServiceInUse = false;
  console.log('Stop service called...!!!');
  DownloadService.stopService();
};

// Method to request pause download
const onPauseDownloadRequest = async (store, contentDetail) => {
  console.log('onPauseDownloadRequest called..!!!', contentDetail.contentId);
  // Remove older paused instance for same contentId
  const olderContentIndex = pausedContentArray.findIndex(
    item => item.contentDetail.contentId === contentDetail.contentId,
  );
  if (olderContentIndex !== -1) {
    // Remove item from pause array
    pausedContentArray.splice(olderContentIndex, 1);
  }
  pausedContentArray.push({
    contentDetail,
  });
  // Set download status as Paused
  const updatedData = {downloadStatus: DOWNLOAD_STATUS.PAUSED};
  await updateDownloadItem(db, contentDetail.contentId, updatedData);
  sendDownloadStatusUpdates(
    store,
    contentDetail.contentId,
    DOWNLOAD_STATUS.PAUSED,
  );
  // Cancel ongoing download task
  task.cancel();
  // Start downloading queued data
  checkForPendingContents(store);
};

// Method to handle resume download flow
const handleResumeDownload = async (store, contentDetail) => {
  const contentId = contentDetail.contentId;
  console.log('handleResumeDownload called..!!!', contentId);
  isDownloadServiceInUse = true;
  // Update download status to InProgress
  const updatedData = {downloadStatus: DOWNLOAD_STATUS.IN_PROGRESS};
  await updateDownloadItem(db, contentId, updatedData);
  sendDownloadStatusUpdates(store, contentId, DOWNLOAD_STATUS.IN_PROGRESS);
  // Get resume content details
  const resumeContentIndex = pausedContentArray.findIndex(
    item => item.contentDetail.contentId === contentId,
  );
  const folderPath = getDirectoryPath(contentDetail);
  // Remove item from pause array
  pausedContentArray.splice(resumeContentIndex, 1);
  // To resume download from previously paused point onwards,
  // Fetch already downloaded content size
  const contentSize = await getDirectorySize(`${folderPath}/${contentId}`);
  // Here total fileSize required,
  // Hence content detail fetched from db instead of above limited data
  const contentDetailDB = await getDownloadedItem(db, contentDetail.contentId);
  // Start downloading remaining file
  downloadContentFile(store, contentDetailDB, folderPath, contentSize);
};

// Method to request resume download
const onResumeDownloadRequest = async (store, contentDetail) => {
  console.log('onResumeDownloadRequest called..!!!');
  // In case of app restart if db not initialized than reinitialize it
  await initializeDatabase();
  // If downloadService is already in use than push to IN_QUEUE state else resume download
  if (isDownloadServiceInUse) {
    console.log('Service already running, Sended in queue');
    // Update download status to InQueue
    const updatedData = {downloadStatus: DOWNLOAD_STATUS.IN_QUEUE};
    await updateDownloadItem(db, contentDetail.contentId, updatedData);
    sendDownloadStatusUpdates(
      store,
      contentDetail.contentId,
      DOWNLOAD_STATUS.IN_QUEUE,
    );
  } else {
    // If download service is free than immediate resume download
    handleResumeDownload(store, contentDetail);
  }
};

const handleCancelDownloadRequest = async (store, contentDetail) => {
  // Update download status to Cancelled
  const updatedData = {downloadStatus: DOWNLOAD_STATUS.CANCELLED};
  await updateDownloadItem(db, contentDetail.contentId, updatedData);
  sendDownloadStatusUpdates(
    store,
    contentDetail.contentId,
    DOWNLOAD_STATUS.CANCELLED,
  );
  // Cancel ongoing download task
  task.cancel();
  // Stop download service
  stopService();
};

const startDownloadingPendingContent = async (store, contentDetail) => {
  isDownloadServiceInUse = true;
  const contentId = contentDetail.contentId;
  // Create folder with name of contentId
  const folderPath = getDirectoryPath(contentDetail);
  await RNFetchBlob.fs.mkdir(folderPath).catch(reason => console.log(reason));
  // Update download status to InProgress
  const updatedData = {downloadStatus: DOWNLOAD_STATUS.IN_PROGRESS};
  await updateDownloadItem(db, contentId, updatedData);
  sendDownloadStatusUpdates(store, contentId, DOWNLOAD_STATUS.IN_PROGRESS);
  // Start downloading file
  downloadContentFile(store, contentDetail, folderPath);
};

// Method to download content files
const downloadContentFile = async (
  store,
  contentDetail,
  folderPath,
  contentSize = 0, // Partially downloaded content size in bytes
) => {
  const contentId = contentDetail.contentId;
  // Initialize download task with RNFetchBlob
  // Here along with fetch request we can attach request heder,
  // By passing range in heder we can achieve resuming download
  task = RNFetchBlob.config({
    path: `${folderPath}/${contentId}`,
    overwrite: !contentSize,
  }).fetch('GET', contentDetail.uri, {Range: `bytes=${contentSize}-`});
  fileSize = contentDetail.contentFileSize;
  task
    .progress({interval: 500}, async (received, total) => {
      // Here store fileSize only if its null
      if (!fileSize) {
        fileSize = total;
        contentDetail.contentFileSize = fileSize;
        await updateDownloadItem(db, contentId, {contentFileSize: fileSize});
      }
      // Get downloaded content size
      const downloadedFileSize = contentSize + Math.floor(received);
      // Send download progress update
      downloadProgress(
        store,
        contentDetail,
        Math.floor((downloadedFileSize * 100) / fileSize),
      );
    })
    .then(async response => {
      retryDownloadCount = 0;
      console.log('Download completed...!!!');
      DeviceEventEmitter.emit('download-progress', {
        downloadProgress: 100,
        contentId,
      });
      store.dispatch(handleContentDownloadComplete(contentId, fileSize));
      // Update download data
      const updatedData = {downloadStatus: DOWNLOAD_STATUS.COMPLETED};
      await updateDownloadItem(db, contentId, updatedData);
      sendDownloadStatusUpdates(store, contentId, DOWNLOAD_STATUS.COMPLETED);
      // Start downloading queued data
      checkForPendingContents(store);
    })
    .catch(async err => {
      if (String(err).includes('canceled')) {
        // cancelled by user
        console.log('cancelled by user');
      } else {
        console.log('File download error: ', err);
        reDownloadAfterInterruption(store, folderPath, contentDetail);
      }
    });
};

const sendDownloadStatusUpdates = (store, contentId, downloadStatus) => {
  store.dispatch(handleUpdateDownloadStatus(contentId, downloadStatus));
  DeviceEventEmitter.emit('download-status', {
    downloadStatus,
    contentId,
  });
};

// If download interrupted due to any internal error, retry download
const reDownloadAfterInterruption = async (
  store,
  folderPath,
  contentDetail,
) => {
  ++retryDownloadCount;
  const contentId = contentDetail.contentId;
  // If max retries reached for given file than stop download service,
  // Because this clearly means that user facing major network issue.
  // So for performance prospective Stop service.
  if (retryDownloadCount > MAX_RETRY_DOWNLOAD_COUNT) {
    console.log('Max interrupted retry limit reached..!!!');
    // Set download status as Interrupted
    const updatedData = {downloadStatus: DOWNLOAD_STATUS.INTERRUPTED};
    await updateDownloadItem(db, contentId, updatedData);
    sendDownloadStatusUpdates(store, contentId, DOWNLOAD_STATUS.INTERRUPTED);
    // Stop download service
    stopService();
    return;
  }
  // Start downloading file
  downloadContentFile(store, contentDetail, folderPath);
};

// Method will be called on download progress update
var downloadProgress = (store, contentDetail, percentage) => {
  const contentId = contentDetail.contentId;
  console.log('DOWNLOAD IS ' + percentage + '% DONE!');
  DeviceEventEmitter.emit('download-progress', {
    percentage,
    contentId,
  });
  store.dispatch(handleUpdateDownloadProgress(contentId, percentage));
  // To send progress updates to notification
  DownloadService.updateDownloadProgress(
    percentage,
    JSON.stringify(contentDetail),
  );
};

// Method to find directory content size
export const getDirectorySize = async filePath => {
  folderContentSize = 0;
  await getTotalContentSize(filePath);
  return Math.floor(folderContentSize);
};

// To get entire folder size here we are iterating through each folder
const getTotalContentSize = async filePath => {
  // Get files and folders for given path
  const stats = await RNFetchBlob.fs.lstat(filePath);
  for (const stat of stats) {
    if (stat.type === 'directory') {
      // If its directory than check for sub folders
      await getTotalContentSize(stat.path);
    } else {
      // Else sum-up file size
      folderContentSize += Number(stat.size);
    }
  }
};
