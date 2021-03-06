<template>
    <div class="home">
        <banner :imgList="imgList" :duration="1500" />
        <channel-list @change-channel="changeChannel" />
        <news-list :newsList="newsList" />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import ChannelList from '../components/ChannelList.vue'
import NewsList from '../components/NewsList.vue'
import {getNewsList} from '../services/newsServices'
export default {
  components: { ChannelList, NewsList, Banner },
    data(){
        return {
            imgList: [
        {
          id: 0,
          link: "http://www.baidu.co",
          src:require("@/assets/img/banner/naruto1.jpg"),
        },
        {
          id: 1,
          link: "http://www.baidu.co",
          src:require("@/assets/img/banner/naruto2.jpg"),
        },
        {
          id: 2,
          link: "http://www.baidu.co",
          src:require("@/assets/img/banner/naruto3.jpg"),
        },
        {
          id: 3,
          link: "http://www.baidu.co",
          src:require("@/assets/img/banner/naruto4.jpg"),
        },
        {
          id: 4,
          link: "http://www.baidu.co",
          src:require("@/assets/img/banner/naruto5.jpg"),
        },
            ],
            newsList:[],
        }
    },
    watch:{

    },
    methods:{
        async changeChannel(id){
            const resp = await getNewsList(id);
            this.newsList=resp.contentlist;
        }
    }
}
</script>

<style>

</style>