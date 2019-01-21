import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IosHeart from 'react-ionicons/lib/IosHeart';
import MdMap from 'react-ionicons/lib/MdMap';

import Map from './Map';
import { addFavorite, removeFavorite } from '../../services/favorites/actions';
import { theme } from '../../services/util';

import './style.scss';

class Place extends Component {
  static propTypes = {
    place: PropTypes.object,
    noMap: PropTypes.bool,
    favoritePlaces: PropTypes.array
  };

  state = {
    withMap: false
  };

  showMap = () => {
    this.setState({ withMap: true });
  };

  render() {
    const { place, noMap, favoritePlaces } = this.props;

    if (!place) {
      return null;
    }

    let favoriteButton = null;
    const alreadyInFavorite = !!favoritePlaces.filter(
      favoritePlace => favoritePlace.zipCode === place.zipCode
    ).length;

    if (alreadyInFavorite) {
      favoriteButton = (
        <button
          className="place-favorite-button"
          onClick={() => this.props.removeFavorite(place)}
        >
          <IosHeart color={theme.heartActiveColor} />
        </button>
      );
    } else {
      favoriteButton = (
        <button
          className="place-favorite-button"
          onClick={() => this.props.addFavorite(place)}
        >
          <IosHeart color="#c8d6e5" />
        </button>
      );
    }

    return (
      <div className="place">
        <h3 className="place-title">{place.street}</h3>
        <div className="place-desc">
          <p>{place.neighborhood}</p>
          <p>{place.city}</p>
          <p>{place.zipCode}</p>
        </div>

        {(!noMap || this.state.withMap) && (
          <Map
            zipCode={place.zipCode}
            alt={place.street}
            title={place.street}
          />
        )}
        <div className="place-actions">
          {favoriteButton}
          {noMap && !this.state.withMap && (
            <button className="show-map-button" onClick={this.showMap}>
              <MdMap color={theme.primaryColor} />
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favoritePlaces: state.favorite.places
});

export default connect(
  mapStateToProps,
  { addFavorite, removeFavorite }
)(Place);
