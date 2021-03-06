<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
import Home from './views/Home.vue';
export default {
  name: "App",
  components: {
    Home,
    Loading,
    Header,
  },
 
    data() {
    return {
    };
  },
  methods:{
    handleClick(id){
      console.log(
        id
      );
    },
    pageChange(newPage){
      this.page=newPage;
    }
  },
};
</script>

<style>
</style>
