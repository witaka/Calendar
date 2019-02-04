import React, { Component } from "react";
import icsToJson from "./icsToJson";
import currentDate from "./currentDate";
import Moment from "react-moment";

let url =
  "https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      events: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.text())
      .then(this.onLoad);
  }

  onLoad = events => {
    events = icsToJson(events).sort((a, b) => a.startDate - b.startDate);

    let now = currentDate();
    events = events.filter(e => e.startDate > now);
    events.forEach(
      event => (event.description = event.description.replace(/\\n|\\/gm, ""))
    );

    this.setState({
      loading: false,
      events: events
    });
  };

  render() {
    const { loading } = this.state;
    const { events } = this.state;
    const [first, ...rest] = events;

    const calendarStrings = {
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      lastWeek: "[last] dddd",
      nextWeek: "dddd",
      sameElse: "dddd MMM YY"
    };

    if (loading) {
      return (
        <main className="App">
          <div>
            <h3>loading...</h3>
          </div>
        </main>
      );
    }

    return (
      <main className="App">
        <div>
          <div class="firstEvent">
            <tb>
              <tr>
                <td width="20%">
                  <b>
                    <Moment calendar={calendarStrings}>
                      {first.startDate}
                    </Moment>
                  </b>
                  <br />
                  <b>
                    <Moment format="HH:mm a">{first.startDate}</Moment>
                  </b>
                  <br />
                  <Moment format="HH:mm a">{first.endDate}</Moment>
                </td>
                <td>
                  <p style={{ whiteSpace: "pre-wrap" }}>{first.description}</p>
                </td>
              </tr>
            </tb>
          </div>

          <div class="timeline-wrapper">
            {rest.map(event => (
              <div class="node">
                <tb>
                  <tr>
                    <td width="20%">
                      <Moment calendar={calendarStrings}>
                        {event.startDate}
                      </Moment>
                      <br />
                      <Moment format="HH:mm a">{event.startDate}</Moment>
                      <br />
                      <Moment format="HH:mm a">{event.endDate}</Moment>
                    </td>
                    <td>{event.description}</td>
                  </tr>
                </tb>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
