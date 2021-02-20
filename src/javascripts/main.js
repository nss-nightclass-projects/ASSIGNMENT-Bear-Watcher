import '../styles/main.scss';
import bearForm from './modules/bearForm';
import bearData from '../assets/data/bearData';
import river from './modules/river';

let bearIndex = 0;

const listenNewBear = (e) => {
  e.preventDefault();
  if (e.target.id === 'bear-submit') {
    const bearName = document.getElementById('bearName').value;
    const bearUrl = document.getElementById('bearUrl').value;
    const fishingAttempts = [];
    const newBear = {
      bearIndex,
      bearName,
      bearUrl,
      fishingAttempts
    };
    bearData.push(newBear);
    // console.warn(bearData);
    // console.warn(time);
    bearIndex += 1;
    document.getElementById('bearName').value = '';
    document.getElementById('bearUrl').value = '';
    river();
  }
};

const fishingAttempt = (caught, bearId) => {
  const attempTime = new Date();
  const timeStamp = attempTime.toString();
  const newAttempt = {
    caught,
    timeStamp
  };
  bearData[bearId].fishingAttempts.push(newAttempt);
};

const listenFishing = (e) => {
  // bear id if fishing button clicked
  const bearId = e.target.parentNode.parentNode.id;
  // bear id if missed or caught button clicked
  const fishingBearId = e.target.parentNode.parentNode.parentNode.id;
  const fishingResult = document.getElementById(`fishing-result_${bearId}`);
  console.warn(e.target.id);
  // console.warn(fishingResult.style);
  switch (e.target.id) {
    case `fish-button_${bearId}`:
      console.warn('fish button');
      // fishingResult.classList.remove('collapse');
      fishingResult.classList.toggle('collapse');
      break;
    case `caught_${fishingBearId}`:
      console.warn('caught');
      fishingAttempt(true, fishingBearId);
      river();
      break;
    case `missed_${fishingBearId}`:
      console.warn('missed');
      fishingAttempt(false, fishingBearId);
      river();
      break;
    default:
      break;
  }
};

const buttonListeners = () => {
  document.getElementById('bear-form').addEventListener('click', listenNewBear);
  document.getElementById('bear-river').addEventListener('click', listenFishing);
};

const init = () => {
  bearForm();
  buttonListeners();
};

init();
