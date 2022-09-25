import {View, Text} from 'react-native';
import React from 'react';

interface IMyCourseProps {
  courseList: Array<String> | undefined;
}

const MyCourseView: React.FC<IMyCourseProps> = ({courseList}) => {
  return (
    <View>
      <Text>{JSON.stringify(courseList)}</Text>
    </View>
  );
};

export default MyCourseView;
