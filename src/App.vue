<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from '@/views/mainPage/Home.vue'
import Navigator from '@/components/navbar/NavBar.vue'
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<template>
    <div class="app">
        <Navigator />
        <Home />
    </div>
</template>

<style scoped>
*{
    background: black;
}
</style>