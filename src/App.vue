<script>
import './assets/scss/style.scss'

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
                <img src="./assets/img/logo.png" alt="">
            </div>
            <!-- central menu -->
            <div class="navMenu d-flex gap-05">
                <p>f</p>
                <p>f</p>
                <p>ff</p>
                <p>ff</p>
                <p>fff</p>
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



<!-- main -->
<main>


    <!-- jumbotron -->
    <section class="jumbotron">

        <!-- chevron -->
        <div class="leftRow">
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <!-- chevron -->
        <div class="rightRow">
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <!-- container -->
        <div class="jumboContainer column gap-1 justify-center align-center">
            <h5>GOGRIN ORGANIC FOOD STORE</h5>
            <h1 class="text-center">Eating naturally & organic is always be healty.</h1>
            <!-- buttons -->
            <div class="d-flex gap-05">
                <button class="btn bg-secondary hoverBtn-1">ABOUT US</button>
                <button class="btn bg-primary hoverBtn-2">OUR HISTORY</button>
            </div>
        </div>

    </section>
    <!-- /jumbotron -->
    <!-- /////////////// -->



    <!-- all natural -->
    <section class="allNatural">
        <!-- container -->
        <div class="natContainer column gap-1">
            <!-- row -->
            <div class="d-flex">
                <!-- col left -->
                <div class="column col-50">
                    <h2>
                        <span class="color-secondary">Look what </span>
                        <span class="color-primary">consumer power has done with </span>
                        <span class="color-secondary">organic food; </span>
                        <span class="color-primary">we can do the same with clothes. </span>
                    </h2>
                </div>
                <!-- col right -->
                <div class="column gap-1 col-50">
                    <p>
                        I have a need to make sorts of connection literal sometimes,
                        and a veihcle often helps to do that. I have a relationship
                        to hosting culture. <span class="color-secondary"> It isn't really about it helps
                            to do that. I have a relationship to hosting culture.</span>
                    </p>

                    <p>
                        Need to make these sorts of connections literal sometimes,
                        and a veihcle often helps to do that. I have a relationship
                        to hosting culture.
                    </p>
                </div>
            </div>
            <!-- row -->
            <div class="d-flex wrapper gap-1">
                <img src="./assets/img/fe3.jpg" alt="">
                <img src="./assets/img/fe1.jpg" alt="">
                <img src="./assets/img/fe2.jpg" alt="">
                <img src="./assets/img/fe1.jpg" alt="">
            </div>

            <img class="stamp" src="./assets/img/fe-shap1-1.png" alt="">
        </div>
    </section>
    <!-- /all natural -->
    <!-- /////////////// -->



    <!-- all organic -->
    <section class="allOrganic">
        <!-- container -->
        <div class="containerOrg column justify-center align-center">
            <!-- titles -->
            <div class="text-center column gap-05 mt-3">
                <h4 class="color-secondary">
                    Trending Online Store
                </h4>
                <h1 class="color-white">GOGRIN ALL <span class="color-secondary">ORGANIC</span> FOOD</h1>
                <h4 class="color-secondary">
                    Trending Online Store
                </h4>
                <h1 class="color-white">GOGRIN ALL <span class="color-secondary">ORGANIC</span> FOOD</h1>
            </div>
            <!-- row -->
            <div class="d-flex gap-2 mt-2">
                <a href="#">All Product</a>
                <a href="#">Apple</a>
                <a href="#">Food</a>
                <a href="#">Orange</a>
                <a href="#">Vegetable</a>
            </div>
            <!-- wrapper -->
            <div class="containerWrap d-flex wrap">
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">
                        <img src="./assets/img/s5-150x150.jpg" alt="">
                    </div>
                    <h5 class="color-white text-center">Fresh Apple</h5>
                    <h6 class="color-secondary text-center">$18</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">

                        <img src="./assets/img/s2-150x150.jpg" alt="">
                        <div class="offer bg-secondary d-flex align-center justify -center">
                            SALE!
                        </div>  

                    </div>
                    <h5 class="color-white text-center">Fresh Cobles</h5>
                    <h6 class="color-secondary text-center">$17</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">
                        <img src="./assets/img/s8-150x150.jpg" alt="">
                    </div>
                    <h5 class="color-white text-center">Fresh Watermelon</h5>
                    <h6 class="color-secondary text-center">$15</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">

                    <div class="imgTop">
                        <img src="./assets/img/s1-150x150.jpg" alt="">
                        <div class="offer bg-secondary d-flex align-center justify -center">
                            SALE!
                        </div>  

                    </div>
                    <h5 class="color-white text-center">Organic Juice</h5>
                    <h6 class="color-secondary text-center">$15</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">

                    <div class="imgTop">
                        <img src="./assets/img/s4-150x150.jpg" alt="">
                        <div class="offer bg-secondary d-flex align-center justify -center">
                            SALE!
                        </div>  

                    </div>
                    <h5 class="color-white text-center">Fresh Blueberries</h5>
                    <h6 class="color-secondary text-center">$14</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">
                        <img src="./assets/img/s10-150x150.jpg" alt="">
                    </div>
                    <h5 class="color-white text-center">Organic Lactus</h5>
                    <h6 class="color-secondary text-center">$23</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">

                        <img src="./assets/img/s9-150x150.jpg" alt="">
                        <div class="offer bg-secondary d-flex align-center justify -center">
                            SALE!
                        </div>  

                    </div>
                    <h5 class="color-white text-center">Red Gajor</h5>
                    <h6 class="color-secondary text-center">$26</h6>
                </div>
                <!-- card -->
                <div class="card column gap-1">
                    <div class="imgTop">
                        <img src="./assets/img/s7-150x150.jpg" alt="">
                    </div>
                    <h5 class="color-white text-center">Naga Pepper</h5>
                    <h6 class="color-secondary text-center">$21</h6>
                </div>
            </div>
            <!-- /wrapper -->
            <button style="width: 150px; margin-bottom: 4rem;" class="btn bg-secondary">ALL PRODUCTS</button>
        </div>
    </section>
    <!-- /all organic -->
    <!-- /////////////// -->



    <!-- dessert -->
    <section class="dessert">
        <!-- container -->
        <div class="container-sm column align-center gap-1">
            <img src="./assets/img/testi-icon.png" alt="">
            <p class="text-center">
                "Dessert pudding dessert jelly beans cupcake sweet caramels
                gingerbread. Fruit biscuit cheesecake. Cookie topping sweets
                muffine pudding tart bear claw sugar plum croissant.". We 
                started as a small legal consultancy. We have proved our 
                competence and had many satisfied clients.
            </p>
            <h3 class="text-center">Martha Alex</h3>
            <h5 class="color-secondary">Manager</h5>
        </div>
        <!-- container img -->
        <div class="container-md d-flex gap-1 justify-center">
            <div class="off">
                <img src="./assets/img/offer-img01.jpg" alt="">
                <h2 class="pos-top">Fresh guarden tomato<br>combo offer...$37</h2>
                <h4 class="shop-now">SHOP NOW</h4>
            </div>
            <div class="off">
                <img src="./assets/img/offer-img02.jpg" alt="">
                <h2 class="pos-top">Some organic healty fruits<br>combo offer...$49</h2>
                <h4 class="shop-now">SHOP NOW</h4>
            </div>
        </div>
    </section>
    <!-- /dessert -->
    <!-- /////////////// -->



    <!-- data -->
    <section class="data">
        <!-- numbers container -->
        <div class="numbContainer d-flex justify-center align-center gap-1">

            <div class="col-n column gap-05 justify-center align-center">
                <h1 class="color-secondary">29+</h1>
                <h4 class="color-white">Years of Experienced</h4>
            </div>

            <img src="./assets/img/counter-shap1.png" alt="">

            <div class="col-n column gap-05 justify-center align-center">
                <h1 class="color-secondary">200+</h1>
                <h4 class="color-white">Everyday online Delivery</h4>
            </div>

            <img src="./assets/img/counter-shap1.png" alt="">

            <div class="col-n column gap-05 justify-center align-center">
                <h1 class="color-secondary">20K</h1>
                <h4 class="color-white">Client Satysfaction</h4>
            </div>

            <img src="./assets/img/counter-shap1.png" alt="">

            <div class="col-n column gap-05 justify-center align-center">
                <h1 class="color-secondary">30+</h1>
                <h4 class="color-white">Award Winning</h4>
            </div>





            
        </div>
    </section>
    <!-- /data -->
    <!-- /////////////// -->



    <!-- trending -->
    <section class="trending">
        <!-- title -->
        <div class="trend column gap-05 align-center">
            <h5 class="color-secondary">Running week to selling</h5>
            <h2 class="color-primary">TOP <span class="color-secondary">TRENDING</span> ORGANIC FOOD</h2>
            <img src="./assets/img/title-shap.png" alt="">
        </div>
        <!-- card container -->
        <div class="trendContainer d-flex gap-1 justify-center">
            <!-- card -->
            <div class="trendCard column gap-05 align-center">
                <img src="./assets/img/s5-150x150.jpg" alt="">
                <h5>Fresh Apple</h5>
                <small>$18</small>
            </div>
            <!-- card -->
            <div class="trendCard column gap-05 align-center">
                <img src="./assets/img/s2-150x150.jpg" alt="">
                <h5>Fresh Cobies</h5>
                <small>$17</small>
                <div class="offers bg-secondary d-flex align-center justify -center">
                    SALE!
                </div>  
            </div>
            <!-- card -->
            <div class="trendCard column gap-05 align-center">
                <img src="./assets/img/s8-150x150.jpg" alt="">
                <h5>Fresh Watermelon</h5>
                <small>$15</small>
            </div>
            <!-- card -->
            <div class="trendCard column gap-05 align-center">
                <img src="./assets/img/s1-150x150.jpg" alt="">
                <h5>Organic Juice</h5>
                <small>$15</small>
                <div class="offers bg-secondary d-flex align-center justify -center">
                    SALE!
                </div>  
            </div>

        </div>
    </section>
    <!-- /trending -->
    <!-- /////////////// -->



    <!-- best organic -->
    <section class="bestOrganic">
        <!-- container -->
        <div class="bestContainer column gap-1 align-center justify-center">
            <!-- description -->
            <h6>HERE YOU CAN GET 100% FRESH ORGANIC FOOD</h6>
            <h1>Best organic food up to 25% off for all product</h1>
            <p class="text-center">
                The most beautiful people we have to know defeat, known struggle, know loss,
                and have found their way out of those dephts. The most beautiful people
                we have known are those who have known defeat, known suffering
            </p>
            <!-- buttons -->
            <div class="bestButtons d-flex gap-1 justify-center">
                <button class="bg-secondary"><i class="fa-brands fa-whatsapp"></i> +088123 56 906</button>
                <button class="bg-primary">APOINMENT</button>
            </div>
        </div>
    </section>
    <!-- /best organic -->
    <!-- /////////////// -->



    <!-- gogrin -->
    <section class="gogrin">
        <!-- title -->
        <div class="gogr column gap-05 align-center">
            <h5 class="color-secondary">The news whatwe have</h5>
            <h2 class="color-primary">GOGRIN LATEST <span class="color-secondary">NEWS</span> FEED</h2>
            <img src="./assets/img/title-shap.png" alt="">
        </div>
        <!-- cards -->
        <div class="gogrCards d-flex justify-center gap-1">

            <!-- card -->
            <div class="goCard column gap-1">
                <!-- img -->
                <img src="./assets/img/blo1-390x250.jpg" alt="">
                <!-- user and date -->
                <div class="d-flex gap-1">
                    <!-- user -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-solid fa-user color-secondary"></i>
                        <span>Gogrin</span>
                    </div>
                    <!-- date -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-regular fa-clock color-secondary"></i>
                        <span>17 Dec 2022</span>
                    </div>
                </div>
                <!-- description -->
                <h4 class="color-primary">
                    Where I live, I am surrounded by fresh,
                    organic food, so I eat really well.
                </h4>
                <p class="line-height-01">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita, delectus corporis laborum nemo excepturi.
                </p>
                <small class="color-primary">
                    READ MORE...
                </small>
            </div>

            <!-- card -->
            <div class="goCard column gap-1">
                <!-- img -->
                <img src="./assets/img/blo2-390x250.jpg" alt="">
                <!-- user and date -->
                <div class="d-flex gap-1">
                    <!-- user -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-solid fa-user color-secondary"></i>
                        <span>Gogrin</span>
                    </div>
                    <!-- date -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-regular fa-clock color-secondary"></i>
                        <span>16 Dec 2022</span>
                    </div>
                </div>
                <!-- description -->
                <h4 class="color-primary">
                    What we get at home is 100% organic food. We are also 90% vegetarian.
                </h4>
                <p class="line-height-01">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita, delectus corporis laborum nemo excepturi.
                </p>
                <small class="color-primary">
                    READ MORE...
                </small>
            </div>

            <!-- card -->
            <div class="goCard column gap-1">
                <!-- img -->
                <img src="./assets/img/blo3-390x250.jpg" alt="">
                <!-- user and date -->
                <div class="d-flex gap-1">
                    <!-- user -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-solid fa-user color-secondary"></i>
                        <span>Gogrin</span>
                    </div>
                    <!-- date -->
                    <div class="d-flex gap-02 align-center">
                        <i class="fa-regular fa-clock color-secondary"></i>
                        <span>15 Dec 2022</span>
                    </div>
                </div>
                <!-- description -->
                <h4 class="color-primary">
                    If we as a society are willing to have a preference for organic 
                    food farmer
                </h4>
                <p class="line-height-01">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita, delectus corporis laborum nemo excepturi.
                </p>
                <small class="color-primary">
                    READ MORE...
                </small>
            </div>

        </div>

    </section>
    <!-- /gogrin -->
    <!-- /////////////// -->



    <!-- farm logo -->
    <section class="farmLogo d-flex justify-between">
        <img src="./assets/img/brand1.png" alt="">
        <img src="./assets/img/brand4.png" alt="">
        <img src="./assets/img/brand1.png" alt="">
        <img src="./assets/img/brand3.png" alt="">
        <img src="./assets/img/brand2.png" alt="">
    </section>
    <!-- /farm logo -->
    <!-- /////////////// -->


</main>
<!-- /main -->
<!-- /////////////// -->



<!-- footer -->
<footer>
    <!-- footer top -->
    <section class="footerTop">
        <!-- container -->
        <div class="footContainer d-flex justify-between">

            <!-- first col -->
            <div class="col-logo column gap-1">
                <img src="./assets/img/footer-logo.png" alt="">
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
                         <img src="./assets/img/blo1-70x70.jpg" alt="">
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
                         <img src="./assets/img/blo1-70x70.jpg" alt="">
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
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
                    </div>
                    <!-- img -->
                    <div class="img-gallery">
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
                    </div>
                    <!-- img -->
                    <div class="img-gallery">
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
                    </div>
                    <!-- img -->
                    <div class="img-gallery">
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
                    </div>
                    <!-- img -->
                    <div class="img-gallery">
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
                    </div>
                    <!-- img -->
                    <div class="img-gallery">
                        <img src="./assets/img/blo1-70x70.jpg" alt="">
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

</footer>
<!-- /footer -->
<!-- /////////////// -->



</template>

<style>

</style>
