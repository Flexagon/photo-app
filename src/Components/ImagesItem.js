import React from 'react';
import PropTypes from 'prop-types';

const ImagesItem = (props) => {
  const {
    url, id, toggleImage, isChecked,
  } = props;

  return (
    <li className="Images-item">
      <img src={url} alt="" />
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={isChecked} onChange={() => toggleImage(id)} />
        Favorite
      </label>
    </li>
  );
};

ImagesItem.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  toggleImage: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ImagesItem;
