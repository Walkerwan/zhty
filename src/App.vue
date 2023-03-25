<template>
  <config-provider>
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, ctx) {
    return {};
  }
});
</script>

<style scoped>
</style>
