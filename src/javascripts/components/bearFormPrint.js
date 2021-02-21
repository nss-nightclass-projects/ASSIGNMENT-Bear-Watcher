const bearFormPrint = () => {
  document.querySelector('#bearForm').innerHTML = `<form>
  <div class="form-group">
    <label for="bearName">Bear's Name</label>
    <input type="text" class="form-control" id="bearName" aria-describedby="bearName">
    <small id="emailHelp" class="form-text text-muted">Whats this fuzzy wuzzy's name?</small>
  </div>
  <div class="form-group">
    <label for="bearUrl">Image Link</label>
    <input type="url" class="form-control" id="bearUrl" required />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
};

export default bearFormPrint;
