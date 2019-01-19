import React from 'react';
import SearchForm from '../../components/SearchForm';
import SearchResult from '../../components/SearchResult';

const Search = () => (
  <React.Fragment>
    <h2>Find a Place</h2>
    <SearchForm />
    <SearchResult />
  </React.Fragment>
);

export default Search;
