import React from 'react';
import {Icon, IconProps} from '@rneui/themed';

interface IUIIconProps extends IconProps {}

/**
 * Common widget to render icon
 * @param {IUIIconProps} props
 * @returns
 */
const UIIcon: React.FunctionComponent<IUIIconProps> = props => {
  return <Icon {...props} />;
};

export {UIIcon};
