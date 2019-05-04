import { REQUEST_ARTISTS, RECEIVE_ARTISTS } from "../actions/artists";

const defaultState = {
  data: [],
  isFetching: false
};

export default function artists(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_ARTISTS: {
      return {
        ...state,
        isFetching: true
      };
    }

    case RECEIVE_ARTISTS: {
      const { artists } = action;
      return {
        ...state,
        isFetching: false,
        data: artists
      };
    }

    default:
      return state;
  }
}
