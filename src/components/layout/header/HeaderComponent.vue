<script setup lang="ts">
import {ref} from "vue";
import {Search} from "@element-plus/icons-vue";
import {useUserStore} from "@/stores/user";

const input = ref('')

const userInfo = useUserStore().getCurrentUser()

</script>

<template>
  <el-row class="row-bg flex items-center justify-center h-full" justify="space-around">
    <el-col :span="6">
      <div class="grid-content flex flex-row items-center justify-center">
        <el-image fit="fill" src="/logo.jpg" class="w-14" />
        <div class="ml-3 text-3xl font-bold">叮赛校园设计平台</div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content flex flex-row items-center justify-center">
        <el-input v-model="input" size="large" placeholder="输入关键词" />
        <el-button type="primary" size="large" :icon="Search" circle class="ml-3"/>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content flex flex-row items-center justify-center">{{userInfo.username}}</div>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
