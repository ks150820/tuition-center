import React, {ReactElement} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  Image,
  Text,
} from 'react-native';

import UiModal from '@widgets/ui-modal';
import {styles} from './feedback-modal-style';
import UIButton from '@widgets/ui-btn';
import {COLORS} from '@resources/colors';

type emptyFunctionType = () => void;
type functionType = (url: string, rating: number) => void;
interface IFeedbackModalViewProps {
  modalVisible: boolean;
  needConfigurationButton?: boolean;
  data: any;
  handleRouting: functionType;
  handleDontAskAgain: emptyFunctionType;
  closeModal: emptyFunctionType;
}
type flatListRenderItemParamsType = {
  image: ImageSourcePropType;
  text: string;
  url: string;
  rating: number;
};

/** this component returns the feedback modal component
 * @param {boolean} params.modalVisible to open or close the feedback modal
 * @param {emptyFunctionType} params.openModal callback method to update the state of modal
 * @param {functionType} params.handleRouting to open the playstore and navigate to the screen
 * @param {functionType} params.handleDontAskAgain callback method to set the condition for "don't ask again" button
 * @returns
 */
const FeedbackModalView = ({
  modalVisible,
  needConfigurationButton,
  data,
  handleRouting,
  handleDontAskAgain,
  closeModal,
}: IFeedbackModalViewProps): ReactElement => {
  /**
   *
   * @param item individual item of dummy_data
   * @returns the list view of item
   */
  const renderItem = (item: flatListRenderItemParamsType): ReactElement => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        testID="listHandle"
        onPress={() => handleRouting(item.url, item.rating)}>
        <View style={styles.innerListItem}>
          <Image source={item.image} style={styles.renderItemImage} />
          <Text style={styles.renderItemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  /**
   * these are the button's used in the footer of the modal
   */
  const FeedbackModalFooterComponent = (): ReactElement => {
    return (
      <View style={styles.listFooterComponent}>
        <UIButton
          btnText="Don't ask again"
          styles={{
            btnElementWrapper: styles.listDontAskAgainButton,
            outerWrapper: styles.listDontAskAgainButtonComponent,
          }}
          color={COLORS.WHITE.white}
          onPress={handleDontAskAgain}
          disabled={false}
        />
        <UIButton
          btnText="Cancel"
          styles={{
            btnElementWrapper: styles.listFooterCancelButton,
            outerWrapper: styles.listFooterCancelButtonComponent,
          }}
          color={COLORS.BLACK}
          onPress={closeModal}
          disabled={false}
        />
      </View>
    );
  };
  return (
    <UiModal modalVisible={modalVisible} isBottomSheet={false}>
      <View>
        {/* <TouchableOpacity onPress={triggerModal} style={styles.iconComponent}>
          <UIIcon iconName="close" style={styles.closeIcon} />
        </TouchableOpacity> */}
        <View style={styles.listsComponent}>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={data}
            renderItem={({
              item,
            }: {
              item: flatListRenderItemParamsType;
            }): ReactElement => renderItem(item)}
            ListFooterComponent={
              needConfigurationButton ? (
                <FeedbackModalFooterComponent />
              ) : (
                () => <></>
              )
            }
          />
        </View>
      </View>
    </UiModal>
  );
};

export default FeedbackModalView;
