<template>
  <div class="channel-news">
    <h1 class="channel">{{ channelName }}</h1>
    <news-list :newsList="newsList" />
    <pager
      :page="page"
      :total="total"
      :limit="limit"
      :panelNumber="panelNumber"
      @page-change="pageChange"
    />
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";
import Pager from "../components/pager.vue";
import { getNewsList } from "../services/newsServices";

export default {
  components: { NewsList, Pager },
  data() {
    return {
      newsList: [],
      channelName: "",
        total: 0,
        limit: 15,
        panelNumber: 10,
      
    };
  },
  computed:{
    page(){
      return +this.$route.query.page || 1;
    },
    curId(){
      return this.$route.params.id;
    }
  },
  methods: {
    showChannelName(){
      const channels=this.$store.state.channels.data;
      if(channels.length===0){
        return;
      }
      const channel = channels.find(item=>item.channelId===this.curId);
      this.channelName=channel.name;
    },
    async showNewsList() {
      const resp = await getNewsList(this.curId,this.page,this.limit);
      this.newsList = resp.contentlist;
      this.total=resp.allNum;
    },
    async pageChange(newPage){
      this.showNewsList();
      this.$router.push({
        query:{page:newPage}
      })
    }
  },
  watch: {
    "$store.state.channels.data": {
      immediate: true,
      handler() {
          this.showChannelName();
      },
    },
    "$route.params.id": {
      immediate: true,
      handler() {
        this.showChannelName();
        this.$route.query.page=1;
        this.showNewsList();
      },
    },
  },
  async created() {},
};
</script>

<style scoped>
.channel {
  font-size: 24px;
  padding-top: 30px;
}
.pager {
  margin: 30px 0;
}
</style>