import printToDom from '../helpers/printToDom';

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
        <div class="fish-numbers h-25"><strong>${element.fishCaught}</strong> : <strong>${element.catchAttempts}</strong>
        </div>
        <div class="fish-attempt h-25">Catch attempts
        </div>
      </div>
      <div class="button-container d-flex justify-content-center">
        <button type="button" class="btn btn-primary m-3">Primary</button>
        <button type="button" class="btn btn-primary m-3">Primary</button>
      </div>
      <div class="w-100 d-flex justify-content-lg-between h-auto p-0">
        <div>
          <p>Last Catch: 20m ago.</p>
        </div>
        <div>
          <p>Last Attempt: 35s ago.</p>
        </div>
      </div>
    </div>
  </div>`;
  });
  printToDom('#bearRiver', domString);
};

export default bearCardPrint;
