<script setup lang="ts">

import FooterComponent from "@/components/layout/footer/FooterComponent.vue";
import HeaderComponent from "@/components/layout/header/HeaderComponent.vue";
</script>

<template>
  <div>
    <el-container style="min-height: 100vh; display: flex; flex-direction: column;" >
      <el-header>
        <HeaderComponent />
      </el-header>
      <el-main style="flex: 1;">
        <router-view />
      </el-main>
      <el-footer>
        <FooterComponent />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh;
  background-color: #F3F5F7;
}
.el-header {
  text-align: center;
  border: 1px solid #D7D8D9;
  height: 80px;
}

.el-footer {
  text-align: center;
  border: 1px solid #D7D8D9;
  height: 200px;
}

.el-main {
  border: 1px solid #D7D8D9;
}

.el-container {
  height: 100%;
}



</style>