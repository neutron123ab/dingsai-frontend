<script setup lang="ts">
import { reactive, watch } from 'vue'

import { User, Lock } from '@element-plus/icons-vue'

import myAxios from '@/api/MyAxios'
import { UserType } from '@/types/user'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const loginInfo = reactive({
  username: '',
  password: ''
})

const props = defineProps({
  isLogin: Boolean,
  activeName: String
})

watch(
  () => props.isLogin,
  (newIsLogin) => {
    if (newIsLogin && props.activeName === 'pass') {
      handleSubmit()
    }
  }
)

type LoginByPasswordResp = {
  code: number
  data: UserType
  message: string
  description: string
}

const handleSubmit = async () => {
  await myAxios
    .post<LoginByPasswordResp>('/user/login', {
      ...loginInfo
    })
    .then((resp: LoginByPasswordResp) => {
      resp = resp.data
      if (resp.code === 0) {
        const userStore = useUserStore()
        userStore.setCurrentUser(resp.data)
        router.replace('/')
      }
    })
}
</script>

<template>
  <el-form :model="loginInfo" style="max-width: 460px">
    <el-form-item>
      <el-input
        size="large"
        v-model="loginInfo.username"
        placeholder="用户名"
        :prefix-icon="User"
      />
    </el-form-item>
    <el-form-item>
      <el-input size="large" v-model="loginInfo.password" placeholder="密码" :prefix-icon="Lock" />
    </el-form-item>
  </el-form>
</template>

<style scoped></style>