import React from 'react';
import {FONT_SIZE, FONT_TYPE} from '../../../themes/font';
import {styles} from '../resources/styles/styles';
import UIRow from '../../ui-row';
import UIText from '../../ui-text';
import BackButton from 'widgets/ui-back-button';

/**
 * View for HeaderWithBackButton
 * @param {IHeaderWithBackButtonViewProps} props
 * @returns
 */
const HeaderWithBackButtonView: React.FunctionComponent<
  IHeaderWithBackButtonViewProps
> = ({label, labelColor, onBackPress, ...rest}) => {
  return (
    <UIRow style={styles.container}>
      <BackButton onBackPress={onBackPress} {...rest} />
      <UIText
        type={FONT_TYPE.semiBold}
        size={FONT_SIZE.medium}
        color={labelColor}
        containerStyle={styles.label}>
        {label}
      </UIText>
    </UIRow>
  );
};

export default HeaderWithBackButtonView;
