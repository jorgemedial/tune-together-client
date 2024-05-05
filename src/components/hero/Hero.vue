<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import EventTicket from '@/components/eventticket/EventTicket.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

const events = ref([]);

const getEvents = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/social-events');
    events.value = response.data.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }
};

onMounted(getEvents);
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreEvents();
  }
});
</script>

<template>
  <section class="hero">
    <div class="container">
      <article class="title">
        <h1>Popular events</h1>
        <h1><span class="highlight">around Spain</span></h1>
      </article>
      <SearchBar placeholder="Name of the event" @update:search="searchQuery = $event"/>
      <div class="event-list">
        <EventTicket
          v-for="(event, index) in events.slice(0, limit)"
          :key="index"
          :event-name="event.name"
          :event-date="event.date"
          :event-location="event.city"
          :price-level="event.price"
        />
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero {
    margin: 70px 0px 0px 30px;
    min-height: 200vh;
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

.event-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;
}

@media (max-width: 768px) {
    .title {
        font-size: 2em;
    }
}
</style>
