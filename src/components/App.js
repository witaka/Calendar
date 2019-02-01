import React, { Component } from "react";
import icsToJson from "./icsToJson";
import Moment from "react-moment";

let url =
  "https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      data: data
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map(event => (
            <li>
              <p>
                <Moment format="YYYY/MM/DD">{event.startDate}</Moment>
              </p>
              <p>
                <Moment format="HH:mm">{event.startDate}</Moment>
              </p>
              <p>
                <Moment format="YYYY/MM/DD">{event.endDate}</Moment>
              </p>
              <p>
                <Moment format="HH:mm">{event.endDate}</Moment>
              </p>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <p>{event.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
