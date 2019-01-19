import React, { Component } from 'react';
import { connect } from 'react-redux';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import MdClose from 'react-ionicons/lib/MdClose';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';
import { addFavorite } from '../../services/favorites/actions';

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
    let { searchResult } = this.props;
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

    return (
      <div className="search-result">
        <div className="search-result-actions">
          <button onClick={() => this.props.addFavorite(searchResult)}>
            <IosHeartOutline />
          </button>
          <button onClick={this.closeResult}>
            <MdClose />
          </button>
        </div>
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
  { addFavorite }
)(SearchResult);
