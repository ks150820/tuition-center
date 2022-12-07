import React, {ReactElement} from 'react';
import UICardView from './ui-card-view';

interface IUICardProps {
  style?: object;
  children: JSX.Element;
}

const UICard = ({style = {}, children}: IUICardProps): ReactElement => {
  return <UICardView children={children} style={style} />;
};

export default UICard;
