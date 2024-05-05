<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import EventTicket from '@/components/eventticket/EventTicket.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<template>
    <section class="hero">
        <div class="container">
            <article class="title">
            <h1>Populars events around <span class="highlight">The World</span></h1>
            </article>
            <SearchBar placeholder="Name of the event"/>
            <EventTicket />
        </div>
    </section>
</template>

<style scoped>
.hero {
    margin-left: 10%;
    margin-right: 10%;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    transition: all 0.5s;
}

.container {
    width: 60%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
}

.title {
    font-size: 4em;
    text-align: left;
    width: 100%;
    transition: all 0.5s;
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

<script>

export default {
    data() {
      return {
        events: [],
      };
    },
    methods: {
      getEvents() {
        const path = 'http://127.0.0.1:5000/social-events';
        axios.get(path)
          .then((res) => {
            console.log(res.data)
            this.events = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
    created() {
      this.getEvents();
    },
  };
</script>