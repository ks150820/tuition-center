import {useDispatch} from 'react-redux';
import {callAPi, callRetry} from '../../store/entities/auth';
import {AppDispatch} from '../../store/configureStore';
import {useEffect} from 'react';
// import {firestore} from '../../services/firebase-services';
// import {collection, addDoc} from 'firebase/firestore/lite';

// import {postNavigationProp} from '../../navigators/post-auth-navigator/@types/post-auth-param-list';;
/**
 * View Controller for Homescreen
 * @param props
 * @returns
 */
const useHomeScreenViewController = () => {
  // const navigation = useNavigation<myCourseNavigationProps>();
  // const col = async () => {
  //   const citiesCol = collection(firestore, 'live-chat');
  //   try {
  //     const docRef = await addDoc(citiesCol, {
  //       first: 'Ada',
  //       last: 'Lovelace',
  //       born: 1815,
  //     });
  //     console.log('Document written with ID: ', docRef);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  //   console.log(JSON.stringify(citiesCol));
  // };
  useEffect(() => {}, []);
  const dispatch = useDispatch<AppDispatch>();

  const onPress = () => {
    console.log('call.');
    dispatch(callAPi());
    // col();
    // navigation.navigate('MyCourse', {courseList: ['A', 'B']});
  };

  const onRetry = () => {
    dispatch(callRetry());
  };
  return {onPress, onRetry};
};

export default useHomeScreenViewController;
