import printToDom from '../helpers/printToDom';
import awardedBearPrinter from './awardedBearPrinter';
import bears from '../helpers/data/bearData';

const bearCardPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card bear-card" id=${i}>
    <img src="${element.imageUrl}" class="card-img-top h-50" alt="">
    <div class="card-body">
      <h5 class="card-title text-center w-75 ml-auto mr-auto pb-3">${element.name}</h5>
      <div class="fish-container d-flex justify-content-around align-items-center">
        <div class="fish-caught h-25">Fish caught
        </div>
        <div class="fish-numbers h-25"><strong>${element.fishCaught.amount}</strong> : <strong>${element.catchAttempts.amount}</strong>
        </div>
        <div class="fish-attempt h-25">Catch attempts
        </div>
      </div>
      <div class="button-container d-flex justify-content-center">
        <button type="button" class="btn btn-primary m-3" id="catch${i}">CATCH</button>
        <button type="button" class="btn btn-primary m-3" id="attempt${i}">ATTEMPT</button>
      </div>
      <div class="w-100 d-flex justify-content-lg-between h-auto p-0">
        <div>
          <p id="catchTime">Last Catch: ${element.fishCaught.time} CST</p>
        </div>
        <div>
          <p id="attemptTime">Last Attempt: ${element.catchAttempts.time} CST</p>
        </div>
      </div>
    </div>
  </div>`;
  });
  printToDom('#bearRiver', domString);
  awardedBearPrinter(bears);
};

export default bearCardPrint;
