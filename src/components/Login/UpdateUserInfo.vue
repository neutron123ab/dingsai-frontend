<script setup lang="ts">
import router from '@/router'
import { Lock, User } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import myAxios from '@/api/MyAxios'

const userInfo = reactive({
  username: '',
  password: '',
  telephoneNumber: ''
})

import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile, UploadProps, UploadUserFile } from 'element-plus'
import axios from 'axios'
import {useUserStore} from "@/stores/user";

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const file = ref<UploadUserFile>()
const formData = new FormData()

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  file.value = uploadFiles[0].raw
  formData.delete('file')
  formData.append('file', file.value)
}

const upload = () => {}

const handleSubmit = async () => {
  myAxios
      .post(
          '/user/uploadUserInfo?username=' + userInfo.username + '&password=' + userInfo.password + '&telephoneNumber=' + userInfo.telephoneNumber,
          {
            file: file.value
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      )
      .then((resp) => {
        const userStore = useUserStore()
        userStore.setCurrentUser(resp.data.data)
        router.replace('/')
      })
}
</script>

<template>
  <div class="pt-8">
    <el-form :model="userInfo" style="width: 260px">
      <el-form-item>
        <el-input
          size="large"
          v-model="userInfo.username"
          placeholder="用户名"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item>
        <el-input size="large" v-model="userInfo.password" placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
      <el-form-item>
        <el-input
          size="large"
          v-model="userInfo.telephoneNumber"
          placeholder="手机号"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item>
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="handleChange"
          :http-request="upload"
        >
          <el-icon>
            <Plus />
          </el-icon>

          <template #file="{ file }">
            <div>
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <el-icon><Download /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
  <div class="pt-4">
    <el-button type="primary" size="large" @click="handleSubmit">确认信息</el-button>
    <el-button
      size="large"
      @click="
        () => {
          router.back()
        }
      "
      >返回
    </el-button>
  </div>
</template>

<style scoped></style>
