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
  activeTabStyle: object;
  inActiveTabStyle: object;
  tabsComponentStyle?: object;
  activeTextColor: string;
  inActiveTextColor: string;
  renderItemStyle?: object;
  onChange(id: string): void;
}

interface IRenderItemProps {
  item: TabItems;
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
  const RenderItem = ({item}: IRenderItemProps) => {
    return (
      <View>
        <UIBtn
          btnText={item.title}
          styles={{
            btnElementWrapper:
              tabId === item.id
                ? {...tabsStyles.commonStyleBooksTextButton, ...activeTabStyle}
                : {
                    ...tabsStyles.commonStyleBooksTextButton,
                    ...inActiveTabStyle,
                  },
          }}
          fontType={FONT_TYPE.PARAGRAPH}
          textStyle={{fontWeight: '700'}}
          color={tabId === item.id ? activeTextColor : inActiveTextColor}
          onPress={() => onChange(item.id)}
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
            <View key={index} style={[tabsStyles.renderItemComponentStyle, renderItemStyle]}>
              <RenderItem item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default UITabsView;
