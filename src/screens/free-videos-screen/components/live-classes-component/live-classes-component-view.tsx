import React from 'react';
import {View, FlatList, Pressable} from 'react-native';

import UICard from '@widgets/ui-card';
import {styles} from './live-classes-component-style';
import UITabs from '@widgets/ui-tabs';
import colors from '@theme/colors';
import UIImage from '@widgets/ui-image';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import PlayIcon from '@resources/icons/play-icon';
import {LIVE, VIEW_ALL} from '@resources/values/strings';

const LiveClassesComponentView = (props: ILiveClassesComponentViewProps) => {
  const renderItem = (item: LiveClasses) => {
    return (
      <UICard style={styles.cardComponent}>
        <Pressable
          style={styles.innerCardComponent}
          onPress={props.handleOnPressCard}>
          {/* left */}
          <View style={styles.leftComponent}>
            <UIImage url={item.imgUrl} style={styles.imageStyle} />
            <View style={styles.playIconComponent}>
              <View>
                <PlayIcon width={28} height={28} />
              </View>
            </View>
          </View>
          {/* right */}
          <View style={styles.rightComponent}>
            <UIText
              FontType={FONT_TYPE.PARAGRAPH}
              style={styles.fontWeight700}
              color={colors.gray_scale.mine_shaft}>
              {item.heading}
            </UIText>
            <View style={styles.rightFooterIntroComponent}>
              <View style={styles.rightFooterInnerIntroComponent}>
                <View>
                  <UIText
                    FontType={FONT_TYPE.DISCOUNT}
                    style={styles.fontWeight400}
                    color={colors.primary.cardinal}>
                    {item.subHeading}
                  </UIText>
                  <UIText
                    FontType={FONT_TYPE.FONT_THIRTEEN}
                    style={styles.fontWeight500}
                    color={colors.gray_scale.dove_gray}>
                    {item.teacher}
                  </UIText>
                </View>
                <View style={styles.liveTextComponent}>
                  <View style={styles.liveTextInnerComponent}>
                    <View style={styles.outerBlinkIconComponent}>
                      <View style={styles.innerBlinkIconComponent} />
                    </View>
                    <UIText
                      FontType={FONT_TYPE.INFO}
                      style={styles.fontWeight600}
                      color={colors.primary.cardinal}>
                      {LIVE['en']}
                    </UIText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </UICard>
    );
  };
  return (
    <UICard style={styles.component}>
      <>
        {/* tabs */}
        <View>
          <UITabs
            tabItems={props.data}
            tabIndex={props.tabIndex}
            tabId={props.tabId}
            renderItemStyle={styles.headerRenderItemStyle}
            tabsComponentStyle={styles.headerTabsComponentStyle}
            activeTabStyle={styles.headerActiveTabStyle}
            inActiveTabStyle={{}}
            onChange={(index: number) => props.handleTabs(index)}
            activeTextColor={colors.accent.solid_black}
            inActiveTextColor={colors.gray_scale.dusty_gray}
          />
        </View>
        <View style={{padding: 10}}>
          {/* -- categories tabs -- */}
          <View style={styles.outerTabsComponent}>
            <UITabs
              tabItems={props.genres}
              tabIndex={props.categoriesTabIndex}
              activeTabStyle={styles.activeTabStyle}
              inActiveTabStyle={styles.inActiveTabStyle}
              activeTextColor={colors.gray_scale.white}
              inActiveTextColor={colors.gray_scale.mine_shaft}
              tabsComponentStyle={styles.tabsComponentStyle}
              tabId={props.categoriesTabId}
              onChange={(index: number) => props.handleCategoriesTabs(index)}
            />
          </View>
          {/* -- cards -- */}
          <View>
            <FlatList
              keyExtractor={(_item, index) => index + ''}
              data={props.liveClasses}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: {item: LiveClasses}) => renderItem(item)}
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
  );
};

export default LiveClassesComponentView;
