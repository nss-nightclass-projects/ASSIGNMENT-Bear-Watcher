import attemptFish from '../helpers/data/attemptCatch';
import bearFormInput from '../helpers/data/bearFormInput';
import catchFish from '../helpers/data/catchFish';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
      bearFormInput(e);
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
