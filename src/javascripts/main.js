import '../styles/main.scss';

const bearList = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearForm = () => {
  const domString = `<form>
    <div class="form-group">
      <label for="bearName">Enter Bear Name</label>
      <input type="text" class="form-control" id="bearName">
    </div>
    <div class="form-group">
      <label for="bearImage">Add Bear Image</label>
      <input type="url" class="form-control" id="bearImage">
    </div>
    <button type="submit" class="btn btn-secondary" id="submitBtn">Submit</button>
  </form>`;
  printToDom('#bearForm', domString);
};

const buildBearCard = (arr) => {
  let domString = '';
  arr.forEach((bear) => {
    domString += `<div class="card" style="width: 18rem;" id="${bear.id}">
    <h5 class="card-title">${bear.title}</h5>
    <img src="${bear.image}" class="card-img-top" alt="...">
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
  buildBearCard(bearList);
  document.querySelector('form').reset();
};

const buttonEvents = () => {
  document.querySelector('#submitBtn').addEventListener('click', formContent);
};

const init = () => {
  bearForm();
  buttonEvents();
};

init();
