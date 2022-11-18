import {View} from 'react-native';
import React from 'react';
import UICard from '@widgets/card/card';
import ProfileDetailsView from '@components/profile-details/profile-details-view';
import UIRow from '@widgets/ui-row';
import ResetPasswordIcon from '@resources/icons/reset-password';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import LogoutIcon from '@resources/icons/logout';
import ChevronDownLeft from '@resources/icons/chevron-right';
import styles from './style';
import {PROFILE_SCREEN} from '@resources/values/strings';
import {SvgProps} from 'react-native-svg';

const ProfileDetailsCard = () => (
  <UICard style={styles.cardStyle}>
    <ProfileDetailsView isEditable />
  </UICard>
);

/**
 * 
 * @param props.title title for the action button
 * @param props.icon icon for the action button
 * @param props.isLeftArrow left arrow icon for the action button
 * @returns 
 */
const ActionCard = ({
  title,
  Icon,
  isLeftArrow = false,
}: {
  title: string;
  Icon: (Props: SvgProps) => JSX.Element;
  isLeftArrow?: boolean;
}) => (
  <UICard style={styles.actionCardContainer}>
    <UIRow style={styles.actionCardSubContainer}>
      <UIRow>
        <Icon />
        <UIText style={styles.uITextStyle} FontType={FONT_TYPE.BUTTON}>
          {title}
        </UIText>
      </UIRow>
      {isLeftArrow && <ChevronDownLeft />}
    </UIRow>
  </UICard>
);

const ProfileScreenView: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProfileDetailsCard />
      <View style={styles.actionsViewContainer} />
      <View style={{marginHorizontal: 16}}>
        <ActionCard
          isLeftArrow={true}
          Icon={ResetPasswordIcon}
          title={PROFILE_SCREEN.ADMIT_CARD.en}
        />
        <ActionCard
          isLeftArrow={true}
          Icon={ResetPasswordIcon}
          title={PROFILE_SCREEN.MY_PURCHASES.en}
        />
        <ActionCard Icon={LogoutIcon} title={PROFILE_SCREEN.LOG_OUT.en} />
      </View>
    </View>
  );
};

export default ProfileScreenView;
