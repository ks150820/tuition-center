import {waitFor} from '@testing-library/react-native';

import {store} from '../../configureStore';
import axios from 'axios';
import MockAxiosAdapter from 'axios-mock-adapter';
import {
  updateTestSectionDetail,
  updateAnsOfCurrentQuestion,
  updateTotalNoQuestions,
  loadTestDetails,
  updateQuestionsIndex,
  updateSection,
  updateTestLanguage,
  updateTimeSpentOnQuestion,
  editLogsAttempt,
  updateCurrentQuestionId,
  updateQuestionAnsStatus,
  getQuestionIndex,
  getTotalSectionLength,
  getTestId,
  getResData,
  getTestDetails,
  getTestInstructions,
  getSelectedSection,
  getSectionDetail,
  getCurrentQuestionIdData,
  getQuestionID,
  getTestLanguage,
  getTestDuration,
  getLoaderValue,
  getTotalTimeSpent,
} from '../test-experience';

const mock = new MockAxiosAdapter(axios);

describe('testExperience', () => {
  const createState: any = () => ({entities: {testExperience: {}}});

  test('test loadTestDetails reducer', () => {
    mock.onGet('v1/user/test/sampling/6299efb1e51fe25d77f6b191').reply(200, {
      questions: [
        {
          section: 'SECT123',
          _id: '123',
        },
      ],
      _id: '6299efb1e51fe25d77f6b191',
      logs: [
        {
          test_question: '123',
          _id: '123',
          time_spend: 0,
          selected_option: [],
        },
      ],
      sections: [
        {
          _id: 'SECT123',
          section_name: {
            en: 'REASONING',
            hi: 'REASONING',
          },
          section_time: 60,
          section_name1: 'REASONING',
          sectionTimeFinished: false,
        },
      ],
      specific_instructions: {en: '', hi: ''},
      test_type: 'BT0',
    });

    waitFor(() => {
      store.dispatch(loadTestDetails('6299efb1e51fe25d77f6b191'));
    });
  });

  test('test else case for loadTestDetails reducer', () => {
    mock.onGet('v1/user/test/sampling/6299efb1e51fe25d77f6b191').reply(200, {
      questions: [
        {
          section: 'SECT123',
          _id: '123',
        },
      ],
      _id: '6299efb1e51fe25d77f6b191',
      logs: [
        {
          test_question: '123',
          _id: '123',
          time_spend: 0,
          selected_option: [],
        },
      ],
      sections: [
        {
          _id: 'SECT123',
          section_name: {
            en: 'REASONING',
            hi: 'REASONING',
          },
          section_time: 60,
          section_name1: 'REASONING',
          sectionTimeFinished: false,
        },
      ],
      specific_instructions: {en: '', hi: ''},
      test_type: 'sampleTest',
    });

    waitFor(() => {
      store.dispatch(loadTestDetails('6299efb1e51fe25d77f6b191'));
    });
  });

  test('test loadTestDetails reducer failed', () => {
    mock.onGet('v1/user/test/sampling/6299efb1e51fe25d77f6b191').reply(400, {});

    waitFor(() => {
      store.dispatch(loadTestDetails('6299efb1e51fe25d77f6b191'));
    });
  });

  test('test upadateTestSectionDetail', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;

      expect(test_experience.sectionInfo.index).toStrictEqual(1);
    });

    waitFor(async () => {
      await store.dispatch(updateTestSectionDetail(1));
    });
  });

  test('updateAnsOfCurrentQuestion method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(
        test_experience.list.responseData.logs[0].selected_option,
      ).toStrictEqual(['A']);
    });

    waitFor(() => {
      store.dispatch(
        updateAnsOfCurrentQuestion({currentQuestionId: '123', answer: ['A']}),
      );
    });
  });

  test('test updateTotalNoQuestions reducer', () => {
    store.subscribe(async () => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.testInfo.totalQuestions).toStrictEqual(25);
    });

    waitFor(() => {
      store.dispatch(updateTotalNoQuestions(25));
    });
  });

  test('test updateQuestionsIndex reducer method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.testInfo.questionIndex).toStrictEqual(2);
    });

    waitFor(() => {
      store.dispatch(updateQuestionsIndex(2));
    });
  });

  test('test updateSection reducer method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.list.selectedSection).toStrictEqual('ALGEBRA');
    });

    waitFor(() => {
      store.dispatch(updateSection('ALGEBRA'));
    });
  });

  test('test updateTestLanguage reducer method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.test_language).toStrictEqual('en');
    });

    waitFor(() => {
      store.dispatch(updateTestLanguage('en'));
    });
  });

  test('test updateTimeSpentOnQuestion reducer method', () => {
    store.subscribe(async () => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(await test_experience.examStartTime).toBe(10);
    });

    waitFor(() => {
      store.dispatch(
        updateTimeSpentOnQuestion({timeSpend: 10, questionId: '123'}),
      );
      store.dispatch(
        updateTimeSpentOnQuestion({timeSpend: 10, questionId: '123'}),
      );
    });
  });

  test('test editLogsAttempt reducer method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.list.responseData.logs[0].status).toStrictEqual(2);
    });

    waitFor(() => {
      store.dispatch(
        editLogsAttempt({reducerData: {currentQuestionId: '123', status: 2}}),
      );
    });
  });

  test('test editLogsAttempt reducer method when reducer Data is not passed as na argument', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.list.responseData.logs[0].status).toStrictEqual(2);
    });

    waitFor(() => {
      store.dispatch(editLogsAttempt({currentQuestionId: '123', status: 2}));
    });
  });

  test('test updateCurrentQuestionId reducer method', () => {
    store.subscribe(() => {
      const test_experience: testExperienceType =
        store.getState().testExperience;
      expect(test_experience.questionId).toStrictEqual('123');
    });

    waitFor(() => {
      store.dispatch(updateCurrentQuestionId('123'));
    });
  });

  test('test updateQuestionAnsStatus reducer method', () => {
    mock
      .onPatch('v1/user/test/6299efb1e51fe25d77f6b191/question/123')
      .reply(200, {currentQuestionId: '123', status: 1});

    waitFor(() => {
      store.dispatch(
        updateQuestionAnsStatus('6299efb1e51fe25d77f6b191', '123', {
          selected_option: ['A'],
          language: 'en',
          time_spend: 10,
          status: 1,
        }),
      );
    });
  });

  test('test getQuestionIndex selector', () => {
    const state = createState();
    state.entities.testExperience = {testInfo: {questionIndex: 2}};

    let result = getQuestionIndex(state);

    expect(result).toBe(2);
  });

  test('test getTotalSectionLength selector', () => {
    const state = createState();
    state.entities.testExperience = {testInfo: {totalQuestions: 25}};

    let result = getTotalSectionLength(state);

    expect(result).toBe(25);
  });

  test('test getTestId selector', () => {
    const state = createState();
    state.entities.testExperience = {testId: '123ef'};

    let result = getTestId(state);

    expect(result).toBe('123ef');
  });

  test('test getResData selector', () => {
    const state = createState();
    state.entities.testExperience = {list: {responseData: {_id: '123'}}};

    let result = getResData(state);
    expect(result).toStrictEqual({_id: '123'});
  });

  test('test getTestDetails selector', () => {
    const state = createState();
    state.entities.testExperience = {list: {responseData: {}}};

    let result = getTestDetails(state);
    expect(result).toStrictEqual({responseData: {}});
  });

  test('test getTestInstructions selector', () => {
    const state = createState();
    state.entities.testExperience = {specific_instructions: ''};

    let result = getTestInstructions(state);
    expect(result).toBe('');
  });

  test('test getSelectedSection selector', () => {
    const state = createState();
    state.entities.testExperience = {list: {selectedSection: 'REASONING'}};

    let result = getSelectedSection(state);
    expect(result).toBe('REASONING');
  });

  test('test getSectionDetail selector', () => {
    const state = createState();
    state.entities.testExperience = {sectionInfo: {}};

    let result = getSectionDetail(state);
    expect(result).toStrictEqual({});
  });

  test('test getCurrentQuestionIdData selector', () => {
    const state = createState();
    state.entities.testExperience = {currentQuestionIdData: {}};

    let result = getCurrentQuestionIdData(state);
    expect(result).toStrictEqual({});
  });

  test('test getQuestionID selector', () => {
    const state = createState();
    state.entities.testExperience = {questionId: '123'};

    let result = getQuestionID(state);
    expect(result).toBe('123');
  });

  test('test getTestLanguage selector', () => {
    const state = createState();
    state.entities.testExperience = {test_language: 'hindi'};

    let result = getTestLanguage(state);
    expect(result).toBe('hindi');
  });

  test('test getTestDuration selector', () => {
    const state = createState();
    state.entities.testExperience = {list: {responseData: {test_duration: 60}}};

    let result = getTestDuration(state);
    expect(result).toBe(60);
  });

  test('test getLoaderValue selector', () => {
    const state = createState();
    state.entities.testExperience = {loading: true};

    let result = getLoaderValue(state);
    expect(result).toBe(true);
  });

  test('test getTotalTimeSpent selector', () => {
    const state = createState();
    state.entities.testExperience = {list: {totalTimeSpent: 20}};

    let result = getTotalTimeSpent(state);
    expect(result).toBe(20);
  });
});
