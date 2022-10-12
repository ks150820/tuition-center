import React, {createContext, useState} from 'react';
// import {
//   getAsyncStorageData,
//   asyncStorage,
// } from '@services/async-storage/async-storage';
import asyncStorage from '@services/async-storage-service';
import {ElasticService} from '@services/elastic-service';

type asyncOptionType = {
  condition: boolean;
  closing_time: string;
};

/**
 * context created for the test to make it shareable across the components
 */
export const FeedBackContext = createContext<feedContextType>({
  openModal: () => {},
  toggleState: false,
  handleDontAskAgain: () => {},
  closeModal: () => {},
  setDontAskCondtionOnAsyncStore: () => {},
});

/**
 * This component return wrapper for feedback context, to provide the facility of user feedback, it will handle the some of the property of feedback pop up
 * @param {any} params.children children is the sub component of feedback context provider, it can be any thing , like react component
 * @returns
 */
const FeedBackContextProvider: React.FC<feedbackContextProvider> = ({
  children,
}) => {
  const [toggleState, setToggleState] = useState<boolean>(false); // this state used to open and close the feedback modal

  const calculateNoOfDays = (date_one: string, date_two: string) => {
    let date1 = new Date(date_two);
    let date2 = new Date(date_one);

    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  };

  /**
   * this method the used to update the state of modal,
   * it will update the state when user did not press the "did not ask" button
   * initially it will check , user is already press the did not ask, if user press the did not ask , then this method will not set the state to true for open the model, other wise it will open the modal
   */
  const openModal = async (): Promise<any> => {
    const datesArray = [1, 2, 5, 7];

    const storageResponse =
      (await asyncStorage.getData('feedback-modal-key')) || {};

    const getDateDifference = calculateNoOfDays(
      new Date().toDateString(),
      storageResponse.closing_time,
    );

    const NumberOfDays = Math.abs(getDateDifference);

    if (!storageResponse?.condition) {
      if (datesArray.includes(NumberOfDays)) {
        setToggleState(true);
      } else {
        if (isNaN(NumberOfDays)) {
          setToggleState(true);
        }
      }
    }
  };

  /**
   *
   * @param options object which needs to be store in cache with their respective key
   */
  const setKeyOnStore = (options: asyncOptionType): void => {
    asyncStorage.storeData('feedback-modal-key', options);
  };

  /**
   * this method use to the close modal, after closing the modal it will store current on async storage
   */
  const closeModal = async (): Promise<any> => {
    const elasticOptions = {
      type: 'rating',
      status: 'cancelled',
    };
    ElasticService(elasticOptions);
    const feedbackStorageCloseTime: any =
      asyncStorage.getData('feedback-modal-key') || {};

    if (feedbackStorageCloseTime.closing_time) {
      feedbackStorageCloseTime.closing_time = new Date().toDateString();
      feedbackStorageCloseTime.condition = false;
      setKeyOnStore(feedbackStorageCloseTime);
      setToggleState(false);
    } else {
      if (!feedbackStorageCloseTime.closing_time) {
        const options = {
          condition: false,
          closing_time: new Date().toDateString(),
        };
        setKeyOnStore(options);
        setToggleState(false);
      }
    }
  };

  const setDontAskCondtionOnAsyncStore = () => {
    const options = {
      condition: true,
      closing_time: new Date().toDateString(),
    };
    setKeyOnStore(options);
    setToggleState(false);
  };

  /**
   * this method usually the handle "did not ask", it will set the key for did not ask button, so user will not see the feedback pop up
   */
  const handleDontAskAgain = (): void => {
    const elasticOptions = {
      type: 'rating',
      status: 'DND',
    };

    ElasticService(elasticOptions);
    setDontAskCondtionOnAsyncStore();
    // closeModal();
  };

  return (
    <FeedBackContext.Provider
      value={{
        openModal,
        toggleState,
        handleDontAskAgain,
        closeModal,
        setDontAskCondtionOnAsyncStore,
      }}>
      {children}
    </FeedBackContext.Provider>
  );
};

// export const useUpdateFeedback = (): void => {
//   const value = useContext(FeedBackContext) as feedContextType;
//   value?.triggerModal();
// };

export default FeedBackContextProvider;
