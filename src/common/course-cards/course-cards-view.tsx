import React, {Children, ReactElement} from 'react';
import {View, Pressable, ImageSourcePropType} from 'react-native';

import UIText from '@widgets/ui-text';
import UICard from '@common/ui-card';
import UIImage from '@common/ui-image';
import UIBtn from '@widgets/ui-btn';
import {FONT_TYPE} from '@theme/font';
import colors from '@theme/colors';
import {styles} from './course-cards-style';
import SvgToIcon from '@helpers/svg-to-icon';
import {WHATSAPP, RIGHT_ARROW} from '@assets/icons/svg-icons';

interface IExamCourseCardProps {
  heading: string;
  image: ImageSourcePropType;
  style?: object;
}

const ExamCoursesCard = ({
  heading,
  image,
  style = {width: '20%'},
}: IExamCourseCardProps) => {
  return (
    <UICard style={[styles.cardComponent, style]}>
      <>
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
      </>
    </UICard>
  );
};

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
  viewPdfButton = true,
  style,
}: CourseCardProps): ReactElement => {
  const renderCourseListingChildren = () => {
    return (
      <View style={styles.coursesCardDesignTwo_footer}>
        {/* batch date */}
        <View style={styles.coursesCardDesignTwo_batchComponent}>
          <UIText FontType={FONT_TYPE.INFO} color={colors.accent.solid_black}>
            Batch Start-
          </UIText>
          <UIText
            FontType={FONT_TYPE.INFO}
            style={styles.coursesCardDesignTwo_batchDate}
            color={colors.accent.solid_black}>
            {batchStartDate}
          </UIText>
        </View>
        {/* whatsapp icon */}
        <Pressable onPress={() => {}}>
          <SvgToIcon
            xml={WHATSAPP}
            height={18}
            width={18}
            // iconStyle={iconStyle}
          />
        </Pressable>
      </View>
    );
  };

  /**
   * card component for all the exams page
   */
  const CoursesListingCard = (): ReactElement => {
    return (
      <UICard style={[styles.coursesCardDesignTwo_component, style]}>
        <Pressable onPress={() => {}}>
          <UICard style={styles.coursesCardDesignTwo}>
            <View style={styles.coursesCardDesignTwoSubComponent}>
              {/* left side */}
              <View style={styles.coursesCardDesignTwo_LeftContainer}>
                <UIImage
                  url={imageUrl}
                  style={styles.coursesCardDesignTwo_Image}
                />
                <UICard style={styles.discountCardComponent}>
                  <UIText
                    FontType={FONT_TYPE.DISCOUNT}
                    style={styles.discountText}
                    color={colors.primary.cardinal}>
                    {discountPercent}% OFF
                  </UIText>
                </UICard>
              </View>
              {/* right side */}
              <UICard style={styles.coursesCardDesignTwo_rightContainer}>
                {/* <View style={{flex: 1}}> */}
                <View style={styles.coursesCardDesignTwo_rightSubContainer}>
                  {/* heading */}
                  <View style={styles.coursesCardDesignTwo_headingComponent}>
                    <View style={{marginRight: 4}}>
                      <UIText
                        FontType={FONT_TYPE.PARAGRAPH}
                        style={[styles.coursesCardDesignTwo_heading]}
                        color={colors.accent.solid_black}>
                        {heading}
                      </UIText>
                    </View>
                    <View>
                      <SvgToIcon
                        xml={RIGHT_ARROW}
                        height={10}
                        width={10}
                        iconStyle={styles.coursesCardDesignTwo_rightArrowIcon}
                      />
                    </View>
                  </View>
                  <UIText
                    FontType={FONT_TYPE.PARAGRAPH}
                    style={styles.batchTitle}
                    color={colors.primary.cardinal}>
                    {batchName}
                  </UIText>
                  {!viewPdfButton && (
                    <View style={styles.priceSubComponent}>
                      <UIText
                        FontType={FONT_TYPE.SUBHEADING}
                        style={styles.priceText}
                        color={colors.accent.solid_black}>
                        ₹ {actualPrice}
                      </UIText>
                      <UIText
                        FontType={FONT_TYPE.DISCOUNT}
                        color={colors.gray_scale.dusty_gray}
                        style={styles.ebooksCoursesCardDesignTwo_discountText}>
                        ₹ {discountedPrice}
                      </UIText>
                    </View>
                  )}
                  {/* price component */}
                  <View style={styles.coursesCardDesignTwo_priceQuickBuy}>
                    <View style={styles.coursesCardDesignTwo_discountComponent}>
                      <View style={styles.coursesCardDesignTwo_priceComponent}>
                        {viewPdfButton && (
                          <View style={styles.priceSubComponent}>
                            <UIText
                              FontType={FONT_TYPE.SUBHEADING}
                              style={styles.priceText}
                              color={colors.accent.solid_black}>
                              ₹ {actualPrice}
                            </UIText>
                            <UIText
                              FontType={FONT_TYPE.DISCOUNT}
                              style={styles.coursesCardDesignTwo_discountText}>
                              ₹ {discountedPrice}
                            </UIText>
                          </View>
                        )}
                        {!viewPdfButton && (
                          <UIBtn
                            btnText="View PDF"
                            styles={{
                              btnElementWrapper:
                                styles.coursesCardDesignTwo_ViewPDFButton,
                            }}
                            // fontType={FONT_TYPE.INFO}
                            textStyle={
                              styles.coursesCardDesignTwo_pdfButtonFontStyle
                            }
                            fontType={FONT_TYPE.INFO}
                            color={colors.primary.cardinal}
                            onPress={() => {}}
                          />
                        )}
                      </View>
                      <View>
                        <UIBtn
                          btnText={buttonText}
                          styles={{
                            btnElementWrapper:
                              styles.coursesCardDesignTwo_quickBuyButton,
                          }}
                          // fontType={FONT_TYPE.INFO}
                          textStyle={
                            styles.coursesCardDesignTwo_quickBuyButtonFontStyle
                          }
                          fontType={FONT_TYPE.INFO}
                          color={colors.gray_scale.white}
                          onPress={() => {}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                {/* </View> */}
              </UICard>
            </View>
          </UICard>
          {!children ? renderCourseListingChildren() : children}
        </Pressable>
      </UICard>
    );
  };

  /**
   * @returns card for the home page course components
   */
  const CoursesQuickBuyCard = (): ReactElement => {
    return (
      <UICard style={styles.courseCardContainer}>
        <Pressable onPress={() => {}}>
          {/* top component */}
          <View style={styles.subContainer}>
            {/* image component */}
            <UICard style={styles.imageComponent}>
              <View>
                <UIImage url={imageUrl} style={styles.imageStyles} />
                {discountPercent !== 0 && (
                  <UICard style={styles.discountCardComponent}>
                    <UIText
                      FontType={FONT_TYPE.DISCOUNT}
                      style={styles.discountText}
                      color={colors.primary.cardinal}>
                      {discountPercent}% OFF
                    </UIText>
                  </UICard>
                )}
              </View>
            </UICard>
            {/* right component */}
            <UICard style={styles.rightComponent}>
              <>
                <UIText
                  FontType={FONT_TYPE.PARAGRAPH}
                  style={styles.cardTitle}
                  color={colors.accent.solid_black}>
                  {heading}
                </UIText>
                <UIText
                  FontType={FONT_TYPE.INFO}
                  style={styles.batchTitle}
                  color={colors.primary.cardinal}>
                  {batchName}
                </UIText>
                {/* price component */}
                <View style={styles.priceComponent}>
                  <View style={styles.priceSubComponent}>
                    <UIText
                      FontType={FONT_TYPE.SUBHEADING}
                      style={styles.priceText}
                      color={colors.accent.solid_black}>
                      ₹ {actualPrice}
                    </UIText>
                    <UIText
                      FontType={FONT_TYPE.DISCOUNT}
                      style={styles.discountedPrice}>
                      ₹ {discountedPrice}
                    </UIText>
                  </View>
                </View>
              </>
            </UICard>
          </View>
          <View style={styles.buttonsContainer}>
            <UIBtn
              btnText="Details"
              styles={{
                btnElementWrapper: styles.detailButton,
                outerWrapper: {flex: 0.3},
              }}
              color={colors.gray_scale.dusty_gray}
              onPress={() => {}}
            />
            <UIBtn
              btnText={buttonText}
              styles={{
                btnElementWrapper: styles.quickBuyButton,
                outerWrapper: {flex: 0.67},
              }}
              // fontType={FONT_TYPE.INFO}
              textStyle={styles.quickBuyButton_fontStyle}
              fontType={FONT_TYPE.PARAGRAPH}
              color={colors.gray_scale.white}
              onPress={() => {}}
            />
          </View>
        </Pressable>
      </UICard>
    );
  };

  /**
   * @returns card for the books
   */
  const BooksCardDesign = (): ReactElement => {
    return (
      <UICard style={styles.booksComponent}>
        <Pressable onPress={() => {}}>
          <UIImage url={imageUrl} style={styles.booksImage} />
          <View style={styles.booksTitleView}>
            <UIText
              style={styles.booksCardTitle}
              FontType={FONT_TYPE.PARAGRAPH}>
              {heading}
            </UIText>
          </View>
          <View style={styles.booksPriceComponent}>
            <UIText style={styles.booksViewPrice} FontType={FONT_TYPE.INFO}>
              ₹ {actualPrice}
            </UIText>
          </View>
          <View style={styles.booksBuyButton}>
            <UIBtn
              btnText="Buy"
              styles={{
                btnElementWrapper: styles.buy_button,
              }}
              color={colors.primary.cardinal}
            />
          </View>
        </Pressable>
      </UICard>
    );
  };
  const renderCourseCards = (cardFor: string): ReactElement => {
    switch (cardFor) {
      case 'courses_design_one': {
        return <CoursesQuickBuyCard />;
      }
      case 'courses_design_two': {
        return <CoursesListingCard />;
      }
      case 'books': {
        return <BooksCardDesign />;
      }
      case 'exam': {
        return (
          <ExamCoursesCard heading={heading} image={imageUrl} style={style} />
        );
      }
      default:
        return <></>;
    }
  };
  return <View>{renderCourseCards(card_for)}</View>;
};

export default CourseCardsView;
