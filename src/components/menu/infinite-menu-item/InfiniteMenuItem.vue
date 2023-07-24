<template>
  <!-- 没有子节点，使用el-menu-item 渲染 -->
  <el-menu-item v-if="!menuOption?.children || !menuOption?.children?.length" :index="menuOption?.id"
    @click="skipToRouter(menuOption)">
    <div v-if="menuOption?.menuIcon"></div>
    <div v-else></div>
    <span>{{ menuOption?.menuName }}</span>
  </el-menu-item>
  <!-- 有子节点，使用el-sub-menu 渲染 -->
  <el-sub-menu v-else :index="menuOption?.id">
    <template #title>
      <div v-if="menuOption?.menuIcon"></div>
      <div v-else></div>
      <span>{{ menuOption?.menuName }}</span>
    </template>
    <InfiniteMenuItem v-for="sub in menuOption?.children" :key="sub.id" :menuOption="sub"></InfiniteMenuItem>
  </el-sub-menu>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { MenuType } from '../menuType';

export default defineComponent({

  name: 'MenuItem',
  props: {
    menuOption: {
      type: Object as PropType<MenuType>,
      required: false,
    },
  },
  setup(props, ctx) {
    const router = useRouter();
    // 跳转路由
    const skipToRouter = (menuOption: any) => {
      // 外部页面
      if (menuOption?.urlCode) {
        window.location.href = menuOption?.urlCode;
        return;
      }
      if (!menuOption?.menuUrl) return;
      router.push({
        path: menuOption?.menuUrl,
      });
    };
    return {
      skipToRouter,
    }
  },
});
</script>
<style lang=""></style>
