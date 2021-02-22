import renderToDom from '../helpers/helpers';

const bears = [];

const createBearCards = () => {
  let domString = '';
  for (let i = 0; i < bears.length; i += 1) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                      <div class="card-body">
                        <p class="card-text">${bears[i].name}</p>
                        <p class="card-text">${bears[i].url}</p>
                        <button type="button" class="btn btn-light" id="${i}">Fish</button>
                      </div>
                    </div>`;
  }

  renderToDom('#river', domString);
};

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name-input').value;
  const imgURL = document.querySelector('#bear-url-input').value;

  const obj = {
    name,
    imgURL,

  };

  bears.push(obj);
  createBearCards();

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
          <div class="input-group-prepend"><span class="input-group-text" id="basic-addon3">http://...</span></div>
          <input type="text" class="form-control" id="bear-url-input" aria-describedby="basic-addon3" placeholder="enter image url...">
        </div>
        </form>
        <br>
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>`;

  renderToDom('#bear-form', domstring);
  handleButtonEvents();
};

export default showBearForm;
