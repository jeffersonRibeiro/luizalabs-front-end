import React from 'react';

import getRoutes from '../../routes';
import NavigationItems from '../NavigationItems';

import './style.scss';
import Logo from './Logo';

const App = () => (
  <div className="app">
    <Logo />
    <div className="app-content">
      <NavigationItems />
      <main>{getRoutes()}</main>
    </div>
  </div>
);

export default App;
