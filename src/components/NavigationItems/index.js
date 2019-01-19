import React from 'react';

import NavigationItem from './NavigationItem';

import './style.scss';

const NavigationItems = () => (
  <nav className="navigation-items">
    <ul>
      <NavigationItem path="/search" value="Search" />
      <NavigationItem path="/favorites" value="Favorites" />
    </ul>
  </nav>
);

export default NavigationItems;
