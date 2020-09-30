// 插件模块

import axios from 'axios'
import qs from 'qs'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  axios.defaults.withCredentials = true
  axios.defaults.baseURL = 'http://47.93.231.64:8080'

  // 添加实例方法
  Vue.prototype.$http = axios
  Vue.prototype.$qs = qs
}

export default MyHttpServer
