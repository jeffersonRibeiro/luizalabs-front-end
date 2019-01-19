import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './services/store';

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export default Root;
