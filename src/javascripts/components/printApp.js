const printApp = () => {
  document.querySelector('#app').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav w-100 d-flex">
      <li class="nav-item">
        <a class="nav-link" href="#">The River</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Add Bear</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Awards</a>
      </li>
    </ul>
  </div>
</nav>
  <!-- Nav END -->
   <div class="header-container w-100 d-flex justify-content-center">
    <header class="bearwatcher-title"><h1 class="w-50 text-justify">BEAR WATCHER</h1>
    </header>
   </div>
   <div class="below-title-container w-100 ml-auto">
    <ul class="p-0 text-center">
      <li class="fuzzy">You thought they were <strong>fuzzy</strong>.</li>
      <li class="fuzzy">You thought they were <strong>wuzzy</strong>.</li>
      <li class="fuzzy">Turns out... they were just <strong>hungry</strong>.</li>
    </ul>
  </div>
  <div class="header-container w-100 d-flex justify-content-center"><h3 class="w-100 text-center river-title">The River</h3></div>
  <!-- Dynamically added bear cards go here -->
<div class="bear-river d-flex justify-content-center flex-wrap" id="bearRiver"></div>
<!-- Dynamically added form goes here -->
<h4 class="new-bear-form-title text-center">Have you spotted a bear recently?</h4>
<hr>
<h5 class="new-bear-form-title text-center" id="errorBox"></h5>
<div class="form-container w-50 mx-auto" id="bearForm"></div>
<div class="header-container w-100 d-flex justify-content-center"><h3 class="w-100 text-center river-title">Fattest Bear Awards</h3></div>
<div class="awards-container d-flex flex-wrap justify-content-center w-50 ml-auto mr-auto" id="awardsContainer"></div>`;
};

export default printApp;
