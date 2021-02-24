// import { name } from 'file-loader';
import '../styles/main.scss';

// To Do: //
// 1. Create Setup Branch. Add, commit, push, pull down // ** DONE
// 2. Create New Branch // ** DONE
// 3. Create PrintToDom Function ** DONE //
// 4. Create Array with Data Strcutre for Cards ** DONE //
// 5. Create Bear Form //

// Array Of Bears //
const bearsArr = [
  {
    bearName: 'Billie',
    descriptionOfBear: '6ft: 570 lb',
    imageURL: 'https://lh3.googleusercontent.com/proxy/rO3Dyc06Lkwa7uq5aeeig09rHkgP9HJwA-pIRMG-lfVG8G16aRFwxRAAdJDlKcBE_E-EANzrr6EXqH0zh4WU-aw1tH67LLwu0bxPIZ_5WZ66nHQxbtb5Ddk4xIcMuvX1',

  },
  {
    bearName: 'Jack',
    descriptionOfBear: '7ft: 670 lb',
    imageURL: 'https://lh3.googleusercontent.com/proxy/dSnAtF0q1mFFUTBFaoYG4uQNx-rZwGii4Mnm5y6G5GElMD_kGqB_nrON0LokghXbEvhw8Cjy1gGjrjoMdZdZxPyvF1JLqvs_qheZ3su56wMAo59YoZMf-4E',

  },
  {
    bearName: 'Keith',
    descriptionOfBear: '4ft: 876 lb',
    imageURL: 'https://scienmag.com/wp-content/uploads/2019/12/Learning-from-the-bears.jpg',

  },
  {
    bearName: 'Rick',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://travel.home.sndimg.com/content/dam/images/travel/stock/2018/2/19/0/shutterstock_34956754_grizzly-bear.jpg.rend.hgtvcom.1280.914.suffix/1519070779400.jpeg',

  },
  {
    bearName: 'Carlos',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRGUXrJAB2Kez2ojPgDOz2Nn4RVY6WSw69Q&usqp=CAU',

  },
  {
    bearName: 'Nick',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://geographical.co.uk/media/k2/items/cache/6bd6755a4e7a13862647f8a77aaf84b9_XL.jpg',

  },
  {
    bearName: 'Mike',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://lh3.googleusercontent.com/proxy/dAB6BX9KNVAhEcfH27a691ok3l4kH9Cz0kB_twl-otbRGqgjgEJaWZhZ_JUqaLgjfcBbJ-CecG_bsm_RBteIAAEleYS-JdEaUBJ1xKxIRmUZB4FJIbegrn8p5eQmx9d7frZ22bxDRUdl1h8r5kgjEOHcU2AnEMhthLTj',

  },
  {
    bearName: 'Rob',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://www.alaskawaste.com/assets/images/uploads/anchorage/new-bear-photo.jpg',

  },
  {
    bearName: 'Jared',
    descriptionOfBear: '8ft: 670 lb',
    imageURL: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2020/04/07113107/Moon-bear-at-the-sanctuary-_credit-Free-the-Bears.jpg',

  },
];

// Print to Dom Function //
const printToDom = (ID, string) => {
  document.querySelector(ID).innerHTML = string;
};

// Bear Form //
const bearBuilder = () => {
  let bearForm = '';
  bearForm = `<form id="newForm">
  <div class="form-group">
    <label for="nameFormControlInput1" style="color: #f0f6fc;">Repository name</label>
    <input type="name"; class="col-md-4 rounded-3 border-1" id="createRepoName" value="" style="background: none; color: #f0f6fc;" required></div>
  <div class="form-group">
  <div id="repoNameHelp" class="form-text" style="color: #f0f6fc;">Great repository names are short and memorable. Need inspiration? How about reimagined-disco?
</div>
    <label for="descriptionText" style="color: #f0f6fc;">Description (optional)</label>
    <textarea class=" col-md-12 rounded-3 border-1" id="descriptionBox" rows="1" style="background: none;"></textarea>
  </div>
  <hr></hr>
  <button type="submit" id="repoSubmit" class="btn btn-success">Create repository</button>
</form>`;

  printToDom('#bearForms', bearForm);
};
const createBear = (e) => {
  e.preventDefault();
  const obj = {
    repoName: document.querySelector('#createRepoName').value,
    repoDescription: document.querySelector('#descriptionBox').value,
  };
  bearsArr.push(obj);
  // printRepo();
  // TODO: Call function to print cards to DOM and pass it the repos_Arr // *** DONE ***
  document.querySelector('#newForm').reset();
};

// Init Function //
const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
  // printToDom();
  bearBuilder(bearsArr);
  createBear();
};

// Invoking Everyting in Init Function //
init();
