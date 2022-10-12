import {useEffect, useState} from 'react';
import {NativeModules, Keyboard, DeviceEventEmitter} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import UIToast from '@services/UIToast/ui-toast';

interface findIndexItem {
  userId: string;
}

// interface IUseLiveClassChatController {}

const useLiveClassChatController = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dbResponse, setDbResponse] = useState<any>([]);
  const [USER_ID, setUserId] = useState(''); // TODO: remove this later
  const [blockedUserDetails, setBlockedUserDetails] = useState<any>([]);
  const {firebase} = NativeModules;

  const VIDEO_ID = 'adfse112334';
  const BLOCKED_TEXT = 'Sorry, you are blocked.';

  /**
   * @param event it is the message sent by the user
   */
  const onChatAdded = (event: any) => {
    let messageObject: any = JSON.parse(event);
    let index = dbResponse.findIndex(
      (data: any) => data.messageId === messageObject.messageId,
    );
    if (index === -1) {
      setDbResponse((prevState: any) => [...prevState, messageObject]);
    }
  };

  useEffect(() => {
    DeviceInfo.getAndroidId().then(androidId => {
      // androidId here
      // console.log('android id :', androidId);
      setUserId(androidId);
    });
  }, []);

  /**
   * this is used to get the all the chats from the firebase
   */
  useEffect(() => {
    firebase.getAllchatsfromfirebase(VIDEO_ID, (response: any) => {
      const jsonData = JSON.parse(response).reverse();
      setDbResponse(jsonData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * this is used to get all the blocked user data
   */
  useEffect(() => {
    firebase.getAllBlockeUserDetails(VIDEO_ID, (response: any) => {
      setBlockedUserDetails(JSON.parse(response));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * this is a listener when user will receive or sending the message everyTime it will cal
   */
  useEffect(() => {
    firebase.startAddChatListener((callback: any) => {
      console.log(callback);
    });
    DeviceEventEmitter.addListener('onChatAdded', onChatAdded);
    return () => {
      DeviceEventEmitter.removeAllListeners('onChatAdded');
      firebase.removedAddChatListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * to set the message on state
   * @param textEvent message return by the user
   */
  const handleMessage = (textEvent: string): void => {
    setMessage(textEvent);
  };

  /**
   *
   * @param min minimum number
   * @param max maximum number
   * @returns to give random number of 3 digits
   */
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /**
   *
   * @returns to send the message
   */
  const handleSendMessage = (): void => {
    if (message.length > 0) {
      const findUser = blockedUserDetails?.findIndex(
        (item: findIndexItem) => item.userId === USER_ID,
      );
      if (findUser > -1) {
        UIToast(BLOCKED_TEXT);
        return;
      }
      const timeStamp =
        new Date().getTime() + '_' + randomIntFromInterval(100, 999);

      // TODO: change userId and videoId
      const options = {
        userId: USER_ID,
        name: 'Kapil Shukla',
        message: message,
        timestamp: new Date().getTime().toString(),
      };
      firebase.addFirebaseData(options, VIDEO_ID, timeStamp, (error: any) => {
        if (error) {
        }
      });
      setMessage('');
      Keyboard.dismiss();
    }
  };

  const handlePagination = () => {
    if (dbResponse.length > 0) {
      setIsLoading(true);
      firebase.paginationQuery((paginationResponse: any) => {
        const responseData = JSON.parse(paginationResponse).reverse();
        setDbResponse((prevState: any) => [...responseData, ...prevState]);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  };

  return {
    message,
    dbResponse,
    USER_ID,
    isLoading,
    handleSendMessage,
    handleMessage,
    handlePagination,
  };
};

export default useLiveClassChatController;
