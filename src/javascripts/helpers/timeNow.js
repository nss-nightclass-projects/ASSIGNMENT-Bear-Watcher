const timeStamp = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const minutesFix = () => {
    if (minutes < 10) {
      return `0${minutes}`;
    } return minutes;
  };
  return `${now.getHours()}:${minutesFix()}`;
};

export default timeStamp;
