import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// // const app = Vue.createApp(...)
// app.use(VueAxios, axios)

createApp(App).use(store).use(router).mount('#app')
