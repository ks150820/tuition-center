import React, {ReactElement} from 'react';
import {View, Pressable} from 'react-native';

import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIBtn from '@widgets/ui-btn';
import UIText from '@widgets/ui-text';
import {styles} from './quick-buy-card-style';

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
const QuickBuyCardView = ({
  imageUrl,
  heading,
  actualPrice,
  discountPercent,
  discountedPrice,
  batchName,
  buttonText,
  onPress,
}: IQuickBuyCardProps): ReactElement => {
  return (
    <UICard style={styles.courseCardContainer}>
      <Pressable onPress={onPress}>
        {/* top component */}
        <View style={styles.subContainer}>
          {/* image component */}
          <UICard style={styles.imageComponent}>
            <View>
              <UIImage url={imageUrl} style={styles.imageStyles} />
              <UICard style={styles.discountCardComponent}>
                <UIText
                  FontType={FONT_TYPE.DISCOUNT}
                  style={styles.discountText}
                  color={colors.primary.cardinal}>
                  {discountPercent}% OFF
                </UIText>
              </UICard>
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

export default QuickBuyCardView;
