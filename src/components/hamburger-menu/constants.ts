import AppTutorialIcon from '@resources/icons/app-tutorial-hamburger';
import LanguageSwitchIcon from '@resources/icons/language-switch-hamburger';
import ProfileIcon from '@resources/icons/profile-icon-hamburger';
import AttemptedQuestionsIcon from '@resources/icons/attempted-questions-hamburger';
import HelpIcon from '@resources/icons/help-hamburger';
import PrivacyPolicyIcon from '@resources/icons/privacy-policy-hamburger';
import ShareNowIcon from '../../resources/icons/share-now-hamburger';
import RateUsIcon from '@resources/icons/rate-us-hamburger';
import LanguageSwitchView from './language-switch-label';
import CallNowIcon from '@resources/icons/call-now-hamburger';
import WhatsApp from '@resources/icons/whtasapp';
import SavedQuestionsIcon from '@resources/icons/saved-questions-hamburger';
import PersonalDetailsIcon from '@resources/icons/personal-details-hamburger';
import {HAMBURGER_MENU} from '@resources/values/strings';

export enum actionsType {
  openPage = '_NAVIGATE',
  openDialer = '_DIALER',
  openWhatsapp = '_WHATSAPP',
  switchLanguage = '_LANGUAGE',
  takeRating = '_RATING',
}

export const menuList: IMenuList[] = [
  {
    title: HAMBURGER_MENU.PROFILE.en,
    Icon: ProfileIcon,
    childrens: [
      {
        title: HAMBURGER_MENU.MY_PURCHASES.en,
        Icon: AppTutorialIcon,
        actions: {
          type: actionsType.openPage,
          data: '',
        },
      },
      {
        title: HAMBURGER_MENU.PERSONAL_DETAILS.en,
        Icon: PersonalDetailsIcon,
        actions: {
          type: actionsType.openPage,
          data: '',
        },
      },
    ],

    ExtraLabelView: null,
  },
  {
    title: HAMBURGER_MENU.APP_TUTORIAL.en,
    Icon: AppTutorialIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: HAMBURGER_MENU.LANGUAGE.en,
    Icon: LanguageSwitchIcon,
    childrens: [],
    ExtraLabelView: LanguageSwitchView,
    actions: {
      type: actionsType.switchLanguage,
      data: '',
    },
  },
  {
    title: HAMBURGER_MENU.SAVED_QUESTION.en,
    Icon: SavedQuestionsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: HAMBURGER_MENU.ATTEMPTED_QUESTION.en,
    Icon: AttemptedQuestionsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: HAMBURGER_MENU.HELP.en,
    Icon: HelpIcon,
    childrens: [],
    ExtraLabelView: CallNowIcon,
    actions: {
      type: actionsType.openDialer,
      data: '8848195439', // number
    },
  },
  {
    title: HAMBURGER_MENU.PRIVACY_POLICY.en,
    Icon: PrivacyPolicyIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: HAMBURGER_MENU.SHARE_NOW.en,
    Icon: ShareNowIcon,
    childrens: [],
    ExtraLabelView: WhatsApp,
    actions: {
      type: actionsType.openWhatsapp,
      data: '+91 8848195439',
      extra: 'Happy to help you',
    },
  },
  {
    title: HAMBURGER_MENU.RATE_US.en,
    Icon: RateUsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.takeRating,
      data: 'NA',
    },
  },
];

export enum SIDE_MENU_VIEW_ANIMATION {
  ANIMATION_IN = 'slideInLeft',
  ANIMATION_OUT = 'slideOutLeft',
}
export enum SWIPE_DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}
export const ERROR_MESSAGES = {
  WHATSAPP_OPEN_ERROR: {
    en: 'Make sure WhatsApp installed on your device',
    hi: 'Make sure WhatsApp installed on your device',
  },
  DIALER_OPEN_ERROR: {
    en: 'f something went wrong, please inform us via the help section.',
    hi: 'f something went wrong, please inform us via the help section.',
  },
};
