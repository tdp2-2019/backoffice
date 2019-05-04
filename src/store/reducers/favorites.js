import { TOGGLE_ARTIST_AS_FAVORITE } from "../actions/favorites";

const defaultState = {};

export default function favorites(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_ARTIST_AS_FAVORITE: {
      const { artistId } = action;

      return {
        ...state,
        [artistId]: !state[action.artistId]
      };
    }
    default:
      return state;
  }
}
