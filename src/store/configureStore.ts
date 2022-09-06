import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import apiMiddleware from './middlewares/api-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

// import {api} from '../services';
// import createDebugger from 'redux-flipper';
import reducer from './reducer';
// import addLastFetchMiddleware from './middlewares/add-last-fetch-middleware';
export interface thunkType {
  dispatch: AppDispatch;
  getState: RootState;
}
const composedEnhancer = composeWithDevTools(applyMiddleware(apiMiddleware));

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(thunk)
      // prepend and concat calls can be chained
      .concat(),
  enhancers: [composedEnhancer],
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
