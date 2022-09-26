import React from 'react';
import useToastViewController from './toast-view-controller';
import ToastView from './toast-view';

const useToast = () => {
  const {
    header,
    message,
    status,
    popAnim,
    setStatus,
    hide,
    show,
    setHeader,
    setMessage,
  } = useToastViewController(); // to dotted call
  return {
    ToastView: () => (
      <ToastView
        header={header}
        message={message}
        setStatus={setStatus}
        status={status}
        popAnim={popAnim}
        hide={hide}
        show={show}
      />
    ),
    callBacks: {show, hide, setStatus, setHeader, setMessage},
    values: {status, header, message},
  };
};

export default useToast;
