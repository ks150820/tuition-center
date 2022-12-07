import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './free-courses-component-style';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import colors from '@theme/colors';
import CourseCard from '@components/course-cards';
import { VIEW_ALL, FREE_VIDEO_CONSTANTS } from '@resources/values/strings';

const FreeCoursesComponentView =
  ({courses, handleOnCardPress}: IFreeCoursesComponentViewProps): ReactElement => {
    const renderItem = (item: FreeCoursesType[]) => {
      return (
        <View>
          {item.map((subItem: FreeCoursesType, index: number) => {
            return (
              <View key={index}>
                <CourseCard
                  imageUrl={subItem.imgUrl}
                  cardFor="courseQuickBuy"
                  heading={subItem.heading}
                  batchName={subItem.batchName}
                  discountPercent={subItem.discountPercent}
                  actualPrice={subItem.actualPrice}
                  discountedPrice={subItem.discountedPrice}
                  buttonText="Enroll Now"
                  viewPdfButton={false}
                  onPress={handleOnCardPress}
                />
              </View>
            );
          })}
        </View>
      );
    };
    return (
      <View style={styles.component}>
        <View>
          <UIText
            FontType={FONT_TYPE.SUBHEADING}
            style={styles.headingText}
            color={colors.gray_scale.mine_shaft}>
            {FREE_VIDEO_CONSTANTS.FREE_COURSES['en']}
          </UIText>
        </View>
        <View>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={courses}
            renderItem={({item}: {item: FreeCoursesType[]}) => renderItem(item)}
            horizontal
          />
        </View>
        <View>
          <View style={styles.viewAllComponent}>
            <UIText
              FontType={FONT_TYPE.DISCOUNT}
              style={styles.viewAllText}
              textAlign="center"
              color={colors.primary.cardinal}>
              {VIEW_ALL['en']}
            </UIText>
          </View>
        </View>
      </View>
    );
  };

export default FreeCoursesComponentView;
