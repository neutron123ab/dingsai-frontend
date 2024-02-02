<script setup lang="ts">
import LoginByPhone from '@/components/Login/LoginByPhone.vue'
import LoginByPassword from '@/components/Login/LoginByPassword.vue'

import { ref } from 'vue'

const activeName = ref('pass')
const isLogin = ref(false)

const handleLogin = () => {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <div class="pt-8">
    <el-tabs v-model="activeName" class="demo-tabs w-80">
      <el-tab-pane label="账号密码登录" name="pass">
        <LoginByPassword :is-login="isLogin" :active-name="activeName" />
      </el-tab-pane>
      <el-tab-pane label="手机号登录" name="phone">
        <LoginByPhone :is-login="isLogin" :active-name="activeName" />
      </el-tab-pane>
      <el-tab-pane label="微信扫码登录" name="wechat"> 正在开发 </el-tab-pane>
    </el-tabs>
  </div>
  <div class="pt-4">
    <el-button type="primary" size="large" class="w-80" @click="handleLogin">登录</el-button>
  </div>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>