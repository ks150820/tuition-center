import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {PLAYER_TEXT} from 'resources/values/strings';
import {getAppLanguage} from 'store/entities/user-preferences';
import {COLORS} from 'resources/colors';
import {FONT_SIZE, FONT_TYPE} from 'theme/font';
import UIBtn from 'widgets/ui-btn';
import UIRow from 'widgets/ui-row';
import SingleSelector from 'widgets/ui-single-selector';
import UIText from 'widgets/ui-text';
import {styles} from './resources/styles';
import Modal from '@widgets/ui-video-modal';

/**
 * View for QualitySelectorModal
 * @param {IQualitySelectorModalViewProps} props
 * @returns
 */
const QualitySelectorModalView: React.FunctionComponent<
  IQualitySelectorModalViewProps
> = ({isVisible, options, selectedOption, handleOnChange, onHideModal}) => {
  // Store quality in local variable, And send on submit click
  let updatedQuality: ISingleSelectOptions = selectedOption;
  // Currently active app language
  const appLanguage = useSelector(getAppLanguage);

  // Method to listen quality change
  const onChange = (selectedQuality: ISingleSelectOptions) => {
    updatedQuality = selectedQuality;
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onHideModal}
      onBackdropPress={onHideModal}
      containerStyle={styles.container}>
      <View>
        <UIText type={FONT_TYPE.bold} size={FONT_SIZE.large}>
          Select Video Quality
        </UIText>
        <SingleSelector
          options={options}
          selectedOption={selectedOption}
          onChange={onChange}
        />
        <UIRow style={styles.actionContainer}>
          <UIBtn
            styles={{
              outerWrapper: styles.buttonOutlined,
              btnElementWrapper: styles.buttonContainer,
            }}
            btnText={PLAYER_TEXT.CANCEL[appLanguage]}
            size={FONT_SIZE.xx_medium}
            onPress={onHideModal}
          />
          <UIBtn
            styles={{
              outerWrapper: styles.buttonFilled,
              btnElementWrapper: styles.buttonContainer,
            }}
            btnText={PLAYER_TEXT.SELECT[appLanguage]}
            color={COLORS.WHITE.white}
            size={FONT_SIZE.xx_medium}
            onPress={() => {
              handleOnChange(updatedQuality);
              onHideModal();
            }}
          />
        </UIRow>
      </View>
    </Modal>
  );
};

export default QualitySelectorModalView;
