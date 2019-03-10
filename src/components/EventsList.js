import React from "react";
import EventDetails from "./EventDetails";

function EventsList(props) {
  const { events } = props;
  let i = 0;
  return events.map(event => (
    <div className="node" key={i++}>
      <EventDetails event={event} />
    </div>
  ));
}

export default EventsList;
