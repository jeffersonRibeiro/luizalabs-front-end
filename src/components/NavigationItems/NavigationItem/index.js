import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = ({ path, children }) => (
  <li>
    <NavLink exact to={path}>
      {children}
    </NavLink>
  </li>
);

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  chidren: PropTypes.element
};

export default NavigationItem;
