import pullForm from './data/components/pullForm';

const clickEvents = () => {
  document.querySelector("#infoForm").addEventListener("submit", pullForm);
  document.querySelector("#bearsCard").addEventListener("click", cardRemoval);
};

export default clickEvents;