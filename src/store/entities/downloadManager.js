import {createSelector, createSlice} from '@reduxjs/toolkit';
import {DOWNLOAD_STATUS} from 'screens/video-player-screen/offline-videos/resources/values/constants';

// Slice => reducer and actions
const slice = createSlice({
  name: 'downloadManager',
  initialState: {
    activeContentDownload: null,
    offlineContents: [
      // SAMPLE DATA STRUCTURE
      // {
      // 	contentId: "",
      // 	contentName: "",
      // 	contentDuration: 0,
      // 	contentFileSize: 0,
      // 	downloadProgress: 0,
      // 	downloadStatus: DOWNLOAD_STATUS.IN_PROGRESS,
      // 	contentChunks: [
      // 		{
      // 			chunkName: "",
      // 			isChunkDownloaded: false,
      // 		},
      // 	],
      // },
    ],
  },
  reducers: {
    initializeDownload: (downloadManager, action) => {
      // Here make active download null, Due to change in size of array need to reset active item index
      downloadManager.activeContentDownload = null;
      // Add content item to offline array
      const contentDetail = action.payload; // contentId, contentName, contentDuration
      contentDetail.downloadStatus = DOWNLOAD_STATUS.IN_QUEUE;
      downloadManager.offlineContents.push(contentDetail);
    },

    initializeContentChunk: (downloadManager, action) => {
      const contentDetail = action.payload; // contentId, chunkName
      const activeDownload = getActiveContentDownload(
        downloadManager,
        contentDetail.contentId,
      );
      activeDownload.contentChunks.push({
        chunkName: contentDetail.chunkName,
        isChunkDownloaded: false,
      });
    },

    onChunkDownloadComplete: (downloadManager, action) => {
      const contentDetail = action.payload; // contentId, chunkName
      const activeDownload = getActiveContentDownload(
        downloadManager,
        contentDetail.contentId,
      );
      const contentChunk = activeDownload.contentChunks.filter(
        chunk => chunk.chunkName === contentDetail.chunkName,
      );
      contentChunk.isChunkDownloaded = true;
    },

    onUpdateDownloadProgress: (downloadManager, action) => {
      const contentDetail = action.payload; // contentId, downloadProgress
      const activeDownload = getActiveContentDownload(
        downloadManager,
        contentDetail.contentId,
      );
      activeDownload.downloadProgress = contentDetail.downloadProgress;
    },

    onUpdateDownloadStatus: (downloadManager, action) => {
      const contentDetail = action.payload; // contentId, downloadStatus
      const activeDownload = getActiveContentDownload(
        downloadManager,
        contentDetail.contentId,
      );
      activeDownload.downloadStatus = contentDetail.downloadStatus;
      downloadManager.activeContentDownload.downloadStatus =
        contentDetail.downloadStatus;
    },

    onContentDownloadComplete: (downloadManager, action) => {
      const contentDetail = action.payload; // contentId, fileSize
      const activeDownload = getActiveContentDownload(
        downloadManager,
        contentDetail.contentId,
      );
      activeDownload.contentFileSize = contentDetail.fileSize;
      activeDownload.downloadProgress = 100;
      activeDownload.downloadStatus = DOWNLOAD_STATUS.COMPLETED;
      downloadManager.activeContentDownload.downloadStatus =
        DOWNLOAD_STATUS.COMPLETED;
    },

    onPushContentsFromDBToStore: (downloadManager, action) => {
      downloadManager.offlineContents = action.payload.offlineContents; // contentArray
    },
  },
});

// Common methods
const getActiveContentDownload = (downloadManager, contentId) => {
  let activeContentDownload = downloadManager.activeContentDownload;
  if (!activeContentDownload || activeContentDownload.contentId !== contentId) {
    const contentIndex = downloadManager.offlineContents.findIndex(
      contentDetail => contentDetail.contentId === contentId,
    );
    if (contentIndex !== -1) {
      activeContentDownload = downloadManager.offlineContents[contentIndex];
      activeContentDownload.contentIndex = contentIndex;
      downloadManager.activeContentDownload = activeContentDownload;
    } else {
      console.log(
        'Please initialize content download first by dispatching initializeDownload action...!!!',
      );
    }
  }
  return downloadManager.offlineContents[activeContentDownload.contentIndex];
};

export const {
  initializeDownload,
  initializeContentChunk,
  onChunkDownloadComplete,
  onUpdateDownloadProgress,
  onUpdateDownloadStatus,
  onContentDownloadComplete,
  onPushContentsFromDBToStore,
} = slice.actions;

export default slice.reducer;

// Action Creators
export const initializeContentDownload =
  (contentId, contentName, contentDuration) => dispatch => {
    return dispatch({
      type: initializeDownload.type,
      payload: {contentId, contentName, contentDuration},
    });
  };

export const initializeContentChunkDownload =
  (contentId, chunkName) => dispatch => {
    return dispatch({
      type: initializeContentChunk.type,
      payload: {contentId, chunkName},
    });
  };

export const handleChunkDownloadComplete =
  (contentId, chunkName) => dispatch => {
    return dispatch({
      type: onChunkDownloadComplete.type,
      payload: {contentId, chunkName},
    });
  };

export const handleUpdateDownloadProgress =
  (contentId, downloadProgress) => dispatch => {
    return dispatch({
      type: onUpdateDownloadProgress.type,
      payload: {contentId, downloadProgress},
    });
  };

export const handleUpdateDownloadStatus =
  (contentId, downloadStatus) => dispatch => {
    return dispatch({
      type: onUpdateDownloadStatus.type,
      payload: {contentId, downloadStatus},
    });
  };

export const handleContentDownloadComplete =
  (contentId, fileSize) => dispatch => {
    return dispatch({
      type: onContentDownloadComplete.type,
      payload: {contentId, fileSize},
    });
  };

export const handlePushContentsFromDBToStore = offlineContents => dispatch => {
  return dispatch({
    type: onPushContentsFromDBToStore.type,
    payload: {offlineContents},
  });
};

// Selector
export const getOfflineContents = createSelector(
  state => state.entities.downloadManager,
  downloadManager => {
    return downloadManager.offlineContents;
  },
);

export const getActiveDownload = createSelector(
  state => state.entities.downloadManager,
  downloadManager => downloadManager.activeContentDownload,
);

export const getDownloadByContentId = contentId =>
  createSelector(
    state => state.entities.downloadManager.offlineContents,
    offlineContents => {
      let downloadItem = null;
      if (offlineContents?.activeContentDownload?.contentId === contentId) {
        downloadItem =
          offlineContents[offlineContents?.activeContentDownload?.contentIndex];
      } else {
        const contentIndex = offlineContents.findIndex(
          contentDetail => contentDetail.contentId === contentId,
        );
        if (contentIndex !== -1) {
          downloadItem = offlineContents[contentIndex];
        }
      }
      return downloadItem;
    },
  );
