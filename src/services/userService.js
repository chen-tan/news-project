// http://study.yuanjin.tech/api/user/(login,whoami,reg)

import axios from "axios";

export async function login(loginInfo){
    const resp = await axios.post('/api/user/login',loginInfo);
    const token=resp.headers.authorization;
    if(token){
        localStorage.setItem('token',token);
    }
    return resp.data;
}

export async function whoAmI(){
    const token= localStorage.getItem('token');
    const resp = await axios.get('/api/user/whoami',{
        headers:{
            authorization:`bearer ${token}`
        }
    })
    return resp.data;
}

export function loginOut(){
    localStorage.removeItem('token');
}

export async function reg(userInfo){
    const resp = await axios.post('/api/user/reg',userInfo);
    return resp.data;
}