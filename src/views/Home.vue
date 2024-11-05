<template>
  <div>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <!-- vuetify图标 -->
    <div><v-btn icon="$vuetify"> </v-btn></div>
    <v-btn @click="store.increment">点我+1</v-btn>
    <div>状态计数值：{{ store.count }}</div>
    <div>状态计算属性：{{ store.doubleCount }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStoreExample } from "../store/useStore";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useStoreExample();
</script>
