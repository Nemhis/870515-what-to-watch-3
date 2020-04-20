export const formatDate = (date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const MINUTES_PER_HOUR = 60;
const SECOND_PER_MINUTE = 60;

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

export const parseDuration = (totalSeconds) => {
  const totalMinutes = Math.floor(totalSeconds / SECOND_PER_MINUTE);
  const seconds = totalSeconds % SECOND_PER_MINUTE;

  const hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  const minutes = totalMinutes % MINUTES_PER_HOUR;

  return [
    hours,
    minutes,
    seconds
  ];
};

export const formatDuration = (durationInSec) => {
  const [hours, minutes, seconds] = parseDuration(durationInSec);

  return [
    hours,
    String(minutes).padStart(2, `0`),
    String(seconds).padStart(2, `0`),
  ].join(`:`);
};

export const extend = (a, b) => Object.assign({}, a, b);

export const arrayUnique = (array) => {
  return array.filter((value, index, arr) => arr.indexOf(value) === index);
};
