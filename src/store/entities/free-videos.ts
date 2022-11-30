import {createSlice, createSelector} from '@reduxjs/toolkit';

const FreeCourses = [
  [
    {
      _id: '123',
      heading: 'UP VAN Daroga Forest SI 2022',
      batchName: 'ABHIMANYU BATCH',
      discountPercent: 50,
      actualPrice: 200,
      discountedPrice: 500,
      imgUrl: require('@assets/images/courses-image.jpg'),
    },
    {
      _id: '124',
      heading: 'UP VAN Daroga Forest SI 2022',
      batchName: 'ABHIMANYU BATCH',
      discountPercent: 50,
      actualPrice: 200,
      discountedPrice: 500,
      imgUrl: require('@assets/images/courses-image.jpg'),
    },
  ],
  [
    {
      _id: '125',
      heading: 'UP VAN Daroga Forest SI 2022',
      batchName: 'ABHIMANYU BATCH',
      discountPercent: 50,
      actualPrice: 200,
      discountedPrice: 500,
      imgUrl: require('@assets/images/courses-image.jpg'),
    },
    {
      _id: '126',
      heading: 'UP VAN Daroga Forest SI 2022',
      batchName: 'ABHIMANYU BATCH',
      discountPercent: 50,
      actualPrice: 200,
      discountedPrice: 500,
      imgUrl: require('@assets/images/courses-image.jpg'),
    },
  ],
];

const genres = [
  {
    id: '1',
    genreCode: 'all',
    title: 'All',
  },
  {
    id: '2',
    genreCode: 'english',
    title: 'English',
  },
  {
    id: '3',
    genreCode: 'maths',
    title: 'Maths',
  },
  {
    id: '4',
    genreCode: 'science',
    title: 'Science',
  },
  {
    id: '5',
    genreCode: 'history',
    title: 'History',
  },
];

const missedLiveClasses = [
  {
    _id: '1',
    imgUrl: require('@assets/images/missed-class-banner.jpg'),
    heading: 'UPSSC course number with Vipul Sir',
  },
  {
    _id: '2',
    imgUrl: require('@assets/images/missed-class-banner.jpg'),
    heading: 'UPSSC course number with Vipul Sir',
  },
  {
    _id: '3',
    imgUrl: require('@assets/images/missed-class-banner.jpg'),
    heading: 'UPSSC course number with Vipul Sir',
  },
];

const popularSeries = [
  {
    _id: '123',
    imgUrl: require('@assets/images/vivek_banner.jpg'),
    totalVideos: 15,
    heading: 'How to prepare for Quant Aptitude',
    isLiveClassIncluded: true,
    studentEnrolled: 0,
  },
  {
    _id: '124',
    imgUrl: require('@assets/images/vivek_banner.jpg'),
    totalVideos: 15,
    heading: 'How to prepare for Quant Aptitude',
    isLiveClassIncluded: true,
    studentEnrolled: 25,
  },
  {
    _id: '125',
    imgUrl: require('@assets/images/vivek_banner.jpg'),
    totalVideos: 15,
    heading: 'How to prepare for Quant Aptitude',
    isLiveClassIncluded: true,
    studentEnrolled: 0,
  },
  {
    _id: '126',
    imgUrl: require('@assets/images/vivek_banner.jpg'),
    totalVideos: 15,
    heading: 'How to prepare for Quant Aptitude',
    isLiveClassIncluded: true,
    studentEnrolled: 25,
  },
  {
    _id: '127',
    imgUrl: require('@assets/images/vivek_banner.jpg'),
    totalVideos: 15,
    heading: 'How to prepare for Quant Aptitude',
    isLiveClassIncluded: true,
    studentEnrolled: 25,
  },
];

const liveClasses = [
  {
    _id: '123',
    imgUrl: require('@assets/images/live-banner.jpg'),
    heading: 'Quantative Aptitude',
    subHeading: 'Bank demo class',
    teacher: 'Abhishek Banerjee',
    category: 'english',
  },
  {
    _id: '124',
    imgUrl: require('@assets/images/live-banner.jpg'),
    heading: 'Quantative Aptitude',
    subHeading: 'Bank demo class',
    teacher: 'Abhishek Banerjee',
    category: 'maths',
  },
];

export const slice = createSlice({
  name: 'freeVideos',
  initialState: <FreeVideosType>{
    freeCourses: FreeCourses,
    genres: genres,
    missedLiveClasses: missedLiveClasses,
    liveClasses: liveClasses,
    popularSeries: popularSeries,
  },
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;

export const getAllFreeCourses = createSelector(
  (state: any) => state.entities.freeVideos,
  (courses: FreeVideosType) => courses.freeCourses,
);

export const getAllGenres = createSelector(
  (state: any) => state.entities.freeVideos,
  (genres: FreeVideosType) => genres.genres,
);

export const getMissedLiveClasses = createSelector(
  (state: any) => state.entities.freeVideos,
  (classes: FreeVideosType) => classes.missedLiveClasses,
);

export const getPopularSeries = createSelector(
  (state: any) => state.entities.freeVideos,
  (playlist: FreeVideosType) => playlist.popularSeries,
);

export const getAllLiveClasses = createSelector(
  (state: any) => state.entities.freeVideos,
  (classes: FreeVideosType) => classes.liveClasses,
);
