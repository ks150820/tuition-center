import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import React, {ReactElement} from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './exam-course-card-style';

/**
 * 
 * @param {} params.image url for the image
 * @param {string} params.heading title of the card
 * @param {number} params.style style for the card
 * @param {} params.onPress callback method to handle the card press
 * @returns 
 */
const ExamCourseCardView = ({
  heading,
  image,
  style = {width: '20%'},
  onPress,
}: IExamCourseCardProps): ReactElement => {
  return (
    <UICard style={[styles.cardComponent, style]}>
      <Pressable onPress={onPress}>
        <View style={styles.examCardImageComponent}>
          <UIImage url={image} style={styles.image} />
        </View>
        <View style={styles.titleComponent}>
          <UIText
            FontType={FONT_TYPE.PARAGRAPH}
            numberOfLines={2}
            textAlign="center"
            style={styles.title}
            color={colors.gray_scale.mine_shaft}>
            {heading}
          </UIText>
        </View>
      </Pressable>
    </UICard>
  );
};

export default ExamCourseCardView;
