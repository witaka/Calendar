import React, { Component } from "react";
import icsToJson from "./icsToJson";
import Moment from "react-moment";

let url =
  "https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.text())
      .then(this.onLoad);
  }

  onLoad = data => {
    console.log(data);
    data = icsToJson(data);
    console.log(data);

    this.setState({
      loading: false,
      data: data
    });
  };

  render() {
    const { loading } = this.state;
    const { data } = this.state;

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
          <div class="timeline-wrapper">
            {data.map(event => (
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
