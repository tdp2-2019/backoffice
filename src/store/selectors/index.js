export const getArtistsList = state => state.artists.data;
export const getFavoritesMap = state => state.favorites;
export const getSearchText = state => state.search.text;

export const getTripsList = state => state.artists.data;


export const isFetchingArtists = state => state.artists.isFetching;


export const getFavoritesCount = state =>
  Object.keys(getFavoritesMap(state)).length;

export const getFavorites = state => {
  const allArtists = getArtistsList(state);
  const favorites = getFavoritesMap(state);

  return allArtists.filter(artist => favorites[artist.id]);
};

export const isFavorite = (state, artistId) => getFavoritesMap(state)[artistId];

export const getFilteredArtists = state => {
  const allArtists = getArtistsList(state);
  const searchText = getSearchText(state);
  const re = new RegExp(searchText, "i");

  return allArtists.filter(artist => re.test(artist.name) || re.test(artist.dni) || re.test(artist.carlicenseplate));
};

// export const getFilteredTrips = state => {
//     const allTrips = getTripsList(state);
//     const searchText = getSearchText(state);
//     const re = new RegExp(searchText, "i");
//     console.log(state);
//     return allTrips.filter(trip => re.test(trip.driver_id));
// };

