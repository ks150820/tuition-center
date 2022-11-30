import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIBtn from '@widgets/ui-btn';
import React from 'react';
import {View, ScrollView} from 'react-native';
import {tabsStyles} from './ui-tabs-style';

type TabItems = {
  id: string;
  title: string;
};

interface IUITabsViewProps {
  tabId: string;
  tabItems: TabItems[];
  tabIndex: number;
  activeTabStyle: object;
  inActiveTabStyle: object;
  tabsComponentStyle?: object;
  activeTextColor: string;
  inActiveTextColor: string;
  renderItemStyle?: object;
  onChange(index: number): void;
}

interface IRenderItemProps {
  item: TabItems;
  index: number;
}

/**
 *
 * @param {string} params.tabId id of the tab
 * @param {TabItems[]} params.tabItems items to render
 * @param {} params.onChange callback to be called when the tab changes
 * @returns
 */
const UITabsView = ({
  tabId = '',
  tabIndex,
  tabItems,
  tabsComponentStyle,
  activeTabStyle,
  inActiveTabStyle,
  activeTextColor,
  inActiveTextColor,
  renderItemStyle,
  onChange,
}: IUITabsViewProps) => {
  /**
   *
   * @param {IRenderItemProps} params.item items to render
   * @returns
   */
  const RenderItem = ({item, index}: IRenderItemProps) => {
    return (
      <View>
        <UIBtn
          btnText={item.title}
          styles={{
            btnElementWrapper:
              tabIndex === index
                ? {...tabsStyles.commonStyleBooksTextButton, ...activeTabStyle}
                : {
                    ...tabsStyles.commonStyleBooksTextButton,
                    ...inActiveTabStyle,
                  },
          }}
          fontType={FONT_TYPE.PARAGRAPH}
          textStyle={{fontWeight: '700'}}
          color={tabIndex === index ? activeTextColor : inActiveTextColor}
          onPress={() => onChange(index)}
        />
      </View>
    );
  };
  return (
    <View style={[tabsStyles.ButtonTabsComponent, tabsComponentStyle]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tabsStyles.scrollViewComponent}>
        {tabItems.map((item: TabItems, index: number) => {
          return (
            <View
              key={index}
              style={[tabsStyles.renderItemComponentStyle, renderItemStyle]}>
              <RenderItem item={item} index={index} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default UITabsView;
