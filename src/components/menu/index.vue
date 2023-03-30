<template>
  <div class="wh-full" c-bg="#f4f5f7">
    <el-menu :default-active="defaultActive" :unique-opened="true" class="wh-full overflow-auto" c-bg="#f4f5f7">
      <InfiniteMenuItem v-for="(item, index) in menus" :key="index" :menuOption="item"></InfiniteMenuItem>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import InfiniteMenuItem from "./infinite-menu-item/InfiniteMenuItem.vue";
import { menus } from "./menuName";

export default defineComponent({
  name: "Menu",
  components: {
    InfiniteMenuItem,
  },
  setup(props, ctx) {
    const defaultActive = ref("1");

    return {
      defaultActive,
      menus,
    }
  }
})
</script>