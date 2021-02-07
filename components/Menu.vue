<template>
    <div class="main" :style="{'cursor' :`url(${cursorDotUrl}),auto`}">
        <div class="tab-parent" v-if="menuActiveParent">
            <div v-if="menuActive">
    
                <div class="about">
                    <b-container class="bv-menu">
                        <b-row class="text-center menu-center">
                            <b-col cols="12" class="bv-menu-menu">
                                <transition name="bv-menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutUp">
                                    <h1 class="menu-link" v-on:click="changePage('/works')"  v-if="menuActiveIn.works">
                                         <a href="#" class="">works</a>
                                    </h1>
                                </transition>
                            </b-col>
                            <b-col cols="12" class="bv-menu-menu">
                                <transition name="bv-menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutUp">
    
                                    <h1 class="menu-link"  v-on:click="changePage('/about')" v-if="menuActiveIn.about">
                                        <!-- <nuxt-link to="/about">about</nuxt-link> -->
                                        <a href="#" class="">about</a>
                                        
                                    </h1>
    
                                </transition>
                            </b-col>
                            <b-col cols="12" class="bv-menu-menu">
                                <transition name="bv-menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutUp">
                                    <h1 class="menu-link" v-on:click="changePage('/growup')" v-if="menuActiveIn.growup">
                                          <a href="#" class="">GROWUP</a>
                                    </h1>
                                </transition>
                            </b-col>
    
                            <b-col cols="12" class="bv-menu-menu contact-memu">
                                <transition name="bv-menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutUp">
                                    <h1 class="menu-link" v-on:click="changePage('/contact')" v-if="menuActiveIn.growup">
                                          <a href="#" class="">Contact</a>
                                    </h1>
                                </transition>
                            </b-col>
                        </b-row>
    
    
    
    
    
                    </b-container>
                </div>
    
            </div>
    
            <b-row>
                <transition v-for="(elmentDelayIn, index) in elmentDelay" v-bind:key="index" name="page-menu" enter-active-class="animate__animated animate__slideInDown delay-1" leave-active-class="animate__animated animate__slideOutUp">
                    <b-col v-show="elmentDelayIn.delay" class="tab-child" cols="2" sm="2" md="1" lg="1" xl="1"></b-col>
                </transition>
            </b-row>
    
    
        </div>
    
    
    
        <div class="pg-nav">
            <div class="logo">
                <nuxt-link to="/"><img src="~/assets/image/logo/logo1.png" alt="logo 1" v-if="!isActive" :style="{'cursor' :`url(${cursorDotUrl}) 10 15,auto`}"></nuxt-link>
            </div>
            <div class="center" v-on:click="showMenu()">
                <v-burger type="spin" :active="isActive" @updated="isActive = $event" :burgerStyle="burgerStyle" :style="{'cursor' :`url(${cursorDotUrl}),auto`}" />
            </div>
            <div class="content" v-if="!isActive">
                <nuxt-link :style="{'cursor' :`url(${cursorDotUrl}),auto`,}" to="contact">Contact</nuxt-link>
            </div>
        </div>
        <transition name="bv-menu" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutUp">
            <div v-if="menuActiveIn.menuButtom">
                <MenuLeave/>
            </div>
        </transition>
    </div>
</template>

<script>
import 'animate.css';
import VueAos from 'vue-aos'
import { VBurger } from 'vue-burger';
import cursorDotUrl from '~/assets/image/icon/dot.png'
import cursorUrl from '~/assets/image/icon/right.png'

export default {
    data() {
        return {
            burgerStyle: {
                '--padding': '0px',
                '--layer-bg-color': 'yellow',
                '--active-layer-bg-color': '#ABABAB',
                '--layer-width': '10px',

            },
            cursorUrl,
            isActive: false,
            cursorDotUrl,
            elmentDelay: [],
            menuActiveParent: false,
            menuActive: false,
            menuActiveIn: {
                works: false,
                about: false,
                growup: false,
                menuButtom: false
            },
            window: {
                width: 0,
                height: 0
            },
        }
    },
    mounted() {
        this.setData()
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    components: {
        VueAos,
        VBurger
    },
    methods: {
        changePage(page) {
            this.menuActiveIn.works = false;
            this.menuActiveIn.about = false;
            this.menuActiveIn.growup = false;
            this.menuActiveIn.menuButtom = false;
            this.isActive = false
             var timeOut = 1000
              setTimeout(() =>
                this.elmentDelay.forEach((e, i) => {
                this.elmentDelay[i].delay = !this.elmentDelay[i].delay
            
                })
           
            , timeOut);

            setTimeout(() =>
                 this.menuActive = !this.menuActive
                    
            , timeOut);

             setTimeout(() =>
                this.menuActiveParent = false
               
            , 2000);

               setTimeout(() =>
                this.$router.push(page)
               
            , 500);
             
        },
        
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        async showMenu() {
            this.isActive = !this.isActive
            if (this.menuActiveParent == false) {
                this.menuActiveParent = true;
            }

            var delay = this.elmentDelay
            var timeOut = 100
            this.elmentDelay.forEach((e, i) => {
                if (this.elmentDelay[i].delay === false) {
                    setTimeout(() =>
                        this.elmentDelay[i].delay = !this.elmentDelay[i].delay, timeOut);


                } else {
                    this.elmentDelay[i].delay = !this.elmentDelay[i].delay

                }

                timeOut += 100;

            });

            timeOut += 0

            if (this.menuActive === false) {
                setTimeout(() =>
                    this.menuActive = !this.menuActive, timeOut);

                //set work
                timeOut += 500
                setTimeout(() =>
                    this.menuActiveIn.works = !this.menuActiveIn.works, timeOut);

                //set about
                timeOut += 100
                setTimeout(() =>
                    this.menuActiveIn.about = !this.menuActiveIn.about, timeOut);

                //set growup
                timeOut += 100
                setTimeout(() =>
                    this.menuActiveIn.growup = !this.menuActiveIn.growup, timeOut);

                timeOut += 500
                setTimeout(() =>
                    this.menuActiveIn.menuButtom = !this.menuActiveIn.menuButtom, 1000);




            } else {
                this.menuActive = !this.menuActive
                this.menuActiveIn.works = !this.menuActiveIn.works
                this.menuActiveIn.about = !this.menuActiveIn.about
                this.menuActiveIn.growup = !this.menuActiveIn.growup
                this.menuActiveIn.menuButtom = !this.menuActiveIn.menuButtom


                setTimeout(() =>
                    this.menuActiveParent = false, 1000);


            }

            // console.log(timeOut); 

            // this.menuActive = !this.menuActive;
        },

        setData: function() {
            var number = 12;

            if (this.window.width <= '768') {
                number = 6
            }
            this.$nextTick(() => {

                for (let index = 0; index < number; index++) {
                    this.elmentDelay.push({ delay: false })
                }

            });


        }
    },
}
</script>