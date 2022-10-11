import {useDispatch} from 'react-redux';
import {callRetry} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';
import useDataTrackingService from '../../services/data-tracking-service';
import {useEffect, useContext} from 'react';
import {loadTestDetails} from '@store/entities/test-experience';
import {FeedBackContext} from '@components/contexts/feedback-context';

/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {MoEngage} = useDataTrackingService({});
  const {openModal} = useContext(FeedBackContext);

  useEffect(() => {}, []);
  const onPress = () => {
    MoEngage.trackUserEvents('Home page new app', {
      user: 'Ramees',
      Phone: '7356704543',
    });
  };

  const onRetry = () => {
    dispatch(callRetry());
    // retryApiCall();
  };

  const openFeedBackModal = () => {
    openModal();
  };

  const onStartTest = () => {
    navigation.navigate('InstructionScreen');
    // navigation.navigate('HelpFeedback');
    dispatch(loadTestDetails('6299efb1e51fe25d77f6b191'));
  };
  const liveChat = () => {
    navigation.navigate('LiveClassChatScreen');
  };

  return {onPress, onRetry, onStartTest, openFeedBackModal, liveChat};
};

export default useHomeScreenViewController;
