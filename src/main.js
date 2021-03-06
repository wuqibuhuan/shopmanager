// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/base.css'
import BreadCrumb from './components/Breadcrumb.vue'
import axios from 'axios'
import moment from 'moment'
import HttpServer from './components/http'

Vue.config.productionTip = false
// vue插件的使用
Vue.use(ElementUI)
// 全局过滤器 - 处理日期
Vue.use(HttpServer)
Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})
// 全局定义组件
Vue.component(BreadCrumb.name, BreadCrumb)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
