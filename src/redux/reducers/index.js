import {
  FETCH_EVENTS_BEGIN,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from "../constants/action-types";

const initialState = {
  loading: false,
  error: null,
  events: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_EVENTS_SUCCESS:
      console.log("action.payload.events", action.payload.events);
      return {
        ...state,
        loading: false,
        events: action.payload.events
      };

    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        events: []
      };

    default:
      return state;
  }
}
