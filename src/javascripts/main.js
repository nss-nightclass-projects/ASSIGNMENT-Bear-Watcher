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
    const newBear = {
      bearIndex,
      bearName,
      bearUrl
    };
    bearData.push(newBear);
    console.warn(bearData);
    bearIndex += 1;
    document.getElementById('bearName').value = '';
    document.getElementById('bearUrl').value = '';
    river();
  }
};

const buttonListeners = () => {
  document.getElementById('bear-form').addEventListener('click', listenNewBear);
};

const init = () => {
  bearForm();
  buttonListeners();
};

init();
