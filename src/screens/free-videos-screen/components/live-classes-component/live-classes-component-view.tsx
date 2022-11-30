import React from 'react';
import {View, FlatList, Pressable} from 'react-native';

import UICard from '@common/ui-card';
import {styles} from './live-classes-component-style';
import UITabs from '@widgets/ui-tabs';
import colors from '@theme/colors';
import UIImage from '@common/ui-image';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import PlayIcon from '@resources/icons/play-icon';

const LiveClassesComponentView = (props: ILiveClassesComponentViewProps) => {
  const renderItem = (item: LiveClasses) => {
    return (
      <UICard style={styles.card_component}>
        <Pressable style={styles.inner_card_component}>
          {/* left */}
          <View
            style={styles.left_component}>
            <UIImage url={item.imgUrl} style={styles.image_style} />
            <View style={styles.play_icon_component}>
              <View>
                <PlayIcon width={28} height={28} />
              </View>
            </View>
          </View>
          {/* right */}
          <View style={styles.right_component}>
            <UIText
              FontType={FONT_TYPE.PARAGRAPH}
              style={{fontWeight: '700'}}
              color={colors.gray_scale.mine_shaft}>
              {item.heading}
            </UIText>
            <View style={styles.right_footer_intro_component}>
              <View style={styles.right_footer_inner_intro_component}>
                <View>
                  <UIText
                    FontType={FONT_TYPE.DISCOUNT}
                    style={{fontWeight: '400'}}
                    color={colors.primary.cardinal}>
                    {item.subHeading}
                  </UIText>
                  <UIText
                    FontType={FONT_TYPE.FONT_THIRTEEN}
                    style={{fontWeight: '500'}}
                    color={colors.gray_scale.dove_gray}>
                    {item.teacher}
                  </UIText>
                </View>
                <View style={styles.live_text_component}>
                  <View style={styles.live_text_inner_component}>
                    <View style={styles.outer_blink_icon_component}>
                      <View style={styles.inner_blink_icon_component} />
                    </View>
                    <UIText
                      FontType={FONT_TYPE.INFO}
                      style={{fontWeight: '600'}}
                      color={colors.primary.cardinal}>
                      LIVE
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
            renderItemStyle={styles.header_renderItemStyle}
            tabsComponentStyle={styles.header_tabsComponentStyle}
            activeTabStyle={styles.header_activeTabStyle}
            inActiveTabStyle={{}}
            onChange={(index: number) => props.handleTabs(index)}
            activeTextColor={colors.accent.solid_black}
            inActiveTextColor={colors.gray_scale.dusty_gray}
          />
        </View>
        <View style={{padding: 10}}>
          {/* -- categories tabs -- */}
          <View style={styles.outer_tabs_component}>
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
      </>
    </UICard>
  );
};

export default LiveClassesComponentView;
