import renderToDOM from '../helpers/renderToDOM';

const bears = [];

const bearCardBuilder = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i += 1) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                      <div class="img-container" style="background-image: url('${arr[i].imageUrl}');"></div>
                      <div class="card-body">
                        <p class="card-text">${arr[i].name}</p>
                        <p class="card-text">${arr[i].type}</p>
                        <p class="card-text">${arr[i].imageUrl}</p>
                        <button type="button" class="btn btn-light fish" id="${i}"><img src="./styles/Images/SockeyeL.jpg"></button>
                      </div>
                    </div>`;
  }

  renderToDOM('#bear-card-container', domString);
};

export { bears, bearCardBuilder };
