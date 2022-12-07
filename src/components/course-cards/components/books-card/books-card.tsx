import React from 'react';

import BooksCardView from './books-card-view';

/**
 * 
 * @param {} params.imageUrl url for the image
 * @param {string} params.heading title of the card
 * @param {number} params.actualPrice price of the card
 * @param {} params.onPress callback method to handle the card press
 * @returns 
 */
const BooksCard = ({imageUrl, heading, actualPrice, onPress}: IBooksCardProps) => {
  return (
    <BooksCardView
      imageUrl={imageUrl}
      heading={heading}
      actualPrice={actualPrice}
      onPress={onPress}
    />
  );
};

export default BooksCard;
