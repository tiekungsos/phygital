<template>
    <div class="main">
    
        <Menu/>
    
        <VueSlickCarousel :dots="false" :arrows="true" :lazyLoad="'ondemand'" :dotsClass="'slick-dots custom-dot-class'" :edgeFriction="1" :infinite="true" :slidesToShow="1" :slidesToScroll="1" :speed="1000" @beforeChange="hidebar()">
    
            <div v-for="(imageSlideData, index) in imageSlide" v-bind:key="index">
                <div class="image-slide-main" :style="{'cursor' :`url(${cursorDotUrl}),auto`}">
                    <div class="image-slide">
    
                        <div class="wecreate-content" v-on:click="changePage('/works')" :style="{'cursor' :`url(${cursorDownUrl}),auto`}"></div>
                        <div class="content-left">
                            <div class="content-left-line1">
                                <h1 class="animate__animated animate__slideInUp animate__delay-200ms">
                                    {{imageSlideData.content.line1}}
                                </h1>
                            </div>
    
                            <div class="revert-prant">
                                <div class="revert animate__animated animate__slideInLeft animate__delay-500ms">
                                    <h2 class="animate__animated animate__slideInUp animate__delay-1300ms">{{imageSlideData.content.line2}}</h2>
                                </div>
                            </div>
                            <div class="contentLineLast">
                                <h2 v-bind:class="['contentLineLast-in', 'animate__animated','animate__fadeInUpBig','animate__delay-1500ms',imageSlideData.content.line3.class]">
                                    <span v-for="(textContent, index) in imageSlideData.content.line3.text" v-bind:key="index">
                                      {{textContent}}  
                                      <span class="red" style="color: red !important;">
                                        {{checkNumber(imageSlideData.content.line3.text, index)}}
                                      </span>
                                    </span>
                                </h2>
                            </div>
    
                        </div>
                        <img v-if="!imageSlideData.video" v-lazy-load :src="`${imageSlideData.image}`" alt="First slide">
                        <!-- video element -->
                        <div class="videos-player" v-if="imageSlideData.video" >
                            
                            <video class="videos" width="100%" height="auto" muted autoplay loop>
                            <source  :src="`${imageSlideData.image}`" type="video/mp4">
                            Your browser does not support the video tag.
                            </video>
                        </div>
    
    
                        <!-- <vue-player src="http://localhost/storage/111/60254ca7422da_Pexels-Videos-1443653-(1).mp4" poster="https://via.placeholder.com/150" title="this is a title" v-model="playing"></vue-player> -->
    
                    </div>
    
                    <div class="image-slide-right">
                        <div class="backChangeColor" :style="[
                                        imageSlide[index].active ? {'width': '100%','height' :'100%'} : {'width': '0%','height' :'0%'},
                                        {'cursor': `url(${cursorUrl}),auto`},
                                        imageSlide[index].active === 2 ? {'right': '100%'} : {'right': '0'},
                                        {'opacity': '50%'}
                              ]"></div>
                        <div class="text-right-out animate__animated animate__slideInRight animate__delay-2s">
                            <div class="text-right " :style="{'color':colorText,'cursor' :`url(${cursorUrl}),auto`}">
                                {{addNextText(index)}}
                            </div>
                        </div>
                        <div class="img-rightSide">
                            <img v-lazy-load :src="`${addNextImage(index)}`" alt="Second slide">
                        </div>
                        
                    </div>
                </div>
            </div>
    
    
            <template #prevArrow>
                          <div class="custom-arrow-prevArrow animate__animated animate__fadeIn animate__delay-2s animate__delay-2s" :style="{'cursor' :`url(${cursorDotUrl}),auto`}"></div>
</template>

<template #nextArrow="arrowOption">
    <div class="custom-arrow animate__animated animate__fadeIn animate__delay-2s" :style="{'cursor' :`url(${cursorUrl}),auto`}" @mouseover="mouseOver(arrowOption.currentSlide)" @mouseleave="mouseOut(arrowOption.currentSlide)">
    </div>
</template>

    </VueSlickCarousel>
  </div>
</template>

<script>
import backgroundImagePath1 from '~/assets/image/slide/image1.jpg'
import backgroundImagePath2 from '~/assets/image/slide/image2.jpg'
import backgroundImagePath3 from '~/assets/image/slide/image3.jpg'
import backgroundImagePath4 from '~/assets/image/slide/image4.jpg'
import cursorUrl from '~/assets/image/icon/right.png'
import cursorDotUrl from '~/assets/image/icon/dot.png'
import cursorDownUrl from '~/assets/image/icon/down-arrow.png'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'animate.css';
import VueAos from 'vue-aos'
import { VBurger } from 'vue-burger';


