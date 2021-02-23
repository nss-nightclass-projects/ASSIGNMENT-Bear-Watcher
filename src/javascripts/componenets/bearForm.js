import renderToDom from './helpers';
import handleButtonEvents from './river';

const showBearForm = () => {
  const domstring = `
        <form>
        <div class="mb-3">
          <label for="inputBearName" class="form-label">Bear Name</label>
          <input type="text" class="form-control" id="bear-name-input" placeholder="enter bear name...">
        </div>

        <div class="mb-3">
          <label for="inputBearName" class="form-label">Image Url</label>
          <input type="text" class="form-control" id="bear-url-input" placeholder="enter image url...">
        </div>
        
        </form>
        <br>
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>`;

  renderToDom('#bear-form', domstring);
  handleButtonEvents();
};

export default showBearForm;
