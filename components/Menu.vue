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
                          <h1 class="menu-link" v-if="menuActiveIn.works">works</h1>
                      </transition>
                    </b-col>
                    <b-col cols="12" class="bv-menu-menu">
                       <transition 
                          name="bv-menu" 
                          enter-active-class="animate__animated animate__fadeInDown"  
                          leave-active-class="animate__animated animate__slideOutUp" >
                          <h1 class="menu-link" v-if="menuActiveIn.about">
                                <nuxt-link to="/about">about</nuxt-link>
                          </h1>
                        </transition>
                    </b-col>
                    <b-col cols="12" class="bv-menu-menu">
                      <transition 
                          name="bv-menu" 
                          enter-active-class="animate__animated animate__fadeInDown"  
                          leave-active-class="animate__animated animate__slideOutUp" >
                        <h1 class="menu-link" v-if="menuActiveIn.growup">
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
        <nuxt-link to="/"><img src="~/assets/image/logo/logo1.png" alt="logo 1"></nuxt-link>
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
 
    </div>
</template>
<script>
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
    mounted(){
      this.setData()
    },
    components : {
        VueAos,VBurger
    },
    methods: {
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

            timeOut += 0

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
    },
}
</script>