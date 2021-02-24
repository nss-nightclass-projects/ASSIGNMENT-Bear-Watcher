const GetCurrentDate = () => {
  const getDateNow = new Date();
  const year = getDateNow.getFullYear();
  const month = (getDateNow.getMonth() + 1).toString().padStart(2, '0');
  const day = getDateNow.getDate().toString().padStart(2, '0');
  const hours = getDateNow.getHours().toString().padStart(2, '0');
  const minutes = getDateNow.getMinutes().toString().padStart(2, '0');
  const seconds = getDateNow.getSeconds().toString().padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

export default GetCurrentDate;
