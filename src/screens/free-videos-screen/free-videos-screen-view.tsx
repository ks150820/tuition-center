import React from 'react';
import {View, FlatList} from 'react-native';

import FreeCoursesComponent from './components/free-courses-component';
import MissedClassesComponent from './components/missed-classes-component';
import PopularSeriesComponent from './components/popular-series-component';
import LiveClassesComponent from './components/live-classes-component';
import {styles} from './free-videos-screen-style';

interface IFreeVideosScreenViewProps {
  dashBoardData: any;
}

const FreeVideosScreenView = ({dashBoardData}: IFreeVideosScreenViewProps) => {
  const renderItem = (item: any) => {
    switch (item.type) {
      case 'free courses': {
        return <FreeCoursesComponent />;
      }
      case 'missed live classes': {
        return <MissedClassesComponent />;
      }
      case 'live and upcoming classes': {
        return <LiveClassesComponent />;
      }
      case 'popular series': {
        return <PopularSeriesComponent />;
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
        renderItem={({item}: {item: any}) => renderItem(item)}
      />
    </View>
  );
};

export default FreeVideosScreenView;
