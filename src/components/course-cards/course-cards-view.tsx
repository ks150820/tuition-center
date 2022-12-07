import React, {ReactElement} from 'react';
import {View} from 'react-native';

import BooksCard from './components/books-card';
import QuickBuyCard from './components/quick-buy-card';
import CourseListingCard from './components/course-listing-card';
import ExamCourseCard from './components/exam-course-card';

/**
 *
 * @param {string} params.card_for this is used to select the card component
 * @param {string} params.imageUrl image of the card
 * @param {string} params.heading heading of the card
 * @param {string} params.batchName course batchName
 * @param {number} params.actualPrice price of the course
 * @param {number} params.discountedPrice discounted Price of the course, price has line through price
 * @param {number} params.discountPercent discounted percentage of the course,
 * @param {string} params.batchStartDate batch start date of the course
 * @returns returns the ui of different courses components
 */
const CourseCardsView = ({
  viewPdfButton = true,
  ...props
}: CourseCardProps): ReactElement => {
  const renderCourseCards = (cardFor: string): ReactElement => {
    switch (cardFor) {
      case 'courseQuickBuy': {
        return (
          <QuickBuyCard
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
      }
      case 'courseListing': {
        return (
          <CourseListingCard
            imageUrl={props.imageUrl}
            heading={props.heading}
            actualPrice={props.actualPrice}
            discountPercent={props.discountPercent}
            discountedPrice={props.discountedPrice}
            batchName={props.batchName}
            viewPdfButton={viewPdfButton}
            buttonText={props.buttonText}
            children={props.children}
            batchStartDate={props.batchStartDate}
            style={props.style}
            onPress={props.onPress}
            imageStyle={props.imageStyle}
          />
        );
      }
      case 'books': {
        return (
          <BooksCard
            imageUrl={props.imageUrl}
            heading={props.heading}
            actualPrice={props.actualPrice}
            onPress={props.onPress}
          />
        );
      }
      case 'exam': {
        return (
          <ExamCourseCard
            onPress={props.onPress}
            heading={props.heading}
            image={props.imageUrl}
            style={props.style}
          />
        );
      }
      default:
        return <></>;
    }
  };
  return <View>{renderCourseCards(props.cardFor)}</View>;
};

export default CourseCardsView;
