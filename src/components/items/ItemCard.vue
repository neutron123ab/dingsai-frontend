<script setup lang="ts">

import type {ItemType} from "@/types/item";

const props = defineProps<ItemType>()
const getImage = "/api/item/getImage?pictureId=" + props.originalFileId

</script>

<template>
<div class="bg-white p-3 rounded-lg float-card w-56 h-72">
  <el-image :src="getImage" fit="fill" class="h-36" />
  <h2 class="text-1xl font-bold mb-4">{{props.title}}</h2>
  <p class="text-gray-600">价格：{{props.expectPrice}}</p>
  <p class="text-gray-600">需求方：{{props.demandUsername}}</p>
</div>
</template>

<style scoped>
.float-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid #D7D8D9;
}

.float-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>