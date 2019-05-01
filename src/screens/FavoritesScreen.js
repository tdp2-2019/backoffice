import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

import Screen from "./Screen";
import ArtistList from "../components/ArtistList";
import { getFavorites } from "../store/selectors";

class FavoritesScreen extends Component {
  render() {
    const { artists } = this.props;

    return (
      <Screen title="Favorites">
        {isEmpty(artists) ? (
          <h2>No se encontraron favoritos</h2>
        ) : (
          <ArtistList artists={artists} />
        )}
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  console.log("a", getFavorites(state));
  return {
    artists: getFavorites(state)
  };
};

export default connect(mapStateToProps)(FavoritesScreen);
