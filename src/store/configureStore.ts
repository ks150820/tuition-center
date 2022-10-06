import {configureStore} from '@reduxjs/toolkit';
import apiMiddleware from './middlewares/api-middleware';

// import {api} from '../services';
// import createDebugger from 'redux-flipper';
import reducer from './reducer';
// import addLastFetchMiddleware from './middlewares/add-last-fetch-middleware';
export interface thunkType {
  dispatch: AppDispatch;
  getState: RootState;
}

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
      .prepend(apiMiddleware)
      // prepend and concat calls can be chained
      .concat(),
  enhancers: [],
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
