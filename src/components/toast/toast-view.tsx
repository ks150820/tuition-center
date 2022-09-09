import React from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import styles from './style/style';
interface IToastType {
  popAnim: any;
  successHeader: string;
  failHeader: string;
  successMessage: string;
  failMessage: string;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  popIn: () => void;
  instantPopOut: () => void;
}
const ToastView: React.FC<IToastType> = ({
  popAnim,
  successHeader,
  failHeader,
  successMessage,
  failMessage,
  status,
  instantPopOut,
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
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
              {status === 'success' ? successHeader : failHeader}
            </Text>
            <Text style={{fontSize: 12, color: '#000'}}>
              {status === 'success' ? successMessage : failMessage}
            </Text>
          </View>
          <TouchableOpacity onPress={instantPopOut}>
            <Text style={{color: 'red'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ToastView;
