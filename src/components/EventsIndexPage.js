import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../redux/actions/index";
import Events from "../requests/events";
import processData from "../services/processData";
import EventsList from "./EventsList";
import EventDetails from "./EventDetails";
// import Progress from "./Progress";
import singlePerson from "../images/singlePerson.png";
import groupOf3 from "../images/groupOf3.png";

class EventsIndexPage extends Component {
  render() {
    const { error, loading, events } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <main className="App">
          <div>
            {/* <Progress /> */}
            Loding...
          </div>
        </main>
      );
    }

    const [first, ...rest] = events;

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
      </main>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(EventsIndexPage);
