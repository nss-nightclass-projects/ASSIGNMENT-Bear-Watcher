import renderToDom from './helpers';

const bears = [];

const createBearCards = () => {
  let domString = '';
  bears.forEach((bear, i) => {
    domString += `<div class="card my-2" style="width: 12rem; margin: .5em;" id=${i}>
                    <img class="card-img-top" src=${bear.imgUrl}"/>
                      <div class="card-body">
                        <center><h5 class="card-text">${bear.name}</h5></center>
                        <hr>
                      <button type="button" class="btn btn-light fish-btn" id="${bear.fishBtn}"><img src="https://cdn3.iconfinder.com/data/icons/glypho-signs/64/fish-fishing-512.png" style="width: 20%";></button>
                      <hr>
                      <p id="caught">Caught: ${bear.caught}</p>
                      <p id="missed">Missed: ${bear.missed}</p>
                    </div>
                  </div>`;
  });

  renderToDom('#river', domString);
};

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name-input').value;
  const imgUrl = document.querySelector('#bear-url-input').value;
  const caught = '';
  const missed = '';

  const obj = {
    name,
    imgUrl,
    caught,
    missed,
  };

  bears.push(obj);
  createBearCards(bears);

  document.querySelector('form').reset();
};

const handleButtonEvents = () => {
  document.querySelector('#submit').addEventListener('click', getFormInfo);
};

export default handleButtonEvents;
