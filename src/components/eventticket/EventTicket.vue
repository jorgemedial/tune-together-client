<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    eventName: String,
    eventDate: String,
    eventLocation: String,
    priceLevel: Number,
});
</script>

<template>
  <div class="ticket-container">
    <div class="foto-container">
        <img src="" :alt="`Image of ${eventName}`" class="event-image" loading="lazy"/>
    </div>

    <div class="event-details">
        <h2>{{ eventName }} </h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tempore nisi libero praesentium.</p>
        <div class="event-info">
            <span class="info-item"><Icon icon="mdi:calendar" width="25" height="25"/> {{ eventDate }} </span>
            <span class="info-item"><Icon icon="mdi:map-marker" width="25" height="25"/> {{ eventLocation }} </span>
            <span class="info-item"> {{ priceLevel }} <Icon icon="bi:currency-euro" width="25" height="25"/> </span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-container {
    width: 720px;
    height: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #101010;
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

.foto-container {
    width: 300px;
    height: 100%;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.event-details {
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    padding-left: 30px;
    color: #ccc;
    align-items: start;
}

.event-info {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

@media (max-width: 768px) {
    .foto-container {
        display: none;
    }

}
</style>