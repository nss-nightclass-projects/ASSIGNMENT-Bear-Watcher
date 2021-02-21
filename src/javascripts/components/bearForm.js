const bearForm = () => {
  document.querySelector('#bear-form').innerHtml = `
    <form class='w-50'>
      <div class='row justify-content-center'>
        <div class='col justify-content-center'>
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
    </form>
    <hr />`;
};

export default bearForm;
