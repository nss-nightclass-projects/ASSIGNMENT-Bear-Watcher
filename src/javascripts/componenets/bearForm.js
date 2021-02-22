import renderToDom from './helpers';

const bears = [];

const createBearCards = () => {
  let domString = '';
  bears.forEach((bear, i) => {
    domString += `<div class="card my-2" style="width: 12rem; margin: .5em;" id=${i}>
                    <img class="card-img-top" src=${bear.imgUrl}"/>
                      <div class="card-body">
                        <center><h4 class="card-text">${bear.name}</h4></center>
                        <hr>
                      <button type="button" class="btn btn-light"><img src="https://cdn3.iconfinder.com/data/icons/glypho-signs/64/fish-fishing-512.png" style="width: 30%";></button>
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
          <label for="inputBearName" class="form-label">Bear Name</label>
          <input type="text" class="form-control" id="bear-name-input" placeholder="enter bear name...">
        </div>

        <div class="mb-3">
          <label for="inputBearName" class="form-label">Image Url</label>
          <input type="text" class="form-control" id="bear-url-input" placeholder="enter image url...">
        </div>
        
        </form>
        <br>
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>`;

  renderToDom('#bear-form', domstring);
  handleButtonEvents();
};

export default showBearForm;
