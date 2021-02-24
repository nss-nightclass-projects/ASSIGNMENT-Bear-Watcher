import bearsArr from './bearData';
import PrintBearCards from './printBearCards';
import GetCurrentDate from './getCurrentDate';

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

export default UpdateFishCaught;
