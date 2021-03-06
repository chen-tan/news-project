<template>
  <div class="auth">正在验证中。。。</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("loginUser", ["data", "isLoading"]),
    returnurl() {
      return this.$route.query.returnurl;
    },
  },
  watch: {
    isLoading: {
      immediate: true,
      handler() {
        this.handleLogin();
      },
    },
  },
  methods: {
    handleLogin() {
      if (this.isLoading) {
        return;
      } else if (this.data) {
        if (this.returnurl) {
          this.$router.push(this.returnurl);
        } else {
          this.$router.push("/");
        }
      } else {
          this.$router.push({
            name: "login",
            query:{returnurl:this.returnurl || null}
          });
        
      }
    },
  },
};
</script>

<style>
</style>