<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


import Input from '@/commons/labels/Input.vue'
import LoginButton from '@/commons/buttons/LoginButton.vue';
</script>

<template>
    <form>
        <h1>Log In</h1>
        <Input 
            id="first-name"
            type="text"
            label="First Name"
            placeholder="Enter your username"
            icon="mdi:user"
        />
        <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            icon="mdi:password"
        />
        <LoginButton routeName="Home">Log In</LoginButton>
    </form>
</template>

<style scoped>
form{
    display:flex;
    flex-direction: column;
    max-width: 300px;
    min-height: 300px;
    height: auto;
    margin: 50px auto;
    padding: 20px;
    background-color: rgb(26, 26, 26);
    box-shadow: 0 4px 8px rgba(0,0,0,5);
    align-items: center;
    text-align: center;
    gap:25px;
}

h1{
    margin-top: 20px;
}

</style>