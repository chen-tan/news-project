<template>
  <div class="header-container">
    <div class="container-header">
      <div class="logo">
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/img/logo.png" alt=""
        /></router-link>
      </div>
      <nav class="nav">
        <ul>
          <li class="nav-item">
            <router-link :to="{ name: 'home' }">首页</router-link>
          </li>
          <li
            class="nav-item"
            v-for="channel in data.slice(0, 5)"
            :key="channel.channelId"
          >
            <router-link
              :to="{ name: 'news', params: { id: channel.channelId } }"
              >{{ channel.name }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="login-area">
        <!-- 情况1 正在登录中 -->
        <span v-if="isLogining">loading...</span>
        <!-- 情况2 已经登录了 -->
        <template v-else-if="user">
          <router-link :to="{ name: 'personal' }">{{ $store.state.loginUser.data.nickname }}</router-link>
          <router-link @click.native="loginOut" :to="{ name: 'login' }">退出</router-link>
        </template>
        <!-- 情况3 还没有登录 -->
        <template v-else>
          <router-link :to="'/login'" class="login">登录</router-link>
          <router-link :to="'/reg'" class="reg">注册</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState('channels',["data",'isLoading']),
        ...mapState('loginUser',{
            user:'data',
            isLogining:'isLoading'
        })
    },
    methods:{
        loginOut(){
            this.$store.dispatch('loginUser/loginOut');
        }
    },
}
</script>

<style scoped lang="scss">
.header-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #131313;
  color: #fff;
  .container-header {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 60px;
      height: 60px;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .nav {
      ul {
        display: flex;
        .nav-item {
          padding: 0 15px;
          margin: 0 15px;
          cursor: pointer;
          &:hover {
            color: #3385ff;
          }
        }
      }
    }
    .login-area {
      display: flex;
      a {
        margin-left: 20px;
        font-size: 14px;
        &:hover {
          color: #3385ff;
        }
      }
    }
  }
}
</style>