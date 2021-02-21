import paintDom from './paintDom';
import bearData from '../../assets/data/bearData';
import fattestBear from './awards';

const bearForm = () => {
  let bearString = `
  <div class="bear-form">
    <form>
      <h3>Add Bear</h3>
      <div class="form-group row">
        <label for="bearName">Bear's Name</label>
        <input type="text" class="form-control" id="bearName" aria-describedby="bearEntry" placeholder="Enter bear name">
      </div>
      <div class="form-group row">
        <label for="exampleInputPassword1">Image url</label>
        <input type="text" class="form-control" id="bearUrl" placeholder="Enter bear image url">
      </div>
      <button type="submit" class="btn btn-primary" id="bear-submit">Submit</button>
    </form>
  </div>`;
  bearString += fattestBear(bearData);
  paintDom('#bear-form', bearString);
};

export default bearForm;
