import {useDispatch} from 'react-redux';
import useAsyncStorageService from '../../services/async-storage-service';
import {callAPi, callLoginApi, updateLogin} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';
const useAuthScreenViewController = () => {
  const {storeData} = useAsyncStorageService({key: 'app'});
  const dispatch = useDispatch<AppDispatch>();
  const onPress = () => {
    // storeData('true');
    // dispatch(updateLogin(true));
    // dispatch(callLoginApi(false));
    dispatch(callAPi());
  };
  return {onPress};
};

export default useAuthScreenViewController;
