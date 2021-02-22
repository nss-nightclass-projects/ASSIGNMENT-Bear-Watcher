import '../styles/main.scss';
import awardedBearPrinter from './components/awardedBearPrinter';
import bearCardPrint from './components/bearCardPrint';
import bearFormPrint from './components/bearFormPrint';
import printApp from './components/printApp';
import domEvents from './events/domEvents';
import bears from './helpers/data/bearData';

const init = () => {
  printApp();
  bearFormPrint();
  bearCardPrint(bears);
  awardedBearPrinter(bears);
  domEvents();
};

init();
