import React from 'react';

import OptionsView from './question-options-view';
import useOptionsController from './question-options-controller';

const Options: React.FC<{}> = () => {
  const {
    options,
    optionType,
    preSelectedMcq,
    inputValue,
    selectedLanguage,
    onOptionSelected,
    onChangeText,
  } = useOptionsController();
  return (
    <OptionsView
      options={options}
      optionType={optionType}
      preSelectedMcq={preSelectedMcq}
      onOptionSelected={onOptionSelected}
      onChangeText={onChangeText}
      inputValue={inputValue}
      language={selectedLanguage}
    />
  );
};

export default Options;
