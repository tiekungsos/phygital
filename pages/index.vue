<template>
  <div class="main">

        <div class="tab-parent" v-if="menuActiveParent">
          <div v-if="menuActive">

            <div class="about">
                <b-container class="bv-menu">
                <b-row class="text-center menu-center">
                    <b-col cols="12" class="bv-menu-menu">
                      <transition 
                          name="bv-menu" 
                          enter-active-class="animate__animated animate__fadeInDown"  
                          leave-active-class="animate__animated animate__slideOutUp" >
                          <h1 v-if="menuActiveIn.works">works</h1>
                      </transition>
                    </b-col>
                    <b-col cols="12" class="bv-menu-menu">
                       <transition 
                          name="bv-menu" 
                          enter-active-class="animate__animated animate__fadeInDown"  
                          leave-active-class="animate__animated animate__slideOutUp" >
                          <h1 v-if="menuActiveIn.about">
                              about
                          </h1>
                        </transition>
                    </b-col>
                    <b-col cols="12" class="bv-menu-menu">
                      <transition 
                          name="bv-menu" 
                          enter-active-class="animate__animated animate__fadeInDown"  
                          leave-active-class="animate__animated animate__slideOutUp" >
                        <h1 v-if="menuActiveIn.growup">
                            GROWUP
                        </h1>
                      </transition>
                    </b-col>
                </b-row>

               
                <b-row class="text-center menu-buttom">
                        <b-col cols="5" class="left-contact" >
                            <transition 
                            name="bv-menu" 
                            enter-active-class="animate__animated animate__fadeInUp"  
                            leave-active-class="animate__animated animate__slideOutUp" >
                              <p v-if="menuActiveIn.menuButtom">Leave your contact</p>
                            </transition>
                        </b-col>
                        <b-col cols="7" class="social-menu">
                           <transition 
                            name="bv-menu" 
                            enter-active-class="animate__animated animate__fadeInUp"  
                            leave-active-class="animate__animated animate__slideOutUp" >
                            <b-row  v-if="menuActiveIn.menuButtom">
                                <b-col class="text">FACEBOOK</b-col>
                                <b-col class="text">MESSENGER</b-col>
                                <b-col class="text">INSTAGRAM</b-col>
                                <b-col class="text">TWITTER</b-col>
                                <b-col class="text">LINKEDIN</b-col>
                                <b-col class="text">LINE</b-col>
                            </b-row>
                           </transition>
                        </b-col>
                    </b-row>
              

                </b-container>
            </div>

          </div>

           <b-row>
            <transition v-for="(elmentDelayIn, index) in elmentDelay" v-bind:key="index"
             name="page-menu" 
             enter-active-class="animate__animated animate__slideInDown delay-1"  
             leave-active-class="animate__animated animate__slideOutUp" >
              <b-col v-show="elmentDelayIn.delay" class="tab-child" cols="1" ></b-col>
            </transition>
          </b-row>

        
        </div>
         


    <div class="pg-nav">
      <div class="logo">
        <img src="~/assets/image/logo/logo1.png" alt="logo 1">
      </div>
      <div class="center"  v-on:click="showMenu()">
          <v-burger 
         
          type="spin" 
          :active="isActive"
          @updated="isActive = $event"
          :burgerStyle="burgerStyle" />
      </div>
      <div class="content">
        Contact
      </div>
    </div>
 
    
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
    mounted(){
      // console.log(elmentDelay);
      this.setData()
    },
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

        async showMenu() {
        
        if(this.menuActiveParent == false) {
          this.menuActiveParent = true;
        }
          
          var delay = this.elmentDelay
          var timeOut = 100
          this.elmentDelay.forEach((e, i) => {
            if(this.elmentDelay[i].delay === false) {
              setTimeout(() => 
                this.elmentDelay[i].delay = !this.elmentDelay[i].delay
              , timeOut);

            
            } else {
                this.elmentDelay[i].delay = !this.elmentDelay[i].delay
                
            }

            timeOut += 100;
 
          });

          timeOut += 1000

          if(this.menuActive === false) {
             setTimeout(() => 
                 this.menuActive = !this.menuActive
          , timeOut);

          //set work
          timeOut += 500
          setTimeout(() => 
                 this.menuActiveIn.works = !this.menuActiveIn.works
          , timeOut);

          //set about
          timeOut += 100
          setTimeout(() => 
                 this.menuActiveIn.about = !this.menuActiveIn.about
          , timeOut);

          //set growup
          timeOut += 100
          setTimeout(() => 
                 this.menuActiveIn.growup = !this.menuActiveIn.growup
          , timeOut);

           timeOut += 500
          setTimeout(() => 
                 this.menuActiveIn.menuButtom = !this.menuActiveIn.menuButtom
          , timeOut);

          

          
          } else {
              this.menuActive = !this.menuActive
              this.menuActiveIn.works = !this.menuActiveIn.works
              this.menuActiveIn.about = !this.menuActiveIn.about
              this.menuActiveIn.growup = !this.menuActiveIn.growup
              this.menuActiveIn.menuButtom = !this.menuActiveIn.menuButtom

                 
          setTimeout(() => 
                  this.menuActiveParent = false
          , 1000);
             
        
          }
         
          // console.log(timeOut); 
        
            // this.menuActive = !this.menuActive;

        },

        setData:function() {
 
         for (let index = 0; index < 12; index++) {
           this.elmentDelay.push({delay:false})
         }
        }

    }
  }
</script>


<style >
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