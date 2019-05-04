export const SEARCH_ARTISTS = "SEARCH_ARTISTS";

export function searchArtists(searchText) {
  return {
    type: SEARCH_ARTISTS,
    searchText
  };
}
