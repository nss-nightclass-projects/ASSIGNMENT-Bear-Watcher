const bears = [];

const pullForm = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const breed = document.querySelector('#breed').value;
  const food = document.querySelector('#food').value;

  const objects = {
    name,
    breed,
    food,
};

  bears.push(objects);
  bearBuilder(bears);
  document.querySelector('form').reset();
};

export { bears, pullForm };