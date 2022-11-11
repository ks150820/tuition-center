type ILanguageObject = {
  [key in SupportedLanguage]: string;
};

interface IStringConstants {
  [key: string]: ILanguageObject;
}

export const PLAYER_TEXT: IStringConstants = {
  SETTINGS: {
    en: 'Settings',
    hi: 'Settings',
  },
  QUALITY: {
    en: 'Quality',
    hi: 'Quality',
  },
  SPEED: {
    en: 'Playback Speed',
    hi: 'Playback Speed',
  },
  LANGUAGE: {
    en: 'Video Language',
    hi: 'Video Language',
  },
  CANCEL: {
    en: 'Cancel',
    hi: 'Cancel',
  },
  SELECT: {
    en: 'Select',
    hi: 'Select',
  },
  RETRY: {
    en: 'Retry',
    hi: 'Retry',
  },
  LIVE: {
    en: 'Live',
    hi: 'Live',
  },
  // : {
  //   en: '',
  //   hi: '',
  // },
};
