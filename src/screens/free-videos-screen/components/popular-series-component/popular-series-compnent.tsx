import React from 'react';
import usePopularSeriesComponentController from './popular-series-component-controller';

import PopularSeriesComponentView from './popular-series-component-view';

const PopularSeriesComponent = ({onCardPress}: any) => {
    const {popularSeries} = usePopularSeriesComponentController();
    return <PopularSeriesComponentView data={popularSeries} onCardPress={onCardPress} />;
}

export default PopularSeriesComponent;
