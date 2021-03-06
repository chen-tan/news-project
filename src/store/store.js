import Vue from 'vue'
import Vuex from 'vuex'
import channels from './channels'
import news from './news'
import loginUser from './loginUser'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        channels,
        news,
        loginUser,
    }
})



export default store;
