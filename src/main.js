import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faPhone, faBars,faBarsStaggered, faInstagram);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')
