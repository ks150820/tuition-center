import {useEffect, useState, useRef, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '@resources/colors';

import {
  getCurrentQuestionIdData,
  getResData,
  getTestDetails,
  getTestId,
  getTestLanguage,
  updateQuestionAnsStatus,
  getSectionDetail,
  getSelectedSection,
  getQuestionID,
  updateTimeSpentOnQuestion,
  updateTotalNoQuestions,
  updateCurrentQuestionId,
  editLogsAttempt,
  updateAnsOfCurrentQuestion,
  updateQuestionsIndex,
} from '@store/entities/test-experience';
import useNavigationBackHandler from '@screens/components/hooks/use-navigate-back';
import {homeScreenProps} from '@navigators/home-navigator/@types/home-navigator-param-list';

/**
 *
 * @param {number} id question id
 * @returns used to store the previous question id
 */
function usePrevious(id: string) {
  const ref = useRef<string | undefined>();

  useEffect(() => {
    ref.current = id;
  }, [id]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

interface IuseTestExperienceController extends homeScreenProps {}

const useTestExperienceController = ({
  navigation,
}: IuseTestExperienceController) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [infoButton, setInfoButton] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [sectionWiseQuestions, setSectionWiseQuestions] = useState<Question[]>(
    [],
  );
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    mark: 0,
    negative_mark: 0,
    options: [],
    question_type: '',
    section: '',
    text: 'en',
    _id: '',
  });
  const [pauseTimer, setPauseTimer] = useState<boolean>(true); //timer
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeUp, setTimeUp] = useState<boolean>(false);

  const presentQuestion = useSelector(getCurrentQuestionIdData);
  const selectedLanguage = useSelector(getTestLanguage);
  const testId = useSelector(getTestId);
  const testDetails = useSelector(getTestDetails);
  const testLogs = useSelector(getResData).logs;
  const sectionDetail = useSelector(getSectionDetail);
  const getSection = useSelector(getSelectedSection);
  const sectionTabIndex = sectionDetail?.index;
  const questionId = useSelector(getQuestionID);
  const testData = useSelector(getResData);

  const dispatch = useDispatch<Dispatch>();

  // custom hook to handle back button of mobile phone
  const {} = useNavigationBackHandler({navigation});

  const flatListRefForQuestionTab = useRef<FlatList>(null);
  const flatListRefForSections = useRef<FlatList>(null);

  const previousQuestionId = usePrevious(questionId);

  const scrollToFirst = useCallback(() => {
    setTimeout(() => {
      flatListRefForQuestionTab.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
    }, 300);
  }, []);

  const scrollToIndex = useCallback(() => {
    if (questionNo !== 0) {
      setTimeout(() => {
        flatListRefForQuestionTab.current?.scrollToIndex({
          animated: true,
          index: questionNo,
        });
      }, 300);
    }
  }, [questionNo]);

  useEffect(() => {
    scrollToFirst();
  }, [sectionTabIndex, scrollToFirst, getSection]);

  // start the update the 1st question of every sections
  useEffect(() => {
    const takeSection = async () => {
      setQuestionIndex(0);
      selectedSection(getSection);
    };

    const test = testDetails?.responseData;
    if (test) {
      takeSection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSection]);

  useEffect(() => {
    dispatch(updateQuestionsIndex(questionNo + 1));
  }, [questionNo, dispatch, getSection]);

  useEffect(() => {
    setCurrentQuestion(sectionWiseQuestions[questionNo]);
  }, [questionNo, sectionWiseQuestions, getSection]);

  useEffect(() => {
    if (currentQuestion) {
      let currentQuestionId = currentQuestion._id;
      dispatch(updateCurrentQuestionId(currentQuestionId));
      let currentStatus = null;
      if (testLogs) {
        currentStatus = testLogs.filter(
          (each: Log) => each._id === currentQuestionId,
        )[0]?.status;
      }
      if (currentQuestion._id) {
        if (currentStatus === 0) {
          dispatch(editLogsAttempt({status: 1, currentQuestionId}));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  useEffect(() => {
    setPauseTimer(true);
  }, []);

  useEffect(() => {
    async function updateTimeSpent() {
      if (questionId) {
        updateStatusCall('attended');
        if (previousQuestionId !== undefined) {
          const data = {
            timeSpend: new Date(),
            questionId: previousQuestionId,
          };

          dispatch(updateTimeSpentOnQuestion(data));
        } else {
          dispatch(
            updateTimeSpentOnQuestion({
              timeSpend: new Date(),
              questionId: questionId,
            }),
          );
        }
      }
    }

    updateTimeSpent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId, dispatch]);

  useEffect(() => {
    if (testDetails.responseData) {
      setIsLoading(false);
    }
  }, [testDetails]);

  /**
   * function for incrementing the question number when clicked on next.
   */
  const incQuesIndex = () => {
    if (questionNo === sectionWiseQuestions.length - 1) {
      setQuestionNo(0);
    } else {
      setQuestionIndex(questionNo + 1);
      setQuestionNo(questionNo + 1);
    }
  };

  /**
   * to change the status for mark and review questions
   */
  const handleMarkAndReview = () => {
    updateStatusCall('markAndreview');
    incQuesIndex();
  };

  /**
   * to change the status for save and next questions
   */
  const saveNext = () => {
    updateStatusCall('saveNext');
    incQuesIndex();
  };

  /**
   * to clear the answer of a question given by the user
   */
  const clearCurrentAnswer = () => {
    dispatch(
      updateAnsOfCurrentQuestion({currentQuestionId: questionId, answer: null}),
    );
    updateStatusCall('clearAnswer');
  };

  /**
   * to update selected section name on store and set first question no. index in question state
   */
  const selectedSection = (section: string) => {
    setQuestionNo(0);
    let sectionWise = testData?.sections?.filter(
      (questions: Section) => questions?.section_name1 === section,
    );
    if (sectionWise?.length > 0) {
      const questions = sectionWise[0].questions;
      dispatch(updateTotalNoQuestions(questions?.length));
      setSectionWiseQuestions(questions);
    }
  };

  /**
   * to update the status of a question when student moves from one question to another
   * @param value : string
   */
  const updateStatusCall = useCallback(
    (value: string) => {
      // let timespentRef = timerRef.current.currentTime();
      let timespentRef = 10;

      let getLog = testLogs.filter(
        (question: Log) => question._id === questionId,
      )[0];
      let getStatus = getLog?.status;
      let selectedOption = getLog.selected_option;
      let answered = false;

      if (
        (presentQuestion?.question_type === 'mcq' &&
          getLog.selected_option?.length > 0) ||
        (presentQuestion?.question_type === 'numeric' &&
          getLog.selected_option?.max) ||
        (presentQuestion?.question_type === 'msq' &&
          getLog.selected_option?.length !== 0)
      ) {
        answered = true;
        if (getLog.status === 3 || getLog.status === 4) {
          getStatus = 4;
        } else {
          getStatus = 2;
        }
      }

      if (value === 'markAndreview') {
        if (answered) {
          getStatus = getStatus === 4 ? 2 : getStatus === 2 ? 4 : null;
        } else {
          getStatus =
            getStatus === 1 || getStatus === 0 ? 3 : getStatus === 3 ? 1 : null;
        }
      }

      if (value === 'attended') {
        if (!answered) {
          getStatus = 1;
        }
      }

      if (value === 'clearAnswer') {
        if (getLog.status === 3 || getLog.status === 4) {
          getStatus = 3;
        } else {
          getStatus = 1;
        }
        selectedOption = [];
      }

      let body = {
        selected_option: selectedOption,
        language: selectedLanguage,
        time_spend: getLog?.time_spend + timespentRef,
        status: getStatus,
      };
      setTimeout(() => {
        dispatch(updateQuestionAnsStatus(testId, questionId, body));
      }, 500);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, selectedLanguage, testId, testLogs],
  );

  /**
   * to update the color of the question number in question panel wrt to status saved in logs
   * @param id :string question id to get the logs details
   * @returns the color wrt to status
   */
  const getStatusClass = (id: string) => {
    const status = testLogs.filter((each: Log) => each._id === id)[0]?.status;
    switch (status) {
      case 1: {
        return {colorCode: COLORS.RED.medium_vermilion, status: 1};
      }
      case 2: {
        return {colorCode: COLORS.GREEN.russian_green, status: 2};
      }
      case 3: {
        return {colorCode: COLORS.BLUE.regalia, status: 3};
      }
      case 4: {
        return {colorCode: COLORS.BLUE.regalia, status: 4};
      }
      default: {
        return {status: 0, colorCode: COLORS.WHITE.white};
      }
    }
  };

  /**
   * for the i button on header to open or to close the instruction screen.
   */
  const toggleInfoButton = () => {
    setInfoButton(!infoButton);
  };

  /**
   * to set the condition for bottom sheet
   */
  const toggleBottomSheet = () => {
    setIsVisible(!isVisible);
  };

  const contextObject = {
    infoButton: infoButton,
    isVisible: isVisible,
    flatListRefForQuestionTab: flatListRefForQuestionTab,
    flatListRefForSections: flatListRefForSections,
    questionIndex: questionIndex,
    pauseTimer: pauseTimer,
    timeUp: timeUp,
    sectionQuestions: sectionWiseQuestions,
    toggleInfoButton: toggleInfoButton,
    setQuestionIndex: setQuestionIndex,
    scrollToIndex: scrollToIndex,
    toggleBottomSheet: toggleBottomSheet,
    getStatusClass: getStatusClass,
    handleMarkAndReview: handleMarkAndReview,
    setQuestionNo: setQuestionNo,
    saveNext: saveNext,
    setTimeUp: setTimeUp,
    clearCurrentAnswer: clearCurrentAnswer,
  };

  return {
    isLoading,
    contextObject,
  };
};

export default useTestExperienceController;
