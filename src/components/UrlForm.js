import React from "react";
import Paper from "@material-ui/core/Paper";
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
    <Paper style={{ padding: "4%" }}>
      <form style={{ width: "900px", padding: "20px" }} onSubmit={handleSubmit}>
        <h1>Download link</h1>
        <div>
          <input id="url" name="url" type="link" />
        </div>
        <Button color="primary" variant="contained" type="submit">
          Download
        </Button>
      </form>
    </Paper>
  );
}

export default UrlForm;
