import {useState} from 'react';

const useModalViewController = () => {
  const [isVisible, setIsVisible] = useState(false);
  const changeModalVisibility = () => {
    setIsVisible(!isVisible);
  };
  return {changeModalVisibility};
};

export default useModalViewController;
