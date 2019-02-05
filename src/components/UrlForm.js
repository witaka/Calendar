import React from "react";
import Button from "@material-ui/core/Button";

function UrlForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    const newUrl = formData.get("url");
    onSubmit(newUrl);

    currentTarget.reset();
  };

  return (
    <nav className="NavBar">
      <form className="NavForm" onSubmit={handleSubmit}>
        <p>Update Calendar from URL</p>
        <input id="url" name="url" type="link" />
        <Button color="inherit" variant="contained" type="submit">
          Update
        </Button>
      </form>
    </nav>
  );
}

export default UrlForm;
