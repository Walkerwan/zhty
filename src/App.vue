<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

export default defineComponent({
  setup(props, ctx) {
    return {
      locale: zhCn,
    };
  }
});
</script>

<style scoped>
</style>
