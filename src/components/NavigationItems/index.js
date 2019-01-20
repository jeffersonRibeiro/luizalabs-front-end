import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IosSearch from 'react-ionicons/lib/IosSearch';
import IosHeart from 'react-ionicons/lib/IosHeart';

import NavigationItem from './NavigationItem';

import './style.scss';

const NavigationItems = ({ favoritePlaces }) => {
  let hearthIcon = null;

  if (favoritePlaces.length > 0) {
    hearthIcon = <IosHeart beat color="#48dbfb" />;
  } else {
    hearthIcon = <IosHeart color="#c8d6e5" />;
  }

  return (
    <nav className="navigation-items">
      <ul>
        <NavigationItem path="/search">
          <IosSearch />
          Search
        </NavigationItem>
        <NavigationItem path="/favorites">
          {hearthIcon}
          Favorites
        </NavigationItem>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  favoritePlaces: state.favorite.places
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(NavigationItems)
);
