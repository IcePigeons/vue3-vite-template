import { defineStore } from "pinia";

export const useStoreExample = defineStore("example", {
  state: () => ({
    //数据(data)
    count: 0,
  }),
  getters: {
    //计算属性
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    //方法
    increment() {
      this.count++;
    },
  },
});
