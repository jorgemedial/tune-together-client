<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// Accepting parameters
const props = defineProps({
  placeholder: String
});

// Searching concerts
const searchQuery = ref('');

function performSearch() {
    console.log('Searching for:', searchQuery.value);
}

</script>


<template>
    <section class="search-bar">
        <div class="input-container">
            <input type="text" :placeholder="props.placeholder" v-model="searchQuery" @keyup.enter="performSearch" />
            <Icon icon="basil:search-outline" :style="{ fontSize: '30px' }" class="search-icon" />
        </div>
    </section>
</template>

<style scoped>
.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
}

.search-bar input {
    flex-grow: 1;
    padding: 8px 16px 8px 40px;
    font-size: 16px;
    border: 2px solid transparent;
    border-radius: 22px;
    outline: none;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
}

.search-icon, .filter-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #ccc;
    cursor: pointer;
}

.search-icon {
    left: 8px;
}

.search-bar input:focus {
    border-color: #aaffb3;
    box-shadow: 0 4px 6px rgba(0, 255, 130, 0.25);
}

@media (max-width: 768px) {
    .input-container {
        max-width: 100%;
    }

    .search-bar input {
        padding: 10px 16px 10px 35px;
    }

    .search-icon {
        left: 10px;
    }
}
</style>
