import { calcFishCaught } from './river';

const compareBearsDesc = (a, b) => {
  const sumA = calcFishCaught(a.fishingAttempts);
  const sumB = calcFishCaught(b.fishingAttempts);

  return sumB - sumA;
};

const fattestBear = (bearArr) => {
  const bearArrCopy = [...bearArr];
  let awardStr = `
    <div class="awards">
      <button type="click" class="btn btn-primary" id="bearAwards">Show fattest bears</button>`;
  if (bearArrCopy.length > 1) {
    bearArrCopy.sort(compareBearsDesc);
  }
  if (bearArrCopy.length >= 1) {
    awardStr += `<p class="award-heading">Gold Medal: ${bearArrCopy[0].bearName}</p>
                 <p>Total Fish: ${calcFishCaught(bearArrCopy[0].fishingAttempts)}</p>`;
  }
  if (bearArrCopy.length > 1) {
    awardStr += `<p class="award-heading">Silver Medal: ${bearArrCopy[1].bearName}</p>
                 <p>Total Fish: ${calcFishCaught(bearArrCopy[1].fishingAttempts)}</p>`;
  }
  if (bearArrCopy.length > 2) {
    awardStr += `<p class="award-heading">Bronze Medal: ${bearArrCopy[2].bearName}</p>
                 <p>Total Fish: ${calcFishCaught(bearArrCopy[2].fishingAttempts)}</p>`;
  }
  awardStr += '</div>';
  return awardStr;
};

export default fattestBear;
