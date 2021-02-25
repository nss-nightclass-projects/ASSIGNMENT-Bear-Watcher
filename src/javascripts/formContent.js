import buildRiver from './buildRiver';
import bearList from './bearList';

const formContent = (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#bearName').value;
  const imageInput = document.querySelector('#bearImage').value;
  const bearIds = bearList
    .map((bear) => bear.id)
    .sort((a, b) => a - b);
  const id = bearIds.length ? bearIds[bearIds.length - 1] + 1 : 1;

  const newBear = {
    title: nameInput,
    image: imageInput,
    id,
  };

  bearList.push(newBear);
  buildRiver(bearList);
  document.querySelector('form').reset();
};

export default formContent;
