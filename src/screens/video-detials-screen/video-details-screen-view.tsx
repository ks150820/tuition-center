import React, {ReactElement} from 'react';
import {FlatList, Pressable, ScrollView, View} from 'react-native';
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
import CloseIcon from '@resources/icons/close';
import UiModal from '@widgets/ui-modal';
import Calender from '@resources/icons/calender';
import SandClock from '@resources/icons/sand-clock';
import ShootingStar from '@resources/icons/shooting-star';
import DoubleCheck from '@resources/icons/double-check';
import {CONSTANT, HEADINGS} from '@resources/strings';

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

const VideoDetailFooterComponent = ({
  discountedPrice,
  actualPrice,
}: IVideoDetailFooterComponentProps): ReactElement => {
  return (
    <View style={styles().videoDetailsFooterComponent}>
      <LinearGradient
        colors={['#FFE4E7', '#FFF2D3']}
        start={{x: 30.21, y: 70.86}}
        style={styles().videoDetailsFooterDiscountText}
        useAngle={true}>
        <UIText
          FontType={FONT_TYPE.INFO}
          textAlign="center"
          color={colors.primary.cardinal}>
          {CONSTANT.COUPON_DESCRIPTION['en']}
        </UIText>
      </LinearGradient>
      <View style={styles().videoDetailsFooterDetailComponent}>
        <View style={styles().videoDetailsFooterInnerComponent}>
          <View>
            <UIText
              FontType={FONT_TYPE.FONT_THIRTEEN}
              color={colors.gray_scale.mine_shaft}>
              SSC - {CONSTANT.BATCH_NAME['en']}
            </UIText>
            <View style={styles().videoDetailsFooterPriceComponent}>
              <UIText
                FontType={FONT_TYPE.H1}
                color={colors.gray_scale.mine_shaft}>
                {RUPEE['en']} {discountedPrice}
              </UIText>
              <View style={styles().videoDetailsFooterDiscountedPriceComponent}>
                <UIText
                  FontType={FONT_TYPE.PARAGRAPH}
                  color="#737373"
                  style={styles().videoDetailsFooterDiscountedPrice}>
                  {RUPEE['en']} {actualPrice}
                </UIText>
              </View>
            </View>
          </View>
          <View>
            <UIBtn
              btnText="View Course"
              onPress={() => {}}
              styles={{btnElementWrapper: styles().viewCourseButton}}
              color={colors.gray_scale.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const BottomSheetView: React.FC<IVideoDetailBottomSheetProps> = ({
  isVisible,
  courseDescription,
  bottomSheetDetail,
  toggleBottomSheet,
}) => {
  return (
    <UiModal isBottomSheet={true} height="70%" modalVisible={isVisible}>
      <>
        <View style={styles().bottomSheetComponent}>
          <Pressable
            style={styles().bottomSheetCloseIconComponent}
            onPress={toggleBottomSheet}>
            <CloseIcon
              height={25}
              width={25}
              color={colors.accent.solid_black}
            />
          </Pressable>
          <ScrollView>
            <View>
              <View style={styles().bottomSheetBannerImageContainer}>
                <UIImage
                  url={require('@assets/images/group.jpg')}
                  style={styles().bottomSheetBannerImage}
                />
              </View>
              {/* -- heading -- */}
              <View style={styles().bottomSheetHeadingContainer}>
                <View style={styles().bottomSheetHeadingCrossingLine} />
                <View style={styles().bottomSheetHeadingComponent}>
                  <UIText
                    FontType={FONT_TYPE.HEADING}
                    color={colors.primary.cardinal}
                    textAlign="center"
                    style={styles().fontWeight700}>
                    {CONSTANT.BATCH_NAME['en']}
                  </UIText>
                </View>
                <View style={styles().bottomSheetHeadingCrossingLine} />
              </View>

              {/* -- buttons -- */}
              <View>
                <View style={styles().buttonsContainer}>
                  {/* --button ui-- */}
                  <View style={styles().bottomSheetDatesButton}>
                    <View style={styles().bottomSheetDatesButtonIcon}>
                      <Calender
                        height={14}
                        width={14}
                        color={colors.accent.royal_blue}
                      />
                    </View>
                    <UIText
                      FontType={FONT_TYPE.FONT_THIRTEEN}
                      color={colors.accent.royal_blue}>
                      {CONSTANT.STARTS['en']}
                    </UIText>
                    <UIText
                      FontType={FONT_TYPE.FONT_THIRTEEN}
                      color={colors.accent.solid_black}>
                      {' '}
                      {bottomSheetDetail?.startDate}
                    </UIText>
                  </View>
                  {/* --button ui-- */}
                  <View style={styles().bottomSheetDatesButton}>
                    <View style={styles().bottomSheetDatesButtonIcon}>
                      <SandClock />
                    </View>
                    <UIText
                      FontType={FONT_TYPE.FONT_THIRTEEN}
                      color={colors.accent.royal_blue}>
                      {CONSTANT.DURATION['en']}
                    </UIText>
                    <UIText
                      FontType={FONT_TYPE.FONT_THIRTEEN}
                      color={colors.accent.solid_black}>
                      {' '}
                      {bottomSheetDetail.duration}
                    </UIText>
                  </View>
                </View>
                {/* ------ danger button */}
                <View style={styles().boughtByUserTextOuterContainer}>
                  <View style={styles().boughtByUserTextContainer}>
                    <View style={styles().bottomSheetDatesButtonIcon}>
                      <ShootingStar />
                    </View>
                    <UIText
                      FontType={FONT_TYPE.PARAGRAPH}
                      color={colors.primary.cardinal}>
                      {CONSTANT.COURSES_BOUGHT_STATS['en']}
                    </UIText>
                  </View>
                </View>
              </View>

              <View style={styles().bottomSheetHeadingContainer}>
                <View style={styles().bottomSheetHeadingCrossingLine} />
                <View style={styles().bottomSheetHeadingComponent}>
                  <UIText
                    FontType={FONT_TYPE.FONT_THIRTEEN}
                    color={colors.gray_scale.dove_gray}
                    textAlign="center">
                    {HEADINGS.COURSE_DETAILS['en']}
                  </UIText>
                </View>
                <View style={styles().bottomSheetHeadingCrossingLine} />
              </View>
            </View>
            <View style={styles().courseDetailsDescriptionOuterContainer}>
              <View style={styles().courseDetailsDescriptionInnerContainer}>
                {courseDescription.map((item, index) => {
                  return (
                    <View
                      style={
                        index % 2 === 1
                          ? styles().courseDetailsDescriptionContainerChild
                          : styles().courseDetailsDescriptionContainer
                      }
                      key={index}>
                      <View
                        style={
                          styles().courseDetailsDescriptionDoubleCheckIcon
                        }>
                        <DoubleCheck />
                      </View>
                      <UIText
                        FontType={FONT_TYPE.FONT_THIRTEEN}
                        color={colors.accent.emerald}>
                        {item.numbers}
                      </UIText>
                      <UIText
                        FontType={FONT_TYPE.FONT_THIRTEEN}
                        color={colors.accent.solid_black}>
                        {' '}
                        {item.tag}
                      </UIText>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles().bottomSheetFooterComponent}>
          <VideoDetailFooterComponent
            discountedPrice={1999}
            actualPrice={2000}
          />
        </View>
      </>
    </UiModal>
  );
};

const VideoDetailsScreenView: React.FC<IVideoDetailsScreenViewProps> = (
  DProps,
): ReactElement => {
  const renderItem = (item: CourseDetailType, index: number): ReactElement => {
    return (
      <UICard
        style={
          styles(index === DProps.selectedClass).videoCoursesCardComponent
        }>
        <Pressable
          style={styles(!item.isActive).videoCoursesCardSubComponent}
          onPress={
            item.isActive
              ? () => DProps.handleOnCourseClassSelect(index)
              : () => DProps.handleToCourseDetails(item)
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
      <View style={styles().innerComponent}>
        <VideoPlayScreenComponent />
        {/* ui-tabs */}
        <View style={styles().uiTabsComponent}>
          <UITabs
            tabId="1"
            tabIndex={DProps.activeTab}
            tabItems={DProps.TabsData}
            tabsComponentStyle={styles().tabsComponentStyle}
            activeTabStyle={styles().activeTabComponent}
            inActiveTabStyle={styles().inActiveTabStyle}
            activeTextColor={colors.primary.cardinal}
            inActiveTextColor={colors.gray_scale.dusty_gray}
            onChange={(index: number) => DProps.handleTabs(index)}
          />
        </View>
        {/* videos courses */}
        <View style={styles().videoCoursesComponent}>
          <FlatList
            keyExtractor={(_item, index) => index + ''}
            data={DProps.courseData}
            renderItem={({
              item,
              index,
            }: {
              item: CourseDetailType;
              index: number;
            }) => renderItem(item, index)}
            contentContainerStyle={styles().videoCoursesInnerComponent}
            ItemSeparatorComponent={() => (
              <View style={styles().itemSeparatorComponent} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      {/* footer */}
      <VideoDetailFooterComponent
        discountedPrice={DProps.bottomSheetDetail.discountedPrice}
        actualPrice={DProps.bottomSheetDetail.actualPrice}
      />

      {/* ----- bottom sheet ----- */}
      <BottomSheetView
        isVisible={DProps.isBottomSheetVisible}
        toggleBottomSheet={DProps.toggleBottomSheet}
        courseDescription={DProps.courseDescription}
        bottomSheetDetail={DProps.bottomSheetDetail}
      />
    </View>
  );
};

export default VideoDetailsScreenView;
