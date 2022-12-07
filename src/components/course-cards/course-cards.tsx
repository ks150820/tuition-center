import React from 'react';

import CourseCardsView from './course-cards-view';

const CourseCard = (props: CourseCardProps) => {
  return (
    <CourseCardsView
      cardFor={props.cardFor}
      imageUrl={props.imageUrl}
      heading={props.heading}
      batchName={props.batchName}
      actualPrice={props.actualPrice}
      discountedPrice={props.discountedPrice}
      discountPercent={props.discountPercent}
      batchStartDate={props.batchStartDate}
      style={props.style}
      buttonText={props.buttonText}
      children={props.children}
      viewPdfButton={props.viewPdfButton}
      onPress={props.onPress}
      imageStyle={props.imageStyle}
    />
  );
};

export default CourseCard;