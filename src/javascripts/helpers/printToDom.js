const printToDom = (divId, printedString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printedString;
};

export default printToDom;
