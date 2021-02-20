import bearFormInput from '../helpers/data/bearFormInput';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
      bearFormInput(e);
    }
  });
};

export default domEvents;
