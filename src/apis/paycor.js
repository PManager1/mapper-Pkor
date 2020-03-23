import axios from 'axios';

export default axios.create({
  baseURL: 'https://dchapi.azurewebsites.net/api/'
});


