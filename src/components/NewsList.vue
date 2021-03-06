<template>
  <div class="news-container">
    <Center>
      <loading v-if="newsList.length===0" />
    </Center>
    <ul class="news-list" v-if="newsList.length>0">
      <li class="news"
       v-for="news in newsList"
       :key="news.id"
      >
        <div class="pic" v-if="news.havePic">
          <a :href="news.link">
            <img :src="news.imageurls[0].url" alt="" />
          </a>
        </div>
        <div class="content">
            <h2 class="title">{{ news.title }}</h2>
            <div class="info">
                <span class="channelName">{{ news.channelName }}</span>
                <span class="source">{{ news.source }}</span>
                <span class="pubDate">{{ news.pubDate }}</span>
            </div>
            <div class="text">{{ news.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Loading from './Loading.vue';
import Center from './Center.vue';
export default {
  components: { Loading, Center },
  props:{
    newsList:{
      type:Array,
      required:true,
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
    .news-container{
        width:100%;
        border-top:1px dashed #c6c6c6;
    }
    .news-container .news{
        display:flex;
        align-items:flex-start;
        padding:10px 0;
        border-bottom:1px dashed #c6c6c6;
    }
    .news-container .news .pic{
        /* width:150px;
        height:200px; */
        margin-right:20px;
    }
    .news-container .news .pic img{
        width:180px;
        height:200px;
    }
    .news-container .content .title{
        font-size:20px;
        margin-bottom:4px;
        cursor:pointer;
        color:#4461c2;
    }
    .news-container .content .title:hover{
        color:#3385ff;
    }
    .news-container .content .info{
        font-size:12px;
        margin-bottom:4px;
    }
    .news-container .content .info span{
        margin-right:10px;
    }
    .news-container .content .text{
        text-indent:2em;
        line-height:1.58;
        overflow: hidden;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:6;
        text-overflow: ellipsis;
        
    }
</style>