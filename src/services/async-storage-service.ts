import AsyncStorage from '@react-native-async-storage/async-storage';
interface IUseAsyncStorageService {
  key: string;
}
/**
 *
 * @param key key for async storage
 * @returns
 */
const useAsyncStorageService = ({key}: IUseAsyncStorageService) => {
  /**
   *
   * @param value value to be stored in the async storage it can be either string or object
   * if its object we will covert it to string and store
   */
  const storeData = async (value: string | object) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(key, value);
    } catch (e) {
      // saving error
    }
  };

  /**
   *
   * This function to get the data from the async storage
   * if the type of value we are stored is object we have to parse it
   */
  const getData = async (): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
      return null;
    }
    return null;
  };

  /**
   * To remove a value from async storage
   */
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };
  //To clear all the values from async storage
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
