export const TOGGLE_ARTIST_AS_FAVORITE = "TOGGLE_ARTIST_AS_FAVORITE";

export function toggleArtistAsFavorite(artistId) {
  return {
    type: TOGGLE_ARTIST_AS_FAVORITE,
    artistId
  };
}
