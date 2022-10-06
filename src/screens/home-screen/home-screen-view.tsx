import React from 'react';
import {Pressable, View, Text} from 'react-native';
import useHomeScreenViewController from './homescreen-view-controller';

interface IHomeScreenViewProps {
  navigation: any;
}

/**
 * View for Homescreen
 * @param props
 * @returns
 */
const HomeScreenView: React.FunctionComponent<IHomeScreenViewProps> = ({
  navigation,
}: any) => {
  const {onPress, onRetry, onStartTest} = useHomeScreenViewController({
    navigation,
  });
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Pressable
        onPress={onPress}
        style={{backgroundColor: 'orange', padding: 20}}>
        <Text>Click Me</Text>
      </Pressable>
      <Pressable
        onPress={onRetry}
        style={{backgroundColor: 'red', padding: 20}}>
        <Text>Retry</Text>
      </Pressable>
      <Pressable
        onPress={onStartTest}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text>Start Test</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreenView;
