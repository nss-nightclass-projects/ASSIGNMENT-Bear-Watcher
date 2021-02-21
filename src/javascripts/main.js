import '../styles/main.scss';
import initialScreen from './components/initialScreen';
import bearCardBuilder from './helpers/bearCardBuilder';
import bears from './helpers/river';
import buttonEvents from './helpers/buttonEvents';

const init = () => {
  initialScreen();
  bearCardBuilder(bears);
  buttonEvents();
};

init();
