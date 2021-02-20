import '../styles/main.scss';
import bearCardPrint from './components/bearCardPrint';
import bearFormPrint from './components/bearFormPrint';
import domEvents from './events/domEvents';
import bears from './helpers/data/bearData';

const init = () => {
  bearFormPrint();
  bearCardPrint(bears);
  domEvents();
};

init();
