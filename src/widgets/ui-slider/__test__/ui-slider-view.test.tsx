import React from 'react';
import {render} from '../../../test-helper/test-renderer';
import SliderView from '../ui-slider-view';

test('Slider renders correctly', () => {
  render(<SliderView currentProgress={60} onValueChange={jest.fn()} />);
});
