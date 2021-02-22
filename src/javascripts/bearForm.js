const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

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
};

export { bearForm };
