import {renderHook} from '@testing-library/react-native';
import useDataTrackingService from '../data-tracking-service';

const dataToTrack = {
  eventName: 'myName',
};
interface dataObject {
  [key: string]: string;
}

let userDetails: dataObject = {
  page_name: 'home' || 'NA',
  user_id: '123456789',
  mobile_number: '98987654',
  language: 'en',
};
describe('testing data tracking view', () => {
  test('data tracking without using user details', () => {
    const {result} = renderHook(
      ({
        data,
        isUseUserDetails,
      }: {
        data: dataObject;
        isUseUserDetails: boolean;
      }) => useDataTrackingService({data, isUseUserDetails}),
      {initialProps: {data: dataToTrack, isUseUserDetails: false}},
    );
    expect(result.current.dataToTrack).toEqual(dataToTrack);
    expect(result.current.userDetails).toEqual(userDetails);
  });
  test('data tracking with using user details', () => {
    const {result} = renderHook(
      ({
        data,
        isUseUserDetails,
      }: {
        data: dataObject;
        isUseUserDetails: boolean;
      }) => useDataTrackingService({data, isUseUserDetails}),
      {initialProps: {data: dataToTrack, isUseUserDetails: true}},
    );
    expect(result.current.dataToTrack).toEqual(
      Object.assign({}, userDetails, dataToTrack),
    );
    expect(result.current.userDetails).toEqual(userDetails);
  });
});
