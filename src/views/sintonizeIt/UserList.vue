<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import Input from '@/commons/labels/Input.vue'
import LoginButton from '@/commons/Buttons/LoginButton.vue';
</script>
<template>
    <form>
        <Input
            id="Dep_city"
            type="text"
            label="First Name"
            placeholder="Departure city"
            icon="city"
        />
        <Input
            id="Dest_city"
            type="text"
            label="Password"
            placeholder="Destination city"
            icon="city"
        />
        <Input
            id="Date_ini"
            type="date"
            label="Date_ini"
            placeholder="Inital date"
            icon="city"
        />
        <Input
            id="Date_fi"
            type="date"
            label="Date_fi"
            placeholder="Final date"
            icon="city"
        />
        <LoginButton routeName="EventTicket">Log In</LoginButton>
    </form>
</template>
<style scoped>
form{
    display:inline-flex;
    flex-direction: row;
    max-width: 100%;
    min-height: 200px;
    height: auto;
    margin: 0 auto;
    padding: 75px;
    background-color: rgb(26, 26, 26);
    box-shadow: 0 4px 8px rgba(0,0,0,5);
    align-items: center;
    text-align: center;
    gap:25px;
    justify-content: center;
}
h1{
    margin-top: 100px;
    align-items: center;
}
</style>









