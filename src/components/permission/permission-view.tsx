import Modal from '@components/modal';
import CloseIcon from '@icons/close';
import React from 'react';
import {Linking, Pressable} from 'react-native';
import {Text, View} from 'react-native';
import styles from './style';

interface IPermissionView {
  isViewVisible: boolean;
  isNeverAskAgain: boolean;
  setIsViewVisible: (isViewVisible: boolean) => void;
  requestPermission: () => void;
  header?: string;
  description?: string;
}
const PermissionView: React.FC<IPermissionView> = ({
  isViewVisible,
  isNeverAskAgain,
  setIsViewVisible,
  requestPermission,
  header = 'Enable notifications?',
  description = 'There are many variations of passages of Lorem Ipsum available',
}) => {
  return (
    <Modal isVisible={isViewVisible}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => {
              setIsViewVisible(false);
            }}>
            <CloseIcon />
          </Pressable>
        </View>

        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable
          onPress={() => {
            isNeverAskAgain ? Linking.openSettings() : requestPermission();
          }}
          style={styles.actionBtn}>
          <Text style={{color: '#EEEEEE'}}>
            {isNeverAskAgain ? 'Go to settings' : 'Ask permission'}
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};
export default PermissionView;
