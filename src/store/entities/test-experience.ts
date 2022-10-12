import {createSelector, createSlice} from '@reduxjs/toolkit';
import {httpMethods} from '@store/enum';
import apiDispatch from '@store/util/dispatch';
// import TestExperience from '../../components/testExperience';
// import * as action from '../actions/actions';

const slice = createSlice({
  name: 'testExperience',
  initialState: <testExperienceType>{
    list: {
      responseData: {
        test_name: {
          en: '',
          hi: '',
        },
        specific_instructions: {
          en: '',
          hi: '',
        },
        has_general_instructions: false,
        _id: '',
        test_event: '',
        test_type: '',
        unique_generated_code: '',
        difficulty_level: '',
        test_code: '',
        start_date: {},
        end_date: {},
        test_duration: 0,
        number_of_questions: 0,
        sections: [],
        test_unique_id: 0,
        questions: [],
        message: '',
        logs: [],
      },
      selectedSection: '',
      summary: {},
      currentPage: 0,
      totalTimeSpent: 0,
    },
    details: {},
    questions: [],
    test_language: 'hi',
    filteredQuestions: [],
    specific_instructions: {},
    testId: '',
    loading: false,
    lastFetch: null,
    currentQuestionIdData: {
      text: {},
      _id: '',
      section: '',
      question_type: '',
      options: [],
      mark: 0,
      negative_mark: 0,
    },
    questionId: '',
    testInfo: {
      questionIndex: 0,
      totalQuestions: 0,
    },
    sectionInfo: {
      index: 0,
    },
    examStartTime: null,
  },
  reducers: {
    testDetailsReceive: (testExperience: testExperienceType, {payload}) => {
      //   testExperience.details = payload;
      let test = payload;
      testExperience.questions = test?.questions;
      testExperience.testId = test._id;
      let newLogs: Log[] = [];
      let logs = test?.logs;
      logs?.map((eachSec: Log) => {
        let logObj = {...eachSec, _id: eachSec.test_question};
        newLogs.push(logObj);
      });
      test = {...test, logs: newLogs};
      //setting questions in each sections.....
      test?.sections.map((eachSec: Section, index: number) => {
        let sectionQuestions: Question[] = [];
        let sectionTimeSpent = 0;
        let secName = eachSec.section_name.en;
        test.questions.map((eachQue: Question) => {
          if (test.test_type === 'BT0' || test.test_type === 'BT1') {
            if (eachSec._id === eachQue.section) {
              sectionQuestions.push(eachQue);
              test?.logs.map((eachLog: Log) => {
                if (eachLog._id === eachQue._id) {
                  sectionTimeSpent = sectionTimeSpent + eachLog.time_spend;
                }
              });
            }
            let sectionTimeFinished =
              eachSec.section_time * 60 <= sectionTimeSpent;
            test.sections[index] = {
              ...eachSec,
              questions: sectionQuestions,
              section_name1: secName,
              sectionTimeSpent: sectionTimeSpent,
              sectionTimeFinished: sectionTimeFinished,
            };
          } else {
            if (eachSec._id === eachQue.section) {
              sectionQuestions.push(eachQue);
            }
            test.sections[index] = {
              ...eachSec,
              questions: sectionQuestions,
              section_name1: secName,
            };
          }
        });
      });
      ///////// finding total spent time on test...
      let testLogs = test?.logs;
      let timeSpent = testLogs.reduce(
        (accumulator: number, currentValue: Log) => {
          return accumulator + currentValue.time_spend;
        },
        0,
      );
      testExperience.list.totalTimeSpent = timeSpent;
      testExperience.details[test._id] = test;
      testExperience.list.responseData = test;
      testExperience.specific_instructions = payload.specific_instructions;
      testExperience.list.selectedSection =
        test.test_type == ('BT0' || 'BT1')
          ? test.sections.find(
              (testSection: Section) =>
                testSection.sectionTimeFinished === false,
            ).section_name1 || test.sections[0].section_name1
          : test.sections[0].section_name1;
      testExperience.loading = false;
      testExperience.lastFetch = String(Date.now());
    },
    testsRequested: (testExperience, {}) => {
      testExperience.loading = true;
    },
    testsRequestFailed: (testExperience, {}) => {
      testExperience.loading = false;
    },
    addSectionDetail: (testExperience: testExperienceType, {payload}) => {
      testExperience.sectionInfo.index = payload;
    },
    editLogsVisit: (testExperience: testExperienceType, {payload}) => {
      if (payload?.reducerData) {
        let objIndex = testExperience.list.responseData?.logs?.findIndex(
          (obj: Log) => obj._id === payload.reducerData.currentQuestionId,
        );
        if (testExperience.list.responseData.logs) {
          testExperience.list.responseData.logs[objIndex].status =
            payload.reducerData?.status;
        }
      } else {
        let objIndex = testExperience.list.responseData?.logs?.findIndex(
          (obj: Log) => obj._id === payload.currentQuestionId,
        );
        if (testExperience.list.responseData.logs) {
          testExperience.list.responseData.logs[objIndex].status =
            payload?.status;
        }
      }
    },
    editCurrentQuestionId: (testExperience: testExperienceType, {payload}) => {
      testExperience.questionId = payload;
      const res = testExperience?.questions.filter(
        (item: questionsItemType) => item._id === payload,
      );
      testExperience.currentQuestionIdData = res[0];
    },

    updateSelectedSection: (testExperience, {payload}) => {
      testExperience.list.selectedSection = payload;
    },
    updateTotalQuestions: (testExperience: testExperienceType, {payload}) => {
      testExperience.testInfo.totalQuestions = payload;
    },
    updateQuestionIndex: (testExperience: testExperienceType, {payload}) => {
      testExperience.testInfo.questionIndex = payload;
    },
    updateLanguage: (testExperience: testExperienceType, {payload}) => {
      testExperience.test_language = payload;
    },
    updateTimeSpent: (testExperience: testExperienceType, {payload}) => {
      if (
        testExperience.examStartTime !== null &&
        testExperience.list.responseData.logs
      ) {
        let timeDiff = payload.timeSpend - Number(testExperience.examStartTime);
        timeDiff /= 1000;
        let seconds: number = Math.round(timeDiff);

        if (testExperience.list.responseData?.logs) {
          let objIndex = testExperience?.list?.responseData?.logs?.findIndex(
            (obj: Log) => obj._id === payload.questionId,
          );
          let previousTimeSpent: number =
            testExperience.list.responseData.logs[objIndex].time_spend;
          testExperience.list.responseData.logs[objIndex].time_spend =
            // eslint-disable-next-line radix
            previousTimeSpent + parseInt(String(seconds));

          testExperience.examStartTime = payload.timeSpend;
        }
      } else {
        testExperience.examStartTime = payload.timeSpend;
      }
    },
    updateAns: (testExperience: testExperienceType, {payload}) => {
      let objIndex = testExperience.list.responseData.logs.findIndex(
        (obj: Log) => obj._id === payload.currentQuestionId,
      );
      testExperience.list.responseData.logs[objIndex].selected_option =
        payload.answer;
    },
  },
});

