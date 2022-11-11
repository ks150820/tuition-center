import React from 'react';
import {render} from '@store/util/test.util';
import SliderView from '../ui-slider-view';

test('Slider renders correctly', () => {
  render(<SliderView currentProgress={60} onValueChange={jest.fn()} />);
});
