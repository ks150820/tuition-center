import React from 'react';

import CourseCardsView from './course-cards-view';

const CourseCard = ({
  card_for,
  imageUrl,
  heading,
  batchName,
  actualPrice,
  discountedPrice,
  discountPercent,
  batchStartDate,
  children,
  buttonText,
  viewPdfButton,
  style,
}: CourseCardProps) => {
  return (
    <CourseCardsView
      card_for={card_for}
      imageUrl={imageUrl}
      heading={heading}
      batchName={batchName}
      actualPrice={actualPrice}
      discountedPrice={discountedPrice}
      discountPercent={discountPercent}
      batchStartDate={batchStartDate}
      style={style}
      buttonText={buttonText}
      children={children}
      viewPdfButton={viewPdfButton}
    />
  );
};

export default CourseCard;
