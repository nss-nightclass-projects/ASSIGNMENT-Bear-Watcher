const addPageDivs = () => {
  document.querySelector('#app').innerHTML = `<div class='jumbotron'></div>
  <div id='bear-form' class='d-print-none d-flex flex-wrap justify-content-center'></div>
  <div id='cards' class='mt-4'></div>`;
};

export default addPageDivs;
