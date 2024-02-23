<script setup lang="ts">
import router from '@/router'
import { onBeforeMount, ref } from 'vue'
import type { ItemType } from '@/types/item'
import { useItemStore } from '@/stores/item'
import myAxios from "@/api/MyAxios";

let item: ItemType

onBeforeMount(() => {
  item = useItemStore().getCurrentItem()
})

const receiveDemand = () => {
  myAxios.post()
}
</script>

<template>
  <div class="flex flex-col float-left ml-20">
    <div class="text-3xl font-bold">设计详情</div>
    <div class="mt-5 text-2xl text-emerald-800">设计主题</div>
    <div class="mt-3 ml-5">{{ item.topic }}</div>
    <div class="mt-5 text-2xl text-emerald-800">价格</div>
    <div class="mt-3 ml-5">{{ item.expectPrice }}</div>
    <div class="mt-5 text-2xl text-emerald-800">元素要求</div>
    <div class="mt-3 ml-5">{{ item.elementRequirement }}</div>
    <!--    <div class="mt-5 text-2xl text-emerald-800">联系方式</div>-->
    <!--    <div class="mt-3 ml-5">{{item.}}</div>-->
    <div class="mt-5 text-2xl text-emerald-800">备注</div>
    <div class="mt-3 ml-5">{{ item.remark }}</div>

    <div class="flex flex-row mt-10">
      <el-button @click="() => router.back()" size="large">返回</el-button>
      <el-button
        v-if="item.status === 0"
        type="primary"
        size="large"
        class="ml-5"
        @click="receiveDemand"
        >我要接单
      </el-button>
      <el-button v-if="item.status === 1" size="large" class="ml-5">已接单</el-button>
      <el-button v-if="item.status === 1" size="large" class="ml-5">上传文件</el-button>
      <el-button v-if="item.status === 2" size="large" class="ml-5">已完成订单</el-button>
    </div>
  </div>
</template>

<style scoped></style>
