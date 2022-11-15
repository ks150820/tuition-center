import {View, Text} from 'react-native';
import React from 'react';
import UICard from '@widgets/card/card';
import ProfileDetailsView from '@components/profile-details/profile-details-view';
import EditIcon from '@resources/icons/edit';
import UIRow from '@widgets/ui-row';
import ResetPasswordIcon from '@resources/icons/reset-password';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import LogoutIcon from '@resources/icons/logout';
import ChevronDownLeft from '@resources/icons/chevron-right';

const ProfileDetailsCard = () => (
  <UICard style={{marginHorizontal: 16}}>
    <ProfileDetailsView />
  </UICard>
);

const ActionCard = ({
  title,
  Icon,
  isLeftArrow = false,
}: {
  title: string;
  Icon: any;
  isLeftArrow?: boolean;
}) => (
  <UICard style={{marginBottom: 12}}>
    <UIRow
      style={{
        paddingHorizontal: 12,
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <UIRow>
        <Icon />
        <UIText style={{marginStart: 12}} FontType={FONT_TYPE.BUTTON}>
          {title}
        </UIText>
      </UIRow>
      {isLeftArrow && <ChevronDownLeft />}
    </UIRow>
  </UICard>
);

const ProfileScreenView = () => {
  return (
    <View style={{backgroundColor: '#EEEEEE', flex: 1, paddingTop: 32}}>
      <ProfileDetailsCard />
      <View
        style={{
          borderBottomWidth: 0.3,
          borderBottomColor: '#CCCCCC',
          marginVertical: 32,
        }}
      />
      <View style={{marginHorizontal: 16}}>
        <ActionCard
          isLeftArrow={true}
          Icon={ResetPasswordIcon}
          title="Admit Card"
        />
        <ActionCard
          isLeftArrow={true}
          Icon={ResetPasswordIcon}
          title="My Purchases"
        />
        <ActionCard Icon={LogoutIcon} title="Log Out" />
      </View>
    </View>
  );
};

export default ProfileScreenView;
