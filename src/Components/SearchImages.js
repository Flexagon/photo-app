import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchImages extends Component {
  state = {
    searchText: '',
  };

  onSearchChange = (e) => {
    const { onSearch } = this.props;

    this.setState({ searchText: e.target.value });
    onSearch(e.target.value);
  };

  render() {
    const { searchText } = this.state;

    return (
      <input
        onChange={this.onSearchChange}
        value={searchText}
        placeholder="Search..."
        type="search"
      />
    );
  }
}

SearchImages.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
