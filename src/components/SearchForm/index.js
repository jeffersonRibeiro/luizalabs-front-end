import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCEP } from '../../services/search/actions';

import './style.scss';
class SearchForm extends Component {
  state = {
    cep: '05586030'
  };

  handleSubmit = e => {
    this.props.fetchCEP(this.state.cep);

    e.preventDefault();
  };

  handleChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { cep } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div>CEP</div>
        <input
          className="search-input"
          type="text"
          name="cep"
          onChange={this.handleChange('cep')}
          value={cep}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default connect(
  null,
  { fetchCEP }
)(SearchForm);
