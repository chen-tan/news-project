/*
 * @Author: your name
 * @Date: 2021-02-19 22:41:35
 * @LastEditTime: 2021-03-06 21:45:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \practicec:\Users\chentan\Desktop\news-project\src\store\loginUser.js
 */

import {login,whoAmI,reg,loginOut} from '../services/userService'

function delay(duration){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },duration);
    })
}


export default {
    namespaced:true,
    state:{
        data:null,
        isLoading:false
    },
    mutations:{
        setData(state,payload){
            state.data=payload;
        },
        setLoading(state,payload){
            state.isLoading=payload;
        }
    },
    actions:{
         async login(context,payload){
             let result = false;
            context.commit('setLoading',true);
            const resp =await login(payload);
            if(resp.code===0){
                await delay(2000);
                context.commit('setData',resp.data);
                result = true;
            }else if(resp.code===400){
                context.commit('setData',resp.message);
            }
            context.commit('setLoading',false);
            return result;
         },
         async reg(context,payload){
            context.commit('setLoading',true);
            const resp = await reg(payload);
            if(resp.code===0){
                context.commit('setData',resp);
            }
            context.commit('setLoading',false);
         },
         async whoAmI(context){
             let result=false;
             context.commit('setLoading',true);
             const resp = await whoAmI();
             await delay(2000);
             if(resp.code===0){
                 context.commit('setData',resp.data);
                 result = true;
             }
             console.log('还没有设置为false');
             context.commit('setLoading',false);
             console.log('已经设置为false');
             return result;
         },
         loginOut(context){
             loginOut();
             context.commit('setData',null);
         },
    },
}