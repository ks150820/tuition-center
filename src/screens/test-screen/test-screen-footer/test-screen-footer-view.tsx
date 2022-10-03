import React from 'react';
import {View} from 'react-native';

import UIButton from '@widgets/ui-btn';
import {footerStyle} from './test-screen-footer-view-style';

type callbackFunctionTypes = () => void;
interface IFooterViewProps {
  openBottomSheet: callbackFunctionTypes;
  handleMarkAndReview: callbackFunctionTypes;
  saveNext: callbackFunctionTypes;
  clearCurrentAnswer: callbackFunctionTypes;
}

/**
 * View for Footer
 * @param {callbackFunctionTypes} params.openBottomSheet this is use to open the bottom sheet
 * @param {callbackFunctionTypes} params.handleMarkAndReview callback method the handle mark and review button
 * @param {callbackFunctionTypes} params.saveNext callback method the handle save and next button
 * @param {callbackFunctionTypes} params.clearCurrentAnswer used to clear the answer given by the user
 * @returns returns all the buttons ui
 */
const FooterView = ({
  openBottomSheet,
  handleMarkAndReview,
  saveNext,
  clearCurrentAnswer,
}: IFooterViewProps) => {
  return (
    <View style={footerStyle?.component}>
      <View>
        <View
          style={[
            footerStyle?.commonComponent,
            footerStyle?.clearAndMarkComponent,
          ]}>
          <UIButton
            btnText="Clear Response"
            style={{
              buttonStyle: footerStyle?.clearResponseButton,
              textStyle: footerStyle?.firstTextColor,
            }}
            onClick={clearCurrentAnswer}
          />
          <UIButton
            btnText="Mark for Review & Next"
            style={{
              buttonStyle: footerStyle?.clearResponseButton,
              textStyle: footerStyle?.firstTextColor,
            }}
            onClick={handleMarkAndReview}
          />
        </View>
        <View style={footerStyle?.commonComponent}>
          <UIButton
            btnText="Submit"
            style={{
              buttonStyle: footerStyle?.submitButton,
              textStyle: footerStyle?.secTextColor,
              componentStyle: footerStyle?.cmpStyle,
            }}
            onClick={openBottomSheet}
          />
          <UIButton
            btnText="Save & Next"
            style={{
              buttonStyle: footerStyle?.saveAndNextButton,
              textStyle: footerStyle?.secTextColor,
              componentStyle: footerStyle?.cmpStyle,
            }}
            onClick={saveNext}
          />
        </View>
      </View>
    </View>
  );
};

export default FooterView;
