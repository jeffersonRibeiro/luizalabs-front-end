import React from 'react';

import getRoutes from '../../routes';
import NavigationItems from '../NavigationItems';

import './style.scss';
import Logo from './Logo';
import Corner from '../github/Corner';

const App = () => (
  <div className="app">
    <Corner />
    <Logo />
    <div className="app-content">
      <NavigationItems />
      <main>{getRoutes()}</main>
    </div>
  </div>
);

export default App;
