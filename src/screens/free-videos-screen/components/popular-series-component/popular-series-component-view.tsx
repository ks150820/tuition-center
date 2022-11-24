import { PLAY_ICON } from '@assets/icons/svg-icons';
import UICard from '@common/ui-card';
import UIImage from '@common/ui-image';
import SvgToIcon from '@helpers/svg-to-icon';
import colors from '@theme/colors';
import {FONT_TYPE} from '@theme/font';
import UIText from '@widgets/ui-text';
import React, {ReactElement} from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './popular-series-component-style';

interface IPopularSeriesComponentViewProps {}

const PopularSeriesComponentView =
  ({}: IPopularSeriesComponentViewProps): ReactElement => {
    const renderItem = (_item: any) => {
      return (
        <UICard style={styles.card_component}>
          <View>
            <View style={styles.imageComponent}>
              <UIImage
                url={require('@assets/images/vivek_banner.jpg')}
                style={{width: '100%', height: 162, elevation: 0}}
              />
              <View style={styles.playIcon_component}>
                <View style={styles.playIcon_inner_component}>
                  <UIText
                    FontType={FONT_TYPE.PARAGRAPH}
                    style={{fontWeight: '700'}}
                    color={colors.gray_scale.mine_shaft}>
                    15 Videos
                  </UIText>
                  <SvgToIcon xml={PLAY_ICON} width={17} height={17} iconStyle={{marginLeft: 4}} />
                </View>
              </View>
            </View>
            {/* -- intro -- */}
            <View style={{padding: 10}}>
              <UIText
                numberOfLines={2}
                FontType={FONT_TYPE.SUBHEADING}
                style={{fontWeight: '700'}}
                color={colors.gray_scale.mine_shaft}>
                How to prepare for Quant Aptitude
              </UIText>
              <View style={styles.liveClassTextComponent}>
                <UIText
                  FontType={FONT_TYPE.INFO}
                  style={{fontWeight: '600'}}
                  color={colors.primary.cardinal}>
                  Live class included
                </UIText>
              </View>
            </View>
          </View>
        </UICard>
      );
    };
    return (
      <UICard style={styles.component}>
        <View>
          <View>
            <UIText
              FontType={FONT_TYPE.SUBHEADING}
              style={styles.headingText}
              color={colors.gray_scale.mine_shaft}>
              Popular series
            </UIText>
          </View>
          {/* --- cards --- */}
          <View style={{marginVertical: 10}}>
            <FlatList
              keyExtractor={(_item, index) => index + ''}
            //  i am using this dummy array just to show the cards ui, please don't make any comment on it
              data={[1, 2, 3]}
              renderItem={({item}: {item: any}) => renderItem(item)}
              horizontal
            />
          </View>
        </View>
      </UICard>
    );
  };

export default PopularSeriesComponentView;
