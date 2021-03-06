import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/global.css'
import router from './router'
import store from './store/store'

import {login,whoAmI,reg, loginOut} from './services/userService'

async function test(){
  // const resp = await login({
  //   loginId:'asd',
  //   loginPwd:'asd'
  // })
  // const resp = await whoAmI();
  // const resp = await reg({
  //   loginId:'9898kk',
  //   loginPwd:'123',
  //   pwdAgain:'123',
  //   nickname:'haha'
  // })
  // loginOut()
  // console.log(resp);
}
test();


store.dispatch('channels/getChannels');
store.dispatch('loginUser/whoAmI');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
