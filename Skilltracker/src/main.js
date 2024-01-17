import PrimeVue from "primevue/config";
import 'primevue/resources/themes/md-dark-deeppurple/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//primevue components
import Button from 'primevue/button';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('Button', Button);

app.mount('#app')
