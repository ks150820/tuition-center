import {
  getAllDownloadItems,
  getDBConnection,
} from 'localStorage/DownloadDatabase';
import React, {useEffect, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {handlePushContentsFromDBToStore} from 'store/entities/downloadManager';
import {contentArray} from './data';
import DownloadView from './DownloadView';
import VideoPlayer from 'screens/video-player-screen/video-player';
import {
  DOWNLOAD_TYPE,
  ROOT_DIRECTORY,
  VIDEO_DIRECTORY,
} from 'screens/video-player-screen/offline-videos/resources/values/constants';
import RNFetchBlob from 'rn-fetch-blob';

const MyDownloads = () => {
  const dispatch = useDispatch();
  const [uri, setUri] = useState('');
  const [activeContent, setActiveContent] = useState();

  /**
   * Hook used to Push all DB download items to redux store
   */
  useEffect(() => {
    const getDB = async () => {
      const db = await getDBConnection();
      const allDownloadItems = await getAllDownloadItems(db);
      // console.log('All download Item : ', allDownloadItems);
      dispatch(handlePushContentsFromDBToStore(allDownloadItems));
    };
    getDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeContent) {
      setUri(
        `${RNFetchBlob.fs.dirs.DocumentDir}/${ROOT_DIRECTORY}/${activeContent?.userId}/${VIDEO_DIRECTORY}/${activeContent?.contentId}`,
      );
    }
  }, [activeContent]);

  useEffect(() => {
    if (activeContent && activeContent.contentType === DOWNLOAD_TYPE.TYPE_PDF) {
      /**
       * Here we are showing PDF from server,
       * Downloaded file stored at App's internal storage,
       * Hence we can't directly share to other app via intent
       * For the same we need to integrate content provider
       */
      Linking.openURL(activeContent.uri).catch(err => console.log(err));
    }
  }, [activeContent]);

  return (
    <View>
      {activeContent &&
      activeContent.contentType === DOWNLOAD_TYPE.TYPE_VIDEO ? (
        <View style={styles.videoContainer}>
          <VideoPlayer source={{uri}} />
        </View>
      ) : (
        <View>
          <DownloadView
            index={0}
            contentDetail={contentArray[0]}
            setActiveContent={setActiveContent}
          />
          <DownloadView
            index={1}
            contentDetail={contentArray[1]}
            setActiveContent={setActiveContent}
          />
          <DownloadView
            index={2}
            contentDetail={contentArray[2]}
            setActiveContent={setActiveContent}
          />
          <DownloadView
            index={3}
            contentDetail={contentArray[3]}
            setActiveContent={setActiveContent}
          />
          <DownloadView
            index={4}
            contentDetail={contentArray[4]}
            setActiveContent={setActiveContent}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  videoContainer: {height: '100%', width: '100%'},
});

export default MyDownloads;
