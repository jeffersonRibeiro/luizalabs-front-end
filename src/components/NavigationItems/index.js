import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import IosHeart from 'react-ionicons/lib/IosHeart';

import NavigationItem from './NavigationItem';

import './style.scss';

const NavigationItems = () => (
  <nav className="navigation-items">
    <ul>
      <NavigationItem path="/search">
        <IosSearch />
        Search
      </NavigationItem>
      <NavigationItem path="/favorites">
        <IosHeart />
        Favorites
      </NavigationItem>
    </ul>
  </nav>
);

export default NavigationItems;
