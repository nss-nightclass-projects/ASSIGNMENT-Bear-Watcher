import trackNewBear from './trackNewBear';

const buttonEvents = () => {
  document.querySelector('#app').addEventListener('submit', trackNewBear);
};

export default buttonEvents;
