import React, { Component } from "react";
import { connect } from "react-redux";

import { searchArtists } from "../store/actions/search";

import Header from "../components/Header";
import ErrorScreen from "./ErrorScreen";

class Screen extends Component {
  state = {
    hasError: false
  };

  render() {
    const { title, subtitle, showSearchBar, onSearch, children } = this.props;

    return (
      <div className="Screen">
        <Header
          title={title}
          subtitle={subtitle}
          showSearchBar={showSearchBar}
          onSearch={onSearch}
        />
        {children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: q => dispatch(searchArtists(q))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Screen);
