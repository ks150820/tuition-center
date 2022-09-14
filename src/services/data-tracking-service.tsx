import {useRoute} from '@react-navigation/native';

const useDataTrackingService = () => {
  //page name
  //user_ID
  //Mobile_number
  //language
  const route = useRoute();
  console.log(route.name);

  return {page_name: route};
};

export default useDataTrackingService;
