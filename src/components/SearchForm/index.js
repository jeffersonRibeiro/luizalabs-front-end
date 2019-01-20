import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';

import Spinner from '../Spinner';
import { fetchCEP } from '../../services/search/actions';

import './style.scss';
class SearchForm extends Component {
  state = {
    cep: '',
    isLoading: true
  };

  handleSubmit = e => {
    e.preventDefault();

    const { cep } = this.state;
    if (cep.length !== 9) {
      window.alert('CEP inválido!');
      return;
    }
    this.setState({ isLoading: true });
    this.props.fetchCEP(this.state.cep, () => {
      this.setState({ isLoading: false });
    });
  };

  handleChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { cep, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div class="search-label">CEP</div>
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

        {isLoading && <Spinner />}
      </form>
    );
  }
}

export default connect(
  null,
  { fetchCEP }
)(SearchForm);
