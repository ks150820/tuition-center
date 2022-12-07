import React from 'react';
import {View} from 'react-native';

import UIImage from '@widgets/ui-image';
import {style} from './video-details-screen-style';
import PlayIcon from '@resources/icons/play-icon';

const VideoDetailsScreenView = ({}: IVideoDetailsScreenViewProps) => {
  return (
    <View style={style.component}>
      <View style={style.videoComponent}>
        <UIImage
          url={require('@assets/images/free-video-thumbnail.jpg')}
          style={{height: 185, width: '100%', elevation: 0}}
        />
        <View style={style.video_play_icon_component}>
            <PlayIcon width={44} height={44} />
        </View>
      </View>
    </View>
  );
};

export default VideoDetailsScreenView;
