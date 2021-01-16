<template  >
    <div class="works" >
        <Menu/>
        <div class="works-in">
            <div class="header">
               <b-container fluid>
                   <b-row>
                        <div class="growup" v-for="(titleIn, index) in title"  v-bind:key="index" >
                            <span class="tital-growup" v-if="index != 0">/</span> {{titleIn.name}} 
                        </div>
                   </b-row>
               </b-container>

            </div>
            <div class="search">
                 <div class="search-from">
                     <b-form-input v-model="search" ></b-form-input>
                    <div class="icon-serach">
                        <div class="serch-result">
                            <svg id="searching" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <g id="Group_56" data-name="Group 56" transform="translate(0)">
                                    <path id="Path_3" data-name="Path 3" d="M2.264,2.264A7.728,7.728,0,0,1,15.457,7.728a7.671,7.671,0,0,1-1.9,5.079L17.846,17.1a.528.528,0,1,1-.747.747l-4.292-4.292A7.728,7.728,0,0,1,0,7.728,7.678,7.678,0,0,1,2.264,2.264Zm.747,10.183a6.669,6.669,0,1,0,0-9.436A6.68,6.68,0,0,0,3.011,12.446Z" transform="translate(-0.001 0)" fill="#fff"/>
                                </g>
                            </svg>
                        </div>
                        <div class="icon-plus icon-serach-in">
                            <v-burger 
                            type="spin" 
                            :active="isActive"
                            @updated="isActive = $event"/>
                        </div>
                    </div>
                 </div>
                 <b-container fluid class="serchTag" v-if="isActive">
                     <b-row>
                         <div class="seachTage-block" v-for="(tag, index) in serchTag" :key="index" v-on:click="disableType(index)">
                             
                             <div class="tagname" :style="[tag.active ? {'color': '#E91E56'} : {'color': '#ffffff'}]">
                                 {{tag.name}}
                             </div>
                            <div class="icon-plus">
                                <v-burger 
                                type="spin" 
                                :active="tag.active"
                                @updated="tag.active = $event"/>
                            </div>
                         </div>
                     </b-row>
                 </b-container>
            </div>

            

            <div class="imageGrid"  >
                <b-container fluid>
                    <b-row>
                        <b-col class="imageGrid-in" cols="3" v-for="(group, index) in images" :key="index" :class="`item-imageGrid item${index}`">
                            <div class="imageBlock" 
                                v-for="(data, index2) in group.group" 
                                :key="index2"
                                @mouseover="hoverImage(index,index2)" 
                                @mouseleave="leaveImage(index,index2)" 
                            >
                                <div class="cover-image">
                                    <div class="cover" :style="{'width' :`${data.style.width}%`,'height' :`${data.style.height}%`}"></div>
                                    <img class="img-fluid" :src="data.pathLong" alt="">
                                </div>
                                <div class="infomation"  :style="[data.hover ? {'opacity': '1'} : {'opacity': '0'}]">
                                    <div class="name-infomation">
                                        {{data.name}}
                                    </div>
                                    <div class="center-infomation">
                                        —
                                    </div>
                                    <div class="company-infomation">
                                        {{data.company}}
                                    </div>
                                    
                                </div>
                            </div>
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
import cursorUrl from '~/assets/image/icon/right.png'
import 'animate.css';
import ImageComponent from '../components/Image.vue';
import { VBurger } from 'vue-burger';

