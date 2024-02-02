<script setup lang="ts">
import router from "@/router";
</script>

<template>
<div class="flex flex-col float-left ml-20">
  <div class="text-3xl font-bold">设计详情</div>
  <div class="mt-5 text-2xl text-emerald-800">设计主题</div>
  <div class="mt-3 ml-5">1231231321</div>
  <div class="mt-5 text-2xl text-emerald-800">价格</div>
  <div class="mt-3 ml-5">1231231321</div>
  <div class="mt-5 text-2xl text-emerald-800">元素要求</div>
  <div class="mt-3 ml-5">1231231321</div>
  <div class="mt-5 text-2xl text-emerald-800">联系方式</div>
  <div class="mt-3 ml-5">1231231321</div>
  <div class="mt-5 text-2xl text-emerald-800">备注</div>
  <div class="mt-3 ml-5">1231231321</div>
  
  <div class="flex flex-row mt-10">
    <el-button @click="() => router.back()" size="large">返回</el-button>
    <el-button type="primary" size="large" class="ml-5">我要接单</el-button>
  </div>
</div>
</template>

<style scoped>

</style>