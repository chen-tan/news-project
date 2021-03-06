/*
 * @Author: your name
 * @Date: 2021-02-18 15:55:07
 * @LastEditTime: 2021-03-06 21:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \practicec:\Users\chentan\Desktop\news-project\src\router\config.js
 */
export default [
    {
        path:'/dist/index.html',
        redirect:'/'
    },
    {
        name:'home',
        path:'/',
        component:()=>import('@/views/Home')
    },
    {
        name:'login',
        path:'/login',
        component:()=>import('@/views/Login')
    },
    {
        name:'reg',
        path:'/reg',
        component:()=>import('@/views/Reg')
    },
    {
        name:'news',
        path:'/news/:id',
        component:()=>import('@/views/ChannelNews')
    },
    {
        name:'personal',
        path:'/personal',
        component:()=>import('@/views/Personal'),
        meta:{
            auth:true,
        }
    },
    {
        name:'auth',
        path:'/auth',
        component:()=>import('@/components/Auth')

    },
    {
        name:'protected',
        path:'/protected',
        component:()=>import('@/views/Protected'),
        meta:{
            auth:true
        }
    },
    {
        name:'notFound',
        path:'*',
        component:()=>import('@/views/notFound.vue')
    }

];
