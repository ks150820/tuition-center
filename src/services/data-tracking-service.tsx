import {useRoute} from '@react-navigation/native';

interface dataObject {
  [key: string]: string;
}
//call this hook only from screens
const useDataTrackingService = (
  data: dataObject,
  isUseUserDetails: boolean,
) => {
  const route = useRoute();
  let userDetails: dataObject = {
    page_name: route?.name || 'NA',
    user_id: '123456789',
    mobile_number: '98987654',
    language: 'en',
  };
  return {
    dataToTrack: isUseUserDetails ? Object.assign({}, userDetails, data) : data,
    userDetails: userDetails,
  };
};

export default useDataTrackingService;
