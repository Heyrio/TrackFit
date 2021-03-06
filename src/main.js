import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import './../src/assets/styles/global.css';
import router from './routes/router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')