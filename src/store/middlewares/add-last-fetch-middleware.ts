import {Dispatch} from 'react';
import {$CombinedState, Action} from 'redux';
import {store} from '../configureStore';

const addLastFetchMiddleware =
  ({getState}) =>
  (next: any) =>
  (action: any) => {
    store.subscribe(() => {
      console.log('UPDATED');
    });

    let object = store.getState();

    setTimeout(() => {
      console.log(JSON.stringify(getState()));
      console.log(JSON.stringify(next));
    }, 0);
  };
export default addLastFetchMiddleware;
