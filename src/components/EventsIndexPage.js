import React, { Component } from "react";
import Events from "../requests/events";
import processData from "../services/processData";
import UrlForm from "./UrlForm";
import EventsList from "./EventsList";
import EventDetails from "./EventDetails";
import Moment from "react-moment";
import Progress from "./Progress";
import Button from "@material-ui/core/Button";

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
    console.log(params);
    Events.getFile(params).then(events => {
      events = processData(events);
      this.setState({
        loading: false,
        events: events
      });
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
            <Progress />
          </div>
        </main>
      );
    }

    return (
      <main className="App">
        <div>
          <UrlForm onSubmit={this.newFile} />
        </div>
        <div>
          <div class="firstEvent">
            <EventDetails event={first} />
          </div>
          <div class="timeline-wrapper">
            <EventsList events={rest} />
          </div>
        </div>
      </main>
    );
  }
}

export default EventsIndexPage;
