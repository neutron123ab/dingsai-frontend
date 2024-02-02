<script setup lang="ts">


</script>

<template>
  <div class="back">
    <div class="flex items-center justify-center pt-24">
      <el-image src="/logo.jpg" fit="fill" class="w-11"/>
      <span class="text-4xl pl-4">叮赛校园交易平台</span>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.back {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  height: 100vh;
  width: 100vw; /* 修正为视口宽度 */
  overflow: auto;
  background-image: url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr');
  background-size: cover; /* 使用 cover 以覆盖整个容器 */
  background-position: center; /* 图片在容器中居中显示 */
}


</style>
