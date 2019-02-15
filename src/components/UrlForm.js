import React from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../redux/actions/index";
// import Button from "@material-ui/core/Button";

const mapDispatchToProps = {
  fetchEvents
};

function UrlForm(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    const newUrl = formData.get("url");
    props.fetchEvents(newUrl);
    currentTarget.reset();
    props.history.push("/calendar");
  };

  return (
    <nav className="NavBar">
      <form className="NavForm" onSubmit={handleSubmit}>
        <p>Update Calendar from URL</p>
        <input id="url" name="url" type="link" />
        <button color="inherit" variant="contained" type="submit">
          Update
        </button>
      </form>
    </nav>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(UrlForm);
