export const timeToHumanReadable = (time: number) => {
  let timeDifference = time - Date.now();
  if (timeDifference < 0) {
    timeDifference = Math.abs(timeDifference);
  }

  const days = Math.floor(timeDifference / 86400000);
  const hours = Math.floor((timeDifference % 86400000) / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);

  return parts.slice(0, 2).join(" ");
};
