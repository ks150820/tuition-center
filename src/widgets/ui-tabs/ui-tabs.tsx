import React from 'react';

import UITabsView from './ui-tabs-view';

interface IUITabsProps {
  tabId: string;
  tabItems: any;
  activeTabStyle: object;
  inActiveTabStyle: object;
  activeTextColor: string;
  tabsComponentStyle?: object;
  inActiveTextColor: string;
  renderItemStyle?: object;
  onChange(id: string): void;
}

/**
 *
 * @param {string} params.tabId id of the tab
 * @param {TabItems[]} params.tabItems items to render
 * @param {} params.onChange callback to be called when the tab changes
 * @returns
 */
const UITabs = ({
  tabId,
  tabItems,
  activeTabStyle,
  inActiveTabStyle,
  tabsComponentStyle,
  activeTextColor,
  inActiveTextColor,
  renderItemStyle,
  onChange,
}: IUITabsProps) => {
  return (
    <UITabsView
      tabId={tabId}
      tabItems={tabItems}
      activeTabStyle={activeTabStyle}
      inActiveTabStyle={inActiveTabStyle}
      activeTextColor={activeTextColor}
      inActiveTextColor={inActiveTextColor}
      tabsComponentStyle={tabsComponentStyle}
      renderItemStyle={renderItemStyle}
      onChange={(index: string) => onChange(index)}
    />
  );
};

export default UITabs;
