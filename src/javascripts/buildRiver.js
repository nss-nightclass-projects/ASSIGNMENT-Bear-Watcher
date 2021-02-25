import printToDom from './printToDom';
import bearList from './bearList';

const buildRiver = (arr) => {
  let domString = '';
  arr.forEach((bear) => {
    domString += `<div class="card" style="width: 18rem;" id="${bear.id}">
    <h5 class="card-title">${bear.title}</h5>
    <img src="${bear.image}" class="card-img-top" alt="...">
    <button type="button" class="d-inline btn btn-dark">Attempted</button>
    <p id="attemptedCount"></p>
    <button type="button" class="d-inline btn btn-dark">Caught</button>
    <p id="caughtCount"></p>
    </div>
  </div>`;
  });
  printToDom('#river', domString);
};

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

const buttonEvents = () => {
  document.querySelector('#submitBtn').addEventListener('click', formContent);
};

export default buttonEvents;
