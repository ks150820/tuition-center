import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import colors from '@theme/colors';
import { FONT_TYPE } from '@theme/font';
import UIBtn from '@widgets/ui-btn';
import UIText from '@widgets/ui-text';
import React from 'react';
import {View, Pressable} from 'react-native';
import {styles} from './books-card-style';

/**
 * 
 * @param {} params.imageUrl url for the image
 * @param {string} params.heading title of the card
 * @param {number} params.actualPrice price of the card
 * @param {} params.onPress callback method to handle the card press
 * @returns 
 */
const BooksCardView = ({imageUrl, heading, actualPrice, onPress}: IBooksCardProps) => {
  return (
    <UICard style={styles.booksComponent}>
        <Pressable onPress={onPress}>
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

export default BooksCardView;
