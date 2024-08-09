import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set the Axios base URL directly
const apiUrl = 'https://corediantion-41cd1258aadd.herokuapp.com/coredination/get-job-data/';

axios.defaults.baseURL = apiUrl;

const app = createApp(App);

// Set up Axios as a global property
app.config.globalProperties.$http = axios;

app.mount('#app');
