<script setup lang="ts">
import { reactive, watch } from 'vue'

import { Lock, Iphone } from '@element-plus/icons-vue'
import type { UserType } from '@/types/user'
import myAxios from "@/api/MyAxios";
import router from "@/router";
import {useUserStore} from "@/stores/user";

const props = defineProps({
  isLogin: Boolean,
  activeName: String
})

watch(
  () => props.isLogin,
  (newIsLogin) => {
    if (newIsLogin && props.activeName === 'phone') {
      handleSubmit()
    }
  }
)

const loginInfo = reactive({
  telephoneNumber: '',
  verifyCode: ''
})


const handleClick = async () => {
  await myAxios.get('/sms/send', {
    params: {
      telephoneNumber: loginInfo.telephoneNumber
    }
  })
}

type LoginByPhoneResp = {
  code: number
  data: UserType
  message: string
  description: string
}

const handleSubmit = async () => {
  await myAxios
    .post<LoginByPhoneResp>('/user/loginByPhone', {
      ...loginInfo
    })
    .then((resp: LoginByPhoneResp) => {
      resp = resp.data
      if (resp.data === null) {
        router.push('/login/update')
      } else {
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
        v-model="loginInfo.telephoneNumber"
        placeholder="手机号"
        :prefix-icon="Iphone"
      />
    </el-form-item>
    <el-form-item>
      <div class="flex flex-row">
        <el-input
          size="large"
          v-model="loginInfo.verifyCode"
          placeholder="验证码"
          :prefix-icon="Lock"
        />
        <div class="pl-3" />
        <el-button size="large" type="primary" @click="handleClick">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
