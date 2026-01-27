<template>
    <div class="home text-center">
        <h1 class="text-white text-uppercase mt-3 gradient-hover" 
            style="font-size: 60px">
            <span>nhoem</span><br>
            <span>senkropum</span>
        </h1>
        <p class="text-white-50">Lorem ipsum dolor, sit amet consectetur <br>adipisicing elit. Ea dicta doloribus, eum beatae unde <br>facilis eaque architecto, quam ex explicabo suscipit vero? <br>Facere dolor placeat itaque eaque, fugiat iste amet?</p>
        <div class="btnGroup d-flex gap-2 justify-content-center ">
            <button class="px-2 fs-3 btn  btn-outline-light">Contact me</button>
            <button class="px-2 fs-3 btn  btn-outline-light">Resume</button>
        </div>
    </div>
</template>
<style scoped>
    .gradient-hover {
        background-size: 200% 200%;
    }

    .gradient-hover:hover {
        animation: gradientMove 1s ease infinite;
    }

    @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }



</style>

<script script></script>