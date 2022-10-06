import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';

import UIBottomSheet from '@widgets/ui-bottom-sheet';
import UIIcon from '@widgets/ui-icon';
import {styles} from './section-tabs-style';
import {COLORS} from '@resources/colors';

/**
 *
 * @param {sections} params.sections array list of all the sections
 * @param {number} params.index index number of each section item
 * @param {onPressType} params.onPress a callback method to open the sections bottom sheet
 * @returns
 */
const HeaderTop = ({sections, index = 0, onPress}: headerTopProps) => {
  return (
    <Pressable
      onPress={sections?.length > 1 ? onPress : () => {}}
      testID="headerTopOnPress">
      <View style={styles?.dropdownComponent}>
        <Text style={[styles?.textColor]}>
          {sections?.[index]?.section_name.en}
        </Text>
        {sections?.length > 1 && (
          <UIIcon
            name="chevron-down"
            type="ionicon"
            containerStyle={styles.icon}
            size={20}
            color={COLORS.WHITE.white}
          />
        )}
      </View>
    </Pressable>
  );
};

/**
 *
 * @param sections - array of sections, details of the sections including with their questions detail
 * @param onPress - callback method, to disable the bottom sheet
 * @param sectionIndex - index of a particular section
 * @param onSelectSection - callback method to select the sections
 * @returns return the header top section tab ui
 */
const HeaderBottomSheet: React.FC<headerBottomSheetProps> = ({
  sections,
  selectedSection,
  onPress,
  onSelectSection,
}) => {
  /**
   * @param item item is the array of sections
   * @param index
   * to list down all the sections and no. of questions available on each section
   * there is a method onSelectSection which is pass the select section index to the parent component
   * sections will print on two languages - hindi('hi') & english('en')
   */
  const renderItem = (item: sections, index: number) => {
    return (
      <Pressable
        onPress={() => onSelectSection(item?.section_name.en, index)}
        testID="renderItemOnPress">
        <View style={styles?.renderItemComponent}>
          <View>
            <Text style={styles?.renderItemTitleText}>
              {item?.section_name.en}
            </Text>
            <Text style={styles?.renderItemSubText}>
              {item?.questions?.length} Questions
            </Text>
          </View>
          {/* when selected sectionIndex is equal to the index of the section item then this icon will display */}
          {selectedSection === item?.section_name.en && (
            <UIIcon
              name="checkmark-circle-sharp"
              type="ionicon"
              color={COLORS.RED.indian_red}
              size={15}
            />
          )}
        </View>
      </Pressable>
    );
  };

  /**
   *  This method responsible for print the bottom sheet header section,
   * In this there is dropdown icon and Sections text
   * perform onPress action to disable the bottom sheet
   */
  const ListHeaderComponent = () => {
    return (
      <View style={styles?.listHeaderComponent}>
        <Pressable onPress={onPress} testID="listHeaderComponentPress">
          <UIIcon
            name="chevron-down"
            type="ionicon"
            color="COLORS.GREY.american_silver"
            iconStyle={{...styles?.flatListHeaderIcon}}
            size={23}
          />
        </Pressable>
        <View>
          <Text style={styles?.flatListHeaderText}>Sections</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item: sections) => item?._id}
      data={sections}
      ListHeaderComponent={<ListHeaderComponent />}
      renderItem={({item, index}: {item: sections; index: number}) =>
        renderItem(item, index)
      }
    />
  );
};

/**
 *
 * @param {sections} params.sections array of sections with the details of the sections including with their questions detail
 * @param {boolean} params.isBottomSheetVisible this is a boolean value, it is responsible to close and open a bottom sheet
 * @param {number} params.sectionIndex its an index number of section array
 * @param {string} params.sectionName it's a name of particular section
 * @param {handleSectionPressType} params.handleSectionPress this method is responsible to open the bottomSheet, setting the index number of section and set the selected section name on state
 * @param {onPressType} params.toggleBottomSheet to changing the state of the bottomSheet
 * @returns this is the parent component of HeaderTop component and HeaderBottomSheet component, these all together show the ui of sections
 */
const SectionTabView = ({
  sections,
  isBottomSheetVisible,
  sectionIndex,
  sectionName,
  handleSectionPress,
  toggleBottomSheet,
}: ISectionTabViewProps) => {
  return (
    <View>
      <HeaderTop
        sections={sections}
        onPress={toggleBottomSheet}
        index={sectionIndex}
      />

      {/* --- bottom sheet --- */}
      <UIBottomSheet
        visible={isBottomSheetVisible}
        height="40%"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        borderTopRadius={10}
        onBackDropPress={toggleBottomSheet}
        onBackButtonPress={toggleBottomSheet}>
        <View style={styles?.bottomSheetComponent}>
          <HeaderBottomSheet
            sections={sections}
            selectedSection={sectionName}
            sectionIndex={sectionIndex}
            onPress={toggleBottomSheet}
            onSelectSection={(selectedSectionName: string, index: number) =>
              handleSectionPress(selectedSectionName, index)
            }
          />
        </View>
      </UIBottomSheet>
    </View>
  );
};

export default SectionTabView;
