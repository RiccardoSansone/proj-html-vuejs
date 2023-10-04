
<script>
import "../assets/scss/style.scss"
export default {
    name: 'AppFooter',
    setup () {
        

        return {}
    }
}
</script>

<template>
    
<!-- footer -->
<footer>

<!-- footer top -->
<section class="footerTop">
    <!-- container -->
    <div class="footContainer d-flex justify-between">

        <!-- first col -->
        <div class="col-logo column gap-1">
            <img src="../assets/img/footer-logo.png" alt="">
            <p class="line-height-01 color-white"> amet recusandae tempore atque? Blanditiis, sit?</p>
            <!-- social -->
            <div class="social d-flex gap-05">
              <a class="cube d-flex align-center justify-center" href="#"><i class="fa-solid fa-glass-cheers"></i></a>
            </div>
        </div>

        <!-- second col -->
        <div class="emergency column gap-1">
            <h3 class="color-white">lorem</h3>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
        </div>

        <!-- third col -->
        <div class="blog column gap-1">
            <h3 class="color-white">
                lorem
            </h3>
            <!-- row -->
            <div class="d-flex gap-1">
                <div>
                     <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <div class="column gap-02">
                    <p>lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem</p>
                    <small>
                        date 12 34 11
                    </small>
                </div>
            </div>
            <!-- row -->
            <div class="d-flex gap-1">
                <div>
                     <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <div class="column gap-02">
                    <p>lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem</p>
                    <small>
                        date 12 34 11
                    </small>
                </div>
            </div>

        </div>

        <!-- fourth col -->
        <div class="gallery column gap-2">
            <h3 class="color-white">lorem</h3>
            <!-- container -->
            <div class="wrap-gallery d-flex wrap gap-05">
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
                </div>
                <!-- img -->
                <div class="img-gallery">
                    <img src="../assets/img/blo1-70x70.jpg" alt="">
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
        <small class="color-white">lorem lorem lorem</small>
        <div class="d-flex gap-2">
            <a href="#">lorem</a>
            <a href="#">lorem</a>
            <a href="#">lorem</a>
        </div>
    </div>
</section>
<!-- /footer bottom -->
<!-- /////////////// -->

</footer>
<!-- /footer -->
<!-- /////////////// -->

</template>


<style>

</style>