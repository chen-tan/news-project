import { getNewsList } from '@/services/newsServices'
export default {
    namespaced:true,
    state:{
        data:[],
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
        async getNewsList(context,payload){
            context.commit('setLoading',true);
            const resp = await getNewsList(...payload);
            console.log(resp);
            context.commit('setData',resp);
            context.commit('setLoading',false);
        }
    }
}