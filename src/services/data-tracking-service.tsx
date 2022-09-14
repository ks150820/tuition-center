import {useRoute} from '@react-navigation/native';

interface dataObject {
  [key: string]: string;
}
//call this hook only from screens
const useDataTrackingService = (
  data: dataObject,
  isUseUserDetails: boolean,
) => {
  //page name
  //user_ID
  //Mobile_number
  //language
  //above mentioned data to be added here

  const route = useRoute();
  let dataToTrack: dataObject = {
    page_name: route?.name || 'NA',
    user_id: '123456789',
    mobile_number: '98987654',
    language: 'en',
  };
  return isUseUserDetails ? Object.assign(dataToTrack, data) : data;
};

export default useDataTrackingService;
