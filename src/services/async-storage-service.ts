import AsyncStorage from '@react-native-async-storage/async-storage';
// for testing purpose
class asyncStorageService {
  constructor() {}
  storeData = async (value: string | object) => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      return null;
      // error reading value
    }
  };
}
const asyncStorage = new asyncStorageService();
export default asyncStorage;
