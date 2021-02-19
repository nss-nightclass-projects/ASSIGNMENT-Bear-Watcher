import renderToDOM from '../helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  <div class="jumbotron">
    <h1 class="display-4">Bear Trackers Unite!</h1>
    <hr class="my-4">
    <p class="lead">Each year between July and September brown bears in the Katmai National Park congregate along the Brooks River. 
      This river is one of the main rivers that Sockeye Salmon swim up to spawn. The brown bears wait in the shallows of the river 
      and catch the salmon as they jump over rocks.</p>
    <p>Want to see it in <a href="https://explore.org/livecams/brown-bears/brown-bear-salmon-cam-brooks-falls">ACTION?</a></p>
    <hr class="my-4">

    <div class="container bear-form" id="bear-form">
      <form>
        <div class="mb-3">
          <label for="inputBearName" class="form-label">Enter Bear Name...</label>
          <input type="tex" class="form-control" id="bear-name-input" placeholder="enter bear name..." aria-describedby="enterBearName">
        </div>
        <label for="basic-url">Enter Bear Image URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">https://example.com/big/fat/bear/</span>
          </div>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
  </div>
</div>`;
  renderToDOM('#bear-form', domString);
};

export default initialScreen;
