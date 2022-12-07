import React from 'react';

import CourseListingCardView from './course-listing-card-view';

const CourseListingCard = (props: ICourseListingCardProps) => {
  return (
    <CourseListingCardView
      style={props.style}
      heading={props.heading}
      imageUrl={props.imageUrl}
      children={props.children}
      batchName={props.batchName}
      buttonText={props.buttonText}
      actualPrice={props.actualPrice}
      viewPdfButton={props.viewPdfButton}
      batchStartDate={props.batchStartDate}
      discountedPrice={props.discountedPrice}
      discountPercent={props.discountPercent}
      onPress={props.onPress}
      imageStyle={props.imageStyle}
    />
  );
};

export default CourseListingCard;
