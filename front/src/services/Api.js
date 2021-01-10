/**
* file: src/services/Api.js
* data: 09/01/2021
* description: file responsible for initializing 'axios' and requesting HTTP's base url
*/

import axios from 'axios';

export default () => axios.create({
  // 'Back-End baseURL -> will do the comunication bettween Front and Back
  baseURL: 'http://localhost:3000/api',
});
