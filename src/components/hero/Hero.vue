<script setup>
import { ref } from 'vue';
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
import { Icon } from '@iconify/vue';
</script>

<template>
    <section class="hero">
        <div class="container">
            <article class="title">
            <h1>Populars events <span class="highlight">in Spain</span></h1>
            </article>
            <SearchBar />
            <EventTicket />
        </div>
    </section>
</template>

<style scoped>
.hero{
    padding: 4rem 2rem;
    color: white;
    display: flex;
}
.container{
    width: 90%;
    max-width: 1200px;
    height: 100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 50px 0px 50px;
    gap: 2rem;
}

.title{
    font-size: 3em;
    text-align: left;
}

.highlight{
    color: #71FF80;
}


@media (max-width: 768px) {
    .container {
        padding: 15px; 
        gap: 0.5rem;
    }

    .title {
        font-size: 1.5em;
        padding: 0 10px; 
        text-align: center;
    }

    .highlight {
        font-size: 1em;
    }
}

</style>