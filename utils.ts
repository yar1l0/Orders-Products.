export const formatDate = (date: string | number) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatPrice = (price: number, currency: "USD" | "EUR" = "USD") => {
  const rates = { USD: 1, EUR: 0.92 }; // Заглушка для конверсии валют
  return `${(price * rates[currency]).toFixed(2)} ${currency}`;
};
