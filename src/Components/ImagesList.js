import React from 'react';
import PropTypes from 'prop-types';
import ImagesItem from './ImagesItem';

const ImgList = (props) => {
  const { data } = props;

  return (
    <ul>
      {data.length ? data.map(item => <ImagesItem url={item.urls.small} key={item.id} />) : ''}
    </ul>
  );
};

ImgList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ImgList;