export default {
    transition: 'page', // set our transition with nuxt.js
    data() {
        return {
            playing: true,
            sliders: [],
            burgerStyle: {
                '--padding': '0px',
                '--layer-bg-color': 'yellow',
                '--active-layer-bg-color': '#ABABAB',
                '--layer-width': '10px',
            },
            imageSlide: [{
                    'image': backgroundImagePath1,
                    'content': {
                        'line1': 'PHYGITAL',
                        'line2': 'We create world-class',
                        'line3': {
                            'text': ['Physical & digital product'],
                            'style': {
                                'font-size': '72px !important',
                                'margin-top': '40px',
                            },
                            'class': 'bannerType1'
                        }
                    },
                    'active': false
                },
                {
                    'image': backgroundImagePath2,
                    'content': {
                        'line1': 'PHYSICAL',
                        'line2': 'Compound of PHYGITAL',
                        'line3': {
                            'text': [
                                'PHYSICAL BUSINESSES',
                                'REAL-LIFE EXPERIENCES',
                                'TRADITIONAL',
                                'INCREASED IN-STORE VISITS',
                                'STORE SHOPPING',
                                'WORD OF MOUNT'
                            ],
                            'style': {
                                'font-size': '30px !important',
                                'font-family': 'DB Adman X',
                                'width': '30vw',
                                'margin-top': '30px',
                                'line-height': '0.9'
                            },
                            'class': 'bannerType2'
                        }
                    },
                    'active': false
                },
                {
                    'image': backgroundImagePath3,
                    'content': {
                        'line1': 'DIGITAL',
                        'line2': 'Compound of PHYGITAL',
                        'line3': {
                            'text': [
                                'DIGITAL LANDSCAPE',
                                'DIGITAL EXPERIENCES',
                                'INNOVATION',
                                'NCREASED ON SOCIAL MEDIA',
                                'ONLINE SHOPPING',
                                'ENGAGEMENT'
                            ],
                            'style': {
                                'font-size': '30px !important',
                                'font-family': 'DB Adman X',
                                'width': '30vw',
                                'margin-top': '30px',
                                'line-height': '0.9'
                            },
                            'class': 'bannerType2'
                        }
                    },
                    'active': false
                },
            ],

            imageSlideNext: [
                backgroundImagePath1,
                backgroundImagePath2,
                backgroundImagePath3,
            ],
            imageSlideNextText: [
                'PHYGITAL',
                'PHYSICAL',
                'DIGITAL',
            ],
            active: false,
            slide: 0,
            sliding: null,
            colorText: 'transparent',
            cursorUrl,
            cursorDotUrl,
            cursorDownUrl,
            isActive: false,
            elmentDelay: [],
            menuActiveParent: false,
            menuActive: false,
            menuActiveIn: {
                works: false,
                about: false,
                growup: false,
                menuButtom: false
            },
            indexPage: null
        }
    },
    async asyncData({ store, $axios }) {

        if (store.state.setting.length === 0) {
            await store.dispatch('fetchSettingFirst')
        }


        store.dispatch('fetchSetting')

        var dataAll = [],
            slideNext = [],
            slideNextText = []

        store.state.sliders.data.forEach((slider, index) => {
            var dataBuild = {}
            if (slider.status != 1) {
                return
            }

            var html = slider.detail;
            var div = document.createElement("div");
            div.innerHTML = html;
            var text = div.textContent || div.innerText || "";

            text = text.split("/");
            console.log(slider);
            console.log(process.env.videosUrl);
            dataBuild = {
                image: (slider.image_slider) ? slider.image_slider.url : process.env.videosUrl + slider.video.id + '/' + slider.video.file_name,
                content: {
                    line1: slider.header,
                    line2: slider.header_second,
                    line3: {
                        text: text,
                        style: {
                            'font-size': '30px !important',
                            'font-family': 'DB Adman X',
                            'width': '30vw',
                            'margin-top': '30px',
                            'line-height': '0.9'
                        },
                        class: text.length > 1 ? 'bannerType2' : 'bannerType1'
                    }
                },
                active: false,
                video: slider.video ? true : false
            }
            dataAll.push(dataBuild)
            if(slider.image_slider) {
                 slideNext.push(slider.image_slider.url)
            }
           
            slideNextText.push(slider.header)
        });

        return { imageSlide: dataAll, imageSlideNext: slideNext, imageSlideNextText: slideNextText }
    },
    components: { VueSlickCarousel, VBurger },
    methods: {
        changePage(page) {
            this.$router.push(page)
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        addNextImage(index) {
            if (this.imageSlideNext[index + 1] === undefined) {
                return this.imageSlideNext[0];
            }

            return this.imageSlideNext[index + 1];
        },
        addNextText(index) {
            if (this.imageSlideNextText[index + 1] === undefined) {
                return this.imageSlideNextText[0];
            }

            return this.imageSlideNextText[index + 1];
        },
        checkNumber(array, index) {
            index = index + 1;
            if (array.length === index) {
                return ' ';
            }

            return '/';
        },
        mouseOver: function(index) {
            this.active = true
            this.colorText = 'white'
            this.imageSlide[index].active = true

            this.indexPage = index
            // index
        },
        mouseOut: function(index) {
            this.active = false
            this.imageSlide[index].active = false
            this.colorText = 'transparent'
        },
        hidebar: function() {
            var index = this.indexPage
            this.imageSlide[index].active = 2
        }

    }
}
</script>


<style>
/* during entering and leaving : */

.page-enter-active {
    position: absolute;
    max-width: 100vw;
    transition: all 1s ease;
}

/* entering start */

.page-enter {
    bottom: -100%;
}

/* entering end */

.page-enter-to {
    bottom: 0;
}
</style>

