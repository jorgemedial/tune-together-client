<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    imageUrl: { type: String, required: false },
    eventName: { type: String, required: true },
    eventDescription: { type: String, default: '' },
    eventDate: { type: String, required: true },
    eventLocation: { type: String, required: true },
    priceLevel: { type: Number, default: 1 }
});

</script>

<template>
  <div class="ticket-container">
    <div class="foto-container">
        <img :src="imageUrl" :alt="`Image of ${eventName}`" class="event-image" loading="lazy"/>
    </div>

    <div class="event-details">
        <h2>{{ eventName }} </h2>
        <p>{{ eventDescription }} </p>
        <div class="event-info">
            <span><Icon icon="mdi:calendar" width="25" height="25"/> {{ eventDate }} </span>
            <span><Icon icon="mdi:map-marker" width="25" height="25"/> {{ eventDate }} </span>
            <template v-for="(item, index) in priceLevel" :key="index">
                <span><Icon icon="mdi:currency-euro" width="25" height="25"/></span>
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
    justify-content: flex-start;
    align-items: center;
    background-color: #101010;
    border-radius: 20px;
    overflow: hidden;
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
    position: relative;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 768px) {
    .foto-container {
        display: hidden;
        overflow: hidden;
    }
    .event-image{
        display: hidden;
        overflow: hidden;
        
    }
}
</style>