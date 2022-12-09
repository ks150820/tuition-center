import React from 'react';
import {View, FlatList} from 'react-native';

import FreeCoursesComponent from './components/free-courses-component';
import MissedClassesComponent from './components/missed-classes-component';
import PopularSeriesComponent from './components/popular-series-component';
import LiveClassesComponent from './components/live-classes-component';
import {FreeVideoScreenOptions} from './constants/constants';
import {styles} from './free-videos-screen-style';

const FreeVideosScreenView = ({
  dashBoardData,
  handleLiveClassNavigation,
  handleNavigation,
}: IFreeVideosScreenViewProps) => {
  const renderItem = (item: FreeVideoDummyDataType) => {
    switch (item.type) {
      case FreeVideoScreenOptions.FREE_COURSES: {
        return <FreeCoursesComponent />;
      }
      case FreeVideoScreenOptions.MISSED_LIVE_CLASSES: {
        return <MissedClassesComponent />;
      }
      case FreeVideoScreenOptions.LIVE_UPCOMING: {
        return <LiveClassesComponent handleViewAll={handleLiveClassNavigation} />;
      }
      case FreeVideoScreenOptions.POPULAR_SERIES: {
        return <PopularSeriesComponent onCardPress={handleNavigation} />;
      }
      default: {
        return <></>;
      }
    }
  };
  return (
    <View style={styles.component}>
      <FlatList
        keyExtractor={item => item.id + ''}
        data={dashBoardData}
        renderItem={({item}: {item: FreeVideoDummyDataType}) =>
          renderItem(item)
        }
      />
    </View>
  );
};

export default FreeVideosScreenView;
