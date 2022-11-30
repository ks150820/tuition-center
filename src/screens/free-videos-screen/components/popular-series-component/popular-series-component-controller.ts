import {useSelector} from 'react-redux';

import {getPopularSeries} from '@store/entities/free-videos';

const usePopularSeriesComponentController = () => {
  const popularSeries = useSelector(getPopularSeries);

  return {popularSeries};
};

export default usePopularSeriesComponentController;
