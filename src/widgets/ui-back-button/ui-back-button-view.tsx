import React from 'react';
import UIIcon from 'widgets/ui-icon';
import UIPressable from 'widgets/ui-pressable';
import COLORS from '../../theme/colors';

/**
 * View for BackButton with customizable back icon
 * @param {IBackBtn} props
 * @returns
 */

const BACK_ICON = 'chevron-back';
const BACK_ICON_TYPE = 'ionicon';
const BACK_ICON_SIZE = 22;

const BackButtonView: React.FunctionComponent<IBackBtn> = ({
  backIconColor = COLORS.black,
  backIconName = BACK_ICON,
  backIconType = BACK_ICON_TYPE,
  size = BACK_ICON_SIZE,
  onBackPress,
}) => {
  return (
    <UIPressable onPress={onBackPress} testID="backButton">
      <UIIcon
        name={backIconName}
        testID="backIcon"
        type={backIconType}
        size={size}
        color={backIconColor}
      />
    </UIPressable>
  );
};

export default BackButtonView;
