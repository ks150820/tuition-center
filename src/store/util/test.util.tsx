import React from 'react';
import {
  render as rtlRender,
  RenderAPI,
  renderHook as rtlRenderHook,
} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import reducers from '../reducer';

const render = (
  component: React.ReactElement<any>,
  {
    preloadedState,
    store = configureStore({reducer: reducers, preloadedState}),
    ...renderOptions
  }: any = {},
): RenderAPI => {
  const wrapper = ({children}: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(component, {wrapper: wrapper, ...renderOptions});
};

const renderHook = (
  viewController: any,
  args: any = {},
  preloadedState?: any,
  ProviderWrapper?: any,
  providerWrapperArgs?: any,
) => {
  const wrapper = ({children}: any) => {
    const store = configureStore({
      reducer: reducers,
      preloadedState,
      middleware: (getDefaultMiddleware: any) => [
        ...getDefaultMiddleware({serializableCheck: false}),
      ],
    });

    if (ProviderWrapper) {
      return (
        <Provider store={store}>
          <ProviderWrapper {...providerWrapperArgs}>{children}</ProviderWrapper>
        </Provider>
      );
    }

    return <Provider store={store}>{children}</Provider>;
  };

  const {result} = rtlRenderHook(() => viewController(args), {wrapper});

  return {
    result,
  };
};

export {render, renderHook};
