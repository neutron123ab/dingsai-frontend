<script setup lang="ts">
import router from '@/router'
import ItemCard from '@/components/items/ItemCard.vue'
import { onBeforeMount, reactive, ref } from 'vue'
import myAxios from '@/api/MyAxios'
import type { ItemType } from '@/types/item'
import { useItemStore } from '@/stores/item'

const itemList = reactive<ItemType[]>([])
const type = ref('all') /** all/myDemands/received **/

onBeforeMount(() => {
  myAxios.get('/item/getItems').then((resp) => {
    itemList.length = 0
    let length = resp.data.data.length
    for (let i = 0; i < length; i++) {
      itemList.push(resp.data.data[i])
    }
  })
})

const handleClickItemCard = (item: ItemType) => {
  useItemStore().setCurrentItem(item)
  router.push('/demandDetail')
}

const getItemsUserPublished = () => {
  type.value = 'myDemands'
  myAxios.get('/item/getItemsUserPublished').then((resp) => {
    itemList.length = 0
    let length1 = resp.data.data.length
    for (let i = 0; i < length1; i++) {
      itemList.push(resp.data.data[i])
    }
  })
}

const getItems = () => {
  type.value = 'all'
  myAxios.get('/item/getItems').then((resp) => {
    itemList.length = 0
    let demo = resp.data.data.length
    for (let i = 0; i < demo; i++) {
      itemList.push(resp.data.data[i])
    }
    console.log(itemList.length)
  })
}

const getItemsUserReceived = () => {
  type.value = 'received'
  myAxios.get('/item/getItemsUserReceived').then((resp) => {
    itemList.length = 0
    let length1 = resp.data.data.length
    for (let i = 0; i < length1; i++) {
      itemList.push(resp.data.data[i])
    }
  })
}
</script>

<template>
  <div class="flex flex-col text-center">
    <div>
      <el-image src="/scroll.png" fit="fill" />
    </div>
    <div class="mt-10 float-left">
      <el-button
        type="primary"
        @click="
          () => {
            router.push('/addItem')
          }
        "
        >上传需求
      </el-button>
      <el-button type="primary" @click="getItems()">全部需求 </el-button>
      <el-button type="primary" @click="getItemsUserPublished()">我的需求 </el-button>
      <el-button type="primary" @click="getItemsUserReceived()">我的接单 </el-button>
    </div>
    <div class="mt-8 pl-24">
      <el-row v-if="type === 'all'">
        <el-col :span="6" v-for="item in itemList" :key="item.id" class="mb-5">
          <ItemCard @click="handleClickItemCard(item)" v-bind="item" />
        </el-col>
      </el-row>
      <el-row v-if="type === 'myDemands'">
        <el-col :span="6" v-for="item in itemList" :key="item.id" class="mb-5">
          <ItemCard @click="handleClickItemCard(item)" v-bind="item" />
        </el-col>
      </el-row>
      <el-row v-if="type === 'received'">
        <el-col :span="6" v-for="item in itemList" :key="item.id" class="mb-5">
          <ItemCard @click="handleClickItemCard(item)" v-bind="item" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
