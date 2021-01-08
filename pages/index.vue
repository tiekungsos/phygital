<template>
  <div class="main">

    <Menu/>
    
    <VueSlickCarousel 
      :dots="false" 
      :arrows="true"
      :lazyLoad="'ondemand'"
      :dotsClass="'slick-dots custom-dot-class'"
      :edgeFriction="0.35" 
      :infinite="true"
      :slidesToShow="1"
      :slidesToScroll="1"
      :speed="500"
    >
    
    <div v-for="(imageSlideData, index) in imageSlide" v-bind:key="index">
      <div class="image-slide-main">
        <div class="image-slide">
          
          <div class="content-left">
            <h1 class="animate__animated animate__fadeInUp animate__delay-0.5s">
              {{imageSlideData.content.line1}}
            </h1>
            <div class="revert-prant">
              <div class="revert animate__animated animate__slideInLeft animate__delay-1s">
                <h2 class="animate__animated animate__fadeInUp animate__delay-2s">{{imageSlideData.content.line2}}</h2>
              </div>
            </div>
            
            <h2 class="contentLineLast animate__animated animate__fadeInUp animate__delay-3s" v-bind:style="imageSlideData.content.line3.style">
  
              <span v-for="(textContent, index) in imageSlideData.content.line3.text" v-bind:key="index">
                {{textContent}}  
                <span class="red" style="color: red !important;">
                  {{checkNumber(imageSlideData.content.line3.text, index)}}
                </span>
              </span>
            </h2>
          </div>
          <img :src="`${imageSlideData.image}`" alt="First slide">
        </div>
        
        <div class="image-slide-right" >
          <div class="text-right" :style="{'color':colorText,'cursor' :`url(${cursorUrl}),auto`}">
            {{addNextText(index)}}
          </div>
          <img :src="`${addNextImage(index)}`" alt="Second slide">
        </div>
      </div>
    </div>     

    <template #nextArrow>
      <div class="custom-arrow" :style="{'cursor' :`url(${cursorUrl}),auto`}" @mouseover="mouseOver(index)"  @mouseleave="mouseOut(index)">
        <transition name="slide-right">
          <div class="backChangeColor" :style="{'cursor' :`url(${cursorUrl}),auto`}" v-if="active"></div>
        </transition>
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
        burgerStyle: {
          '--padding': '0px',
          '--layer-bg-color': 'yellow',
          '--active-layer-bg-color': '#ABABAB',
          '--layer-width': '10px',
        },
        imageSlide : [
          {
            'image' : backgroundImagePath1,
            'content' : {
              'line1' : 'PHYGITAL',
              'line2' : 'We create world-class',
              'line3' : {
                'text' : ['Physical & digital product'],
                'style' : {
                  'font-size': '72px !important',
                }
              }
            },
            'active' : false
          },
          {
            'image' : backgroundImagePath2,
            'content' : {
              'line1' : 'PHYSICAL',
              'line2' : 'Compound of PHYGITAL',
              'line3' : {
                'text' : [
                  'PHYSICAL BUSINESSES',
                  'REAL-LIFE EXPERIENCES',
                  'TRADITIONAL',
                  'INCREASED IN-STORE VISITS',
                  'STORE SHOPPING',
                  'WORD OF MOUNT'
                ],
                'style' : {
                  'font-size': '30px !important',
                  'font-family': 'DB Adman X',
                  'width': '30vw',
                  'margin-top': '40px',
                  'line-height': '0.9'
                }
              }
            },
            'active' : false
          },
          {
            'image' : backgroundImagePath3,
            'content' : {
              'line1' : 'DIGITAL',
              'line2' : 'Compound of PHYGITAL',
              'line3' : {
                'text' : [
                  'DIGITAL LANDSCAPE',
                  'DIGITAL EXPERIENCES',
                  'INNOVATION',
                  'NCREASED ON SOCIAL MEDIA',
                  'ONLINE SHOPPING',
                  'ENGAGEMENT'
                ],
                'style' : {
                  'font-size': '30px !important',
                  'font-family': 'DB Adman X',
                  'width': '30vw',
                  'margin-top': '40px',
                  'line-height': '0.9'
                }
              }
            },
            'active' : false
          },
        ],

        imageSlideNext : [
          backgroundImagePath1,
          backgroundImagePath2,
          backgroundImagePath3,
        ],
        imageSlideNextText : [
          'PHYGITAL',
          'PHYSICAL',
          'DIGITAL',
        ],
        active: false,
        slide: 0,
        sliding: null,
        colorText:'transparent',
        cursorUrl,
        isActive : false,
        elmentDelay : [],
        menuActiveParent : false,
        menuActive : false,
        menuActiveIn : {
          works : false,
          about : false,
          growup : false,
          menuButtom : false
        }
      }
    },
    components: { VueSlickCarousel,VueAos,VBurger },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      addNextImage(index) {
        if(this.imageSlideNext[index + 1] === undefined) {
          return this.imageSlideNext[0];
        }

        return this.imageSlideNext[index + 1];
      },
      addNextText(index) {
        if(this.imageSlideNextText[index + 1] === undefined) {
          return this.imageSlideNextText[0];
        }

        return this.imageSlideNextText[index + 1];
      },
      checkNumber(array, index) {
        index = index + 1;
        if(array.length === index) {
          return ' ';
        }

        return '/';
      },
        mouseOver: function(index){
            this.active = true
            this.colorText = 'white' 
        },
        mouseOut:function(index){

          this.active = false
     
          this.colorText = 'transparent'
        },

    }
  }
</script>


<style >

  /* during entering and leaving : */
  .page-enter-active, .page-leave-active {
    position:absolute;
    max-width:100vw; /*make sur our content keep it's original width*/
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


  /* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-right-enter-active {
  transition: all .3s;
}
.slide-right-leave-active {
  transition: all .3s;
}
.slide-right-enter, .slide-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10vw);
  opacity: 0;
}


</style>

