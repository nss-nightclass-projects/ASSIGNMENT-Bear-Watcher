import '../styles/main.scss';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bearForm = () => {
  cost domstring += `<form>
    <div class="form-group">
      <label for="bearName">Enter Bear Name</label>
      <input type="text" class="form-control" id="bearName">
    </div>
    <div class="form-group">
      <label for="bearImage"></label>
      <input type="url" class="form-control" id="bearImage">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
  printToDom('#bearForm', domString);
};

const init = () => {
  bearForm();
};

init();
