import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'
import store from '../store/store'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        //需要验证
        if(store.state.loginUser.isLoading){
            //正在登录
            next({
                name:'auth',
                query:{returnurl:to.fullPath}
            })
        }else if(store.state.loginUser.data){
            //已经登录
            next();
        }else{
            //还没登录
            next({
                name:'login',
            })
        }
    }else{
        next();
    }
})

export default router;