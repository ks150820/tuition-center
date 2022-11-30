import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FreeVideosScreen from '@screens/free-videos-screen';
import VideoDetailsScreen from '@screens/video-detials-screen';

const VideoNavigator = createStackNavigator<freeVideoParamList>();

const FreeVideoNavigator = () => {
    return (
        <VideoNavigator.Navigator>
            <VideoNavigator.Screen options={{headerShown: false}} name="FreeVideoScreen" component={FreeVideosScreen} />
            <VideoNavigator.Screen options={{headerShown: false}} name="VideoDetail" component={VideoDetailsScreen} />
        </VideoNavigator.Navigator>
    );
}

export default FreeVideoNavigator;
