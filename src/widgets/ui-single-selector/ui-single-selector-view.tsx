import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import HeaderWithBackButton from 'widgets/ui-header-with-back-button';
import {styles} from './resources/styles/styles';
import SingleSelectOption from './ui-single-select-option/components';

/**
 * View for SingleSelector
 * @param {ISingleSelectorViewProps} props
 * @returns
 */

const SingleSelectorView: React.FunctionComponent<ISingleSelectorViewProps> = ({
  options,
  selectedOption,
  style,
  placeHolder,
  id,
  onChange,
  onBackPress,
}) => {
  const [currentOption, setCurrentOption] =
    useState<ISingleSelectOptions>(selectedOption);

  const handleSelectOption = (updatedOption: ISingleSelectOptions) => {
    setCurrentOption(updatedOption);
    onChange(updatedOption);
  };

  return (
    <View key={id} style={[styles.container, style]}>
      {placeHolder && (
        <HeaderWithBackButton label={placeHolder} onBackPress={onBackPress} />
      )}
      <FlatList
        data={options}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SingleSelectOption
            option={item}
            isSelected={currentOption.key === item.key}
            onSelectOption={handleSelectOption}
          />
        )}
        testID="optionList"
      />
    </View>
  );
};

export default SingleSelectorView;
