import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueScrollReveal from 'vue-scroll-reveal';
import routes from './appRouting/routes';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueScrollReveal);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
