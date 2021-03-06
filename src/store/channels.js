import { getChannels,getNewsList } from '../services/newsServices'
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
        async getChannels(context){
            context.commit('setLoading',true);
            const resp = await getChannels();
            context.commit('setData',resp);
            context.commit('setLoading',false);
        }
    }
}