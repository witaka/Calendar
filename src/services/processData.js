import icsToJson from "./icsToJson";
import currentDate from "./currentDate";

const processData = events => {
  events = icsToJson(events).sort((a, b) => a.startDate - b.startDate);
  events.forEach(
    event => (event.description = event.description.replace(/\\n|\\/gm, ""))
  );

  let now = currentDate();
  events = events.filter(e => e.startDate > now);

  return events;
};

export default processData;
