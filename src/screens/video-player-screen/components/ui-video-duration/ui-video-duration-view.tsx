import React from 'react';
import {Animated, View} from 'react-native';
import {useSelector} from 'react-redux';
import {PLAYER_TEXT} from 'resources/values/strings';
import {getAppLanguage} from 'store/entities/user-preferences';
import COLORS from 'theme/colors';
import UIPressable from 'widgets/ui-pressable';
import UIText from 'widgets/ui-text';
import {styles} from './resources/styles/style';

/**
 * View for VideoDuration
 * @param {IVideoDurationViewProps} props
 * @returns
 */
const VideoDurationView: React.FunctionComponent<IVideoDurationViewProps> = ({
  totalDuration,
  durationPlayed,
  isLiveVideo,
  isLiveLagging,
  onLiveRequest,
  animatedValue,
}) => {
  const appLanguage = useSelector(getAppLanguage);

  return (
    <View style={styles.container}>
      <View style={styles.playedDurationContainer}>
        {!isLiveVideo && (
          <UIText color={COLORS.white} containerStyle={styles.labelBG}>
            {durationPlayed}
          </UIText>
        )}
        {isLiveVideo && (
          <>
            <UIPressable onPress={onLiveRequest}>
              <UIText color={isLiveLagging ? COLORS.white : COLORS.primary}>
                {PLAYER_TEXT.LIVE[appLanguage]}
              </UIText>
            </UIPressable>
            {!isLiveLagging && (
              <Animated.View style={{transform: [{scale: animatedValue}]}}>
                <View style={styles.liveIndicator} />
              </Animated.View>
            )}
          </>
        )}
      </View>
      {!isLiveVideo && (
        <UIText color={COLORS.white} containerStyle={styles.labelBG}>
          {totalDuration}
        </UIText>
      )}
    </View>
  );
};

export default VideoDurationView;
