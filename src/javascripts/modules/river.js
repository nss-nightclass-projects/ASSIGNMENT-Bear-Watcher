import paintDom from './paintDom';
import bearData from '../../assets/data/bearData';

const river = () => {
  let bearString = '';
  bearData.forEach((item) => {
    bearString += `
      <div class="card" id=${item.bearIndex} style="width: 18rem;">
        <img src="${item.bearUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.bearName}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn btn-primary">Fish Attempt</>
          <button class="btn btn-primary">Fish Caught</>
        </div>
      </div>`;
  });
  paintDom('#bear-river', bearString);
};

export default river;
