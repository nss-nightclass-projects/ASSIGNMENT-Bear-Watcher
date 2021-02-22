import { calcFishCaught } from './river';

const compareBearsDesc = (a, b) => {
  const sumA = calcFishCaught(a.fishingAttempts);
  const sumB = calcFishCaught(b.fishingAttempts);

  return sumB - sumA;
};

// const compareWinners = (a, b) => b.Count - a.Count;

const fattestBear = (bearArr) => {
  // making a copy to avoid re-arranging the bears
  // in the river
  const bearArrCopy = [...bearArr];
  const winners = [];
  let name = '';
  let count = '';
  let awardStr = '';
  let winnerObj = {};
  const tie = false;
  let ties = false;
  awardStr += `<div class="awards">
  <button type="click" class="btn btn-primary" id="bearAwards">Show fattest bears</button>`;
  if (bearArrCopy.length > 1) {
    bearArrCopy.sort(compareBearsDesc);
  }
  for (let i = 0; i < 3 && i < bearArrCopy.length; i += 1) {
    name = bearArrCopy[i].bearName;
    count = calcFishCaught(bearArrCopy[i].fishingAttempts);
    winnerObj = {
      name,
      count,
      tie
    };
    winners.push(winnerObj);
  }
  // Print awards, but only if there are winners.
  if (winners.length) {
    if (winners[0].count === 0) {
      awardStr += '<p class="award-heading">No winners, no fish caught.</p>';
    } else
    // Tied for Gold
    if (winners.length > 1 && winners[1].count === winners[0].count) {
      winners[0].tie = true;
      winners[1].tie = true;
      ties = true;
      if (winners.length > 2 && winners[2].count === winners[1].count) {
        winners[2].tie = true;
      }
      awardStr += '<p class="award-heading">Tied for Gold:</p>';
      awardStr += `<p>${winners[0].name}, Total Fish: ${winners[0].count}</p>`;
      for (let i = 1; i < winners.length && winners[i].tie; i += 1) {
        awardStr += `<p>${winners[i].name}, Total Fish: ${winners[i].count}</p>`;
      }
      if (winners.length > 2 && !winners[2].tie) {
        awardStr += '<p class="award-heading">Bronze Medal:</p>';
        awardStr += `<p>${winners[2].name}, Total Fish: ${winners[2].count}</p>`;
      }
    } else
    // Tied for Silver
    if (winners.length > 2 && !winners[0].tie && winners[2].count === winners[1].count) {
      winners[1].tie = true;
      winners[2].tie = true;
      ties = true;
      awardStr += '<p class="award-heading">Gold Medal:</p>';
      awardStr += `<p>${winners[0].name}, Total Fish: ${winners[0].count}</p>`;
      awardStr += '<p class="award-heading">Tied for Silver:</p>';
      for (let i = 1; i < 3; i += 1) {
        awardStr += `<p>${winners[i].name}, Total Fish: ${winners[i].count}</p>`;
      }
    }

    if (!ties) {
      if (winners[0].count) {
        awardStr += '<p class="award-heading">Gold Medal:</p>';
        awardStr += `<p>${winners[0].name}, Total Fish: ${winners[0].count}</p>`;
      }
      if (winners.length > 1 && winners[1].count) {
        awardStr += '<p class="award-heading">Silver Medal:</p>';
        awardStr += `<p>${winners[1].name}, Total Fish: ${winners[1].count}</p>`;
      }
      if (winners.length > 2 && winners[2].count) {
        awardStr += '<p class="award-heading">Bronze Medal:</p>';
        awardStr += `<p>${winners[2].name}, Total Fish: ${winners[2].count}</p>`;
      }
    }
  }
  winnerObj.length = 0;
  awardStr += '</div>';
  return awardStr;
};

export default fattestBear;
