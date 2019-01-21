import React from 'react';
import PropTypes from 'prop-types';

const Map = ({ zipCode, alt, title }) => (
  <img
    className="google-map"
    alt={alt}
    title={title}
    src={`https://maps.googleapis.com/maps/api/staticmap?center=${zipCode}&zoom=18&markers=size:mid%7Ccolor:red%7C${zipCode}&size=600x400&key=AIzaSyCW3d9QMkhbwAcXa6mHj-Y-TnsMjcfW6uk`}
  />
);

Map.propTypes = {
  zipCode: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string
};

export default Map;
