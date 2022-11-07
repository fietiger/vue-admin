<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { env, helper } from "../src/helper";
console.log(typeof env.VITE_SOME);
console.log(typeof helper.env.VITE_SOME_DAD_URL);
</script>

<style scoped></style>
