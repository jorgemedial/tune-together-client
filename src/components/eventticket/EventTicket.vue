<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

// Define props to accept data
const props = defineProps({
  imageUrl: String,
  eventName: String,
  eventDescription: String,
  eventDate: String,
  eventLocation: String,
  priceLevel: Number
});

</script>

<template>
  <div class="ticket-container">
    <div class="foto-container">
        <img :src="imageUrl" alt="Event image" class="event-image"/>
    </div>

    <div class="event-details">
        <h2>{{ eventName }} as</h2>
        <p>{{ eventDescription }} XD</p>
        <div class="event-info">
            <span><Icon icon="mdi:calendar" /> {{ eventDate }} </span>
            <span><Icon icon="mdi:map-marker" /> {{ eventDate }} </span>
            <template v-for="i in priceLevel">
                <span><Icon icon="mdi:currency-euro" /></span>
            </template>
        </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-container {
    width: 720px;
    height: 180px;
    display: flex;
    align-items: center;
    background-color: #101010;
    border-radius: 20px;
    overflow: hidden;
}

.foto-container {
    width: 180px;
    height: 100%;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.event-details {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    padding-left: 30px;
    color: #ccc;
    align-items: start;
}

.event-info span {
    display: inline-flex;
    align-items: center;
    margin-right: 10px;
}

.event-info iconify-icon {
    margin-right: 5px;
}

h2, p {
    margin: 0;
}

.icon {
    color: #ccc;
}

</style>