import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import {DOWNLOAD_STATUS} from 'screens/video-player-screen/offline-videos/resources/values/constants';

const tableName = 'downloadData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'download-data.db', location: 'default'});
};

export const createTable = async db => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        contentId TEXT PRIMARY KEY NOT NULL, uri TEXT NOT NULL, userId TEXT NOT NULL, contentType INT NOT NULL, contentName TEXT NOT NULL, contentDuration INT NOT NULL,
		contentFileSize INT, downloadProgress INT, downloadStatus INT, downloadInitiateTime INT
    );`;

  await db.executeSql(query);
};

export const getDownloadedItem = async (db, contentId) => {
  try {
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE contentId = '${contentId}'`,
    );
    const itemArray = getDownloadItemArray(results);
    return itemArray.length == 0 ? null : itemArray[0];
  } catch (error) {
    console.error(error);
    throw Error('Failed to get DownloadedItem !!!');
  }
};

export const getPendingDownloadItems = async db => {
  try {
    const results = await db.executeSql(
      `SELECT * FROM ${tableName} WHERE downloadStatus != ${DOWNLOAD_STATUS.COMPLETED} AND downloadStatus != ${DOWNLOAD_STATUS.PAUSED} ORDER BY downloadInitiateTime DESC`,
    );
    return getDownloadItemArray(results);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get PendingDownloadItems !!!');
  }
};

export const getAllDownloadItems = async db => {
  try {
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    return getDownloadItemArray(results);
  } catch (error) {
    createTable(db);
    console.error(error);
    throw Error('Failed to get All DownloadItems !!!');
  }
};

const getDownloadItemArray = results => {
  const downloadItems = [];
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      downloadItems.push(result.rows.item(index));
    }
  });
  return downloadItems;
};

export const initializeDownload = async (db, contentDetail) => {
  const results = await db.executeSql(
    `SELECT * FROM ${tableName} WHERE contentId = '${contentDetail.contentId}'`,
  );
  const existingDownload = getDownloadItemArray(results);
  if (existingDownload.length > 0) {
    // Content already initialized, Hence no need to insert again.
    return;
  }
  // Remove extra inverted commas from content name
  const contentName = String(contentDetail.contentName).replace(/'/g, '');
  const insertQuery = `INSERT OR REPLACE INTO ${tableName}(contentId, uri, userId, contentType, contentName, contentDuration, downloadStatus, downloadInitiateTime) values
	('${contentDetail.contentId}', '${contentDetail.uri}',
  '${contentDetail.userId}', '${contentDetail.contentType}',
  '${contentName}', ${contentDetail.contentDuration},
  ${DOWNLOAD_STATUS.IN_QUEUE}, ${new Date().getTime()})`;

  return db.executeSql(insertQuery);
};

export const updateDownloadItem = async (db, contentId, updatedData) => {
  // UPDATE demo SET name = 'SqLITE' WHERE id = 1
  let itemArray = [];
  Object.entries(updatedData).forEach(([key, value], index) => {
    itemArray.push(`${key} = ${value}`);
  });
  let updateQuery = itemArray.join(', ');
  const query = `UPDATE ${tableName} SET ${updateQuery} WHERE contentId = '${contentId}'`;

  return db.executeSql(query);
};

export const deleteDownloadItem = async (db, contentId) => {
  const deleteQuery = `DELETE from ${tableName} WHERE contentId = '${contentId}'`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async db => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
