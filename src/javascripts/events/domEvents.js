import bearFormInput from '../helpers/data/bearFormInput';
import { catchFish, attemptFish } from '../helpers/data/catchFish';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
      if (document.querySelector('#bearName').value === '' || document.querySelector('#bearUrl').value === '') {
        e.preventDefault();
        document.querySelector('#errorBox').innerHTML = 'You must provide a name and URL.';
      } else {
        document.querySelector('#errorBox').innerHTML = '';
        bearFormInput(e);
      }
    }
    if (e.target.id.includes('catch')) {
      catchFish(e);
    }
    if (e.target.id.includes('attempt')) {
      attemptFish(e);
    }
  });
};

export default domEvents;
