import React, { Component } from "react";

import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    const { title, subtitle, showSearchBar, onSearch } = this.props;
    return (
      <div className="Header">
        <h1>
          {title}
          <span>{subtitle}</span>
        </h1>
        {showSearchBar && (
          <SearchBar
            onSearch={onSearch}
            style={{ position: "absolute", top: 6, right: 30 }}
          />
        )}
      </div>
    );
  }
}

export default Header;
