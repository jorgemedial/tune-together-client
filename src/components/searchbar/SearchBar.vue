<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
</script>


<template>
    <section class="search-bar">
        <input type="text" placeholder="Search" v-model="searchQuery" @keyup.enter="performSearch" />
        <icon></icon>
    </section>
</template>


<style scoped>
.search-bar input {
    width: 100%;
    padding: 8px 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 22px;
    outline: none; 
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
}

.search-bar input:focus {
    border-color: #71FF80; /* Highlight color when focused */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Slightly more pronounced shadow on focus */
}
</style>