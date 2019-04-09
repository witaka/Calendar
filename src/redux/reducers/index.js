import {
  FETCH_EVENTS_BEGIN,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from "../constants/action-types";

import { INITIAL_STATE } from "../constants/initialState";

export default function eventsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
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
