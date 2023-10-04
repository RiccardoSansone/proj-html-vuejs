
<script>
import "../assets/scss/style.scss"
import { state } from "../state";
export default {
    name: 'AppFooter',
    data () {
        return {
            state,
        }
    }
}
</script>

<!-- footer --> 
<template>
    
<footer>

<!-- footer top -->
<section class="footerTop">
    <!-- container -->
    <div class="footContainer d-flex justify-between">

        <!-- first col -->
        <div class="col-logo column gap-1">
            <img :src="'./src/assets/img/'+state.footer.col_1.image" alt="">
            <p class="line-height-01 color-white">{{ state.footer.col_1.paragraph }}</p>
            <!-- social -->
            <div class="social d-flex gap-05">
              <a style="text-decoration: none;" v-for="icon in state.footer.col_1.icons"  class="cube d-flex align-center justify-center" href="#"><i :class="icon"></i></a>
            </div>
        </div>

        <!-- second col -->
        <div class="emergency column gap-1">
            <h3 class="color-white">{{ state.footer.col_2.title }}</h3>
            <a v-for="item in state.footer.col_2.items" href="#">{{ item }}</a>
        </div>

        <!-- third col -->
        <div class="blog column gap-1">
            <h3 class="color-white">
                {{ state.footer.col_3.title }}
            </h3>
            <!-- row -->
            <div class="d-flex gap-1">
                <div>
                     <img :src="state.footer.col_3.rows[0].image" alt="">
                </div>
                <div class="column gap-02">
                    <p>{{ state.footer.col_3.rows[0].paragraph }}</p>
                    <small>
                        {{ state.footer.col_3.rows[0].date }}
                    </small>
                </div>
            </div>
            <!-- row -->
            <div class="d-flex gap-1">
                <div>
                     <img :src="state.footer.col_3.rows[1].image" alt="">
                </div>
                <div class="column gap-02">
                    <p>{{ state.footer.col_3.rows[1].paragraph }}</p>
                    <small>
                        {{ state.footer.col_3.rows[0].date }}
                    </small>
                </div>
            </div>

        </div>

        <!-- fourth col -->
        <div class="gallery column gap-2">
            <h3 class="color-white">{{ state.footer.col_4.title }}</h3>
            <!-- container -->
            <div class="wrap-gallery d-flex wrap gap-05">
                <!-- img -->
                <div v-for="image in state.footer.col_4.images" class="img-gallery">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>

    </div>
    <!-- /container -->
    
    <!-- input email -->
    <div class="subscribe d-flex align-center justify-around">

        <h2 class="color-white">SUBSCRIBE OUR NEWSLETTER</h2>

        <div class="d-flex">
             <input type="text" placeholder="your email">
             <button class="bg-primary color-white">SEND</button>
        </div>
    </div>

</section>
<!-- /footer top -->
<!-- /////////////// -->

<!-- footer bottom -->
<section class="footerBottom">
    <!-- container -->
    <div class="bottomContainer d-flex align-center justify-between">
        <p class="color-white">{{ state.footer.green.copy }}</p>
        <div class="d-flex gap-2">
            <a v-for="information in state.footer.green.info" href="#">{{ information }}</a>
        </div>
    </div>
</section>
<!-- /footer bottom -->
<!-- /////////////// -->

</footer>

</template>
<!-- /footer -->
<!-- /////////////// -->


<style>

</style>