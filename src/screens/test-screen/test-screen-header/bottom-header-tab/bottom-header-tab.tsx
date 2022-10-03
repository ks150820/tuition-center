import React from 'react';

import BottomHeaderView from './bottom-header-tab-view';
import useBottomHeaderController from './bottom-header-tab-controller';

interface IBottomHeaderTab {}

const BottomHeaderTab: React.FC<IBottomHeaderTab> = () => {
  const {questionIndex, totalQuestions, pauseTimer, testDuration} =
    useBottomHeaderController();
  return (
    <BottomHeaderView
      questionIndex={questionIndex}
      totalQuestions={totalQuestions}
      pauseTimer={pauseTimer}
      testDuration={testDuration}
    />
  );
};

export default BottomHeaderTab;
