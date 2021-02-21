import bearCardBuilder from './bearCardBuilder';
import bears from './river';

const trackNewBear = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const url = document.querySelector('#url').value;
  const obj = {
    name,
    url,
  };
  bears.push(obj);
  bearCardBuilder(bears);
  document.querySelector('form').reset();
};

export default trackNewBear;
