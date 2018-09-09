import React from 'react';
import PropTypes from 'prop-types';
import ImagesItem from './ImagesItem';

const ImgList = (props) => {
  const { data } = props;

  return (
    <ul className="Images-list">
      {data.length ? data.map(item => <ImagesItem url={item.urls.small} key={item.id} id={item.id} />) : ''}
    </ul>
  );
};

ImgList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ImgList;
