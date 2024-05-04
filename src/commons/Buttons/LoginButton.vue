<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  routeName: String
});

</script>

<template>
    <div class="button-login">
    <RouterLink :to="{ name: routeName }" class="button-link">
      <button>Login</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.button-login button {
    width:100%;
    background-color: #38D247;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 25px;
    font-size: 18px;
    transition: background-color 0.2s, transform 0.1s;
    cursor: pointer;
}

.button-login button:hover {
    background-color: #2da33b;
}

.button-login button:active {
    transform: scale(0.95);
}
</style>