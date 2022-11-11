import {act} from '@testing-library/react-native';
import {PORTRAIT} from 'react-native-orientation-locker';
import {renderHook} from '@store/util/test.util';
import useVideoPlayerController from '../video-player-view-controller';

test('Video player view controller test', () => {
  // Render hook
  const {result} = renderHook(useVideoPlayerController);

  // Verify toggle hook
  act(() => {
    result.current.toggleMute();
  });
  expect(result.current.isMute).toBe(true);

  // Verify toggle hook
  act(() => {
    result.current.onVideoEnd();
  });
  expect(result.current.isVideoEnded).toBe(true);

  // Verify toggle hook
  act(() => {
    result.current.togglePlayPause();
  });
  expect(result.current.isPaused).toBe(false);

  // Verify change in state as passed arguments
  act(() => {
    result.current.onBuffer({isBuffering: true});
  });
  expect(result.current.isBuffering).toBe(true);

  // Verify change in state
  act(() => {
    result.current.changeOrientation();
  });
  expect(result.current.orientation).toBe(PORTRAIT);

  // Verify change in state as passed arguments
  act(() => {
    result.current.onLoad({
      currentTime: 10,
      duration: 20000,
      videoTracks: [
        {
          bitrate: 240,
          codecs: '00',
          width: 240,
          height: 200,
          trackId: '01',
        },
      ],
    });
  });
  expect(result.current.videoQuality.availableVideoQualities.length).toBe(2);
  expect(result.current.videoDuration.duration).toBe(20000);

  // Verify change in state
  act(() => {
    result.current.onLoadStart();
  });
  expect(result.current.isLoading).toBe(true);

  // Verify change in state as passed arguments
  act(() => {
    result.current.handleSettingModalVisibility({visible: true});
  });
  expect(result.current.settingModalVisible).toBe(true);

  // Verify change in state as passed arguments
  act(() => {
    result.current.handlePlayBackRateChange({key: '3', label: '3X', value: 3});
  });
  expect(result.current.playbackRate.value).toBe(3);

  // Verify change in state as passed arguments
  act(() => {
    result.current.handleVideoQualityChange({
      type: 'resolution',
      key: '2',
      label: '540px',
      value: 540,
    });
  });
  expect(result.current.videoQuality.selectedVideoTrack.value).toBe(540);

  // Verify change in state as passed arguments
  act(() => {
    result.current.onSlidingComplete(3000);
  });
  expect(result.current.seekValue).toBe((3000 / 100) * 20000);
});
