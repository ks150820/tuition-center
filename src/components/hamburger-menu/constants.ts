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

export enum actionsType {
  openPage = '_NAVIGATE',
  openDialer = '_DIALER',
  openWhatsapp = '_WHATSAPP',
  switchLanguage = '_LANGUAGE',
  takeRating = '_RATING',
}

export const menuList: IMenuList[] = [
  {
    title: 'Profile',
    Icon: ProfileIcon,
    childrens: [
      {
        title: 'My Purchases',
        Icon: AppTutorialIcon,
        actions: {
          type: actionsType.openPage,
          data: '',
        },
      },
      {
        title: 'Personal Details',
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
    title: 'App tutorial',
    Icon: AppTutorialIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: 'Language',
    Icon: LanguageSwitchIcon,
    childrens: [],
    ExtraLabelView: LanguageSwitchView,
    actions: {
      type: actionsType.switchLanguage,
      data: '',
    },
  },
  {
    title: 'Saved Questions',
    Icon: SavedQuestionsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: 'Attempted Questions',
    Icon: AttemptedQuestionsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: 'Help',
    Icon: HelpIcon,
    childrens: [],
    ExtraLabelView: CallNowIcon,
    actions: {
      type: actionsType.openDialer,
      data: '8848195439', // number
    },
  },
  {
    title: 'Privacy policy',
    Icon: PrivacyPolicyIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.openPage,
      data: '',
    },
  },
  {
    title: 'Share now',
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
    title: 'Rate us',
    Icon: RateUsIcon,
    childrens: [],
    ExtraLabelView: null,
    actions: {
      type: actionsType.takeRating,
      data: 'NA',
    },
  },
];
