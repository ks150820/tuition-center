/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from 'store/configureStore';
import {handleContentRequest} from 'helpers/FileDownloader';

const MyHeadlessTask = async (mStore, task) => {
  handleContentRequest(mStore, task?.contentDetail);
};

AppRegistry.registerHeadlessTask('DownloadTaskKey', () =>
  MyHeadlessTask.bind(null, store),
);

AppRegistry.registerComponent(appName, () => App);