export const {
  testDetailsReceive,
  testsRequested,
  testsRequestFailed,
  updateLanguage,
  addSectionDetail,
  editLogsVisit,
  editCurrentQuestionId,
  updateSelectedSection,
  updateTotalQuestions,
  updateQuestionIndex,
  updateTimeSpent,
  updateAns,
} = slice.actions;

export default slice.reducer;

/**
 * to take the index and save it in state as section data
 * @param index :number
 * @returns an action to update the section index
 */
export const updateTestSectionDetail =
  (index: number) => (dispatch: Dispatch) => {
    return dispatch({type: addSectionDetail.type, payload: index});
  };

/**
 * to save the answer and status of particular question
 * @param value :Object takes currentQuestionId and answer
 * @returns an action to update the answer in logs
 */
export const updateAnsOfCurrentQuestion =
  (value: Object) => (dispatch: Dispatch) => {
    return dispatch({type: updateAns.type, payload: value});
  };

/**
 * to update the total number of question in a  section.
 * @param totalQuestions : number
 * @returns an action that updates totalQuestions
 */
export const updateTotalNoQuestions =
  (totalQuestions: number) => (dispatch: Dispatch) => {
    return dispatch({type: updateTotalQuestions.type, payload: totalQuestions});
  };

/**
 * to update the index of question number for accessibility
 * @param questionNumber :number
 * @returns an action that updates questionIndex
 */

export const updateQuestionsIndex =
  (questionNumber: number) => (dispatch: Dispatch) => {
    return dispatch({type: updateQuestionIndex.type, payload: questionNumber});
  };

/**
 * to update the section when student chooses to change the section
 * @param section : String
 * @returns an action that updates  the section in selectedSection of state.
 */

export const updateSection = (section: String) => (dispatch: Dispatch) => {
  dispatch({
    type: updateSelectedSection.type,
    payload: section,
  });
};

/**
 * returns an action that updates the language chosen by student to give the test
 * @param language : Language that accepts en/hi as value
 * @returns an action that updates  the testLanguage in the state.
 */

export const updateTestLanguage =
  (language: Language) => (dispatch: Dispatch) => {
    return dispatch({
      type: updateLanguage.type,
      payload: language,
    });
  };

/**
 * to update the time spent on each question
 * @param value : Object takes timeSpend and questionId for particular question
 * @returns an action that updates  the time spent on question in logs as well as total time left for the test
 */

