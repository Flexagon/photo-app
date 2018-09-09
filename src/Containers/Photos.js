import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImagesList from '../Components/ImagesList';
import { getImages, toggleImage } from '../Actions/imagesAction';

class Photos extends Component {
  componentWillMount() {
    const { getImagesAction } = this.props;

    getImagesAction();
  }

  render() {
    const { data, toggleImageAction } = this.props;

    if (data.isFetching) return <h2>Загрузка...</h2>;

    return (
      <div className="Images">
        <ImagesList data={data.images} toggleImage={toggleImageAction} />
      </div>
    );
  }
}

const mapStateToProps = store => ({ data: store.data });

const mapDispatchToProps = dispatch => ({
  getImagesAction: word => dispatch(getImages(word)),
  toggleImageAction: id => dispatch(toggleImage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photos);

Photos.propTypes = {
  getImagesAction: PropTypes.func.isRequired,
  toggleImageAction: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};
