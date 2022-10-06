import React from 'react';
// import {homeScreenProps} from '@navigators/home-navigator/@types/home-navigator-param-list';

import SummaryView from './summary-view';
import useSummaryStatusController from './summary-view-controller';

interface ISummaryProps {
  navigation: any;
}

const Summary: React.FC<ISummaryProps> = ({navigation}) => {
  const {
    status_array,
    seconds,
    isVisible,
    timeUp,
    toggleBottomSheet,
    handleSubmitButton,
  } = useSummaryStatusController({navigation});
  return (
    <SummaryView
      statusData={status_array}
      isVisible={isVisible || timeUp}
      toggleBottomSheet={toggleBottomSheet}
      handleSubmitButton={handleSubmitButton}
      seconds={seconds}
      timeUp={timeUp}
    />
  );
};

export default Summary;