export const updateTimeSpentOnQuestion =
  (value: Object) => (dispatch: Dispatch) => {
    dispatch({
      type: updateTimeSpent.type,
      payload: value,
    });
  };

/**
 *to take the status and question id and save the logs in state
 * @param value: Object takes status and current question id
 * @returns an action that updates saved the logs of the current question
 */

export const editLogsAttempt = (value: Object) => (dispatch: Dispatch) => {
  dispatch({
    type: editLogsVisit.type,
    payload: value,
  });
};

/**
 * to update the question id when switched to next question
 * @param questionId :string question id assigned to each question
 * @returns an action that updates saves current question data in currentQuestionIdData.
 */

export const updateCurrentQuestionId =
  (questionId: String) => (dispatch: Dispatch) => {
    return dispatch({type: editCurrentQuestionId.type, payload: questionId});
  };

/**
 * to get all the details(sections, questions, instructions, time,..) of the test
 * @param testId :any test id assigned to given test
 * @returns an action that updates saves the data in respective states.
 */

export const loadTestDetails = (testId: String) => () => {
  return apiDispatch({
    url: `v1/user/test/sampling/${testId}`,
    reducerData: {testId: testId},
    onStart: testsRequested.type,
    onError: testsRequestFailed.type,
    onSuccess: testDetailsReceive.type,
    auth: false,
    method: httpMethods.GET,
    cacheValidityDuration: 10,
  });
};

/**
 * to update the response fo reach question and their respective statuses.
 * @param testId :any test id assigned to given test
 * @param questionId :string question id assigned to each question
 * @param body :any the response(answer) recieved for each question with question id.
 * @returns saves question data in the logs
 */

export const updateQuestionAnsStatus =
  (testId: string, questionId: string, body: bodyType) => () => {
    return apiDispatch({
      url: `v1/user/test/${testId}/question/${questionId}`,
      // onStart: testsRequested.type,
      method: httpMethods.PATCH,
      data: body,
      reducerData: {currentQuestionId: questionId, status: body.status},
      // onError: testsRequestFailed.type,
      onSuccess: editLogsVisit.type,
      auth: false,
      onStart: '',
      onError: '',
      cacheValidityDuration: 10,
    });
  };

// ------------------------------------- s e l e c t o r s --------------------------------------------- //
export const getQuestionIndex = createSelector(
  (state: any) => state.entities.testExperience,
  (index: testExperienceType) => index.testInfo.questionIndex,
);

export const getTotalSectionLength = createSelector(
  (state: any) => state.entities.testExperience,
  (length: testExperienceType) => length.testInfo.totalQuestions,
);

export const getTestId = createSelector(
  (state: any) => state.entities.testExperience,
  (testDetails: testExperienceType) => testDetails.testId,
);

export const getResData = createSelector(
  (state: any) => state.entities.testExperience,
  (summary: testExperienceType) => summary.list.responseData,
);

export const getTestDetails = createSelector(
  (state: any) => state.entities.testExperience,
  (questions: testExperienceType) => questions.list,
);

export const getTestInstructions = createSelector(
  (state: any) => state.entities.testExperience,
  (instructions: testExperienceType) => instructions.specific_instructions,
);

export const getSelectedSection = createSelector(
  (state: any) => state.entities.testExperience,
  (selectedSection: testExperienceType) => selectedSection.list.selectedSection,
);

export const getSectionDetail = createSelector(
  (state: any) => state.entities.testExperience,
  (section: testExperienceType) => section.sectionInfo,
);

export const getCurrentQuestionIdData = createSelector(
  (state: any) => state.entities.testExperience,
  (questionId: testExperienceType) => questionId.currentQuestionIdData,
);

export const getQuestionID = createSelector(
  (state: any) => state.entities.testExperience,
  (id: testExperienceType) => id.questionId,
);
export const getTestLanguage = createSelector(
  (state: any) => state.entities.testExperience,
  (testExperience: testExperienceType) => testExperience.test_language,
);

export const getTestDuration = createSelector(
  (state: any) => state.entities.testExperience,
  (testDuration: testExperienceType) =>
    testDuration?.list?.responseData?.test_duration,
);

export const getLoaderValue = createSelector(
  (state: any) => state.entities.testExperience,
  (testLoading: testExperienceType) => testLoading.loading,
);
export const getTotalTimeSpent = createSelector(
  (state: any) => state.entities.testExperience,
  (summary: testExperienceType) => summary.list.totalTimeSpent,
);

export const getSections = createSelector(
  (state: any) => state.entities.testExperience,
  (sections: testExperienceType) => sections.list.responseData?.sections,
);

export const getLogs = createSelector(
  (State: any) => State.entities.testExperience,
  (logs: testExperienceType) => logs.list.responseData.logs,
);
