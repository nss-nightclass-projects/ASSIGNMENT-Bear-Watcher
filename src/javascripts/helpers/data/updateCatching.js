import bearsArr from './bearData';
import PrintBearCards from './printBearCards';
import GetCurrentDate from './getCurrentDate';

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

export default UpdateCatchingFishAttempt;
