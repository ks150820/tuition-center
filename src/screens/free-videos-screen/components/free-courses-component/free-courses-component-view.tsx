import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './free-courses-component-style';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import colors from '@theme/colors';
import CourseCard from '@common/course-cards';

interface IFreeCoursesComponentViewProps {}

const FreeCoursesComponentView =
  ({}: IFreeCoursesComponentViewProps): ReactElement => {
    const renderItem = (item: any) => {
      return (
        <View>
          {item.map((_subItem: any, index: number) => {
            return (
              <View key={index}>
                <CourseCard
                  imageUrl={require('@assets/images/courses-image.jpg')}
                  card_for="courses_design_one"
                  heading="UP VAN Daroga Forest SI 2022"
                  batchName="ABHIMANYU BATCH"
                  discountPercent={0}
                  actualPrice={0}
                  discountedPrice={500}
                  buttonText="Enroll Now"
                  viewPdfButton={false}
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
            Free Courses
          </UIText>
        </View>
        <View>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={[
              [1, 2],
              [3, 4],
            ]}
            renderItem={({item}: {item: any}) => renderItem(item)}
            horizontal
          />
        </View>
        <View>
          <View style={styles.viewAll_component}>
            <UIText
              FontType={FONT_TYPE.DISCOUNT}
              style={styles.viewAll_Text}
              textAlign="center"
              color={colors.primary.cardinal}>
              View all
            </UIText>
          </View>
        </View>
      </View>
    );
  };

export default FreeCoursesComponentView;
