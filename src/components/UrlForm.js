import React from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../redux/actions/index";
import Button from "@material-ui/core/Button";

const mapDispatchToProps = {
  fetchEvents
};

function UrlForm(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    const newUrl = formData.get("url");
    if (newUrl) {
      props.fetchEvents(newUrl);
      currentTarget.reset();
      props.history.push("/calendar");
    }
  };

  return (
    <nav className="NavBar">
      <form className="NavForm" onSubmit={handleSubmit}>
        <p>Open Calendar from URL</p>
        <input id="url" name="url" type="link" />
        <Button color="inherit" variant="contained" type="submit">
          Open
        </Button>
      </form>
    </nav>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(UrlForm);
