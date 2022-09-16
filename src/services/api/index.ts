import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://finddev-api.herokuapp.com/'
});

export default Api;
