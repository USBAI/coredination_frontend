import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set the Axios base URL
axios.defaults.baseURL = 'https://coredinationserer-b81fa50404cb.herokuapp.com/'; // Adjust if needed for localhost

const app = createApp(App);

// Set up Axios as a global property
app.config.globalProperties.$http = axios;

app.mount('#app');
