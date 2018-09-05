// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import './assets/css/reset.css'
import { Form, FormItem, Input, Button, Container, Aside, Main, Breadcrumb, BreadcrumbItem, Row, Table, TableColumn } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */
let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use({
  vm
})
