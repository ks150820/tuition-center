import React, {ReactNode} from 'react';
import {View} from 'react-native';
import UIRow from 'widgets/ui-row';
import {styles} from './resources/styles';

interface IUIControllerContainerProps {
  // Children to be rendered
  children?: ReactNode;
}

/**
 * This component will behave as container for Play, Mute,Full screen & More button
 * @param {IUIControllerContainerProps} props
 * @returns
 */
const UIControllerContainer: React.FunctionComponent<IUIControllerContainerProps> & {
  LeftControllerActions: React.FunctionComponent<IUIControllerContainerProps>;
  RightControllerActions: React.FunctionComponent<IUIControllerContainerProps>;
} = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

// LeftControllerActions contains all left aligned chields of Video controller
const LeftControllerActions: React.FunctionComponent<
  IUIControllerContainerProps
> = ({children}) => {
  return <UIRow style={styles.centerRowContent}>{children}</UIRow>;
};

// RightControllerActions contains all right aligned chields of Video controller
const RightControllerActions: React.FunctionComponent<
  IUIControllerContainerProps
> = ({children}) => {
  return <UIRow style={styles.centerRowContent}>{children}</UIRow>;
};

UIControllerContainer.LeftControllerActions = LeftControllerActions;
UIControllerContainer.RightControllerActions = RightControllerActions;

export {UIControllerContainer};
