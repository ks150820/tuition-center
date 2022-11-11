import React, {ReactElement} from 'react';

import FeedbackModalView from './feedback-modal-view';
import useFeedbackModalController from './feedback-modal-controller';

interface IFeedbackModalProps extends feedbackScreenProps {
  needConfigurationButton?: boolean;
  data: any; // once get the perfect idea of data then we can change the type
  navigation: any;
}
/**
 * this component returns the ui of feed-back modal
 * @param {boolean} params.needConfigurationButton condition to show the close and "don't ask" button
 */
const FeedbackModal = ({
  needConfigurationButton = true,
  data,
  navigation,
}: IFeedbackModalProps): ReactElement => {
  const {modalVisible, handleRouting, handleDontAskAgain, closeModal} =
    useFeedbackModalController({navigation});
  return (
    <FeedbackModalView
      modalVisible={modalVisible}
      handleRouting={handleRouting}
      handleDontAskAgain={handleDontAskAgain}
      needConfigurationButton={needConfigurationButton}
      closeModal={closeModal}
      data={data}
    />
  );
};

export default FeedbackModal;
