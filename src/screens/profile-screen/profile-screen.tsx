import React from 'react';
import {profileScreenProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';
import ProfileScreenView from './profile-screen-view';
interface IProfileScreenProp extends profileScreenProp {}
const ProfileScreen: React.FC<IProfileScreenProp> = ({route}) => {
  return (
    <ProfileScreenView
      name={route?.params?.name || 'null'}
      age={route?.params?.details?.age || 'null'}
      education={route?.params?.details?.education || 'null'}
      phone={route?.params?.details?.phone || 'null'}
    />
  );
};

export default ProfileScreen;
