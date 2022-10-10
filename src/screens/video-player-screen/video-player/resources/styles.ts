import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  chatVideoContainer: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
  },
  activityIndicator: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityLevel: {
    opacity: 1,
  },
  chatContainer: {
    flex: 0.75,
  },
});
