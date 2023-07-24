<template>
  <main class="wh-screen">
    <section class="w-full h-60px leh-48 relative">
      <img src="@/assets/images/home/bg-nav.png" alt="" class="wh-full">
      <div class="wh-full absolute-lt flex">
        <div class="h-full pl-60px" c-text="fs-18 white">考场管理系统</div>
      </div>
    </section>
    <section class="w-full h-full flex">
      <div class="w-250px" c-bg="#f4f5f7">
        <LeftMenu></LeftMenu>
      </div>
      <div class="w-full" c-bg="yellow">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftMenu from "@/components/menu/index.vue";

export default defineComponent({
  name: "home",
  components: { LeftMenu },
  setup(props, ctx) {
    return {

    }
  }
})
</script>

<route lang="yaml">
  redirect:
  name: home-home
  meta:
    auth: true
  </route>