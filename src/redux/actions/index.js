import { FETCH_EVENTS_BEGIN } from "../constants/action-types";
import { FETCH_EVENTS_SUCCESS } from "../constants/action-types";
import { FETCH_EVENTS_FAILURE } from "../constants/action-types";
import Events from "../../requests/events";
import processData from "../../services/processData";

let url =
  "https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics";

export function fetchEvents(params) {
  return dispatch => {
    dispatch(fetchEventsBegin());
    return Events.getFile(url)
      .then(events => {
        console.log(events.length);
        dispatch(fetchEventsSuccess(processData(events)));
        return events;
      })
      .catch(error => dispatch(fetchEventsFailure(error)));
  };
}

export const fetchEventsBegin = () => ({
  type: FETCH_EVENTS_BEGIN
});

export const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: { events }
});

export const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  payload: { error }
});
