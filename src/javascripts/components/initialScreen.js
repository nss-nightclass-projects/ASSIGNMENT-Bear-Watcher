import addPageDivs from './addPageDivs';
import jumbotron from './jumbotron';
import bearForm from './bearForm';
import bearCards from './bearCards';
import bearCardBuilder from '../helpers/bearCardBuilder';
import bears from '../helpers/river';
import buttonEvents from '../helpers/buttonEvents';

function initialScreen() {
  addPageDivs();
  jumbotron();
  bearForm();
  bearCards();
  bearCardBuilder(bears);
  buttonEvents();
}

export default initialScreen;
