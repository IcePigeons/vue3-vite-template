<template>
  <div class="login-container">
    <div class="login-box">
      <h2>{{ $t("login.loginBtn") }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" v-model="username" type="text" required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <div class="form-group">
          <label for="captcha">验证码</label>
          <input id="captcha" v-model="captcha" type="text" required />
        </div>
        <div class="form-actions">
          <v-btn :border="false" @click="handleSubmit">{{
            $t("login.loginBtn")
          }}</v-btn>
          <a href="#" @click.prevent="handleForgotPassword">{{
            $t("login.forgetPassword")
          }}</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const captcha = ref("");

const handleSubmit = () => {
  console.log("用户名:", username.value);
  console.log("密码:", password.value);
  console.log("验证码:", captcha.value);
};

const handleForgotPassword = () => {
  alert("忘记密码功能尚未实现");
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  background: url("@/assets/login-back.png");
  background-size: cover;
}

.login-box {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  font-size: 0.9em;
  color: #007bff;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
