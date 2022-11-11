import React from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import {toastStatusType} from './enum';
import styles from './style';

interface IToastType {
  popAnim: any;
  header: string;
  message: string;
  status: toastStatusType | null;
  setStatus: React.Dispatch<React.SetStateAction<toastStatusType | null>>;
  show: () => void;
  hide: () => void;
}
const ToastView: React.FC<IToastType> = ({
  popAnim,
  header,
  message,
  status,
  hide: hide,
}) => {
  return (
    <View>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{translateY: popAnim}],
          },
        ]}>
        <View style={styles.toastRow}>
          <View style={styles.toastText}>
            <Text
              style={
                status === toastStatusType.ERROR
                  ? styles.errorHeader
                  : styles.header
              }>
              {header}
            </Text>
            <Text
              style={
                status === toastStatusType.ERROR
                  ? styles.errorMessage
                  : styles.message
              }>
              {message}
            </Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ToastView;
