import React from 'react';

import getRoutes from '../../routes';
import NavigationItems from '../NavigationItems';

import './style.scss';

const App = () => (
  <div className="app">
    <div className="app-title">Imagine a cool name for an app!</div>
    <div className="app-content">
      <NavigationItems />
      <main>{getRoutes()}</main>
    </div>
  </div>
);

export default App;
