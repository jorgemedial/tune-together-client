<script>
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<template>
    <section>
        <div class="title">
            <h1>Populars events <span class="highlight">in Spain</span></h1>        </div>
        <SearchBar />
        <EventTicket />
    </section>
</template>

<style scoped>
section{
    width: 100%;
    height: auto;
    display: flex;
}

.title{
    display: flex;
}

.highlight{
    color: #71FF80;
}

</style>