<script setup>
import Navigator from '@/components/navbar/NavBar.vue'
import Hero from '@/components/hero/Hero.vue'
</script>

<template>
    <Navigator />
    <main class="home">
        <Hero />
    </main>
</template>

<style scoped>
main{
    scroll-behavior: smooth;
}
</style>