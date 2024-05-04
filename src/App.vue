<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from '@/views/mainPage/Home.vue'
import Navigator from '@/components/navbar/NavBar.vue'
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<template>
        <Navigator />
        <Home />
</template>