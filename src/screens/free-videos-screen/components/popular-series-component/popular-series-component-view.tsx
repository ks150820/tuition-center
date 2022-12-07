import React, {ReactElement} from 'react';
import {View, FlatList, Pressable} from 'react-native';

import PlayIcon from '@resources/icons/play-icon';
import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import RightArrowIcon from '@resources/icons/right-arrow-icon';
import {styles} from './popular-series-component-style';
import {VIEW_ALL} from '@resources/values/strings';
import {HEADINGS, CONSTANT} from '@resources/strings';

const PopularSeriesComponentView = ({
  data,
  onCardPress,
}: IPopularSeriesComponentViewProps): ReactElement => {
  // TODO: change item types
  const renderItem = (item: any) => {
    if (item.plusImage === true) {
      return (
        <UICard style={styles.viewAllCardComponent}>
          <View>
            <View style={styles.viewAllIconComponent}>
              <RightArrowIcon
                color={colors.accent.amaranth}
                height={17}
                width={17}
              />
            </View>
            <View>
              <UIText
                FontType={FONT_TYPE.SUBHEADING}
                textAlign="center"
                style={styles.fontWight600}>
                {VIEW_ALL['en']}
              </UIText>
            </View>
          </View>
        </UICard>
      );
    }
    return (
      <UICard style={styles.cardComponent}>
        <Pressable onPress={onCardPress}>
          <View style={styles.imageComponent}>
            <UIImage url={item.imgUrl} style={styles.image} />
            {item.studentEnrolled > 0 && (
              <View style={styles.enrolledComponent}>
                <UIText
                  FontType={FONT_TYPE.FONT_EIGHT}
                  style={styles.fontWight700}>
                  {item.studentEnrolled} {HEADINGS.STUDENTS_ENROLL['en']}
                </UIText>
              </View>
            )}
            <View style={styles.playIconComponent}>
              <View style={styles.playIconInnerComponent}>
                <UIText
                  FontType={FONT_TYPE.PARAGRAPH}
                  style={styles.fontWight700}
                  color={colors.gray_scale.mine_shaft}>
                  {item.totalVideos} {CONSTANT.VIDEOS['en']}
                </UIText>
                <View style={styles.marginLeft4}>
                  <PlayIcon width={17} height={17} />
                </View>
              </View>
            </View>
          </View>
          {/* -- intro -- */}
          <View style={{padding: 10}}>
            <UIText
              numberOfLines={2}
              FontType={FONT_TYPE.SUBHEADING}
              style={styles.fontWight700}
              color={colors.gray_scale.mine_shaft}>
              {item.heading}
            </UIText>
            {item.isLiveClassIncluded && (
              <View style={styles.liveClassTextComponent}>
                <UIText
                  FontType={FONT_TYPE.INFO}
                  style={styles.fontWight500}
                  color={colors.primary.cardinal}>
                  {CONSTANT.LIVE_CLASS_INC['en']}
                </UIText>
              </View>
            )}
          </View>
        </Pressable>
      </UICard>
    );
  };
  return (
    <UICard style={styles.component}>
      <View>
        <View>
          <UIText
            FontType={FONT_TYPE.SUBHEADING}
            style={styles.headingText}
            color={colors.gray_scale.mine_shaft}>
            {HEADINGS.POPULAR_SERIES['en']}
          </UIText>
        </View>
        {/* --- cards --- */}
        <View style={styles.marginVertical10}>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={data.length >= 5 ? [...data, {plusImage: true}] : data}
            // TODO: change item types
            renderItem={({item}: {item: any}) => renderItem(item)}
            horizontal
          />
        </View>
      </View>
    </UICard>
  );
};

export default PopularSeriesComponentView;
