import React, {ReactElement} from 'react';

import ExamCourseCardView from './exam-course-card-view';

/**
 * 
 * @param {} params.image url for the image
 * @param {string} params.heading title of the card
 * @param {number} params.style style for the card
 * @param {} params.onPress callback method to handle the card press
 * @returns 
 */
const ExamCourseCard = ({
  heading,
  image,
  style = {width: '20%'},
  onPress,
}: IExamCourseCardProps): ReactElement => {
  return <ExamCourseCardView onPress={onPress} heading={heading} image={image} style={style} />;
};

export default ExamCourseCard;
