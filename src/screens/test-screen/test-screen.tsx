import React from 'react';

import TestContext from '@components/contexts/test-context';
import useTestExperienceController from './test-screen-controller';
import TestExperienceView from './test-screen-view';

interface ITestExperienceProps {}

/**
 * this is the root component of test experience, to display the all properties of tests
 * @returns
 */
const TestExperience: React.FC<ITestExperienceProps> = () => {
  const {isLoading, contextObject} = useTestExperienceController();

  return (
    <TestContext.Provider value={contextObject}>
      <TestExperienceView isLoading={isLoading} />
    </TestContext.Provider>
  );
};

export default TestExperience;
