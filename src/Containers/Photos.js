import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImagesList from '../Components/ImagesList';
import { getImages } from '../Actions/imagesAction';

class Photos extends Component {
  componentWillMount() {
    const { getImagesAction } = this.props;

    getImagesAction();
  }

  render() {
    const { data } = this.props;

    if (data.isFetching) return <h2>Загрузка...</h2>;

    return (
      <div className="Images">
        <ImagesList data={data.images} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('store', store);
  return {
    data: store.data,
  };
};

const mapDispatchToProps = dispatch => ({
  getImagesAction: word => dispatch(getImages(word)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photos);

Photos.propTypes = {
  getImagesAction: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};
