import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getImages } from '../Actions/imagesAction';

class SearchImages extends Component {
  onSearchChange = (e) => {
    const { getImagesAction } = this.props;

    getImagesAction(e.target.value);
  }

  render() {
    const { data } = this.props;

    return (
      <input
        onChange={this.onSearchChange}
        className="Header-search"
        value={data.word}
        placeholder="Search..."
        type="search"
      />
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
)(SearchImages);

SearchImages.propTypes = {
  getImagesAction: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};
