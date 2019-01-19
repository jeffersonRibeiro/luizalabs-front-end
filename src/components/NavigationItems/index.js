import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationItems = () => (
  <nav class="navigation-links">
    <ul>
      <NavigationItem path="/search" value="Search" />
      <NavigationItem path="/favorites" value="Favorites" />
    </ul>
  </nav>
);

export default NavigationItems;
