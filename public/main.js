// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
    <h1>TESTING PROMISES</h1>
    <h2>Open your dev tools</h2><br />
    <button class="btn btn-warning" id="get-joke">GET JOKE</button>
    <button class="btn btn-info" id="post-name">POST YOUR NAME</button>
    <button class="btn btn-success" id="patch-name">PATCH YOUR NAME</button>
    <button class="btn btn-danger" id="delete-name">DELETE YOUR NAME</button>
  `;
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then((response) => {
      console.warn(response.setup);
    });
    console.warn('here');
  });
};

const startApp = () => {
  htmlStructure();
  events(); // ALWAYS LAST
};

startApp();
