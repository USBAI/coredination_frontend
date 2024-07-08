import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

// Set base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:8000'; // Adjust as per your Django backend URL

app.config.globalProperties.$http = axios; // Make axios accessible globally via this.$http or import it directly where needed

// Define the feature flag as an empty object
app.config.globalProperties.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = {};

app.mount('#app');
