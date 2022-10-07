import {useContext, useEffect, useState} from 'react';
import {Linking} from 'react-native';

import {FeedBackContext} from '@components/contexts/feedback-context';
// import useNavigator from '@navigate/common/navigation';
import UIToast from '@services/UIToast/ui-toast';
import {ElasticService} from '@services/elastic-service';

interface IUseFeedbackModalControllerReturnType {
  modalVisible: boolean;
  openModal: () => void;
  handleRouting: (key: string, rating: number) => Promise<void>;
  handleDontAskAgain: () => void;
  closeModal: () => void;
}

interface IUseFeedbackModalControllerType {
  navigation: any;
}

/**
 * this custom hook handle all the functionality of feedback modal
 */
const useFeedbackModalController = ({
  navigation,
}: IUseFeedbackModalControllerType): IUseFeedbackModalControllerReturnType => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {
    toggleState,
    openModal,
    handleDontAskAgain,
    closeModal,
    setDontAskCondtionOnAsyncStore,
  } = useContext(FeedBackContext);

  /**
   * this is responsible to open the modal or close the modal
   */
  useEffect(() => {
    setModalVisible(toggleState);
  }, [toggleState]);

  // const navigate = useNavigator();

  /**
   *
   * @param url url to navigate the user to screens and to open to the playstore
   */
  const handleRouting = async (url = '', rating: number): Promise<void> => {
    const options = {
      type: 'rating',
      status: 'rated',
      rating: rating,
    };

    ElasticService(options);
    if (url.length > 0 && url.includes('https')) {
      const supported = await Linking.canOpenURL(url); // this method will check whether url is valid or not
      if (supported) {
        await Linking.openURL(url);
      } else {
        UIToast('Invalid Url');
      }
    }
    if (url.length > 0 && !url.includes('https')) {
      navigation.navigate(url, {componentName: 'Feedback'});
      // navigation.navigate('HelpFeedback');
    }
    setDontAskCondtionOnAsyncStore();
  };

  return {
    modalVisible,
    openModal,
    handleRouting,
    handleDontAskAgain,
    closeModal,
  };
};

export default useFeedbackModalController;
