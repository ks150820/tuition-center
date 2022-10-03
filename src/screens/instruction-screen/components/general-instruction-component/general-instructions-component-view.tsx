import React from 'react';
import {View, Text, Image} from 'react-native';

import {IMAGE_CONSTANTS} from '@screens/instruction-screen/resources/constants/status-components-constants';
import {styles} from './general-instruction-style';
import StatusComponent from '../status-component';

interface IGeneralInstructionsViewProps {
  language: string;
}

/**
 * View for GeneralInstructions
 * @param {string} params.language to select the instruction on the basis of selected language
 * @returns
 */
const GeneralInstructionsView: React.FunctionComponent<
  IGeneralInstructionsViewProps
> = ({language}) => {
  const EnglishInstruction = () => {
    return (
      <View>
        <Text style={styles?.head}>General Instructions:</Text>
        <Text style={styles?.paragraph}>
          1. Total duration of examination is{' '}
          <Text style={styles.strong}>60 </Text>minutes.(20 minutes extra for
          every 60 minutes (1 hour) of the examination time for candidates with
          disability eligible for compensatory time).
        </Text>
        <Text style={styles?.paragraph}>
          2. The clock will be set at the server. The countdown timer in the top
          right corner of screen will display the remaining time available for
          you to complete the examination. When the timer reaches zero, the
          examination will end by itself. You will not be required to end or
          submit your examination.
        </Text>
        <View style={styles?.component}>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.notVisitedStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_VISITED}>
              1
            </StatusComponent>
            <Text
              style={{
                ...styles.central,
                ...styles.textColor,
                ...styles.marginStart6,
              }}>
              You have not visited the question yet.
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED}>
              1
            </StatusComponent>
            <Text style={{...styles?.marginStart6, ...styles.textColor}}>
              You have not answered the question.
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED}>
              1
            </StatusComponent>
            <Text style={{...styles?.marginStart6, ...styles.textColor}}>
              You have answered the question.
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED_MARKED}>
              1
            </StatusComponent>
            <Text style={{...styles?.marginStart6, ...styles.textColor}}>
              You have NOT answered the question, but have marked the question
              for review.
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED_MARKED}>
              1
            </StatusComponent>
            <Text style={{...styles?.marginStart6, ...styles.textColor}}>
              The question(s) "Answered and Marked for Review" will be
              considered for evaluation.
            </Text>
          </View>
        </View>
        <Text style={styles.textColor}>
          The Marked for Review status for a question simply indicates that you
          would like to look at that question again.
          <Text style={styles.red}>
            If a question is answered and Marked for Review, your answer for
            that question will be considered in the evaluation.
          </Text>
        </Text>
        <Text style={styles.textColor}>
          4.You can click on the {'>'} arrow which appears to the left of
          question palette to collapse the question palette thereby maximizing
          the question window. To view the question palette again, you can click
          on {'<'} which appears on the right side of question window.
        </Text>
        <Text style={styles.textColor}>
          5. You can click on your "Profile" image on top right corner of your
          screen to change the language during the exam for entire question
          paper. On clicking of Profile image you will get a drop-down to change
          the question content to the desired language.
        </Text>
        <Text style={styles.head}>Navigating to a Question:</Text>
        <Text style={styles.textColor}>
          7.To answer a question, do the following:
        </Text>
        <View style={styles.marginStart42}>
          <Text style={styles.textColor}>
            a. Click on the question number in the Question Palette at the right
            of your screen to go to that numbered question directly. Note that
            using this option does NOT save your answer to the current question.
          </Text>
          <Text style={styles.textColor}>
            b. Click on <Text style={styles.strong}>Save &Next</Text> to save
            your answer for the current question and then go to the next
            question.
          </Text>
          <Text style={styles.textColor}>
            c. Click on Mark for{' '}
            <Text style={styles.strong}>Review & Next</Text> to save your answer
            for the current question, mark it for review, and then go to the
            next question.
          </Text>
        </View>
        <Text style={styles.head}>Answering a Question:</Text>
        <Text style={{...styles.marginBottom38, ...styles.textColor}}>
          8.Procedure for answering a multiple choice type question:
        </Text>
        <View style={styles.marginStart42}>
          <Text style={styles.textColor}>
            a. To select your answer, click on the button of one of the options
          </Text>
          <Text style={styles.textColor}>
            b.To deselect your chosen answer, click on the button of the chosen
            option again or click on the{' '}
            <Text style={styles.strong}>Clear Response</Text> button
          </Text>
          <Text style={styles.textColor}>
            c. To change your chosen answer, click on the button of another
            option
          </Text>
          <Text style={styles.textColor}>
            d. To save your answer, you MUST click on the
            <Text style={styles.strong}>Save & Next</Text> button
          </Text>
          <Text style={styles.textColor}>
            e. To mark the question for review, click on the
            <Text style={styles.strong}> Mark for Review & Next </Text>{' '}
            button.If an answer is selected for a question that is Marked for
            Review, that answer will be considered in the evaluation.
          </Text>
        </View>
        <Text style={styles.textColor}>
          9. To change your answer to a question that has already been answered,
          first select that question for answering and then follow the procedure
          for answering that type of question.
        </Text>
        <Text style={styles.textColor}>
          10. Note that ONLY Questions for which answers are saved or marked for
          review after answering will be considered for evaluation.
        </Text>
        <Text style={styles.head}>Navigating through sections:</Text>
        <Text style={styles.textColor}>
          11. Sections in this question paper are displayed on the top bar of
          the screen. Questions in a section can be viewed by clicking on the
          section name. The section you are currently viewing is highlighted.
        </Text>
        <Text style={styles.textColor}>
          12. After clicking the Save & Next button on the last question for a
          section, you will automatically be taken to the first question of the
          next section.
        </Text>
        <Text style={styles.textColor}>
          13. You can shuffle between tests and questions anytime during the
          examination as per your convenience only during the time stipulated
        </Text>
        <Text style={styles.textColor}>
          14. Candidate can view the corresponding section summary as part of
          the legend that appears in every section above the question palette.
        </Text>
      </View>
    );
  };

  const HindiInstructions = () => {
    return (
      <View>
        <Text style={styles?.head}>
          कृपया निम्नलिखित निर्देशों को ध्यान से पढ़ें सामान्य अनुदेश:
        </Text>
        <Text style={styles?.paragraph}>
          1. सभी प्रश्नों को हल करने के लिए आपको 60 मिनट का समय दिया जाएगा। (
          प्रतिपूरक समय के लिए पात्र निःशक्त उम्मीदवारों हेतु परीक्षा समय के
          प्रत्येक 60 मिनटों (1 घंटे) के लिए 20 मिनट का अतिरिक्त समय दिया जायेगा
          )
        </Text>
        <Text style={styles?.paragraph}>
          2. सर्वर पर घड़ी लगाई गई है तथा आपकी स्क्रीन के दाहिने कोने में शीर्ष
          पर काउंटडाउन टाइमर में आपके लिए परीक्षा समाप्त करने के लिए शेष समय
          प्रदर्शित होगा। परीक्षा समय समाप्त होने पर, आपको अपनी परीक्षा बंद या
          जमा करने की जरूरत नहीं है । यह स्वतः बंद या जमा हो जाएगी।
        </Text>
        <View style={styles.component}>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.notVisitedStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_VISITED}>
              1
            </StatusComponent>
            <Text style={styles?.paragraph}>
              आप अभी तक प्रश्न पर नहीं गए हैं।
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED}>
              1
            </StatusComponent>
            <Text style={styles?.paragraph}>
              आपने प्रश्न का उत्तर नहीं दिया है।
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED}>
              1
            </StatusComponent>
            <Text style={styles?.paragraph}>
              आप प्रश्न का उत्तर दे चुके हैं।
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_NOT_ANSWERED_MARKED}>
              1
            </StatusComponent>
            <Text style={styles?.paragraph}>
              आपने प्रश्न का उत्तर नहीं दिया है पर प्रश्न को पुनर्विचार के लिए
              चिन्हित किया है।
            </Text>
          </View>
          <View style={styles.central}>
            <StatusComponent
              childrenStyle={styles.answeredStyle}
              backgroundImage={IMAGE_CONSTANTS.IMG_ANSWERED_MARKED}>
              1
            </StatusComponent>
            <Text style={styles?.paragraph}>
              प्रश्न जिसका उत्तर दिया गया है और समीक्षा के लिए भी चिन्हित है ,
              उसका मूल्यांकन किया जायेगा ।
            </Text>
          </View>
        </View>
        <Text style={styles?.paragraph}>
          पुनर्विचार के लिए चिह्नित (Marked for Review) स्थिति सामान्यतः
          अनुस्मारक के रूप में कार्य करती है जिसे आपने प्रश्न को दुबारा देखने के
          लिए सेट किया है।
          <Text style={styles.red}>
            यदि आपने किसी प्रश्न के लिए उत्तर चुना है जिसे पुनर्विचार के लिए
            चिह्नित किया है, तब मूल्यांकन में उस उत्तर पर विचार किया जाएगा।
          </Text>
        </Text>
        <Text style={styles?.paragraph}>
          4.आप प्रश्न पैलेट को छुपाने के लिए, {'>'} चिन्ह पर क्लिक कर सकते है,
          जो प्रश्न पैलेट के बाईं ओर दिखाई देता है, जिससे प्रश्न विंडो सामने आ
          जाएगा. प्रश्न पैलेट को फिर से देखने के लिए, {'<'} चिन्ह पर क्लिक कीजिए
          जो प्रश्न विंडो के दाईं ओर दिखाई देता है।
        </Text>
        <Text style={styles?.paragraph}>
          5. सम्पूर्ण प्रश्नपत्र की भाषा को परिवर्तित करने के लिए आप को अपने
          स्क्रीन के ऊपरी दाहिने सिरे पर स्थित प्रोफाइल इमेज पर क्लिक करना होगा।
          प्रोफाइल इमेज को क्लिक करने पर आपको प्रश्न के अंतर्वस्तु को इच्छित
          भाषा में परिवर्तित करने के लिए ड्राप-डाउन मिलेगा ।
        </Text>
        <Text style={styles?.paragraph}>
          6. आपको अपने स्क्रीन के निचले हिस्से को स्क्रॉलिंग के बिना नेविगेट
          करने के लिए
          <Image
            source={require('../../../../assets/images/down-arrow.png')}
            style={styles.marginHorizontal}
          />
          और ऊपरी हिस्से को नेविगेट करने के लिए
          <Image
            source={require('../../../../assets/images/down-arrow.png')}
            style={styles.marginBottom10}
          />
          पर क्लिक करना होगा ।
        </Text>
        <Text style={styles?.head}>किसी प्रश्न पर जाना :</Text>
        <Text style={styles?.paragraph}>
          7. उत्तर देने हेतु कोई प्रश्न चुनने के लिए, आप निम्न में से कोई एक
          कार्य कर सकते हैं
        </Text>
        <View style={styles.marginStart42}>
          <Text style={styles?.paragraph}>
            a. स्क्रीन के दायीं ओर प्रश्न पैलेट में प्रश्न पर सीधे जाने के लिए
            प्रश्न संख्या पर क्लिक करें। ध्यान दें कि इस विकल्प का प्रयोग करने
            से मौजूदा प्रश्न के लिए आपका उत्तर सुरक्षित नहीं होता है।
          </Text>
          <Text style={styles?.paragraph}>
            b. वर्तमान प्रश्न का उत्तर सुरक्षित करने के लिए और क्रम में अगले
            प्रश्न पर जाने के लिए <Text style={styles.strong}>Save &Next</Text>{' '}
            पर क्लिक करें।
          </Text>
          <Text style={styles?.paragraph}>
            c. वर्तमान प्रश्न का उत्तर सुरक्षित करने के लिए, पुनर्विचार के लिए
            चिह्नित करने और क्रम में अगले प्रश्न पर जाने के लिए{' '}
            <Text style={styles.strong}>Review & Next</Text> पर क्लिक करें।
          </Text>
        </View>
        <Text style={styles?.head}>प्रश्नों का उत्तर देना :</Text>
        <Text style={styles?.paragraph}>8. बहुविकल्प प्रकार प्रश्न के लिए</Text>
        <View style={styles.marginStart42}>
          <Text style={styles?.paragraph}>
            a. अपना उत्तर चुनने के लिए, विकल्प के बटनों में से किसी एक पर क्लिक
            करें।
          </Text>
          <Text style={styles?.paragraph}>
            b.चयनित उत्तर को अचयनित करने के लिए, चयनित विकल्प पर दुबारा क्लिक
            करें या <Text style={styles.strong}>Clear Response</Text> बटन पर
            क्लिक करें।
          </Text>
          <Text style={styles?.paragraph}>
            c. अपना उत्तर बदलने के लिए, अन्य वांछित विकल्प बटन पर क्लिक करें।
          </Text>
          <Text style={styles?.paragraph}>
            d. अपना उत्तर सुरक्षित करने के लिए, आपको{' '}
            <Text style={styles.strong}>Save & Next</Text> पर क्लिक करना जरूरी
            है।
          </Text>
          <Text style={styles?.paragraph}>
            e. किसी प्रश्न को पुनर्विचार के लिए चिह्नित करने हेतु
            <Text style={styles.strong}> Mark for Review & Next </Text> बटन पर
            क्लिक करें। यदि किसी प्रश्न के लिए उत्तर चुना हो जो कि पुनर्विचार के
            लिए चिह्नित किया गया है, तब अंतिम मूल्यांकन में उस उत्तर पर विचार
            किया जाएगा।
          </Text>
        </View>
        <Text style={styles?.paragraph}>
          9. किसी प्रश्न का उत्तर बदलने के लिए, पहले प्रश्न का चयन करें, फिर नए
          उत्तर विकल्प पर क्लिक करने के बाद{' '}
          <Text style={styles.strong}>Save & Next</Text> बटन पर क्लिक करें।
        </Text>
        <Text style={styles?.paragraph}>
          10. उत्तर देने के बाद जो प्रश्न सुरक्षित हैं या पुनर्विचार के लिए
          चिह्नित हैं, सिर्फ उन पर ही मूल्यांकन के लिए विचार किया जाएगा।
        </Text>
        <Text style={styles?.head}>अनुभागों द्वारा प्रश्न पर जाना:</Text>
        <Text style={styles?.paragraph}>
          11. इस प्रश्नपत्र में स्क्रीन के शीर्ष बार पर अनुभाग (Sections)
          प्रदर्शित हैं। किसी अनुभाग के प्रश्न, उस अनुभाग के नाम पर क्लिक करके
          देखे जा सकते हैं। आप वर्तमान में जिस अनुभाग का उत्तर दे रहे हैं, वह
          अनुभाग हाइलाइट होगा।
        </Text>
        <Text style={styles?.paragraph}>
          12. किसी अनुभाग के लिए अंतिम प्रश्न के Save & Next बटन पर क्लिक करने
          के बाद, आप स्वचालित रूप से अगले अनुभाग के प्रथम प्रश्न पर पहुंच
          जाएंगे।
        </Text>
        <Text style={styles?.paragraph}>
          13. आप परीक्षा में निर्धारित समय के दौरान किसी भी समय प्रश्नावलियों और
          प्रश्नों के बीच अपनी सुविधा के अनुसार आ-जा (शफल कर) सकते हैं।
        </Text>
        <Text style={styles?.paragraph}>
          14. परीक्षार्थी संबंधित सेक्शन की समीक्षा को लीजेन्ड के भाग के रूप में
          देख सकते हैं जो हर एक सेक्शन में प्रश्न पॅलेट के ऊपर दिखाई देता है।
        </Text>
      </View>
    );
  };
  return language !== 'en' ? <HindiInstructions /> : <EnglishInstruction />;
};

export default GeneralInstructionsView;
