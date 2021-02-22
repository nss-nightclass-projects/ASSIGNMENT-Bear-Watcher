import '../styles/main.scss';

const bears = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearBuilder = () => {
  let domString = "";
  bears.forEach((item, i) => {
    domString += `<div id="${i}" class="card">
            <div class="card-body">
                  <p class="cardText">${item.name}</p>
                  <p class="cardText">${item.breed}</p>
                  <p class="cardText">${item.food}</p>
                  <button type="button" id="${i}" class="btn btn-primary" id="deleteBtn">Delete</button>
            </div>
          </div>`
  });

  printToDom("#bearsCard", domString);
};

const pullForm = (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const breed = document.querySelector('#breed').value;
  const food = document.querySelector('#food').value;

  const objects = {
    name,
    breed,
    food,
  };

  bears.push(objects);
  bearBuilder(bears);
  document.querySelector('form').reset();
};

const cardRemoval = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    bears.splice(targetId, 1);
  }

  bearBuilder(bears);
};

const clickEvents = () => {
  document.querySelector("#infoForm").addEventListener("submit", pullForm);
  document.querySelector("#bearsCard").addEventListener("click", cardRemoval);
};

const init = () => {
  pullForm();
  cardRemoval();
  bearBuilder();
  // clickEvents();
  $('#app').html
};

init();
