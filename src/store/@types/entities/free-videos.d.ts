type ImageSourcePropType = import('react-native').ImageSourcePropType;

type FreeCoursesType = {
    _id: string,
    heading: string,
    batchName: string,
    discountPercent: number,
    actualPrice: number,
    discountedPrice: number,
    imgUrl: ImageSourcePropType,
};

type Genres = {
    id: string,
    genreCode: string,
    title: 'string',
};

type MissedLiveClasses = {
    _id: string,
    heading: string,
    imgUrl: ImageSourcePropType,
};

type LiveClasses = {
    _id: string,
    imgUrl: ImageSourcePropType,
    heading: string,
    subHeading: string,
    teacher: string,
    category: string,
};

type PopularSeries = {
    _id: string,
    imgUrl: ImageSourcePropType,
    totalVideos: number,
    heading: string,
    isLiveClassIncluded: boolean,
    studentEnrolled: number,
};

interface FreeVideosType {
    freeCourses: FreeCoursesType[][];
    genres: Genres[];
    missedLiveClasses: MissedLiveClasses[];
    liveClasses: LiveClasses[];
    popularSeries: PopularSeries[];
}