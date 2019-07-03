<template>
  <div class="page-login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
    </div>
    <div class="login-form">
      <div class="form-group">
        <input placeholder="用户名" class="input-control" type="text" v-model="username" />
      </div>
      <div class="form-group">
        <input placeholder="密码" class="input-control" type="password" v-model="password" />
      </div>
      <div class="submit login-btn" @click="handleLogin">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    handleLogin() {}
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
