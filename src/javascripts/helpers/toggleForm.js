const toggleForm = () => {
  const formDiv = document.querySelector('#form-div');
  if (formDiv.style.display === 'none') {
    formDiv.style.display = 'block';
  } else if (formDiv.style.display === 'block') {
    formDiv.style.display = 'none';
  }
};

export default toggleForm;
