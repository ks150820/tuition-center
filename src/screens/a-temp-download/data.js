import {
  DOWNLOAD_TYPE,
  REQUEST_TYPE,
} from 'screens/video-player-screen/offline-videos/resources/values/constants';

const generateContentId = () => {
  // let randomStr = Math.random().toString();
  // randomStr = randomStr.replace('0.', '');
  return randomStr;
};

export const contentArray = [
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    contentId: 'content_id_02121211',
    userId: '246',
    contentType: DOWNLOAD_TYPE.TYPE_VIDEO,
    requestType: REQUEST_TYPE.INITIATE_DOWNLOAD,
    contentName: 'Sample video.mp4',
    contentDuration: 0,
  },
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    contentId: 'content_id_02121212',
    userId: '246',
    contentType: DOWNLOAD_TYPE.TYPE_VIDEO,
    requestType: REQUEST_TYPE.INITIATE_DOWNLOAD,
    contentName: 'Sample video.mp4',
    contentDuration: 0,
  },
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    contentId: 'content_id_02121213',
    userId: '246',
    contentType: DOWNLOAD_TYPE.TYPE_VIDEO,
    requestType: REQUEST_TYPE.INITIATE_DOWNLOAD,
    contentName: 'Sample video.mp4',
    contentDuration: 0,
  },
  {
    uri: 'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
    contentId: 'content_id_02121214',
    userId: '246',
    contentType: DOWNLOAD_TYPE.TYPE_PDF,
    requestType: REQUEST_TYPE.INITIATE_DOWNLOAD,
    contentName: 'Sample PDF.pdf',
    contentDuration: 0,
  },
  {
    uri: 'https://exampur-notifications-assets.s3.ap-south-1.amazonaws.com/Exampur+-+NDA+Brochure.pdf',
    contentId: 'content_id_02121215',
    userId: '246',
    contentType: DOWNLOAD_TYPE.TYPE_PDF,
    requestType: REQUEST_TYPE.INITIATE_DOWNLOAD,
    contentName: 'Sample PDF.pdf',
    contentDuration: 0,
  },
];
