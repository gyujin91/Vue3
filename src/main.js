import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/assets/css/style.css'
import '@/assets/css/worldMap.css'
import "svgmap/dist/svgMap.min.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')

