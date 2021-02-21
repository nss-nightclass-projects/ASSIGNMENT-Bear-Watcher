const jumbotron = () => {
  document.querySelector('#jumbotron').innerHTML = `
    <h1 class='display-4'>Brooks Falls - Brown Bears Tracker</h1>
    <p class='lead'>
      Welcome researchers, scientists and bear watchers! Here you can monitor
      the activity of your favorite brown bears located in Brooks Falls -
      Katmai National Park, Alaska, USA.
    </p>
    <hr class='my-4' />`;
};

export default jumbotron;
