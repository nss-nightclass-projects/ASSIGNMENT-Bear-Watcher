const bearForm = () => {
  document.querySelector('#formDiv').innerHTML = `
    <form class='w-50 justify-content-center'>
      <div class='row'>
        <div class='col'>
          <input
            id='name'
            type='text'
            class='form-control'
            placeholder='Bear Name'
            required
          />
        </div>
        <div class='col'>
          <input
            id='url'
            type='text'
            class='form-control'
            placeholder='Image URL'
            required
          />
        </div>
        <button type='submit' class='btn btn-primary'>Track</button>
      </div>
    </form>`;
};

export default bearForm;
