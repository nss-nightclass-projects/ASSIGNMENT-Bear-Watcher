import renderToDOM from '../helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  <div class="container bear-form" id="bear-form">
<form>
  <div class="mb-3">
    <label for="inputBearName" class="form-label">Enter Bear Name...</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="bearImageURL" class="form-label">Enter Bear Image URL...</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
      `;
  renderToDOM('body', domString);
};

export default initialScreen;
