<template  >
    <div class="agency" v-scroll:throttle="{fn: onScroll}">
        <Menu/>
        <div class="header-blog">

        </div>
        <div class="right-scroll">
            <div class="active" :style="{'height':position + '%'}">
            </div>
        </div>
        <div class="blog" ref="infoBox">

            <div class="header" >
                <div class="header-text">
                PHYGITAL <span class="text-after">AGENCY</span> 
                </div>
                <div class="header-content">
                    เป็นดิจิทัล เอเจนซี ที่รับทำการตลาดเชิงดิจิทัล เพื่อสนองต่อลูกค้า
                    ที่ต้องการทำสื่อโฆษณาทางออนไลน์ และออฟไลน์
                </div>
                <div class="line">
                    <div class="line-in">
                        
                    </div>
                </div>
                <div class="header-buttom">
                    โดยชื่อบริษัทมาจากคำว่า <span>PHYGITAL</span> ซึ่งมาจากคำว่า  <br>
                    <span>Physical</span> (การตลาดแบบมีหน้าร้าน) บวกกับคำว่า <span>Digital</span> (การตลาดออนไลน์) <br>
                    <span>PHYGITAL</span> จึงเป็นการผสมผสานการตลาดระหว่างโลกแห่งความเป็นจริง  <br>
                    และโลกของดิจิทัลเข้าด้วยกัน
                </div>
            </div>
            <div class="team">
                OUR TEAM
            </div>
            <div class="theme">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/18710.png" alt="person 1">
                        </b-col>
                        <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/20779.png" alt="person 2">
                        </b-col>
                        <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/263756-P4T3RU-156.png" alt="person 3">
                        </b-col>
                            <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/10495.png" alt="person 4">
                        </b-col>
                            <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/9296.png" alt="person 5">
                        </b-col>
                            <b-col class="person-img" cols="4">
                            <img src="~/assets/image/person/23488.png" alt="person 6">
                        </b-col>

                    </b-row>
                </b-container>
            </div>
             <div class="team-clients">
                Our clients
            </div>
            <div class="our-clients">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class="clients" cols="3" v-for="(client, index) in clients" v-bind:key="index">
                            <img :src="`${imageActive(client.imageOver, index)}`" alt="clients" @mouseover="mouseOver(client.image , index)" @mouseleave="mouseOver(client.imageOver , index)">
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="leave-contact">
                <b-container fluid>
                     <b-row class="text-center menu-buttom">
                    <b-col cols="5" class="left-contact" >
                        <transition 
                        name="bv-menu" 
                        enter-active-class="animate__animated animate__fadeInUp"  
                        leave-active-class="animate__animated animate__slideOutUp" >
                            <p>Leave your contact</p>
                        </transition>
                    </b-col>
                    <b-col cols="7" class="social-menu">
                        <transition 
                        name="bv-menu" 
                        enter-active-class="animate__animated animate__fadeInUp"  
                        leave-active-class="animate__animated animate__slideOutUp" >
                        <b-row>
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
    </div>
</template>

<script>
import Vue from 'vue'
import VueScrollSnap from "vue-scroll-snap";
import vuescroll from 'vue-scroll'


//clients
import clients1 from '~/assets/image/clients/001_c.png'
import clients2 from '~/assets/image/clients/002_c.png'
import clients3 from '~/assets/image/clients/003_c.png'
import clients4 from '~/assets/image/clients/004_c.png'
import clients5 from '~/assets/image/clients/005_c.png'
import clients6 from '~/assets/image/clients/006_c.png'
import clients7 from '~/assets/image/clients/007_c.png'
import clients8 from '~/assets/image/clients/008_c.png'
import clients9 from '~/assets/image/clients/009_c.png'
import clients10 from '~/assets/image/clients/010_c.png'
import clients12 from '~/assets/image/clients/012_c.png'
import clients13 from '~/assets/image/clients/013_c.png'
import clients14 from '~/assets/image/clients/014_c.png'
import clients15 from '~/assets/image/clients/015_c.png'
import clients16 from '~/assets/image/clients/016_c.png'
import clients17 from '~/assets/image/clients/017_c.png'
import clients18 from '~/assets/image/clients/018_c.png'
import clients19 from '~/assets/image/clients/019_c.png'



import clientsbw1 from '~/assets/image/clientsbw/001_b.png'
import clientsbw2 from '~/assets/image/clientsbw/002_b.png'
import clientsbw3 from '~/assets/image/clientsbw/003_b.png'
import clientsbw4 from '~/assets/image/clientsbw/004_b.png'
import clientsbw5 from '~/assets/image/clientsbw/005_b.png'
import clientsbw6 from '~/assets/image/clientsbw/006_b.png'
import clientsbw7 from '~/assets/image/clientsbw/007_b.png'
import clientsbw8 from '~/assets/image/clientsbw/008_b.png'
import clientsbw9 from '~/assets/image/clientsbw/009_b.png'
import clientsbw10 from '~/assets/image/clientsbw/010_b.png'
import clientsbw12 from '~/assets/image/clientsbw/012_b.png'
import clientsbw13 from '~/assets/image/clientsbw/013_b.png'
import clientsbw14 from '~/assets/image/clientsbw/014_b.png'
import clientsbw15 from '~/assets/image/clientsbw/015_b.png'
import clientsbw16 from '~/assets/image/clientsbw/016_b.png'
import clientsbw17 from '~/assets/image/clientsbw/017_b.png'
import clientsbw18 from '~/assets/image/clientsbw/018_b.png'
import clientsbw19 from '~/assets/image/clientsbw/019_b.png'


Vue.use(vuescroll)

export default {
    data() {
        return {
          position: 30,
          clients : [
              {
                'image' : clients1,
                'imageOver' : clientsbw1,
                'name' : 'test1',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients2,
                'imageOver' : clientsbw2,
                'name' : 'test2',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients3,
                'imageOver' : clientsbw3,
                'name' : 'test3',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients4,
                'imageOver' : clientsbw4,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients5,
                'imageOver' : clientsbw5,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients6,
                'imageOver' : clientsbw6,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients7,
                'imageOver' : clientsbw7,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients8,
                'imageOver' : clientsbw8,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients9,
                'imageOver' : clientsbw9,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients10,
                'imageOver' : clientsbw10,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients12,
                'imageOver' : clientsbw12,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients13,
                'imageOver' : clientsbw13,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients14,
                'imageOver' : clientsbw14,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients15,
                'imageOver' : clientsbw15,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients16,
                'imageOver' : clientsbw16,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients17,
                'imageOver' : clientsbw17,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients18,
                'imageOver' : clientsbw18,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              {
                'image' : clients19,
                'imageOver' : clientsbw19,
                'name' : 'test4',
                'url' : 'test',
                'imageActive' : ''
              },
              
          ]
        }
    },
    components: {
        VueScrollSnap
    },
    computed : {
         positionTeam : function() {
            console.log(this.position);

            if(this.position > 30) {
                if(this.position >= 50) {
                    return 16;
                }
                return this.position/3.125;
            } else {
                return "0";
            }
            
        }
    },
    methods: {
         onScroll: function(e, position) {
             var positionCal = ((position.scrollTop * 100) / 2) / this.$refs.infoBox.clientHeight

             if(positionCal <= 30) {
                 this.position = 30;
             } else {
                 this.position = positionCal;
             }   
        },
        mouseOver: function(image, index) {
            this.clients[index].imageActive = image;
        },
        imageActive : function(image, index) {
            if(!this.clients[index].imageActive) {
                return image;
            }

            return this.clients[index].imageActive;
        }
        
       
    },
}
</script>