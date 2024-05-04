<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// Accepting parameters
const props = defineProps({
    type: String,
    default: 'text',
    placeholder: String,
    icon: String
});

const inputValue = ref('');
const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

</script>

<template>
    <div class="input-wrapper">
        <input
            :type="type"
            :placeholder="placeholder"
            v-model="inputValue"
            @focus="handleFocus"
            @blur="handleBlur"
        />
        <Icon v-if="icon" :icon="icon" class="iconify" :class="{ 'icon-focus': isFocused }"/>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 25px;
  transition: all 0.3s ease;
}

input {
  flex: 1;
  padding: 10px 20px 10px 40px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.iconify {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #2f2f2f;
    transition: color 0.5s ease;
}
</style>