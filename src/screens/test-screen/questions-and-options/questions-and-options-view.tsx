import React from 'react';
import {View, ScrollView} from 'react-native';

import Options from './question-options';
import {style} from './questions-and-options-view-style';
import Questions from './questions/questions';

interface IQuestionAndOptionsViewProps {}

/**
 *
 * @returns basically this component use to print the questions and options
 */
const QuestionsAndOptionsView: React.FC<IQuestionAndOptionsViewProps> = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style?.component}>
        <Questions />
        <Options />
      </View>
    </ScrollView>
  );
};

export default QuestionsAndOptionsView;
