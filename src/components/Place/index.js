import React from 'react';

import './style.scss';

const Place = () => (
  <div className="place">
    <h3>Rua Abadia dos Dourados</h3>
    <p>Vila Indiana</p>
    <p>São Paulo - SP</p>
    <p>05586-030</p>
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=05586-030&zoom=18&markers=size:mid%7Ccolor:red%7C05586030&size=600x400&key=AIzaSyCW3d9QMkhbwAcXa6mHj-Y-TnsMjcfW6uk" />
  </div>
);

export default Place;
