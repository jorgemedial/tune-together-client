<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from '@/views/mainPage/Home.vue'
import Navigator from '@/components/navbar/NavBar.vue'
</script>

<template>
    <RouterView />
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>