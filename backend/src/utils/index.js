const dateFormatter = (date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const addDays = (daysToAdd) => {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + daysToAdd);
  return dateFormatter(newDate);
};

module.exports = {
  dateFormatter,
  addDays,
};
