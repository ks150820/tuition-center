import React from 'react';
import {View, FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import UIButton from '@widgets/ui-btn';
import {COLORS} from '@resources/colors';
import {questionTabStyle} from './question-tab-view-style';

/**
 * View for QuestionTabs containing the html for question tabs on top
 * @param {questions[]} params.questions all the details of test questions
 * @param {methodWithIndexParameter} params.setQuestionIndex callback method to set the index number of a question
 * @param {emptyParameterType} params.flatListRefForQuestionTab ref property used for scroll the selected question at the first position
 * @param {emptyParameterType} params.scrollToIndex this is responsible for questions tabs scrolling
 * @param {emptyParameterType} params.flatListRefForSections this takes the property of section, when ever the section is changed questions will scroll to first
 * @param {methodWithQuestionIdParameter} params.handleQuestion callback method to set the question id and store in the redux store
 * @param {emptyParameterType} params.toggleInfoButton this is used to for toggling the model, this method used in i button, when user press this i button test status model will open
 * @param {methodWithIdParameter} params.getStatusClass call back method to get the status of the question
 * @param {methodWithIndexParameter} params.setQuestionNo  call back method to set the current question number
 * @returns return test status model ui
 */
const QuestionTabsView: React.FunctionComponent<IQuestionTabsViewProps> = ({
  questions,
  flatListRefForQuestionTab,
  flatListRefForSections,
  setQuestionIndex,
  scrollToIndex,
  handleQuestion,
  toggleInfoButton,
  getStatusClass,
  setQuestionNo,
}) => {
  //  used to focus on a question tab to scroll at first
  useFocusEffect(scrollToIndex);

  /**
   *
   * @param item it is the individual question
   * @param index index number of the question
   * @returns layout of the questions numbers, according to the status layout background color will change
   */
  const renderItem = (question: questions, index: number) => {
    const res = getStatusClass(question?._id);
    const colorCode = res?.colorCode;
    const status = res?.status;
    return (
      <View>
        <UIButton
          btnText={index + 1 + ''}
          styles={{
            btnElementWrapper: {
              ...questionTabStyle?.btnComponent,
              backgroundColor: colorCode,
            },
          }}
          color={status > 0 ? COLORS.WHITE.white : COLORS.BLACK}
          onPress={(value: string) => {
            setQuestionIndex(parseInt(value) - 1);
            setQuestionNo(parseInt(value) - 1);
            handleQuestion(question?._id);
          }}
        />
      </View>
    );
  };

  return (
    <View style={questionTabStyle?.component}>
      <View style={questionTabStyle?.innerComponent}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={
            flatListRefForQuestionTab
              ? flatListRefForQuestionTab
              : flatListRefForSections
          }
          keyExtractor={(item: any) => item._id}
          data={questions}
          renderItem={({item, index}: {item: any; index: number}) =>
            renderItem(item, index)
          }
          initialScrollIndex={0}
        />
        <View style={questionTabStyle?.iButtonComponent}>
          <UIButton
            iconName="information-circle-sharp"
            iconSize={30}
            styles={{
              btnElementWrapper: questionTabStyle?.iButton,
            }}
            color={COLORS.BLUE.french_sky_blue}
            onPress={toggleInfoButton}
          />
        </View>
      </View>
    </View>
  );
};

export default QuestionTabsView;
