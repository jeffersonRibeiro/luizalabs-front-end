import React, { Component } from 'react';
import { connect } from 'react-redux';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import IosHeart from 'react-ionicons/lib/IosHeart';
import MdClose from 'react-ionicons/lib/MdClose';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';
import { addFavorite, removeFavorite } from '../../services/favorites/actions';

import './style.scss';

class SearchResult extends Component {
  state = {
    isResultVisible: true
  };

  closeResult = () => {
    this.setState({ isResultVisible: false });
  };

  componentWillUpdate(nextProps) {
    if (this.props.searchResult !== nextProps.searchResult) {
      this.setState({ isResultVisible: true });
    }
  }

  render() {
    let { searchResult, favoritePlaces } = this.props;
    const { isResultVisible } = this.state;

    // searchResult = {
    //   city: 'São Paulo - SP',
    //   neighborhood: 'Vila Indiana',
    //   street: 'Rua Abadia dos Dourados',
    //   zipCode: '05586-030'
    // };

    if (isObjectEmpty(searchResult) || !isResultVisible) {
      return null;
    }

    if (!!searchResult.erro) {
      return <div>CEP inválido!</div>;
    }

    let favoriteButton = null;
    const alreadyInFavorite = !!favoritePlaces.filter(
      p => p.zipCode === searchResult.zipCode
    ).length;

    if (alreadyInFavorite) {
      favoriteButton = (
        <button onClick={() => this.props.removeFavorite(searchResult)}>
          <IosHeart color="#48dbfb" />
        </button>
      );
    } else {
      favoriteButton = (
        <button onClick={() => this.props.addFavorite(searchResult)}>
          <IosHeart color="#c8d6e5" />
        </button>
      );
    }

    return (
      <div className="search-result">
        <div className="search-result-actions">
          {favoriteButton}
          <button onClick={this.closeResult}>
            <MdClose color="#576574" />
          </button>
        </div>
        <Place place={searchResult} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.search.result,
  favoritePlaces: state.favorite.places
});

export default connect(
  mapStateToProps,
  { addFavorite, removeFavorite }
)(SearchResult);
