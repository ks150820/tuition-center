import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import colors from '@theme/colors';
import UITabs from '@widgets/ui-tabs';
import {styles} from './all-videos-screen-styles';
import UICard from '@widgets/ui-card';
import UIImage from '@widgets/ui-image';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import PlayIcon from '@resources/icons/play-icon';
import Student from '@resources/icons/student';
import { CONSTANT } from '@resources/strings';

const AllVideosScreenView: React.FC<IAllVideosScreenViewProps> = ({
  tabIndex,
  videos,
  tabsData,
  courseData,
  handleTabs,
}) => {
  const renderItem = (item: IVideosDetails): ReactElement => {
    return (
      <View>
        <UICard style={styles().cardContainer}>
          <View style={styles().cardsInnerComponent}>
            {/* left side */}
            <View>
              <UIImage
                url={require('@assets/images/video-banner.png')}
                style={styles().imageStyle}
              />
            </View>
            {/* right side */}
            <View style={styles().rightComponent}>
              <View style={styles().cardHeadingComponent}>
                <View>
                  <UIText
                    FontType={FONT_TYPE.PARAGRAPH}
                    color={colors.gray_scale.mine_shaft}
                    style={styles().cardHeading}>
                    {item.heading}
                  </UIText>
                </View>
                {item.isLive && (
                  <View>
                    <PlayIcon width={20} height={20} />
                  </View>
                )}
              </View>
              <View style={styles().rightSideLowerComponent}>
                <UIText
                  FontType={FONT_TYPE.DISCOUNT}
                  color={colors.primary.cardinal}>
                  {item.batchName}
                </UIText>
                <View style={styles().teacherStatusComponent}>
                  <UIText
                    FontType={FONT_TYPE.FONT_THIRTEEN}
                    color={colors.gray_scale.dove_gray}>
                    {item.teacherName}
                  </UIText>
                  <View style={styles().statusComponent}>
                    {item.isLive && (
                      <View style={styles().outerBlinkIconComponent}>
                        <View style={styles().innerBlinkIconComponent} />
                      </View>
                    )}
                    <UIText
                      FontType={FONT_TYPE.DISCOUNT}
                      color={
                        styles(item.isLive, item.isUpcoming).statusText.color
                      }>
                      {item.status}
                    </UIText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </UICard>
        <UICard style={styles().cardFooterComponent}>
          <View style={styles().cardFooterInnerComponent}>
            <Student />
            <View style={styles().cardFooterTextComponent}>
              {item.isLive && <UIText
                FontType={FONT_TYPE.INFO}
                color={colors.gray_scale.mine_shaft}>
                {item.totalStudentsLive} {CONSTANT.TXT_STUDENT['en']}
              </UIText>}
              {item.isUpcoming && <UIText
                FontType={FONT_TYPE.INFO}
                color={colors.gray_scale.mine_shaft}>
               {CONSTANT.TXT_SCHEDULED['en']} {item.scheduleTime}
              </UIText>}
              {item.recordedOn && <UIText
                FontType={FONT_TYPE.INFO}
                color={colors.gray_scale.mine_shaft}>
                {CONSTANT.TXT_RECORDED['en']} {item.recordedOn}
              </UIText>}
            </View>
          </View>
        </UICard>
      </View>
    );
  };
  return (
    <View style={styles().component}>
      {/* -- tabs -- */}
      <View style={styles().uiTabsComponent}>
        <UITabs
          tabId="1"
          tabIndex={tabIndex}
          tabItems={tabsData}
          tabsComponentStyle={styles().tabsComponentStyle}
          activeTabStyle={styles().activeTabsStyle}
          inActiveTabStyle={styles().inActiveTabsStyle}
          activeTextColor={colors.gray_scale.white}
          inActiveTextColor={colors.gray_scale.mine_shaft}
          onChange={(index: number) => handleTabs(index)}
        />
      </View>

      {/* -- cards -- */}
      <View style={styles().flatListComponent}>
        <FlatList
          keyExtractor={(_item, index) => index + ''}
          data={courseData}
          renderItem={({item}: {item: IVideosDetails}) => renderItem(item)}
          contentContainerStyle={styles().contentContainerStyle}
          ItemSeparatorComponent={() => (
            <View style={styles().flatListItemSeparator} />
          )}
        />
      </View>
    </View>
  );
};

export default AllVideosScreenView;
