interface IMessageComponentViewProps {
  userMessage: flatListItemParams[];
  flatListRef: React.RefObject<FlatList<any>>;
  getTimeFromDate: (timstamp: number) => string;
  userId: string;
  isLoading: boolean;
  loadMore: (distanceFromTop: number) => void;
}

interface IMessageWrapperProps {
  message: string;
  componentStyle: any;
  textStyle: any;
}

interface IAvatarWrapperProps {
  name: string;
  componentStyle: object;
}

interface flatListItemParams {
  userId: string;
  message: string;
  timestamp: string;
  name: string;
}
