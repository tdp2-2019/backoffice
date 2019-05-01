import React, { Component } from "react";
import { connect } from "react-redux";

import Screen from "./Screen";
import ArtistList from "../components/ArtistList";

import { fetchArtists } from "../store/actions/artists";
import {
  getArtistsList,
  getSearchText,
  getFavoritesCount,
  getFilteredArtists,
  isFetchingArtists
} from "../store/selectors";

class ArtistsScreen extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const {
      artists,
      isFetching,
      searchText,
      favoritesCount,
      filteredArtists
    } = this.props;
    const isArtistsEmtpy =
      !isFetching && searchText && (!artists || artists.length === 0);

    const subtitle = favoritesCount ? `(${favoritesCount} favorites)` : "";

    return (
      <Screen title="Choferes" subtitle={subtitle} showSearchBar>
        {isFetching && <h2>Cargando...</h2>}
        {isArtistsEmtpy && <h2>No se encontraron choferes</h2>}
        {!isArtistsEmtpy && <ArtistList artists={filteredArtists} />}
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: isFetchingArtists(state),
    artists: getArtistsList(state),
    searchText: getSearchText(state),
    favoritesCount: getFavoritesCount(state),
    filteredArtists: getFilteredArtists(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => {
      dispatch(fetchArtists());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsScreen);
