Single Page Web Application that takes an ICS format URL, parses calendar events, filters them by start date/time, and displays them in a human-friendly way. Used React.js, Hooks and Ridox to store the data, Jest, HTML/CSS,  JavaScript, and Git. 

To run the app, you need to install the "Allow-Control-Allow-Origin: * " extension for Google Chrome to perform cross-domain Fetch requests in the app.

The current functionality of the Calendar app includes:
1. Fetch data from the pre-selected calendar URL, https://calendar.google.com/calendar/ical/pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com/public/basic.ics or custom calendar URL, entered in the "Update Calendar from URL" form.
2. Process data:
   ·  convert ICS to JSON,
   ·  sort by closest date to NOW, and
   ·  remove all line breaks from an event description.
3. Display the current event on top and other future events as a list below.
4. Display a loading progress bar from Material UI.
