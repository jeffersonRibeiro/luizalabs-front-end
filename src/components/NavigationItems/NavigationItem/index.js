import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItems = ({ path, children }) => (
  <li>
    <NavLink exact to={path}>
      {children}
    </NavLink>
  </li>
);

export default NavigationItems;
