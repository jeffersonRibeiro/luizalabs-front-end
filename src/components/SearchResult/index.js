import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';

import './style.scss';

class SearchResult extends Component {
  static propTypes = {
    searchResult: PropTypes.object
  };
  render() {
    let { searchResult } = this.props;

    if (isObjectEmpty(searchResult)) {
      return null;
    }
    if (!!searchResult.erro && !!searchResult.erro.message) {
      window.alert(searchResult.erro.message);
      return null;
    } else if (!!searchResult.erro) {
      window.alert('CEP inválido!');
      return null;
    }

    return (
      <div className="search-result">
        <Place place={searchResult} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.search.result
});

export default connect(
  mapStateToProps,
  {}
)(SearchResult);
