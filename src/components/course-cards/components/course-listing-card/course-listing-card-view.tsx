import React from 'react';
import {View, Pressable} from 'react-native';

import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import CheckIcon from '@resources/icons/check-icon';
import WhatsAppIcon from '@resources/icons/whatsapp-icon';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIBtn from '@widgets/ui-btn';
import UIText from '@widgets/ui-text';
import {styles} from './course-listing-card-style';
import { CONSTANT, HEADINGS } from '@resources/strings';

const CourseListingCardView = (props: ICourseListingCardProps) => {
  const Children = () => {
    return (
      <View style={styles.coursesCardDesignTwo_footer}>
        {/* batch date */}
        <View style={styles.coursesCardDesignTwo_batchComponent}>
          <UIText FontType={FONT_TYPE.INFO} color={colors.accent.solid_black}>
           {HEADINGS.BATCH_START['en']} -
          </UIText>
          <UIText
            FontType={FONT_TYPE.INFO}
            style={styles.coursesCardDesignTwo_batchDate}
            color={colors.accent.solid_black}>
            {props.batchStartDate}
          </UIText>
        </View>
        {/* whatsapp icon */}
        <Pressable style={styles.shareComponent}>
        <UIText
            FontType={FONT_TYPE.INFO}
            style={styles.shareText}
            color="#038419">
            {CONSTANT.SHARE['en']}
          </UIText>
          <WhatsAppIcon height={18} width={18} color="#038419" />
        </Pressable>
      </View>
    );
  };
  return (
    <UICard style={[styles.coursesCardDesignTwo_component, props.style]}>
      <Pressable onPress={props.onPress}>
        <UICard style={styles.coursesCardDesignTwo}>
          <View style={styles.coursesCardDesignTwoSubComponent}>
            {/* left side */}
            <View>
              <UIImage
                url={props.imageUrl}
                style={[styles.coursesCardDesignTwo_Image, props.imageStyle]}
              />
              <UICard style={styles.discountCardComponent}>
                <UIText
                  FontType={FONT_TYPE.DISCOUNT}
                  style={styles.discountText}
                  color={colors.primary.cardinal}>
                  {props.discountPercent}% OFF
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
                      {props.heading}
                    </UIText>
                  </View>
                  <View style={styles.coursesCardDesignTwo_rightArrowIcon}>
                    <CheckIcon
                      color={colors.gray_scale.mine_shaft}
                      height={10}
                      width={10}
                    />
                  </View>
                </View>
                <UIText
                  FontType={FONT_TYPE.PARAGRAPH}
                  style={styles.batchTitle}
                  color={colors.primary.cardinal}>
                  {props.batchName}
                </UIText>
                {!props.viewPdfButton && (
                  <View style={styles.priceSubComponent}>
                    <UIText
                      FontType={FONT_TYPE.SUBHEADING}
                      style={styles.priceText}
                      color={colors.accent.solid_black}>
                      ₹ {props.actualPrice}
                    </UIText>
                    <UIText
                      FontType={FONT_TYPE.DISCOUNT}
                      color={colors.gray_scale.dusty_gray}
                      style={styles.ebooksCoursesCardDesignTwo_discountText}>
                      ₹ {props.discountedPrice}
                    </UIText>
                  </View>
                )}
                {/* price component */}
                <View style={styles.coursesCardDesignTwo_priceQuickBuy}>
                  <View style={styles.coursesCardDesignTwo_discountComponent}>
                    <View style={styles.coursesCardDesignTwo_priceComponent}>
                      {props.viewPdfButton && (
                        <View style={styles.priceSubComponent}>
                          <UIText
                            FontType={FONT_TYPE.SUBHEADING}
                            style={styles.priceText}
                            color={colors.accent.solid_black}>
                            ₹ {props.actualPrice}
                          </UIText>
                          <UIText
                            FontType={FONT_TYPE.DISCOUNT}
                            style={styles.coursesCardDesignTwo_discountText}>
                            ₹ {props.discountedPrice}
                          </UIText>
                        </View>
                      )}
                      {!props.viewPdfButton && (
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
                        btnText={props.buttonText}
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
        {!props.children ? Children() : props.children}
      </Pressable>
    </UICard>
  );
};

export default CourseListingCardView;
