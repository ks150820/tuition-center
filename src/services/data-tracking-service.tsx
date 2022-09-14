import {useRoute} from '@react-navigation/native';

interface dataObject {
  [key: string]: string;
}
//call this hook only from screens
//This function is used with analytics it  will append user data with data you need to send
/**
 *
 * @param data The data that you need to send with analytical data
 * @param isUseUserDetails if you need user data to be appended with it make it true
 * @returns {
 *            dataToTrack : data to track
 *            userDetails: it will return user details with current page that they are on
 *          }
 */
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
