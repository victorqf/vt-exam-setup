import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
library.add(fab);
library.add(far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const Parse = require('parse');
Parse.initialize(`exam_core`, `XWuxVsY190gG`);
Parse.serverURL = `https://exam.cineself.com/parse`;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
