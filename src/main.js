// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import MyServerHttp from '@/plugins/http.js'
import GLOBAL from '@/global_var.js'
import XLSX from 'xlsx'
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

Vue.prototype.GLOBAL = GLOBAL

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MyServerHttp)
Vue.use(XLSX)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
