
<script>
import "../assets/scss/style.scss";
import { state } from "../state";
export default {
    name: 'AppHeader',
    data () {
        return {
            state,
        }
    }
}
</script>

<template>


<!-- header -->
<header>

<!-- greenLine -->
<div id="greenLine">
    <!-- smallInfo -->
    <div class="smallInfo d-flex justify-between">
        <!-- left menu -->
        <div class="leftSmall d-flex gap-1 align-center">

            <a href="#">
                <i class="fa-solid fa-location-dot"></i>
                North baukhula, tala, USA
            </a>

            <a href="#">
                <i class="fa-solid fa-envelope"></i>
                demo@example.com
            </a>

        </div>
        <!-- right menu -->
        <div class="rightSmall d-flex gap-1 align-center">

            <a href="#">
                <i class="fa-regular fa-clock"></i>
                8.30AM-8.30PM
            </a>

            <div class="d-flex gap-05">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
            </div>

        </div>
    </div>
    <!-- /smallInfo -->
</div>
<!-- /greenLine -->
<!-- /////////////// -->

<!-- navbar -->
<nav class="nav">
    <!-- container -->
    <div class="navContainer d-flex align-center">
        <!-- logo -->
        <div class="logo flex-start">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <!-- central menu -->
        <div class="navMenu d-flex gap-05">
            <!-- single item -->
            <div v-for="item in state.menu" class="d-flex item align-center gap-02">
                <a class="color-menu" href="#">{{ item }}</a>
                <i class="fa-solid fa-chevron-down color-menu"></i>
            <!-- menu tendina -->
            <div class="display-none display-block">
                <a href="#">HOME-1 <br></a>
                <a href="#">HOME-2 <br></a>
                <a href="#">HOME-3 <br></a>
                <a href="#">HOME-LANDING <br></a>
                <a href="#">HOME VIDEO</a>
            </div>
            <!-- /menu tendina -->
            </div>

        </div>
        <!-- right menu -->
        <div class="cart d-flex gap-05 align-center">
            <!-- circle icon -->
            <div class="search d-flex align-center justify-center">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <!-- cart -->
            <div class="cartIcon">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="zero d-flex justify-center align-center">0</div>
            </div>
            <!-- button -->
            <button class="btn bg-secondary">ORDER NOW</button>


        </div>
    </div>

</nav>
<!-- /navbar -->
<!-- /////////////// -->

</header>
<!-- /header -->
<!-- /////////////// -->


</template>


<style>

</style>