import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

import {COLORS} from '@resources/colors';
import {headerStyle} from './test-screen-header-style';
import SectionTab from './section-tabs';

interface ITestHeaderViewProps {}

const TestHeaderView: React.FC<ITestHeaderViewProps> = () => {
  return (
    <View style={headerStyle?.component}>
      <StatusBar backgroundColor={COLORS.BLUE.space_cadet} />
      <ScrollView horizontal>
        <SectionTab />
      </ScrollView>
    </View>
  );
};

export default TestHeaderView;
