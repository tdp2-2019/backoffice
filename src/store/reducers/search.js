import { SEARCH_ARTISTS } from "../actions/search";

const defaultState = {
  text: undefined
};

export default function search(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_ARTISTS: {
      const { searchText } = action;
      return {
        ...state,
        text: searchText
      };
    }

    default:
      return state;
  }
}
