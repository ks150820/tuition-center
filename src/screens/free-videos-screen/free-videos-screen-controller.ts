const useFreeVideosScreenController = ({navigation}: IUseFreeVideosScreenController) => {
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

  const handleNavigation = () => {
    navigation.navigate('VideoDetail');
  }
  return {dummyFreeVideosDashBoardData, handleNavigation};
};

export default useFreeVideosScreenController;
