import renderToDOM from '../helpers/renderToDOM';

const showBearForm = () => {
  const bearFormCard = `
        <form>
        <div class="mb-3">
          <label for="inputBearName" class="form-label">Enter Bear Name...</label>
          <input type="tex" class="form-control" id="bear-name-input" placeholder="enter bear name..." aria-describedby="enterBearName">
        </div>

        <label for="basic-url">Enter URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">http://...</span>
          </div>
          <input type="text" class="form-control" id="bear-url-input" aria-describedby="basic-addon3" placeholder="enter url...">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`;
  renderToDOM('#bear-form', bearFormCard);
};

export default showBearForm;
