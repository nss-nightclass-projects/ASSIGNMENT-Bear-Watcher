import AddBearCards from './addBearCards';
import UpdateCatchingFishAttempt from './updateCatching';
import UpdateFishCaught from './updateCaught';

const ButtonEvents = () => {
  document.querySelector('#submitBear').addEventListener('click', AddBearCards);
  document.querySelector('#riverContainer').addEventListener('click', UpdateCatchingFishAttempt);
  document.querySelector('#riverContainer').addEventListener('click', UpdateFishCaught);
};

export default ButtonEvents;
