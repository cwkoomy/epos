/* eslint-disable no-undef */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.js"



createApp(App).use(router).mount('#app')
