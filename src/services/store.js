import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];

  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      favorite: state.favorite
    };
    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};
