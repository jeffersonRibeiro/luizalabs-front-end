import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IosHeart from 'react-ionicons/lib/IosHeart';
import MdMap from 'react-ionicons/lib/MdMap';

import { addFavorite, removeFavorite } from '../../services/favorites/actions';

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
        <button onClick={() => this.props.removeFavorite(place)}>
          <IosHeart color="#48dbfb" />
        </button>
      );
    } else {
      favoriteButton = (
        <button onClick={() => this.props.addFavorite(place)}>
          <IosHeart color="#c8d6e5" />
        </button>
      );
    }

    return (
      <div className="place">
        <h3 className="place-title">{place.street}</h3>
        <p>{place.neighborhood}</p>
        <p>{place.city}</p>
        <p>{place.zipCode}</p>
        {(!noMap || this.state.withMap) && (
          <img
            className="google-map"
            alt={place.street}
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${
              place.zipCode
            }&zoom=18&markers=size:mid%7Ccolor:red%7C${
              place.zipCode
            }&size=600x400&key=AIzaSyCW3d9QMkhbwAcXa6mHj-Y-TnsMjcfW6uk`}
          />
        )}
        <div className="place-actions">
          {favoriteButton}
          {noMap && !this.state.withMap && (
            <button className="show-map-button" onClick={this.showMap}>
              <MdMap color="#7e40af" />
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
