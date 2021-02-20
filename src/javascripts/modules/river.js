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
          <button class="btn btn-primary" type="button" data-toggle="collapse" 
                  data-target="#fishing-result_${item.bearIndex}" aria-expanded="false" 
                  aria-controls="collapseExample" id="fish-button_${item.bearIndex}">
          Button with data-target
          </button>
          <div class="collapse" id="fishing-result_${item.bearIndex}">
            <button class="btn btn-primary caught-fish" id="caught_${item.bearIndex}">Caught fish!</>
            <button class="btn btn-primary missed-fish" id="missed_${item.bearIndex}">Missed fish</>
          </div>
        </div>
      </div>`;
  });
  paintDom('#bear-river', bearString);
};

export default river;
