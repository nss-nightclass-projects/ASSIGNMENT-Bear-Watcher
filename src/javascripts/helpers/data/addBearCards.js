import PrintBearCards from './printBearCards';
import GetCurrentDate from './getCurrentDate';
import bearsArr from './bearData';

let bearIDCount = 0;

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

export default AddBearCards;
