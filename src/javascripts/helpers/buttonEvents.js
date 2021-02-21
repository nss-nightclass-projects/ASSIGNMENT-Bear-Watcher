import toggleForm from './toggleForm';
import trackNewBear from './trackNewBear';

const buttonEvents = () => {
  document.querySelector('#newBearBtn').addEventListener('click', toggleForm);
  document.querySelector('form').addEventListener('submit', trackNewBear);
};

export default buttonEvents;
