import '../styles/main.scss';
import bears from './helpers/river';

const bearBuilder = (bearArray) => {
  const bearEl = document.querySelector('#bearCards');

  bearEl.innerHTML = '';

  bearArray.forEach((bear, i) => {
    bearEl.innerHTML += `<div class='card my-2' id=${i}>
                    <img src='${bear.url}' class='card-img-top' alt='Picture of ${bear.name} the bear'>                
                    <div class='card-body'>
                      <h.card-title>${bear.name}</h.card-title>
                      <br>
                      <button type='button' class='btn bg-danger bg-gradient border border-dark border-3 rounded-pill' id='${i}'>Button Placeholder </button>
                    </div>
                  </div>`;
  });
};

const toggleForm = () => {
  const formDiv = document.querySelector('#form-div');
  if (formDiv.style.display === 'none') {
    formDiv.style.display = 'block';
  } else if (formDiv.style.display === 'block') {
    formDiv.style.display = 'none';
  }
};

const trackBear = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const url = document.querySelector('#url').value;
  const obj = {
    name,
    url,
  };
  bears.push(obj);
  bearBuilder(bears);
};

const buttonEvents = () => {
  document.querySelector('#newBearBtn').addEventListener('click', toggleForm);
  document.querySelector('form').addEventListener('submit', trackBear);
};

const init = () => {
  bearBuilder(bears);
  buttonEvents();
};

init();
