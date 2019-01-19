import React, { Component } from 'react';
import { connect } from 'react-redux';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import MdClose from 'react-ionicons/lib/MdClose';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';

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

    searchResult = {
      city: 'São Paulo - SP',
      neighborhood: 'Vila Indiana',
      street: 'Rua Abadia dos Dourados',
      zipCode: '05586-030'
    };

    if (isObjectEmpty(searchResult) || !isResultVisible) {
      return null;
    }

    return (
      <div className="search-result">
        <div className="search-result-actions">
          <button>
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
  {}
)(SearchResult);
