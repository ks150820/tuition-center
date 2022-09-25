import React from 'react';
import useToastViewController from './toast-view-controller';
import ToastView from './toast-view';

const useToast = () => {
  const {
    successHeader,
    successMessage,
    failHeader,
    failMessage,
    status,
    popAnim,
    //setSuccessHeader,
    //setSuccessMessage,
    setFailHeader,
    setFailMessage,
    setStatus,
    instantPopOut,
    popIn,
  } = useToastViewController(); // to dotted call
  return {
    View: () => (
      <ToastView
        successHeader={successHeader}
        successMessage={successMessage}
        failMessage={failMessage}
        failHeader={failHeader}
        setStatus={setStatus}
        status={status}
        popAnim={popAnim}
        instantPopOut={instantPopOut}
        popIn={popIn}
      />
    ),
    callBacks: {instantPopOut, popIn, setStatus, setFailHeader, setFailMessage},
    values: {status, successHeader, failHeader, successMessage, failMessage},
  };
};

export default useToast;
