import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const bearFormInput = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearUrl').value;
  const fishCaught = Math.floor(Math.random() * 15);
  const catchAttempts = Math.floor(Math.random() * 15);
  const timeMinutesCatch = Math.floor(Math.random() * 60);
  const timeHoursCatch = Math.floor(Math.random() * 24);
  const timeMinutesAttempt = Math.floor(Math.random() * 60);
  const timeHoursAttempt = Math.floor(Math.random() * 24);

  const newObj = {
    name,
    imageUrl,
    fishCaught: {
      amount: fishCaught,
      time: `${timeHoursCatch}:${timeMinutesCatch}`,
    },
    catchAttempts: {
      amount: catchAttempts,
      time: `${timeHoursAttempt}:${timeMinutesAttempt}`,
    }
  };
  bears.push(newObj);
  bearCardPrint(bears);
  form.reset();
};

export default bearFormInput;
