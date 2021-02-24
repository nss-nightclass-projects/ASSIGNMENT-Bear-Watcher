import bearsArr from './bearData';

const PrintBearCards = () => {
  const outputElement = document.querySelector('#riverContainer');
  outputElement.innerHTML = '';
  bearsArr.forEach((bear) => {
    outputElement.innerHTML += `
                                <div class="card my-2" style="width: 25rem;" id="${bear.bearID}">
                                  <div class="img-container"
                                    style="background-image: url('${bear.bearURL}')"></div>
                                  <div class="card-body">
                                    <p>The bear's name is:${bear.bearName}</p>
                                    <div class="buttons-constainer">
                                      <div class="tryToCatchContainer">
                                        <button type="button" class="btn btn-primary" value="trytoCatch" id="${bear.bearID}">Try to Catch</button>
                                        <p>${bear.bearFishCaughtAttempts} attempts to catch </p>
                                        <P>Time last attempt:</P>
                                        <p>${bear.bearFishCaughtAttempts === 0 ? '' : bear.AttemptedTime}</p>
                                      </div>
                                      <div class="catchAFishContainer">
                                        <button type="button" class="btn btn-primary" value="catchingAFish" id="${bear.bearID}">Catch a fish</button>
                                        <p>${bear.bearFishCaught} fish caught</p>
                                        <P>Time last caught:</P>
                                        <p>${bear.bearFishCaught === 0 ? '' : bear.caughtTime}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                `;
  });
};

export default PrintBearCards;
