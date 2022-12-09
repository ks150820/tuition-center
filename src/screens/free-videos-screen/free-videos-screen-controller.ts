import {useNavigation} from '@react-navigation/native';

const useFreeVideosScreenController = ({}: IUseFreeVideosScreenController) => {
  const navigation = useNavigation<freeVideosScreensNavigation>();
  const dummyFreeVideosDashBoardData: FreeVideoDummyDataType[] = [
    {
      id: 1,
      type: 'free courses',
    },
    {
      id: 2,
      type: 'missed live classes',
    },
    {
      id: 3,
      type: 'live and upcoming classes',
    },
    {
      id: 4,
      type: 'popular series',
    },
  ];

  const handleNavigation = (): void => {
    navigation.navigate('VideoDetail');
  };

  const handleLiveClassNavigation = (): void => {
    navigation.navigate('AllVideos');
  };
  return {dummyFreeVideosDashBoardData, handleNavigation, handleLiveClassNavigation};
};

export default useFreeVideosScreenController;
