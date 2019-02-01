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
      </main>
    );
  }
}

export default App;
