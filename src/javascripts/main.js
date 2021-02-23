import '../styles/main.scss';

let bearIDCount = 0;
const bearsArr = [];

const PrintBearCards = () => {
  const outputElement = document.querySelector('#riverContainer');
  outputElement.innerHTML = '';
  bearsArr.forEach((bear) => {
    outputElement.innerHTML += `
                                <div class="card my-2" style="width: 25rem;" id="${bear.bearID}">
                                  <div class="img-container"
                                    style="background-image: url('${bear.bearURL}')"></div>
                                  <div class="card-body">
                                    <p>The bear's name is:${bear.bearName}</p>
                                    <div class="buttons-constainer">
                                      <div class="tryToCatchContainer">
                                        <button type="button" class="btn btn-primary" value="trytoCatch" id="${bear.bearID}">Try to Catch</button>
                                        <p>${bear.bearFishCaughtAttempts} attempts to catch </p>
                                        <P>Time last attempt:</P>
                                        <p>${bear.bearFishCaughtAttempts === 0 ? '' : bear.AttemptedTime}</p>
                                      </div>
                                      <div class="catchAFishContainer">
                                        <button type="button" class="btn btn-primary" value="catchingAFish" id="${bear.bearID}">Catch a fish</button>
                                        <p>${bear.bearFishCaught} fish caught</p>
                                        <P>Time last caught:</P>
                                        <p>${bear.bearFishCaught === 0 ? '' : bear.caughtTime}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `;
  });
};

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

const AddBearCards = (e) => {
  e.preventDefault();
  const bearID = bearIDCount;
  const bearName = document.querySelector('#bearName').value;
  const bearURL = document.querySelector('#bearURL').value;
  const bearFishCaughtAttempts = 0;
  const AttemptedTime = GetCurrentDate();
  const bearFishCaught = 0;
  const caughtTime = GetCurrentDate();
  document.querySelector('#bearName').value = '';
  document.querySelector('#bearURL').value = '';

  bearIDCount += 1;
  const bearObj = {
    bearID,
    bearName,
    bearURL,
    bearFishCaughtAttempts,
    AttemptedTime,
    bearFishCaught,
    caughtTime,
  };
  bearsArr.push(bearObj);
  PrintBearCards();
};

const UpdateCatchingFishAttempt = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);
  const targerClassName = e.target.value;

  if (targerClassName === 'trytoCatch') {
    if (targetType === 'button') {
      const indexOfBear = bearsArr.findIndex((bear) => bear.bearID === targetId);
      if (indexOfBear !== -1) {
        bearsArr[indexOfBear].bearFishCaughtAttempts += 1;
        bearsArr[indexOfBear].AttemptedTime = GetCurrentDate();
      }
    }
  }

  PrintBearCards();
};

const UpdateFishCaught = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);
  const targerClassName = e.target.value;

  if (targerClassName === 'catchingAFish') {
    if (targetType === 'button') {
      const indexOfBear = bearsArr.findIndex((bear) => bear.bearID === targetId);
      if (indexOfBear !== -1) {
        bearsArr[indexOfBear].bearFishCaught += 1;
        bearsArr[indexOfBear].caughtTime = GetCurrentDate();
      }
    }
  }
  PrintBearCards();
};

const ButtonEvents = () => {
  document.querySelector('#submitBear').addEventListener('click', AddBearCards);
  document.querySelector('#riverContainer').addEventListener('click', UpdateCatchingFishAttempt);
  document.querySelector('#riverContainer').addEventListener('click', UpdateFishCaught);
};

const init = () => {
  ButtonEvents();
};

init();
