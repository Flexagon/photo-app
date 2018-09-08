import React from 'react';
import PropTypes from 'prop-types';

const ImagesItem = (props) => {
  const { url } = props;

  return (
    <li className="img-wrap">
      <img src={url} alt="" />
    </li>
  );
};

ImagesItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ImagesItem;
