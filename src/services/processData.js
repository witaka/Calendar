import icsToJson from "./icsToJson";
import currentDate from "./currentDate";

const processData = events => {
  events = icsToJson(events).sort((a, b) => a.startDate - b.startDate);

  events = events.map(event => {
    const container = {};
    container.startDate = event.startDate;
    container.endDate = event.endDate;
    container.description = event.description.replace(/\\n|\\/gm, "");

    return container;
  });

  let now = currentDate();
  events = events.filter(event => event.startDate > now);

  return events;
};

export default processData;
