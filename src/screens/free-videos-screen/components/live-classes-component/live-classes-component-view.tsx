import React from 'react';
import {View, FlatList, Pressable} from 'react-native';

import UICard from '@common/ui-card';
import {styles} from './live-classes-component-style';
import UITabs from '@widgets/ui-tabs';
import colors from '@theme/colors';
import UIImage from '@common/ui-image';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import SvgToIcon from '@helpers/svg-to-icon';
import {WHITE_PLAY_ICON} from '@assets/icons/svg-icons';

interface ILiveClassesComponentViewProps {
  tabId: string;
  data: any;
  categories_data: any;
  categoriesTabId: string;
  handleCategoriesTabs(id: string): void;
  handleTabs(id: string): void;
}

const LiveClassesComponentView = ({
  tabId,
  data,
  categories_data,
  categoriesTabId,
  handleTabs,
  handleCategoriesTabs,
}: ILiveClassesComponentViewProps) => {
  const renderItem = (_item: any) => {
    return (
      <UICard
        style={styles.card_component}>
        <Pressable style={styles.inner_card_component}>
          {/* left */}
          <View
            style={{position: 'relative', borderRadius: 7, overflow: 'hidden'}}>
            <UIImage
              url={require('@assets/images/live-banner.jpg')}
              style={styles.image_style}
            />
            <View style={styles.play_icon_component}>
              <View>
                <SvgToIcon xml={WHITE_PLAY_ICON} width={28} height={28} />
              </View>
            </View>
          </View>
          {/* right */}
          <View style={{paddingHorizontal: 10, flex: 1}}>
            <UIText
              FontType={FONT_TYPE.PARAGRAPH}
              style={{fontWeight: '700'}}
              color={colors.gray_scale.mine_shaft}>
              Quantative Aptitude Quant Aptitude
            </UIText>
            <View style={styles.right_footer_intro_component}>
              <View
                style={styles.right_footer_inner_intro_component}>
                <View>
                  <UIText
                    FontType={FONT_TYPE.DISCOUNT}
                    style={{fontWeight: '400'}}
                    color={colors.primary.cardinal}>
                    Bank demo class
                  </UIText>
                  <UIText
                    FontType={FONT_TYPE.FONT_THIRTEEN}
                    style={{fontWeight: '500'}}
                    color={colors.gray_scale.dove_gray}>
                    Abhishek Banerjee
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
            tabItems={data}
            tabId={tabId}
            renderItemStyle={styles.header_renderItemStyle}
            tabsComponentStyle={styles.header_tabsComponentStyle}
            activeTabStyle={styles.header_activeTabStyle}
            inActiveTabStyle={{}}
            onChange={(id: string) => handleTabs(id)}
            activeTextColor={colors.accent.solid_black}
            inActiveTextColor={colors.gray_scale.dusty_gray}
          />
        </View>
        <View style={{padding: 10}}>
          {/* -- tabs -- */}
          <View style={styles.outer_tabs_component}>
            <UITabs
              tabItems={categories_data}
              activeTabStyle={styles.activeTabStyle}
              inActiveTabStyle={styles.inActiveTabStyle}
              activeTextColor={colors.gray_scale.white}
              inActiveTextColor={colors.gray_scale.mine_shaft}
              tabsComponentStyle={styles.tabsComponentStyle}
              tabId={categoriesTabId}
              onChange={(id: string) => handleCategoriesTabs(id)}
            />
          </View>
          {/* -- cards -- */}
          <View>
            <FlatList
              keyExtractor={(_item, index) => index + ''}
              data={[1, 2]}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: {item: any}) => renderItem(item)}
            />
          </View>
        </View>
      </>
    </UICard>
  );
};

export default LiveClassesComponentView;
