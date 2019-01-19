import React from 'react';
import { connect } from 'react-redux';

import Place from '../Place';
import { isObjectEmpty } from '../../services/util';

const SearchResult = ({ searchResult }) => {
  if (isObjectEmpty(searchResult)) {
    return null;
  }

  return (
    <React.Fragment>
      <Place place={searchResult} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  searchResult: state.search.result
});

export default connect(
  mapStateToProps,
  {}
)(SearchResult);
