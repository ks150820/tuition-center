import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './missed-classes-component-style';
import UICard from '@common/ui-card';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import UITabs from '@widgets/ui-tabs';
import UIImage from '@common/ui-image';

interface IMissedClassesComponentView {
  tabID: string;
  onChangeTabs(id: string): void;
}

const MissedClassesComponentView = ({
  tabID,
  onChangeTabs,
}: IMissedClassesComponentView): ReactElement => {
  const renderItem = (_item: any) => {
    return (
      <UICard
        style={styles.cards_component}>
        <View>
          <UIImage
            url={require('@assets/images/missed-class-banner.jpg')}
            style={styles.cards_image}
          />
          <View style={styles.cards_intro_component}>
            <UIText
              numberOfLines={2}
              FontType={FONT_TYPE.FONT_THIRTEEN}
              color={colors.gray_scale.mine_shaft}>
              UPSSC course number with Vipul Sir
            </UIText>
          </View>
        </View>
      </UICard>
    );
  };
  return (
    <View style={styles.component}>
      <UICard style={styles.inner_component}>
        <>
          <View style={styles.heading_card_component}>
            {/* -- heading -- */}
            <View>
              <UIText
                FontType={FONT_TYPE.SUBHEADING}
                color={colors.primary.cardinal}
                style={styles.heading_text}>
                Missed Live Classes
              </UIText>
            </View>
            {/* --- tabs --- */}
            <View style={styles.outer_tabs_component}>
              <UITabs
                tabItems={[
                  {id: '1', title: 'All'},
                  {id: '2', title: 'English'},
                  {id: '3', title: 'Maths'},
                  {id: '4', title: 'Science'},
                  {id: '5', title: 'History'},
                  {id: '5', title: 'History'},
                  {id: '5', title: 'History'},
                ]}
                activeTabStyle={styles.activeTabStyle}
                inActiveTabStyle={styles.inActiveTabStyle}
                activeTextColor={colors.gray_scale.white}
                inActiveTextColor={colors.gray_scale.mine_shaft}
                tabsComponentStyle={styles.tabsComponentStyle}
                tabId={tabID}
                onChange={(id: string) => onChangeTabs(id)}
              />
            </View>
            {/* -- cards -- */}
            <View>
              <FlatList
                keyExtractor={(_item, index) => index + ''}
                data={[1, 2, 3]}
                renderItem={({item}: {item: any}) => renderItem(item)}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.viewAll_component}>
            <UIText
              FontType={FONT_TYPE.DISCOUNT}
              style={styles.viewAll_Text}
              textAlign="center"
              color={colors.primary.cardinal}>
              View all
            </UIText>
          </View>
        </>
      </UICard>
    </View>
  );
};

export default MissedClassesComponentView;
