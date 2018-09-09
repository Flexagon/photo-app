import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImagesList from '../Components/ImagesList';
import { getImages, toggleImage } from '../Actions/imagesAction';

class Favorite extends Component {
  componentWillMount() {}

  render() {
    const { toggleImageAction } = this.props;
    const images = JSON.parse(window.localStorage.getItem('images'));

    console.log(images);

    return (
      <div className="Images">
        <ImagesList data={images} toggleImage={toggleImageAction} />
      </div>
    );
  }
}

const mapStateToProps = store => ({ data: store.data });

const mapDispatchToProps = dispatch => ({
  toggleImageAction: id => dispatch(toggleImage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorite);

Favorite.propTypes = {
  toggleImageAction: PropTypes.func.isRequired,
};
