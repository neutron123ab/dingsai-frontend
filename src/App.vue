<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useUserStore} from "@/stores/user";
import router from "@/router";

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  const user = useUserStore().getCurrentUser()
  if (to.name !== 'input' && to.name !== 'update' && !user) {
    return {name: 'input'}
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
