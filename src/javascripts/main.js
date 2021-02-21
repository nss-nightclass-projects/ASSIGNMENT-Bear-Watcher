import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import initialScreen from './components/initialScreen';
import bearCardBuilder from './helpers/bearCardBuilder';
import bears from './helpers/river';
import buttonEvents from './helpers/buttonEvents';

function init() {
  initialScreen();
  bearCardBuilder(bears);
  buttonEvents();
}

init();
