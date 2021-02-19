import paintDom from './paintDom';

const bearForm = () => {
  const bearString = `
  <form>
    <h3>Add Bear</h3>
    <div class="form-group">
      <label for="bearName">Bear's Name</label>
      <input type="text" class="form-control" id="bearName" aria-describedby="bearEntry" placeholder="Enter bear name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Image url</label>
      <input type="text" class="form-control" id="bearUrl" placeholder="bear image url">
    </div>
    <button type="submit" class="btn btn-primary" id="bear-submit">Submit</button>
  </form>`;
  paintDom('#bear-form', bearString);
};

export default bearForm;
