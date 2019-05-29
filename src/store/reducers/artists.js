import {REQUEST_ARTISTS, RECEIVE_ARTISTS, RECEIVE_TRIPS, REQUEST_TRIPS} from "../actions/artists";

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
      console.log(action);
      console.log(artists);
      return {
        ...state,
        isFetching: false,
        data: artists
      };
    }

      case REQUEST_TRIPS: {
          return {
              ...state,
              isFetching: true
          };
      }


      case RECEIVE_TRIPS: {
          const { trips } = action;
          console.log(action);
          console.log(trips);
          return {
              ...state,
              isFetching: false,
              data: trips
          };
      }


    default:
      return state;
  }
}
