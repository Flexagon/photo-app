import React from 'react';
import PropTypes from 'prop-types';
import ImagesItem from './ImagesItem';

const ImagesList = (props) => {
  const { data, toggleImage } = props;

  return (
    <ul className="Images-list">
      {data.length ? (
        data.map(item => (
          <ImagesItem
            url={item.urls.small}
            key={item.id}
            id={item.id}
            toggleImage={toggleImage}
            isChecked={item.liked_by_user}
          />
        ))
      ) : ''}
    </ul>
  );
};

ImagesList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  toggleImage: PropTypes.func.isRequired,
};

export default ImagesList;
