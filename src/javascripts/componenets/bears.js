import renderToDom from './helpers';

const bears = [];

const createBearCards = () => {
  let domString = '';
  bears.forEach((bear, i) => {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <img class="card-img-top" src=${bear.imgUrl}"/>
                      <div class="card-body">
                        <h4 class="card-text">${bear.name}</h4>
                        <hr>
                      <button type="button" class="btn btn-dark">Fish</button>
                    </div>
                  </div>`;
  });

  renderToDom('#river', domString);
};

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name-input').value;
  const imgUrl = document.querySelector('#bear-url-input').value;

  const obj = {
    name,
    imgUrl,

  };

  bears.push(obj);
  createBearCards(bears);

  document.querySelector('form').reset();
};

const handleButtonEvents = () => {
  document.querySelector('#submit').addEventListener('click', getFormInfo);
};

const showBearForm = () => {
  const domstring = `
        <form>
        <div class="mb-3">
          <label for="inputBearName" class="form-label">Enter Bear Name...</label>
          <input type="text" class="form-control" id="bear-name-input" placeholder="enter bear name..." aria-describedby="enterBearName">
        </div>

        <label for="basic-url">Enter URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text" id="basic-addon3">URL Only</span></div>
          <input type="text" class="form-control" id="bear-url-input" aria-describedby="basic-addon3" placeholder="enter image url...">
        </div>
        </form>
        <br>
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>`;

  renderToDom('#bear-form', domstring);
  handleButtonEvents();
};

export default showBearForm;
