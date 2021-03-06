import axios from 'axios'
const AppCode = '0fda1d3df9d04eecb3e5a6bbc1e6dde9';

export async function getChannels(){
    const resp = await axios.get('http://ali-news.showapi.com/channelList',{
        headers:{
            Authorization:`APPCODE ${AppCode}`
        }
    })
    return resp.data.showapi_res_body.channelList;
}

export async function getNewsList(channelId,page=1,limit=10){
    const resp = await axios.get('http://ali-news.showapi.com/newsList',{
        headers:{
            Authorization:`APPCODE ${AppCode}`
        },
        params:{
            channelId,
            page,
            maxResult:limit,
            needContent:1,
            needAllList:false
        }
    })
    return resp.data.showapi_res_body.pagebean;
}