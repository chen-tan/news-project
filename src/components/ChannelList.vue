<template>
  <div class="channel-container" v-if="data.length>0">
      <div class="channel"
       :class="{active:channel.channelId===curChannelId}"
       v-for="channel in showChannel"
       :key="channel.id"
       @click="channelActive(channel.channelId)"
      >{{ channel.name }}</div>
      <button class="btn" @click="isCollapsed=!isCollapsed">{{isCollapsed?'展开':'折叠'}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            isCollapsed:true,
            curChannelId:0
        }
    },
    computed:{
        showChannel(){
            if(this.isCollapsed){
                return this.data.slice(0,9);
            }else{
                return this.data;
            }
        },
        ...mapState('channels',['data','isLoading']),
    },
    methods:{
        channelActive(id){
            this.curChannelId=id;
            this.$emit('change-channel',id);
        }
    },
    watch:{
        data:{
            immediate:true,
            handler(){
                if(this.data.length>0){
                    this.curChannelId=this.data[0].channelId;
                    this.$emit('change-channel',this.curChannelId);
                }
            }
        }
    }
}
</script>

<style scoped>
   .channel-container {
       width:100%;
       margin-top:30px;
       display:flex;
       flex-wrap:wrap;
   }
   .channel-container .channel{
       padding:5px 10px;
       margin:7px 10px;
       border:1px solid #c3c3c3;
       border-radius:5px;
        background-color: #f9f9f9;
        cursor:pointer;
   }
   .channel-container .channel:hover{
       background-color: #1a1b1a;
       color:#fff;
   }
   .channel-container .channel.active{
       background-color: #1a1b1a;
       color:#fff;
   }
   .channel-container .btn{
       padding:0 10px;
       font-size:14px;
       height:28px;
       line-height:28px;
       background-color: #2430da;
       border-radius:5px;
       color:#fff;
       margin-top: 11px;
   }
</style>