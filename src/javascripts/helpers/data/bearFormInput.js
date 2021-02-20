import bearCardPrint from '../../components/bearCardPrint';
import bears from './bearData';

const bearFormInput = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearUrl').value;
  const fishCaught = Math.floor(Math.random() * 10);
  const catchAttempts = Math.floor(Math.random() * 10);

  const newObj = {
    name,
    imageUrl,
    fishCaught,
    catchAttempts
  };
  bears.push(newObj);
  bearCardPrint(bears);
  form.reset();
};

export default bearFormInput;
