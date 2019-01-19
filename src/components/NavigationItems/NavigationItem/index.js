import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItems = ({ path, value }) => (
  <li>
    <NavLink exact to={path}>
      {value}
    </NavLink>
  </li>
);

export default NavigationItems;
