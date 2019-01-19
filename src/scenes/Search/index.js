import React from 'react';
import SearchForm from '../../components/SearchForm';
import Place from '../../components/Place';

const Search = () => (
  <React.Fragment>
    <h2>Find a Place</h2>
    <SearchForm />
    <Place />
  </React.Fragment>
);

export default Search;
