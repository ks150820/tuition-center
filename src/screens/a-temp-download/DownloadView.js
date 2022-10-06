import React from 'react';
import {
  DOWNLOAD_STATUS,
  REQUEST_TYPE,
} from 'screens/video-player-screen/offline-videos/resources/values/constants';
import DownloadService from 'screens/video-player-screen/offline-videos/services/DownloadService';
import {Button, StyleSheet, Text, View} from 'react-native';
import COLORS from 'theme/colors';
import {useSelector} from 'react-redux';
import {LABEL_DOWNLOAD_FLOW} from 'screens/video-player-screen/offline-videos/resources/values/strings';
import {getDownloadByContentId} from 'store/entities/downloadManager';

const DownloadView = ({index, contentDetail, setActiveContent}) => {
  const contentItem = useSelector(
    getDownloadByContentId(contentDetail.contentId),
  );
  const downloadStatus = contentItem?.downloadStatus;
  const downloadProgress = contentItem?.downloadProgress;

  const getDownloadStatusLabel = () => {
    if (downloadStatus === undefined) {
      return LABEL_DOWNLOAD_FLOW.DOWNLOAD.en;
    }
    return downloadStatus === DOWNLOAD_STATUS.COMPLETED
      ? LABEL_DOWNLOAD_FLOW.DOWNLOADED.en
      : downloadStatus === DOWNLOAD_STATUS.IN_PROGRESS
      ? LABEL_DOWNLOAD_FLOW.IN_PROGRESS.en
      : downloadStatus === DOWNLOAD_STATUS.PAUSED
      ? LABEL_DOWNLOAD_FLOW.PAUSED.en
      : downloadStatus === DOWNLOAD_STATUS.IN_QUEUE
      ? LABEL_DOWNLOAD_FLOW.IN_QUEUE.en
      : LABEL_DOWNLOAD_FLOW.DOWNLOAD.en;
  };

  const handleDownloadAction = () => {
    if (downloadStatus === DOWNLOAD_STATUS.COMPLETED) {
      setActiveContent(contentItem);
      // File download completed, no need to download again
      return;
    }
    const requestType =
      downloadStatus === DOWNLOAD_STATUS.PAUSED
        ? REQUEST_TYPE.RESUME_DOWNLOAD
        : downloadStatus === DOWNLOAD_STATUS.IN_PROGRESS
        ? REQUEST_TYPE.PAUSE_DOWNLOAD
        : REQUEST_TYPE.INITIATE_DOWNLOAD;
    const data = JSON.stringify({...contentDetail, requestType});
    DownloadService.startService(data);
  };

  return (
    <View style={styles.downloadContainer}>
      <Text style={styles.label}>
        Download item - {index + 1} || Progress - {downloadProgress}
      </Text>
      <View style={styles.button}>
        <Button
          title={getDownloadStatusLabel()}
          onPress={handleDownloadAction}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  downloadContainer: {
    backgroundColor: COLORS.grey_light,
    elevation: 10,
    marginVertical: 10,
    padding: 10,
  },
  label: {
    color: COLORS.black,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    // flexWrap: 'wrap',
    maxWidth: 130,
  },
});

export default DownloadView;
