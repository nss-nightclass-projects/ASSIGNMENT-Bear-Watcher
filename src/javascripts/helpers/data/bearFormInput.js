import awardedBearPrinter from '../../components/awardedBearPrinter';
import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const bearFormInput = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearUrl').value;
  const place = false;
  const fishCaught = Math.floor(Math.random() * 15);
  const catchAttempts = Math.floor(Math.random() * 15);
  let timeMinutesCatch = Math.floor(Math.random() * 60);
  const timeHoursCatch = Math.floor(Math.random() * 24);
  let timeMinutesAttempt = Math.floor(Math.random() * 60);
  const timeHoursAttempt = Math.floor(Math.random() * 24);
  if (timeMinutesAttempt < 10) {
    timeMinutesAttempt = `0${timeMinutesAttempt}`;
  }
  if (timeMinutesCatch < 10) {
    timeMinutesCatch = `0${timeMinutesCatch}`;
  }

  const newObj = {
    name,
    imageUrl,
    place,
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
  awardedBearPrinter(bears);
  form.reset();
};

export default bearFormInput;
