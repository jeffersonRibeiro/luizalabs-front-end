import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*

I'm using a node app hosted on Heroku to proxy
the Google Static Map API and secure my API_KEY

*/

const MAP_API_URL = 'https://luiza-labs-static-map.herokuapp.com/';

class Map extends Component {
  static propTypes = {
    zipCode: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string
  };

  state = {
    src: ''
  };

  componentDidMount() {
    const { zipCode } = this.props;
    this.setState({
      src: MAP_API_URL + zipCode
    });
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (nextProps.zipCode !== currentProps.zipCode) {
      this.setState({ src: '' });
    }
  }

  componentWillUpdate(nextProps) {
    const currentProps = this.props;
    if (nextProps.zipCode !== currentProps.zipCode) {
      this.setState({ src: MAP_API_URL + nextProps.zipCode });
    }
  }

  render() {
    const { alt, title } = this.props;

    return (
      <div className="google-map">
        <img alt={alt} title={title} src={this.state.src} />
      </div>
    );
  }
}

export default Map;
