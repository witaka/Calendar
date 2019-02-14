import React, { Component } from "react";
import Events from "../requests/events";
import processData from "../services/processData";
import UrlForm from "./UrlForm";
import EventsList from "./EventsList";
import EventDetails from "./EventDetails";
import Progress from "./Progress";
import singlePerson from "../images/singlePerson.png";
import groupOf3 from "../images/groupOf3.png";

let url =
  "https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics";

class EventsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.newFile = this.newFile.bind(this);

    this.state = {
      loading: true,
      events: []
    };
  }

  componentDidMount() {
    Events.getFile(url).then(events => {
      events = processData(events);
      this.setState({
        loading: false,
        events: events
      });
    });
  }

  newFile = params => {
    this.setState({
      loading: true,
      events: []
    });

    Events.getFile(params).then(events => {
      events = processData(events);
      this.setState({
        loading: false,
        events: events
      });
    });
  };

  render() {
    const { loading, events } = this.state;
    const [first, ...rest] = events;

    if (loading) {
      return (
        <main className="App">
          <div>
            <Progress />
          </div>
        </main>
      );
    }

    return (
      <main className="App">
        <div>
          <div className="firstEvent">
            <div
              style={{
                width: "100%"
              }}
            >
              <h2>NEXT UP</h2>
            </div>
            <EventDetails event={first} />
            <div>
              <div>
                <img src={groupOf3} className="groupOf3Img" alt="" />
                <h3>-</h3>
              </div>
              <div>
                <img src={singlePerson} className="singlePersonImg" alt="" />
                <h3>Why so serious?</h3>
              </div>
            </div>
          </div>
          <div className="timeline-wrapper">
            <EventsList events={rest} />
          </div>
        </div>
        <div>
          <UrlForm onSubmit={this.newFile} />
        </div>
      </main>
    );
  }
}

export default EventsIndexPage;
