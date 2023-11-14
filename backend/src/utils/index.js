const dateFormatter = (date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const compareDates = (date1, date2) => {
  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {
    return 0;
  }
};

const addDays = (daysToAdd) => {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + daysToAdd);
  return dateFormatter(newDate);
};

module.exports = {
  dateFormatter,
  addDays,
  compareDates
};
