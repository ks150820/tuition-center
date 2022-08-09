import {useDispatch} from 'react-redux';
import useAsyncStorageService from '../../services/async-storage-service';
import {updateLoginStatus} from '../../store/auth';
import {AppDispatch} from '../../store/configureStore';
const useAuthScreenViewController = () => {
  const {storeData} = useAsyncStorageService({key: 'app'});
  const dispatch = useDispatch<AppDispatch>();
  const onPress = () => {
    storeData('true');
    dispatch(updateLoginStatus(true));
  };
  return {onPress};
};

export default useAuthScreenViewController;
