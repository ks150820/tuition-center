type ImageSourcePropType = import('react-native').ImageSourcePropType;
type viewStyle = import('react-native').ViewStyle;

interface IBooksCardProps {
    imageUrl: ImageSourcePropType;
    heading: string;
    actualPrice: number | undefined;
    onPress(): void;
}

interface IQuickBuyCardProps extends IBooksCardProps {
    discountPercent: number | undefined;
    batchName: string | undefined;
    discountedPrice: number | undefined;
    buttonText: string | undefined;
}

interface ICourseListingCardProps extends IQuickBuyCardProps {
    viewPdfButton: boolean; 
    buttonText: string | undefined;
    children: JSX.Element;
    batchStartDate: string | undefined;
    style?: viewStyle; 
    imageStyle?: viewStyle;
};

interface IExamCourseCardProps {
    heading: string | undefined;
    image: ImageSourcePropType;
    style: viewStyle | undefined;
    onPress(): void;
}