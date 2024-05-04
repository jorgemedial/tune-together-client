<template>
    <header>
        <nav>
            <div class="logo">
                <!--<a title="home" href="#">
                    <img src=".svg" alt="logo" >
                </a>-->
                <h1>Tune <span class="highlight">Together</span></h1>

            </div>
            <ol>
                <p>Explore Events</p>
                <p>About Us</p>
                <div class="button-login">
                    <button type="button">Login</button> 
                </div>
            </ol>
        </nav>
    </header>
</template>

<script>
    import Navigator from '@/components/navbar/NavBar.vue'
    import EventTicket from '@/components/eventticket/EventTicket.vue'
    import SearchBar from '@/components/searchbar/SearchBar.vue'
</script>

<style scoped>
header{
    width: 100%;
    height: auto;
    max-height: 200px;
    display: flex;
    position: relative;
    align-items: center;
    background: black;
    padding: 20px;
}
nav{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo{
    display: flex;

}
h1{
    color: white;
}
.highlight {
  color: #71FF80;
}

ol{
    display:flex;
}
</style>