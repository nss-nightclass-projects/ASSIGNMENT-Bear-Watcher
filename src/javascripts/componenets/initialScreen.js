import renderToDom from './helpers';

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
    <div class="container" id="bear-form"></div>
  </div>
  <div class="container" id="river"></div>`;

  renderToDom('body', domString);
};

export default initialScreen;
