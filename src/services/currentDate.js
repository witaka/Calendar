const currentDate = () => {
  let today = new Date(),
    date =
      today.getFullYear() +
      "" +
      (today.getMonth() + 1) +
      "" +
      today.getDate() +
      "" +
      today.getHours() +
      "" +
      today.getMinutes();
  return date;
};

export default currentDate;