export default {
    data() {
        return {
            title : [
              {
                  'name' : 'DESIGN'
              },
              {
                  'name' : 'Experience'
              },
              {
                  'name' : 'Visual Identity'
              },
              {
                  'name' : 'FILM'
              },
              {
                  'name' : 'Consulting'
              },
              {
                  'name' : 'Campaign'
              }
          ],
          serchTag : [
                {
                    name : 'DIGITAL MARKETING',
                    active : false
                },
                {
                    name : 'DIGITAL MARKETING',
                    active : false
                },
                {
                    name : 'DIGITAL PR',
                    active : false
                },
                {
                    name : 'CONSULTING',
                    active : false
                },
                {
                    name : 'CUSTOMER SERVICE',
                    active : false
                },
                {
                    name : 'WEBSITE',
                    active : false
                },
                {
                    name : 'CONTENT MARKETING',
                    active : false
                },
                {
                    name : 'GRAPHIC DESIGN',
                    active : false
                },
                {
                    name : 'VIDEO PRODUCTION',
                    active : false
                },
                {
                    name : 'ONLINE ADVERTISING',
                    active : false
                },
                {
                    name : 'VINYL INKJET',
                    active : false
                },
                {
                    name : 'PUBLICATION',
                    active : false
                },
                {
                    name : 'STICKER',
                    active : false
                },
                {
                    name : 'LETTERS SIGNAGE',
                    active : false
                },
                {
                    name : 'LIGHTBOX',
                    active : false
                },
                {
                    name : 'OUT OF HOME',
                    active : false
                },
                {
                    name : 'EXHIBITION BOOTH',
                    active : false
                },
                {
                    name : 'SEO ARTICLES',
                    active : false
                },
                {
                    name : '2D',
                    active : false
                },
                {
                    name : '3D',
                    active : false
                },
          ],
          search : '',
            images: [
                {'group' : []},
                {'group' : []},
                {'group' : []},
                {'group' : []},
            ],
            
            limitImage : 20,
            list : [],
            imageData : [],
            isActive : false,
        }
    },
    components: {
        VBurger
         
    },
    created () {
           
    },
   async mounted() {

             this.importAll(require.context('~/assets/image/works/', true, /\.png$/));
       
        
        this.$nextTick(() => {
             this.buildData()

        })
     
        

    },
    methods: {
       async importAll(r) {
            var count = 1
            var group = 0;

            r.keys().forEach((key, index) => {
                var checkImage = this.checkImg(key)
                
                if(checkImage && count <= this.limitImage){

                    if(group > 3) {
                        group = 0
                    }

                    count = count + 1;

                    
                    var height = 0
                    var width = 0
                    
                    
                    this.getImageLoad(r(key))
                    // console.log(this.imageData);
                    
                    var groupData = group;
                    
                    console.log(this.images[groupData]);

                     this.images[groupData].group.push({ 
                            pathLong: r(key), 
                            pathShort: key,
                            height: this.imageData.height, 
                            width: this.imageData.width,
                            name: 'DOT Rectangle',
                            company : 'Rectangles co.',
                            'hover' : false,
                            'style' : {
                                width: 0,
                                height: 0
                            },
                            'infoshow' : false,
                            'cursor' : cursorUrl,
                            'imgStyle' : {
                                'zindex' : 0,
                                'left': 0
                            },
                            'detailShow' : false
                    })

                    group += 1
                }
            });
        },
        hoverImage(group,index) {
            
            if(!this.images[group].group[index].hover) {
                this.images[group].group[index].style.width = 100
                this.images[group].group[index].style.height =  100
                this.images[group].group[index].hover = true

                setTimeout(() => {
                    this.images[group].group[index].infoshow = true
                }, 500);
                
            }

        },

        leaveImage(group,index) {
             if(this.images[group].group[index].hover) {
                this.images[group].group[index].style.width = 0
                this.images[group].group[index].style.height =  0
                this.images[group].group[index].hover = false
                this.images[group].group[index].infoshow = false
            }
        },
        async getImageLoad(url) {
             var imgSize = {
                        width : 0,
                        height : 0
            }
            var img = new Image();
            img.src = url;

            img.onload = () => {
                imgSize.width = img.naturalWidth;
                imgSize.height = img.naturalHeight;
            }
            this.imageData.push(imgSize)
            // return imgSize;

        },
        checkImg(img){
            var x = []
            this.images.forEach(element => {
                x.push(element.pathShort)
            });

            var a = x.indexOf(img);
           
            if(a < 0){
                return true; 
            }

            return false;
        },
        buildData() {

        },
        addItem: function () {
            // Add a new item. It must have a unique key!
            this.layout.push({
                x: (this.layout.length * 2) % (this.colNum || 12),
                y: this.layout.length + (this.colNum || 12), // puts it at the bottom
                w: 2,
                h: 2,
                i: this.index,
            });
            // Increment the counter to ensure key is always unique.
            this.index++;
        },
        removeItem: function (val) {
            const index = this.layout.map(item => item.i).indexOf(val);
            this.layout.splice(index, 1);
        },
        disableType: function (index) {
            this.serchTag[index].active = !this.serchTag[index].active
            // this.isActive = !this.isActive
            console.log(this.isActive);
        }
    }
}
</script>


<style>

/* .imageGrid .item-imageGrid{
  width: 400px;
  height: 700px;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
 */


/* .item-imageGrid.item1{
    height: 200px;
}
.item-imageGrid.item2{
    height: 800px;
}
.item-imageGrid.item3{
    height: 600px;
} */
</style>