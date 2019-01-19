import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    cep: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.cep);
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
          type="text"
          name="cep"
          onChange={this.handleChange('cep')}
          value={cep}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
