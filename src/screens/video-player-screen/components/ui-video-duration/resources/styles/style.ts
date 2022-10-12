import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelBG: {
    borderRadius: 4,
    padding: 2,
    opacity: 0.8,
  },
  playedDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIndicator: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 10,
    marginLeft: 8,
    marginBottom: -4,
    width: 10,
  },
});
