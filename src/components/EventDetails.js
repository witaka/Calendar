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
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <b>
                <Moment calendar={calendarStrings}>{event.startDate}</Moment>
              </b>
              <br />
              <b>
                <Moment format="HH:mm a">{event.startDate}</Moment>
              </b>
              <br />
              <Moment format="HH:mm a">{event.endDate}</Moment>
            </td>
            <td>{event.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventDetails;
