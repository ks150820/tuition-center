import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './missed-classes-component-style';
import UICard from '@widgets/ui-card';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import UITabs from '@widgets/ui-tabs';
import UIImage from '@widgets/ui-image';
import {HEADINGS} from '@resources/strings';
import {VIEW_ALL} from '@resources/values/strings';

const MissedClassesComponentView = ({
  tabID,
  genres,
  tabsIndex,
  missedClasses,
  onChangeTabs,
}: IMissedClassesComponentView): ReactElement => {
  const renderItem = (item: MissedLiveClasses) => {
    return (
      <UICard style={styles.cardsComponent}>
        <View>
          <UIImage url={item.imgUrl} style={styles.cardsImage} />
          <View style={styles.cardsIntroComponent}>
            <UIText
              numberOfLines={2}
              FontType={FONT_TYPE.FONT_THIRTEEN}
              color={colors.gray_scale.mine_shaft}>
              {item.heading}
            </UIText>
          </View>
        </View>
      </UICard>
    );
  };
  return (
    <View style={styles.component}>
      <UICard style={styles.innerComponent}>
        <>
          <View style={styles.headingCardComponent}>
            {/* -- heading -- */}
            <View>
              <UIText
                FontType={FONT_TYPE.SUBHEADING}
                color={colors.primary.cardinal}
                style={styles.headingText}>
                {HEADINGS.MISSED_LIVE['en']}
              </UIText>
            </View>
            {/* --- tabs --- */}
            <View style={styles.outerTabsComponent}>
              <UITabs
                tabItems={genres}
                tabIndex={tabsIndex}
                activeTabStyle={styles.activeTabStyle}
                inActiveTabStyle={styles.inActiveTabStyle}
                activeTextColor={colors.gray_scale.white}
                inActiveTextColor={colors.gray_scale.mine_shaft}
                tabsComponentStyle={styles.tabsComponentStyle}
                tabId={tabID}
                onChange={(index: number) => onChangeTabs(index)}
              />
            </View>
            {/* -- cards -- */}
            <View>
              <FlatList
                keyExtractor={(_item, index) => index + ''}
                data={missedClasses}
                renderItem={({item}: {item: MissedLiveClasses}) =>
                  renderItem(item)
                }
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.viewAllComponent}>
            <UIText
              FontType={FONT_TYPE.DISCOUNT}
              style={styles.viewAllText}
              textAlign="center"
              color={colors.primary.cardinal}>
              {VIEW_ALL['en']}
            </UIText>
          </View>
        </>
      </UICard>
    </View>
  );
};

export default MissedClassesComponentView;
