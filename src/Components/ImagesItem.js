import React from 'react';
import PropTypes from 'prop-types';

const ImagesItem = (props) => {
  const { url, id } = props;

  return (
    <li className="Images-item">
      <img src={url} alt="" />
      <label htmlFor={id}>
        <input id={id} type="checkbox" />
        Favorite
      </label>
    </li>
  );
};

ImagesItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ImagesItem;
