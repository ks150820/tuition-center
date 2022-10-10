import React from 'react';

import TestContext from '@components/contexts/test-context';
import useTestExperienceController from './test-screen-controller';
import TestExperienceView from './test-screen-view';

type homeScreenProps =
  import('@navigators/home-navigator/@types/home-navigator-param-list').testExperienceScreenProps;

interface ITestExperienceProps extends homeScreenProps {}

/**
 * this is the root component of test experience, to display the all properties of tests
 * @returns
 */
const TestExperience = ({navigation}: ITestExperienceProps) => {
  const {isLoading, contextObject} = useTestExperienceController({navigation});

  return (
    <TestContext.Provider value={contextObject}>
      <TestExperienceView isLoading={isLoading} navigation={navigation} />
    </TestContext.Provider>
  );
};

export default TestExperience;
