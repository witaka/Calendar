import React from "react";
import Moment from "react-moment";

function EventDetails(props) {
  const { event } = props;
  const calendarStrings = {
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    lastWeek: "[last] dddd",
    nextWeek: "dddd",
    sameElse: "dddd MMM YY"
  };

  return (
    <div class="node">
      <tb>
        <tr>
          <td width="20%">
            <Moment calendar={calendarStrings}>{event.startDate}</Moment>
            <br />
            <Moment format="HH:mm a">{event.startDate}</Moment>
            <br />
            <Moment format="HH:mm a">{event.endDate}</Moment>
          </td>
          <td>{event.description}</td>
        </tr>
      </tb>
    </div>
  );
}

export default EventDetails;
