import React, {ReactElement} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import UIImage from '@widgets/ui-image';
import {styles} from './video-details-screen-style';
import PlayIcon from '@resources/icons/play-icon';
import UITabs from '@widgets/ui-tabs';
import colors from '@theme/colors';
import UICard from '@widgets/ui-card';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import {RUPEE} from '@resources/values/strings';
import UIBtn from '@widgets/ui-btn';

/**
 *
 * @returns video play screen component ui, ui will change later with the actual video player
 */
const VideoPlayScreenComponent = (): ReactElement => {
  return (
    <View style={styles().videoComponent}>
      <UIImage
        url={require('@assets/images/free-video-thumbnail.jpg')}
        style={styles().videoPlayerImage}
      />
      <View style={styles().videoPlayIconComponent}>
        <PlayIcon width={44} height={44} />
      </View>
    </View>
  );
};

const VideoDetailsScreenView: React.FC<IVideoDetailsScreenViewProps> = ({
  courseData,
  activeTab,
  TabsData,
  selectedClass,
  handleOnCourseClassSelect,
  handleTabs,
}): ReactElement => {
  const renderItem = (item: CourseDetailType, index: number): ReactElement => {
    return (
      <UICard style={styles(index === selectedClass).videoCoursesCardComponent}>
        <Pressable
          style={styles(!item.isActive).videoCoursesCardSubComponent}
          onPress={
            item.isActive ? () => handleOnCourseClassSelect(index) : () => {}
          }>
          <View>
            <UIImage
              url={item.imageUrl}
              style={styles().videoCoursesCardImage}
            />
          </View>
          {/* right component */}
          <View style={styles().videoCoursesCardRightComponent}>
            <View>
              <UIText
                FontType={FONT_TYPE.BUTTON}
                color={colors.gray_scale.mine_shaft}
                style={styles().fontWeight500}>
                {item.heading}
              </UIText>
              <UIText
                FontType={FONT_TYPE.INFO}
                color={colors.primary.cardinal}
                style={styles().fontWeight500}>
                {item.batchName}
              </UIText>
            </View>
            <View style={styles().cardRightComponentBottomTextComponent}>
              <View style={styles().cardRightComponentBottomTextInnerComponent}>
                <UIText
                  FontType={FONT_TYPE.FONT_THIRTEEN}
                  color={colors.gray_scale.dove_gray}
                  style={styles().fontWeight500}>
                  {item.teacherName}
                </UIText>
                <View style={styles().coursesStatusComponent}>
                  {item.isLive && (
                    <View style={styles().outerBlinkIconComponent}>
                      <View style={styles().innerBlinkIconComponent} />
                    </View>
                  )}
                  {item.isActive && (
                    <UIText
                      FontType={FONT_TYPE.DISCOUNT}
                      color={
                        styles(item.isLive, item.isUpcoming).statusTextColors
                          .color
                      }
                      style={styles().fontWeight400}>
                      {item.status}
                    </UIText>
                  )}
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </UICard>
    );
  };
  return (
    <View style={styles().component}>
      <View style={{flex: 1}}>
        <VideoPlayScreenComponent />
        {/* ui-tabs */}
        <View style={styles().uiTabsComponent}>
          <UITabs
            tabId="1"
            tabIndex={activeTab}
            tabItems={TabsData}
            tabsComponentStyle={styles().tabsComponentStyle}
            activeTabStyle={styles().activeTabComponent}
            inActiveTabStyle={styles().inActiveTabStyle}
            activeTextColor={colors.primary.cardinal}
            inActiveTextColor={colors.gray_scale.dusty_gray}
            onChange={(index: number) => handleTabs(index)}
          />
        </View>
        {/* videos courses */}
        <View style={styles().videoCoursesComponent}>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={courseData}
            renderItem={({
              item,
              index,
            }: {
              item: CourseDetailType;
              index: number;
            }) => renderItem(item, index)}
            ItemSeparatorComponent={() => (
              <View style={styles().itemSeparatorComponent} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      {/* footer */}
      <View style={styles().videoDetailsFooterComponent}>
        <LinearGradient
          colors={['#FFE4E7', '#FFF2D3']}
          start={{x: 30.21, y: 70.86}}
          useAngle={true}>
          <UIText
            FontType={FONT_TYPE.INFO}
            textAlign="center"
            color={colors.primary.cardinal}>
            *आप 50% छूट पाने के लिए EXAMPUR10 कूपन का उपयोग कर सकते हैं|
          </UIText>
        </LinearGradient>
        <View style={styles().videoDetailsFooterDetailComponent}>
          <View style={styles().videoDetailsFooterInnerComponent}>
            <View>
              <UIText
                FontType={FONT_TYPE.FONT_THIRTEEN}
                color={colors.gray_scale.mine_shaft}>
                SSC -ABHIMANYU BATCH
              </UIText>
              <View style={styles().videoDetailsFooterPriceComponent}>
                <UIText
                  FontType={FONT_TYPE.H1}
                  color={colors.gray_scale.mine_shaft}>
                  {RUPEE['en']} 1999
                </UIText>
                <View
                  style={styles().videoDetailsFooterDiscountedPriceComponent}>
                  <UIText
                    FontType={FONT_TYPE.PARAGRAPH}
                    color="#737373"
                    style={styles().videoDetailsFooterDiscountedPrice}>
                    {RUPEE['en']} 2000
                  </UIText>
                </View>
              </View>
            </View>
            <View>
              <UIBtn
               btnText = "View Course"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoDetailsScreenView;
