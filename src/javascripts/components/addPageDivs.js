const addPageDivs = () => {
  document.querySelector('#app').innerHTML = `<div id='jumbotron' class='jumbotron'></div>
  <div id='formDiv' class='d-flex flex-wrap justify-content-center'></div>
  <div id='cards' class='mt-4'></div>`;
};

export default addPageDivs;
