<template>
  <div>
    <div><router-link to="/HelloWorld">HelloWorld</router-link></div>
    <div><router-link to="/Login">Login</router-link></div>
    <!-- vuetify图标 -->
    <div> vuetify图标<v-btn icon="$vuetify"> </v-btn></div>
    <div>状态使用</div>
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
