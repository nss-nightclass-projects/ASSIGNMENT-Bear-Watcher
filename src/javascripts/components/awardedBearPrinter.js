import bears from '../helpers/data/bearData';
import printToDom from '../helpers/printToDom';

const awardedBearPrinter = () => {
  const newBears = [];
  const awardedBears = () => {
    let first = 0;
    let second = 0;
    let third = 0;
    const newArr = bears.slice(0).sort((a, b) => b.fishCaught.amount - a.fishCaught.amount);
    newArr.forEach((element) => {
      if (element.fishCaught.amount > first) {
        first = element.fishCaught.amount;
      }
      if (element.fishCaught.amount > second && element.fishCaught.amount < first) {
        second = element.fishCaught.amount;
      }
      if (element.fishCaught.amount > third && element.fishCaught.amount < second) {
        third = element.fishCaught.amount;
      }
    });
    newArr.forEach((element, i) => {
      if (Object.values(element.fishCaught).includes(first)) {
        newBears.push(element);
        newArr[i].place = 'first';
      }
      if (Object.values(element.fishCaught).includes(second)) {
        newBears.push(element);
        newArr[i].place = 'second';
      }
      if (Object.values(element.fishCaught).includes(third)) {
        newBears.push(element);
        newArr[i].place = 'third';
      }
    });
    return newBears;
  };
  awardedBears();
  let domString = '';
  newBears.forEach((element, i) => {
    domString += `<div class="card bear-card" id=${i}>
    <img src="${element.imageUrl}" class="card-img-top h-50" alt="">
    <div class="card-body ${element.place}">
      <h5 class="card-title text-center w-75 ml-auto mr-auto pb-3">${element.name}</h5>
      <div class="fish-container d-flex justify-content-around align-items-center">
        <div>
          <p id="catchTime">Last Catch: ${element.fishCaught.time} CST</p>
        </div>
        <div>
          <p id="attemptTime">Last Attempt: ${element.catchAttempts.time} CST</p>
        </div>
      </div>
      <div class="fishcount-container w-100 ml-auto mr-auto text-center"><h3>${element.fishCaught.amount}</h3></div>
    </div>
  </div>`;
  });
  printToDom('#awardsContainer', domString);
};

export default awardedBearPrinter;
