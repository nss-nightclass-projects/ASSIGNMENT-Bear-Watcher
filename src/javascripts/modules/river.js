import paintDom from './paintDom';
import bearData from '../../assets/data/bearData';

const calcFishCaught = (attempts) => {
  let sum = 0;
  attempts.forEach((item) => {
    if (item.caught) {
      sum += 1;
    }
  });
  return sum;
};

const statList = (attemptsArr, limit) => {
  let attemptStr = '<ul class="fishing-list">';
  let outcome = '';
  let i = 0;
  for (i = 0; i < limit && i < attemptsArr.length; i += 1) {
    if (attemptsArr[i].caught) {
      outcome = 'Caught';
    } else {
      outcome = 'Missed';
    }
    attemptStr += `<li>${outcome}: ${attemptsArr[i].timeStamp}</li>`;
  }
  attemptStr += '</ul>';
  return attemptStr;
};

const fullStats = (fishingAttempts, id) => {
  const fishCaught = calcFishCaught(fishingAttempts);
  let modalStr = `<div class="modal" id="fishing-stats-modal_${id}" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Fishing stats</h5>
          <button type="button" class="close" id="modal-button-x_${id}" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" id="modal-x-out_${id}">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Total Attempts: ${fishingAttempts.length}</p>
          <p>Total Caught: ${fishCaught}</p>`;
  modalStr += statList(fishingAttempts, 100000);
  modalStr += `</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" id="modal-dismiss_${id}">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  return modalStr;
};

const river = () => {
  let bearString = '';
  bearData.forEach((item) => {
    const fishCaught = calcFishCaught(item.fishingAttempts);
    bearString += `
      <div class="card" id=${item.bearIndex} style="width: 18rem;">
        <img src="${item.bearUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.bearName}</h5>
          <p class="fish">Fish attempts: ${item.fishingAttempts.length}</p>
          <p class="fish">Fish caught: ${fishCaught}</p>
          <div class="fishing-stats">
            <p>Latest Attempts</p>`;
    if (item.fishingAttempts.length) {
      bearString += statList(item.fishingAttempts, 6);
    } else {
      bearString += '<p>none</p>';
    }
    bearString += '</div>'; // fishing-stats
    bearString += `<div id="fishing-result_${item.bearIndex}">
            <button class="btn btn-primary caught-fish" id="caught_${item.bearIndex}">Caught fish!</>
            <button class="btn btn-primary missed-fish" id="missed_${item.bearIndex}">Missed fish</>
          </div>`;
    bearString += fullStats(item.fishingAttempts, item.bearIndex);
    bearString += `<button class="btn btn-primary full-stats" type="button" data-toggle="collapse" 
             data-target="#fishing-result_${item.bearIndex}" aria-expanded="false" 
             aria-controls="collapseExample" id="view-stats_${item.bearIndex}">
             View Stats
          </button>
        </div>
      </div>`;
  });
  paintDom('#bear-river', bearString);
};

export { river, calcFishCaught };
