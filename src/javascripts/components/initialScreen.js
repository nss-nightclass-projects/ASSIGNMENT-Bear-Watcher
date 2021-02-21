import addPageDivs from './addPageDivs';
import jumbotron from './jumbotron';
import bearForm from './bearForm';
import bearCards from './bearCards';

const initialScreen = () => {
  addPageDivs();
  jumbotron();
  bearForm();
  bearCards();
};

export default initialScreen;
