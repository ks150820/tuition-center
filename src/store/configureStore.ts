import {configureStore} from '@reduxjs/toolkit';
import apiMiddleware from './middlewares/api-middleware';
import reducer from './reducer';
const middlewares = [
  /* other middleware */
  apiMiddleware,
];

if (__DEV__) {
  // only for development version
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).prepend(...middlewares),
  // prepend and concat calls can be chained
});
