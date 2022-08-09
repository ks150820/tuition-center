import AsyncStorage from '@react-native-async-storage/async-storage';
interface IUseAsyncStorageService {
  key: string;
}
const useAsyncStorageService = ({key}: IUseAsyncStorageService) => {
  const storeData = async (value: string | object) => {
    try {
      await AsyncStorage.setItem(
        key,
        typeof value === 'string' ? value : JSON.stringify(value),
      );
      console.log(key, value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return typeof value === 'string' ? value : JSON.parse(value);
      }
    } catch (e) {
      // error reading value
      return null;
    }
    return null;
  };
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  return {storeData, getData, removeValue, clearAll};
};

export default useAsyncStorageService;
