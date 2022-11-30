import React from 'react';

import UITabsView from './ui-tabs-view';

interface IUITabsProps {
  tabId: string;
  tabItems: any;
  tabIndex: number;
  activeTabStyle: object;
  inActiveTabStyle: object;
  activeTextColor: string;
  tabsComponentStyle?: object;
  inActiveTextColor: string;
  renderItemStyle?: object;
  onChange(index: number): void;
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
  tabIndex,
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
      tabIndex={tabIndex}
      activeTabStyle={activeTabStyle}
      inActiveTabStyle={inActiveTabStyle}
      activeTextColor={activeTextColor}
      inActiveTextColor={inActiveTextColor}
      tabsComponentStyle={tabsComponentStyle}
      renderItemStyle={renderItemStyle}
      onChange={(index: number) => onChange(index)}
    />
  );
};

export default UITabs;
