import ReactMoE, {MoEProperties} from 'react-native-moengage';
import {useSelector} from 'react-redux';
import {getAuthDetails} from '../store/entities/auth/auth';

interface dataObject {
  [key: string]: string;
}
interface IAttributeType {
  [key: string]: string | number | boolean;
}
// //call this hook only from screens
// //This function is used with analytics it  will append user data with data you need to send
// /**
//  *
//  * @param data The data that you need to send with analytical data
//  * @param isUseUserDetails if you need user data to be appended with it make it true
//  * @returns {
//  *            dataToTrack : data to track
//  *            isUseUserDetails: it will return user details with current page that they are on
//  *          }
//  */
const useDataTrackingService = ({
  data,
  isUseUserDetails,
}: {
  data?: dataObject | {};
  isUseUserDetails?: boolean | false;
}) => {
  const user = useSelector(getAuthDetails);
  let userDetails: dataObject = {
    firstName: user.name || '',
    lastName: user.name || '',
    user_id: user.phoneNumber,
    mobile_number: user.phoneNumber,
    language: 'en',
  };

  const MoEngage = {
    setUserUniqID: () => {
      ReactMoE.setUserUniqueID(userDetails.mobile_number);
      console.log('USER UNIQ ID', userDetails.mobile_number);
    },
    initUserDetails: () => {
      ReactMoE.setUserFirstName(userDetails.firstName);
      ReactMoE.setUserLastName(userDetails.lastName);
      ReactMoE.setUserContactNumber(userDetails.mobile_number);
      console.log('First Name', userDetails.firstName);
      console.log('last Name', userDetails.lastName);
      console.log('Mobile Number', userDetails.mobile_number);
    },
    setCustomAttribute: (attributeName: string, attribute: string) => {
      ReactMoE.setUserAttribute(attributeName, attribute);
    },
    trackUserEvents: (eventName: string, event: IAttributeType) => {
      let properties = new MoEProperties();
      Object.fromEntries(
        Object.entries(event).filter(([key, value]) => {
          properties.addAttribute(key, value);
        }),
      );
      ReactMoE.trackEvent(eventName, properties);
      console.log(eventName, JSON.stringify(properties));
    },
  };
  return {
    dataToTrack: isUseUserDetails ? Object.assign({}, userDetails, data) : data,
    userDetails: userDetails,
    MoEngage,
  };
};

export default useDataTrackingService;
