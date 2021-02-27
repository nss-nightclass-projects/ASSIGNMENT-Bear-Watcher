import printToDom from './data/components/printToDom';

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

export default bearBuilder;
