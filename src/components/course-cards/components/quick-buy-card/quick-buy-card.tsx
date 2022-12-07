import React from 'react';

import QuickBuyCardView from './quick-buy-card-view';

/**
 * 
 * @param {} params.imageUrl url for the image
 * @param {string} params.heading title of the card
 * @param {number} params.actualPrice price of the card
 * @param {number} params.discountPercent discounted percentage of the course
 * @param {number} params.discountedPrice discounted price of the course
 * @param {} params.onPress callback method to handle the card press
 * @returns 
 */
const QuickBuyCard = (props: IQuickBuyCardProps) => {
  return (
    <QuickBuyCardView
      imageUrl={props.imageUrl}
      heading={props.heading}
      actualPrice={props.actualPrice}
      discountPercent={props.discountPercent}
      discountedPrice={props.discountedPrice}
      batchName={props.batchName}
      onPress={props.onPress}
      buttonText={props.buttonText}
    />
  );
};

export default QuickBuyCard;
