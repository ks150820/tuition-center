import {View, Text} from 'react-native';
import React from 'react';
import UIRow from '@widgets/ui-row';
import UIText from '@widgets/ui-text';
import {FONT_TYPE} from '@theme/font';
import Profile from '@assets/icons/profile';

const Header = ({title}: {title: string}) => {
  return (
    <UIRow style={{justifyContent: 'space-between'}}>
      <UIText FontType={FONT_TYPE.HEADING}>{title}</UIText>
      <Profile></Profile>
    </UIRow>
  );
};
const Body = ({body}: {body: string}) => {
  return (
    <UIRow>
      <UIText FontType={FONT_TYPE.HEADING}>{body}</UIText>
    </UIRow>
  );
};
const AccordionView = ({title, body}: {title: string; body: string}) => {
  return (
    <View>
      <Header title={title} />
      <Body body={body} />
    </View>
  );
};

export default AccordionView;
