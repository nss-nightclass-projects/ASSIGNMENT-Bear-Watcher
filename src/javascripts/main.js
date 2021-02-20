import '../styles/main.scss';
import bearCardPrint from './components/bearCardPrint';
import bears from './helpers/data/bearData';

const init = () => {
  bearCardPrint(bears);
};

init();
