import React from 'react';
import {View} from 'react-native';

import UIButton from '@widgets/ui-btn';
import {footerStyle} from './test-screen-footer-view-style';
import {COLORS} from '@resources/colors';

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
            styles={{
              outerWrapper: footerStyle?.clearResponseButton,
            }}
            textAlign="center"
            color={COLORS.BLACK}
            onPress={clearCurrentAnswer}
          />
          <UIButton
            btnText="Mark for Review & Next"
            styles={{
              outerWrapper: footerStyle?.clearResponseButton,
            }}
            textAlign="center"
            color={COLORS.BLACK}
            onPress={handleMarkAndReview}
          />
        </View>
        <View style={footerStyle?.commonComponent}>
          <UIButton
            btnText="Submit"
            styles={{
              outerWrapper: {
                ...footerStyle?.cmpStyle,
              },
              btnElementWrapper: {...footerStyle?.submitButton},
            }}
            textAlign="center"
            color={COLORS.WHITE.white}
            onPress={openBottomSheet}
          />
          <UIButton
            btnText="Save & Next"
            styles={{
              outerWrapper: {
                ...footerStyle?.cmpStyle,
              },
              btnElementWrapper: {...footerStyle?.saveAndNextButton},
            }}
            color={COLORS.WHITE.white}
            textAlign="center"
            onPress={saveNext}
          />
        </View>
      </View>
    </View>
  );
};

export default FooterView;
