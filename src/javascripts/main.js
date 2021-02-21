import '../styles/main.scss';
import bearForm from './modules/bearForm';
import bearData from '../assets/data/bearData';
import { river } from './modules/river';
// import fattestBear from './modules/awards';

let bearIndex = 0;

const listenNewBear = (e) => {
  e.preventDefault();
  if (e.target.id === 'bear-submit') {
    const bearNameInput = document.getElementById('bearName');
    const bearUrlInput = document.getElementById('bearUrl');
    const bearName = bearNameInput.value;
    const bearUrl = bearUrlInput.value;
    // console.warn(bearName);
    // console.warn(bearUrl);
    if (!bearName) {
      bearNameInput.placeholder = 'Please enter a bear name';
    }
    if (!bearUrl) {
      bearUrlInput.placeholder = 'Please enter a image url';
    }
    if (bearName && bearUrl) {
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
      bearNameInput.value = '';
      bearUrlInput.value = '';
      bearNameInput.placeholder = 'Enter bear name';
      bearUrlInput.placeholder = 'Enter bear image url';
      bearIndex += 1;
      river();
    }
  }
  if (e.target.id === 'bearAwards') {
    console.warn('bearAwars');
    bearForm();
  }
};

const fishingAttempt = (caught, bearId) => {
  const attempTime = new Date();
  const timeStamp = attempTime.toString().slice(4, 24);
  const newAttempt = {
    caught,
    timeStamp
  };
  bearData[bearId].fishingAttempts.unshift(newAttempt);
};

const listenFishing = (e) => {
  // bear id if fishing button clicked
  const bearId = e.target.parentNode.parentNode.id;
  const modalBearId = e.target.parentNode.parentNode.parentNode.parentNode.id.slice(20);
  const modalXoutBearId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id.slice(20);
  // bear id if missed or caught button clicked
  const fishingBearId = e.target.parentNode.parentNode.parentNode.id;
  // const fishingResult = document.getElementById(`fishing-result_${bearId}`);
  console.warn(e.target.id);
  // console.warn(bearId);
  console.warn(modalBearId);
  console.warn(modalXoutBearId);
  // console.warn(fishingResult.style);
  switch (e.target.id) {
    case `fish-button_${bearId}`:
      // fishingResult.classList.remove('collapse');
      break;
    case `caught_${fishingBearId}`:
      fishingAttempt(true, fishingBearId);
      river();
      break;
    case `missed_${fishingBearId}`:
      fishingAttempt(false, fishingBearId);
      river();
      break;
    case `view-stats_${bearId}`:
      document.querySelector(`#fishing-stats-modal_${bearId}`).style.display = 'block';
      break;
    case `modal-dismiss_${modalBearId}`:
    case `modal-button-x_${modalBearId}`:
      document.querySelector(`#fishing-stats-modal_${modalBearId}`).style.display = '';
      break;
    case `modal-x-out_${modalXoutBearId}`:
      document.querySelector(`#fishing-stats-modal_${modalXoutBearId}`).style.display = '';
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
