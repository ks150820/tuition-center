import React from 'react';
import {View, StyleSheet} from 'react-native';

import {COLORS} from '@resources/colors';

interface IUIDividerViewProps {}

/**
 * View for UIDivider
 * @param props
 * @returns it return thin line which we can use as an divider
 */
const UIDividerView: React.FunctionComponent<IUIDividerViewProps> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: COLORS.WHITE.light_silver,
    width: '100%',
    margin: 10,
  },
});
export default UIDividerView;
