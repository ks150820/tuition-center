interface CourseCardProps {
  card_for: string;
  imageUrl?: ImageSourcePropType;
  heading: string;
  batchName?: string;
  actualPrice?: number;
  discountedPrice?: number;
  discountPercent?: number | undefined;
  batchStartDate?: string;
  style?: object;
  children?: any;
  buttonText: string;
  viewPdfButton: boolean;
}
