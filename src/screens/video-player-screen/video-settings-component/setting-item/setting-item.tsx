import React from 'react';
import SettingItemView from './setting-item-view';

/**
 * Binder for setting item
 * @param {ISettingItemProps} props
 * @returns
 */
const SettingItem: React.FunctionComponent<ISettingItemProps> = props => {
  return <SettingItemView {...props} />;
};

export default SettingItem;
