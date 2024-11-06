<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props"> {{ currentLang }} </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        v-on:click="handleCommand(item.title)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const i18n = useI18n();

const items = [{ title: "中文" }, { title: "English" }];
// 计算属性获取 i18n 的值
const currentLang = computed(() => {
  const languageMap: { [key: string]: string } = {
    zhCn: "中文",
    en: "English",
  };
  return languageMap[i18n.locale.value] || "中文"; // 默认返回 "中文"
});

// 切换语言
function handleCommand(command: string) {
  const languageMap: { [key: string]: string } = {
    中文: "zhCn",
    English: "en",
  };

  // 根据命令获取对应的语言代码，默认为 "zhCn"
  i18n.locale.value = languageMap[command] || "zhCn";
}
</script>

<style scoped>
.v-list-item[disabled] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
