<script setup lang="ts">
import { reactive, ref } from 'vue'
import router from '@/router'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import {ElMessage, UploadFile, UploadProps, UploadUserFile} from 'element-plus'
import myAxios from '@/api/MyAxios'
import { useUserStore } from '@/stores/user'

const uploadInfo = reactive({
  userId: '',
  imageId: '',
  title: '',
  type: '',
  expectPrice: '',
  topic: [],
  elementRequirement: '',
  remark: ''
})

const disabled = ref(false)
const file = ref<UploadUserFile>()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

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
}

const handleSubmit = async () => {
  await myAxios
    .post(
      '/item/uploadImage',
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
      uploadInfo.imageId = resp.data.data
      uploadInfo.userId = useUserStore().getCurrentUser().id

      myAxios.post('/item/upload', {
        ...uploadInfo
      }).then((resp) => {
        ElMessage({
          message: '发布需求成功',
          type: 'success'
        })
      })
    })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <el-form label-position="left" label-width="100px" :model="uploadInfo" style="max-width: 460px">
      <el-form-item label="标题">
        <el-input v-model="uploadInfo.title" />
      </el-form-item>
      <el-form-item label="主题">
        <el-input v-model="uploadInfo.topic" />
      </el-form-item>
      <el-form-item label="类型">
        <el-input v-model="uploadInfo.type" />
      </el-form-item>
      <el-form-item label="预期价格">
        <el-input v-model="uploadInfo.expectPrice" />
      </el-form-item>
      <el-form-item label="元素要求">
        <el-input v-model="uploadInfo.elementRequirement" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="uploadInfo.remark" />
      </el-form-item>
      <el-form-item>
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="handleChange"
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
    <div class="flex flex-row mt-5">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button
        @click="
          () => {
            router.back()
          }
        "
        >返回</el-button
      >
    </div>
  </div>
</template>

<style scoped></style>