export const formatDate = (date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const MINUTES_PER_HOUR = 60;

export const formatMinutes = (totalMinutes) => {
  let formatParts = [];
  const hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);

  if (hours > 0) {
    formatParts.push(`${hours}h`);
  }

  const minutes = totalMinutes % MINUTES_PER_HOUR;

  if (minutes > 0) {
    formatParts.push(`${minutes}m`);
  }

  return formatParts.join(` `);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
