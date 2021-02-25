import printToDom from './printToDom';

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

export default buildRiver;
