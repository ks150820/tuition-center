import React from 'react';
import {View, Pressable, DeviceEventEmitter} from 'react-native';

import Summary from '@screens/components/summary';
import UILoader from '@widgets/ui-loader';
import HeaderView from './test-screen-header';
import Footer from './test-screen-footer/test-screen-footer';
import QuestionsAndOptions from './questions-and-options';
import BottomHeader from './test-screen-header/bottom-header-tab';
import QuestionPanel from './question-panel';
import {style} from './test-screen-view-style';

interface ITestExperienceViewProps {
  isLoading: boolean;
  navigation: any;
}

/**
 * this component is used to display all components/property of test experience
 * @param {boolean} params.isLoading isLoading is a boolean condition to display the loader
 * @returns
 */
const TestExperienceView: React.FC<ITestExperienceViewProps> = ({
  isLoading,
  navigation,
}) => {
  const handleEventEmitter = () => {
    DeviceEventEmitter.emit('click-outside');
  };
  /**
   * if isLoading is true it will display the loader
   */
  if (isLoading) {
    return <UILoader size="large" color="red" />;
  }

  return (
    <Pressable style={style?.component} onPress={handleEventEmitter}>
      <View style={style?.innerComponent}>
        <HeaderView />
        <BottomHeader />
        <QuestionPanel />
        <QuestionsAndOptions />
        <Footer />
        <Summary navigation={navigation} />
      </View>
    </Pressable>
  );
};

export default TestExperienceView;
