export const getMonthName = (date) => {
  let name = date.toLocaleString('en-us', { month: 'long' });
  return name;
};

export const checkTodayDate = (str, todayDate) => {
  let correctStr = str.split('-').reverse().join('-');
  let date = new Date(correctStr);

  if (
    date.getFullYear() == todayDate.getFullYear() &&
    date.getMonth() == todayDate.getMonth() &&
    date.getDate() == todayDate.getDate()
  ) {
    return true;
  }
};

export const dateToString = (date) => {
  let result = date
    .toLocaleString('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3');

  return result;
};
