import React from "react";
import EventDetails from "./EventDetails";

function EventsList(props) {
  const { events } = props;

  return events.map(event => <EventDetails event={event} />);
}

export default EventsList;
