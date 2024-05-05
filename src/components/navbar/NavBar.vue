<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
import LoginButton from '@/commons/buttons/LoginButton.vue'

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <!--<a title="home" href="#">
                    <img src=".svg" alt="logo" >
                </a>-->
                <div class="title-nav">
                    <h1 class="normal">Tune</h1>
                    <h1 class="highlight">Together</h1>
                </div>
            </div>
            <button @click="toggleMenu" class="menu-toggle">
                <Icon icon="mdi:menu" class="iconify" />
            </button>
            <ol :class="{ 'show': isMenuOpen }">
                <li>
                    <RouterLink class="link-style" :to="{ name: 'EventTicket' }">
                        <p>Explore Events</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="link-style" :to="{ name: 'LoginPage' }">
                        <p>About Us</p>
                    </RouterLink>
                </li>
                <li>
                    <LoginButton routeName="LoginPage">Go to Login</LoginButton>
                </li>
            </ol>
        </nav>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    min-height: 60px;
    max-height: 200px;
    display: flex;
    position: relative;
    align-items: center;
    background: #121212;
    
}

nav{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    transition: color 0.3s ease-in-out;
}

.logo{
    display: flex;
}

.title-nav{
    flex: 1;
    min-width: none;
    font-size: 18px;
}
h1{
    width: auto;
    height: auto;
    cursor: pointer;
    overflow: hidden;
    transition: height 0.5s ease-out;
}
.normal {
    color: white;
}

.highlight {
  color: #71FF80;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 30px;
    color: white;
}
.iconify {
    width: 50px;
    height: 50px;
}

.link-style{
    color:white;
    text-decoration: none;
}

ol{
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    overflow: hidden;
    transition: height 0.5s ease-out;
}

li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
}
ol li p{
    cursor: pointer;
}

li p:hover{
    color: #71FF80;
    transition: all 0.5s ease;
}

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

@media (max-width: 768px) {
    header {
        padding: 10px 20px;
        transition: all 0.5s;
    }

    .title-nav {
        font-size: 16px;
    }

    .menu-toggle {
        display: block;
        transition: all 0.5s;
    }

    ol {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        background-color: #121212;
        transition: all 0.5s;
    }

    ol.show{
        display: flex;
    }

    li {
        width: 100%;
        justify-content: center;
    }
}

</style>