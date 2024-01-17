import PrimeVue from "primevue/config";
import 'primevue/resources/themes/md-dark-deeppurple/theme.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//primevue components
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('ProgressBar', ProgressBar);
app.component('Button', Button);

app.mount('#app')
