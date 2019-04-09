import reducer from "../../../src/redux/reducers/index";

import {
  FETCH_EVENTS_BEGIN,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from "../../../src/redux/constants/action-types";

import { INITIAL_STATE } from "../../../src/redux/constants/initialState";

import events from "../../calendar.js";

const EVENTS_BEGIN_STATE = {
  loading: true,
  error: null,
  events: []
};

const FETCH_EVENTS_SUCCESS_STATE = {
  loading: false,
  error: null,
  events: events
};

describe("eventsReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle FETCH_EVENTS_BEGIN", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: FETCH_EVENTS_BEGIN
      })
    ).toEqual(EVENTS_BEGIN_STATE);
  });

  it("should handle FETCH_EVENTS_SUCCESS", () => {
    expect(
      reducer(EVENTS_BEGIN_STATE, {
        type: FETCH_EVENTS_SUCCESS,
        payload: { events }
      })
    ).toEqual(FETCH_EVENTS_SUCCESS_STATE);
  });

  it("should handle FETCH_EVENTS_FAILURE", () => {
    var error = new Error("Unable to load data: Network error");
    expect(
      reducer(EVENTS_BEGIN_STATE, {
        type: FETCH_EVENTS_FAILURE,
        payload: { error }
      })
    ).toEqual({
      loading: false,
      error: error,
      events: []
    });
  });
});
