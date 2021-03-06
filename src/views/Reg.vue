<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input">
          <label for="loginId">用户名：</label>
          <input
            v-model="userInfo.loginId"
            type="text"
            id="loginId"
            autocomplete="off"
            maxlength="20"
            minlength="3"
            @input="validateEmpty('loginId','用户名不能为空')"
          />
        </div>
        <error :err="errorInfo.loginId" />
      </div>
      <div class="form-item">
        <div class="input">
          <label for="loginPwd">密码：</label>
          <input
            v-model="userInfo.loginPwd"
            type="password"
            id="loginPwd"
            autocomplete="off"
            maxlength="20"
            minlength="3"
            @input="validateEmpty('loginPwd','密码不能为空')"
          />
        </div>
        <error :err="errorInfo.loginPwd" />
      </div>
      <div class="form-item">
        <div class="input">
          <label for="pwdAgain">重复密码：</label>
          <input
            v-model="userInfo.pwdAgain"
            type="password"
            id="pwdAgain"
            autocomplete="off"
            maxlength="20"
            minlength="3"
            @input="validatePwdAgain"
          />
        </div>
        <error :err="errorInfo.pwdAgain" />
      </div>
      <div class="form-item">
        <div class="input">
          <label for="nickname">昵称：</label>
          <input
            v-model="userInfo.nickname"
            type="text"
            id="nickname"
            autocomplete="off"
            maxlength="20"
            minlength="3"
            @input="validateEmpty('nickname','昵称不能为空')"
          />
        </div>
        <error :err="errorInfo.nickname" />
      </div>
      <div class="form-item">
        <button class="btn">注册</button>
        <error :err="errorInfo.server" :isCenter="true" />
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "../components/Center.vue";
import Error from "../components/Error.vue";
export default {
  components: { Center, Error },
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
        pwdAgain: "",
        nickname: "",
      },
      errorInfo: {
        loginId: "",
        loginPwd: "",
        pwdAgain: "",
        nickname: "",
        server: "",
      },
    };
  },
  methods: {
    validateEmpty(field, msg) {
      if (this.userInfo[field]) {
        this.errorInfo[field] = "";
        return true;
      } else {
        this.errorInfo[field] = msg;
        return false;
      }
    },
    validatePwdAgain(){
      const notEmpty = this.validateEmpty('pwdAgain','重复密码不能为空');
      if(!notEmpty){
        return;
      }
      const equal = this.userInfo.loginPwd===this.userInfo.pwdAgain;
      if(equal){
        this.errorInfo.pwdAgain='';
        return true;
      }else{
        this.errorInfo.pwdAgain='重复密码与密码不一致';
        return false;
      }
    },
    handleSubmit(){
      const validate1=this.validateEmpty('loginId','用户名不能为空');
      const validate2=this.validateEmpty('loginPwd','密码不能为空');
      const validate3=this.validatePwdAgain();
      const validate4=this.validateEmpty('nickname','昵称不能为空');
      if(validate1 && validate2 && validate3 && validate4){
        this.$store.dispatch('loginUser/reg',this.userInfo);
        this.$router.push({
          name:'login'
        });
      }

    }
  },
};
</script>

<style scoped lang="scss">
.login-container {
  width: 400px;
  .form-item {
    width: 100%;
    margin-bottom: 10px;
    label {
      display: inline-block;
      min-width: 100px;
      text-align: right;
    }
    input {
      width: 290px;
      height: 24px;
      margin-bottom: 4px;
      border: 1px solid #c9c9c9;
      border-radius: 3px;
      text-indent: 2px;
      &:focus {
        border: 1px solid #3385ff;
      }
    }
    // .error{
    //   padding-left:100px;
    //   font-size:12px;
    //   color:#f80000;
    //   &.hide{
    //     visibility:hidden;
    //   }
    //   &.txt-center{
    //     text-align:center;
    //   }
    // }
    button {
      width: 296px;
      height: 30px;
      margin-left: 100px;
      background-color: #3385ff;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>