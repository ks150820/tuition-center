import {View, Text} from 'react-native';
import React from 'react';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import colors from '@theme/colors';
import UIRow from '@widgets/ui-row';
import EditIcon from '@resources/icons/edit';

const ProfileView = () => (
  <View
    style={{
      height: 68,
      width: 68,
      borderRadius: 68 / 2,
      backgroundColor: colors.gray_scale.dusty_gray,
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: 24,
    }}>
    <UIText FontType={FONT_TYPE.H1}>{'A'}</UIText>
  </View>
);
const ProfileDetailsView = ({isEditable = false}) => {
  return (
    <UIRow
      style={{
        paddingHorizontal: 16,
        paddingTop: 32,
        borderBottomColor: 'rgba(0, 0, 0, 0.05)',
        borderBottomWidth: 1,
        paddingBottom: 32,
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <UIRow>
        <ProfileView />
        <View>
          <UIText FontType={FONT_TYPE.HEADING}>Anmol Kumar</UIText>
          <UIText FontType={FONT_TYPE.SUBHEADING}>
            ankitverma12@gmail.com
          </UIText>
          <UIText FontType={FONT_TYPE.SUBHEADING}>9876543210</UIText>
        </View>
      </UIRow>
      {isEditable && <EditIcon />}
    </UIRow>
  );
};

export default ProfileDetailsView;
