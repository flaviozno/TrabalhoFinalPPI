const dateFormatter = (date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

const currencyFormatter = (currency) => {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(currency);
};
