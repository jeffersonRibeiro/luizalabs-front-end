import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';

import { fetchCEP } from '../../services/search/actions';

import './style.scss';
class SearchForm extends Component {
  state = {
    cep: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { cep } = this.state;
    if (cep.length !== 9) {
      window.alert('CEP inválido!');
      return;
    }
    this.props.fetchCEP(this.state.cep);
  };

  handleChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { cep } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div>CEP</div>
        <MaskedInput
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
          guide={false}
          className="search-input"
          type="text"
          name="cep"
          onChange={this.handleChange('cep')}
          value={cep}
          placeholder="Type here"
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
