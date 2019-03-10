import reducer from "../../../src/redux/reducers/index";

import {
  FETCH_EVENTS_BEGIN,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from "../../../src/redux/constants/action-types";

import events from "../../calendar.js";

describe("eventsReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      events: []
    });
  });

  it("should handle FETCH_EVENTS_BEGIN", () => {
    expect(
      reducer(
        {
          loading: false,
          error: null,
          events: []
        },
        {
          type: FETCH_EVENTS_BEGIN
        }
      )
    ).toEqual({
      loading: true,
      error: null,
      events: []
    });
  });

  it("should handle FETCH_EVENTS_SUCCESS", () => {
    expect(
      reducer(
        {
          loading: true,
          error: null,
          events: []
        },
        {
          type: FETCH_EVENTS_SUCCESS,
          payload: { events }
        }
      )
    ).toEqual({
      loading: false,
      error: null,
      events: events
    });
  });

  it("should handle FETCH_EVENTS_FAILURE", () => {
    var error = new Error("Unable to load data: Network error");
    expect(
      reducer(
        {
          loading: true,
          error: null,
          events: []
        },
        {
          type: FETCH_EVENTS_FAILURE,
          payload: { error }
        }
      )
    ).toEqual({
      loading: false,
      error: error,
      events: []
    });
  });
});
