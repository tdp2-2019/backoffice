import React, { Component } from "react";

class SearchBar extends Component {
  handleOnInput = evt => {
    const { value } = evt.target;
    const { onSearch } = this.props;

    onSearch && onSearch(value);
  };

  render() {
    const { style } = this.props;
    return (
      <div className="SearchBar" style={style}>
        <img
          src="https://static.thenounproject.com/png/101791-200.png"
          alt="search"
        />
        <input onInput={this.handleOnInput} placeholder="Filter" />
      </div>
    );
  }
}

export default SearchBar;
