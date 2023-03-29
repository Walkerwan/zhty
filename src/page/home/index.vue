<template>
  <main class="wh-screen">
    <section class="w-full h-20 relative">
      <img src="@/assets/images/home/bg-nav.png" alt="" class="wh-full">
      <div class="wh-full absolute-lt flex">
        <div class="w-60 h-full" text="fs-18 white">考场管理系统</div>
      </div>
    </section>
    <section class="w-full h-full flex">
      <div class="w-80" bg="red"></div>
      <div class="w-full" bg="yellow"></div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, ctx) { 
    return {}
  }
})
</script>