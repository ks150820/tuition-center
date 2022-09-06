import React from 'react';
import {Pressable, View, Text} from 'react-native';
import useHomeScreenViewController from './homescreen-view-controller';

interface IHomescreenViewProps {}

/**
 * View for Homescreen
 * @param props
 * @returns
 */
const HomescreenView: React.FunctionComponent<IHomescreenViewProps> = ({}) => {
  const {onPress, onRetry} = useHomeScreenViewController();
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
    </View>
  );
};

export default HomescreenView;
