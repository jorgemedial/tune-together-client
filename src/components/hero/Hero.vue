<script setup>
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'


</script>

<template>
    <section class="hero">
        <div class="container">
            <article class="title">
            <h1>Populars events <span class="highlight">in Spain</span></h1>
            </article>
            <SearchBar placeholder="Name of the event"/>
            <EventTicket />
        </div>
    </section>
</template>

<style scoped>
.hero {
    padding: 6rem 0rem 0rem 6rem;
    color: white;
    display: flex;
    justify-content: center;
    height: 100vh;
}

.container {
    width: 60%;
    max-width: 1200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
}

.title {
    font-size: 3em;
    text-align: left;
    width: 100%; 
}

.highlight {
    color: #71FF80;
}

@media (max-width: 768px) {
    .title {
        font-size: 2em;
    }
}
</style>