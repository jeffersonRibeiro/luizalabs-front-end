import React from 'react';

import './style.scss';

const Place = ({ place, noImage }) => {
  if (!place) {
    return null;
  }

  return (
    <div className="place">
      <h3>{place.street}</h3>
      <p>{place.neighborhood}</p>
      <p>{place.city}</p>
      <p>{place.zipCode}</p>
      {!noImage && (
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${
            place.zipCode
          }&zoom=18&markers=size:mid%7Ccolor:red%7C${
            place.zipCode
          }&size=600x400&key=AIzaSyCW3d9QMkhbwAcXa6mHj-Y-TnsMjcfW6uk`}
        />
      )}
    </div>
  );
};

export default Place;
