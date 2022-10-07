import {COLORS} from '@resources/colors';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import UIIcon from '../ui-icon';
import {styles} from './ui-drop-down-view-style';
/**
 *
 * @param {string} params.label to give the title to dropdown
 * @param {childrenType} params.children it can be component, text or anything
 * @param {string} params.optionsValue it is the value of options which we selected from the dropdown
 * @param {Object} params.layoutStyle it used to give the styling to dropdown layout
 * @param {ShowOptionType} params.handleShowOptions this is a method, use to handle the dropdown options
 * @returns returns the dropdown box layout
 */
const UIDropDownView: IDropdownViewComponent<IUIDropDownViewProps> = ({
  label,
  children,
  optionsValue,
  dropDownStyle,
  layoutStyle,
  handleShowOptions,
}) => {
  return (
    <View style={layoutStyle}>
      <View>
        <Text style={styles?.textColor}>{label}</Text>
      </View>
      <View style={styles.outerComponent}>
        <Pressable onPress={handleShowOptions} testID="selectInputPress">
          <View style={{...styles.dropdownComponent, ...dropDownStyle}}>
            <View>
              <Text style={styles?.textColor}>{optionsValue || 'Select'}</Text>
            </View>
            <UIIcon
              type="ionicon"
              name="chevron-down"
              containerStyle={{...styles?.iconSize}}
              size={20}
              color={COLORS.BLACK}
            />
          </View>
        </Pressable>
        {children}
      </View>
    </View>
  );
};

/**
 *
 * @param {optionNames} params.option this is an array of options
 * @param {handleOptionValueType} params.handleOptionValue this method is responsible to send the value of options to their parent where ever the dropdown is used
 * @returns return the options layout ui
 */
const Options: React.FC<IOptions> = ({option, handleOptionValue}) => {
  return (
    <View style={styles.optionsOuterComponent}>
      <View>
        {option.map((item: optionNames, index: number) => {
          return (
            <Pressable
              key={index}
              onPress={() => handleOptionValue(item)}
              testID="clickOption">
              <View style={[styles.componentWidth]}>
                <Text style={styles?.textColor}>{item.name}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
UIDropDownView.UIDropdownView = UIDropDownView;
UIDropDownView.Options = Options;

export default UIDropDownView;
