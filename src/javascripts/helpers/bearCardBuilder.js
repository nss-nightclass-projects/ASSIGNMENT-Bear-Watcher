const bearCardBuilder = (bearArray) => {
  const bearEl = document.querySelector('#bearCards');

  bearEl.innerHTML = '';

  bearArray.forEach((bear, i) => {
    bearEl.innerHTML += `<div class='card my-2' id=${i}>
                    <img src='${bear.url}' class='card-img-top' alt='Picture of ${bear.name} the bear'>                
                    <div class='card-body'>
                      <h.card-title>${bear.name}</h.card-title>
                      <br>
                     <!-- <button type='button' class='btn bg-danger bg-gradient border border-dark border-3 rounded-pill' id='${i}'>Button Placeholder </button> -->
                    </div>
                  </div>`;
  });
};

export default bearCardBuilder;
