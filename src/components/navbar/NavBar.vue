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
            <ol>
                
                <li><p>Explore Events</p></li>
                <li><p>About Us</p></li>
                <li><div class="button-login">
                        <button type="button">Log In</button> 
                    </div></li>
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
}

.logo{
    display: flex;

}

.title-nav{
    display: flex;
    flex-direction: column;
    font-size: 18px;
}

.normal {
    color: white;
}

.highlight {
  color: #71FF80;
}

ol{
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
}

li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
}

.button-login button {
    width:;
    background-color: #38D247;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 25px;
    font-size: 18px;
}

.button-login button:hover {
    background-color: #2da33b;
}
</style>