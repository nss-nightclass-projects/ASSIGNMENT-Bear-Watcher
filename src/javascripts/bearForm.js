import printToDom from './printToDom';
import buttonEvents from './buttonEvents';

const bearForm = () => {
  const domString = `<form>
    <div class="form-group">
      <label for="bearName">Enter Bear Name</label>
      <input type="text" class="form-control" id="bearName">
    </div>
    <div class="form-group">
      <label for="bearImage">Add Bear Image</label>
      <input type="url" class="form-control" id="bearImage">
    </div>
    <button type="submit" class="btn btn-secondary" id="submitBtn">Submit</button>
  </form>`;
  printToDom('#bearForm', domString);
  buttonEvents();
};

export default bearForm;
