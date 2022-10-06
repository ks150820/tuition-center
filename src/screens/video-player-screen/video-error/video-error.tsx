import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {PLAYER_TEXT} from 'resources/values/strings';
import {getAppLanguage} from 'store/entities/user-preferences';
import {COLORS} from 'resources/colors';
import {FONT_TYPE} from 'theme/font';
import {ICON_TYPES} from 'theme/icons';
import UIBtn from 'widgets/ui-btn';
import UIIcon from 'widgets/ui-icon';
import UIRow from 'widgets/ui-row';
import UIText from 'widgets/ui-text';
import {styles} from './resources/styles';

interface IVideoErrorProps {
  // Error message
  errorMessage: string;
  // Retry handler
  onRetryPress: () => void;
}

/**
 * Binder for video error view
 * @param {IVideoErrorProps} props
 * @returns
 */

const ICON_NAME = 'error-outline';
const ICON_SIZE = 35;
const TEXT_SIZE = 22;

const VideoError: React.FunctionComponent<IVideoErrorProps> = ({
  errorMessage,
  onRetryPress,
}) => {
  // Currently active app language
  const appLanguage = useSelector(getAppLanguage);

  return (
    <View style={styles.container}>
      <UIRow style={styles.errorTextContainer}>
        <UIIcon
          name={ICON_NAME}
          type={ICON_TYPES.material}
          size={ICON_SIZE}
          color={COLORS.WHITE.light_silver}
        />
        <UIText
          size={TEXT_SIZE}
          type={FONT_TYPE.semiBold}
          color={COLORS.WHITE.light_silver}
          containerStyle={styles.errorText}>
          {errorMessage}
        </UIText>
      </UIRow>
      <UIBtn
        btnText={PLAYER_TEXT.RETRY[appLanguage]}
        color={COLORS.WHITE.white}
        onPress={onRetryPress}
        size={TEXT_SIZE}
        styles={{outerWrapper: styles.retryBtn}}
      />
    </View>
  );
};

export default VideoError;
