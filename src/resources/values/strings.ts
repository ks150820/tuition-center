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
export const HAMBURGER_MENU: IStringConstants = {
  PROFILE: {
    en: 'Profile',
    hi: 'Profile',
  },
  MY_PURCHASES: {
    en: 'My Purchases',
    hi: 'My Purchases',
  },
  PERSONAL_DETAILS: {en: 'Personal Details', hi: 'Personal Details'},
  APP_TUTORIAL: {
    en: 'App tutorial',
    hi: 'App tutorial',
  },
  LANGUAGE: {
    en: 'Language',
    hi: 'Language',
  },
  SAVED_QUESTION: {
    en: 'Saved Questions',
    hi: 'Saved Questions',
  },
  ATTEMPTED_QUESTION: {
    en: 'Attempted Questions',
    hi: 'Attempted Questions',
  },
  HELP: {
    en: 'Help',
    hi: 'Help',
  },
  PRIVACY_POLICY: {
    en: 'Privacy policy',
    hi: 'Privacy policy',
  },
  SHARE_NOW: {
    en: 'Share now',
    hi: 'Share now',
  },
  RATE_US: {
    en: 'Rate us',
    hi: 'Rate us',
  },
  ENGLISH: {
    en: 'English',
    hi: 'English',
  },
  HINDI: {
    en: 'Hindi',
    hi: 'Hindi',
  },
};

export const PROFILE_SCREEN: IStringConstants = {
  ADMIT_CARD: {
    en: 'Admit Card',
    hi: 'Admit Card',
  },
  MY_PURCHASES: {
    en: 'My Purchases',
    hi: 'My Purchases',
  },
  LOG_OUT: {
    en: 'Log Out',
    hi: 'Log Out',
  },
};

export const VIEW_ALL: ILanguageObject = {
  en: 'View all',
  hi: 'View all'
};

export const FREE_VIDEO_CONSTANTS: IStringConstants = {
  FREE_COURSES: {
    en: 'Free Courses',
    hi: 'Free Courses',
  },
};


export const LIVE: ILanguageObject = {
  en: 'LIVE',
  hi: 'LIVE',
}

export const RUPEE: ILanguageObject = {
  en: '₹',
  hi: '₹',
}