import {configureStore} from '@reduxjs/toolkit';
// import {api} from '../services';
// import createDebugger from 'redux-flipper';
import reducer from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend
      // correctly typed middlewares can just be used

      // you can also type middlewares manually
      // untypedMiddleware as Middleware<
      //   (action: Action<'specialAction'>) => number,
      //   RootState
      // >,
      (),
  // prepend and concat calls can be chained
  // .concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
