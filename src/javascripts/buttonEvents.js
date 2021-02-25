import formContent from './formContent';

const buttonEvents = () => {
  document.querySelector('#submitBtn').addEventListener('click', formContent);
};

export default buttonEvents;
