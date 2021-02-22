import paintDom from './paintDom';

const pageFrame = () => {
  const pageStr = `<heading>
    <div class="title">
      <h1>Bear Watcher</h1>
      <h2>Track the fishing activites of your favorite bears.</h2>
    </div>
  </heading>
  <div class="bear-input d-flex justify-content-around flax-wrap" id="bear-form"></div>
  <div class="bear-data d-flex justify-content-around flex-wrap" id="bear-river"></div>`;

  paintDom('#app', pageStr);
};

export default pageFrame;
