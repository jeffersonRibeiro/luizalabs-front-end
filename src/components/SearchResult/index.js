import React, { Component } from 'react';
import { connect } from 'react-redux';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';

import './style.scss';

class SearchResult extends Component {
  render() {
    let { searchResult } = this.props;

    if (isObjectEmpty(searchResult)) {
      return null;
    }

    if (!!searchResult.erro) {
      return <div>CEP inválido!</div>;
    }

    return (
      <div className="search-result">
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
  {}
)(SearchResult);
