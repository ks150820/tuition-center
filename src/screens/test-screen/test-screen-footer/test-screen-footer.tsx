import React, {useContext} from 'react';

import FooterView from './test-screen-footer-view';
import TestContext from '@components/contexts/test-context';

/**
 *
 * @param props
 * @returns
 */
const Footer: React.FunctionComponent<{}> = () => {
  const {toggleBottomSheet, handleMarkAndReview, saveNext, clearCurrentAnswer} =
    useContext(TestContext) as contextType;

  return (
    <FooterView
      openBottomSheet={toggleBottomSheet}
      handleMarkAndReview={handleMarkAndReview}
      saveNext={saveNext}
      clearCurrentAnswer={clearCurrentAnswer}
    />
  );
};

export default Footer;
