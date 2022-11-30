import React, {ReactElement} from 'react';
import {View, FlatList, Pressable} from 'react-native';

import PlayIcon from '@resources/icons/play-icon';
import UICard from '@common/ui-card';
import UIImage from '@common/ui-image';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import RightArrowIcon from '@resources/icons/right-arrow-icon';
import {styles} from './popular-series-component-style';

const PopularSeriesComponentView = ({
  data,
  onCardPress,
}: IPopularSeriesComponentViewProps): ReactElement => {
  const renderItem = (item: any) => {
    if (item.plusImage === true) {
      return (
        <UICard style={styles.viewAll_card_component}>
          <View>
            <View style={styles.viewAll_Icon_component}>
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
                View All
              </UIText>
            </View>
          </View>
        </UICard>
      );
    }
    return (
      <UICard style={styles.card_component}>
        <Pressable onPress={onCardPress}>
          <View style={styles.imageComponent}>
            <UIImage url={item.imgUrl} style={styles.image} />
            {item.studentEnrolled > 0 && (
              <View style={styles.enrolled_component}>
                <UIText
                  FontType={FONT_TYPE.FONT_EIGHT}
                  style={styles.fontWight700}>
                  {item.studentEnrolled} Students enrolled
                </UIText>
              </View>
            )}
            <View style={styles.playIcon_component}>
              <View style={styles.playIcon_inner_component}>
                <UIText
                  FontType={FONT_TYPE.PARAGRAPH}
                  style={styles.fontWight700}
                  color={colors.gray_scale.mine_shaft}>
                  {item.totalVideos} Videos
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
                  Live class included
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
            Popular series
          </UIText>
        </View>
        {/* --- cards --- */}
        <View style={styles.marginVertical10}>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={data.length >= 5 ? [...data, {plusImage: true}] : data}
            renderItem={({item}: {item: any}) => renderItem(item)}
            horizontal
          />
        </View>
      </View>
    </UICard>
  );
};

export default PopularSeriesComponentView;
