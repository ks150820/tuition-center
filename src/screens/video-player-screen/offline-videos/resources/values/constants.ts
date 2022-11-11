export const DOWNLOAD_STATUS = {
  IN_QUEUE: 0,
  IN_PROGRESS: 1,
  PAUSED: 2,
  COMPLETED: 3,
  INTERRUPTED: 4,
  CANCELLED: 5,
};

export const PROGRESS_UPDATE_INTERVAL = 300;

export const MAX_FOLDER_SIZE = 2.5;
export const ROOT_DIRECTORY = 'Offline Contents';
export const VIDEO_DIRECTORY = 'Course Videos';
export const PDF_DIRECTORY = 'Course PDFs';

export const REQUEST_TYPE = {
  INITIATE_DOWNLOAD: 0,
  PAUSE_DOWNLOAD: 1,
  RESUME_DOWNLOAD: 2,
  CANCEL_DOWNLOAD: 3,
};

export const DOWNLOAD_TYPE = {
  TYPE_PDF: 0,
  TYPE_VIDEO: 1,
};
