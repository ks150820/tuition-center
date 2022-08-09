import {View, Text} from 'react-native';
import React from 'react';

interface IProfileScreenView {
  name: string;
  education: string;
  age: number;
  phone: number;
}
const ProfileScreenView: React.FC<IProfileScreenView> = ({
  name,
  education,
  age,
  phone,
}) => {
  return (
    <View style={{padding: 24}}>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{education}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

export default ProfileScreenView;
