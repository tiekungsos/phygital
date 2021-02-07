<template>
    <div class="agency" ref="infoBox">
        <Menu/>
        <div class="header-blog">
    
        </div>
    
        <div class="growup-page" ref="infoBox">
    
            <div class="header">
                <b-container fluid>
                    <b-row>
                        <div :class="`growup animate__animated animate__fadeIn animate__delay-${(100 * index) + 500}ms`" v-for="(titleIn, index) in title" v-bind:key="index" v-on:click="filterType(index,titleIn)" :style="[titleIn.filter ? {'color': '#E91E56'} : {'color': '#ffffff'}]">
                            <span class="tital-growup" v-if="index != 0">/</span> {{titleIn.name}}
                        </div>
                    </b-row>
                </b-container>
    
            </div>
            <div class="theme">
                <b-container fluid class="bv-example-row">
                    <b-row ref="row">
                        <b-col cols="6" sm="6" md="4" lg="3" xl="3" :class="`person-img animate__animated animate__fadeInUpBig animate__delay-${(100 * index) + 1000}ms`" v-for="(person, index) in persons" v-bind:key="index" :style="{'cursor':`url(${persons[index].cursor})25 15 ,auto`}"
                            :ref="`${index}`">
    
                            <div class="person-img-in" @mouseover="hoverImage(index)" @mouseleave="leaveImage(index)" v-on:click="showModal(person,index)">
    
                                <div class="cover-image">
                                    <div class="cover" :style="{'width' :`${persons[index].style.width}%`,'height' :`${persons[index].style.height}%`}">
                                    </div>
                                    <img v-lazy-load class="img-fluid" :src="`${person.images}`" alt="person" :style="{'left' :`${persons[index].imgStyle.left}px`,'z-index' :`${persons[index].imgStyle.zindex}`}">
    
                                    <!-- transition: visibility 0s, opacity 0s linear; -->
                                    <div class="mini-info" :style="[persons[index].hover ? {'opacity': '1'} : {'opacity': '0'}]">
                                        <div class="person-name">
                                            <span v-for="(type, index) in person.type" v-bind:key="index">
                                                    {{type.name}}
                                                </span>
                                        </div>
                                        <!-- <div class="person-about">
                                                        {{person.desc}}
                                                    </div> -->
                                    </div>
                                </div>
                                <div class="info-mode">
                                    <div class="descinfo">
                                        {{person.desc}}
                                    </div>
                                    <div class="nameanddate">
                                        <span class="name-left">
                                                    {{person.name}}
                                                </span>
                                        <span class="date-right">
                                                    {{person.date}}
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
    
        </div>
    
    
        <div class="modal-growup" :style="[modal.show ? {'z-index': '999999'} : {'height': '0'}]">
            <div class="fade-el" :style="[modal.show ? {'height': '100vh'} : {'height': '0vh'},
                         modal.displayArrow.show ? {'z-index': '999999','background-color' : '#E91E56','opacity' : '0.75'} : {'z-index': '0','background-color' : 'black','opacity' : '0.5'} ]">
                <div v-if="modal.show" class="center" :style="{'cursor' :`url(${cursorDotUrl})25 15 ,auto`}">
    
                </div>
                <b-row class="arrow">
                    <b-col v-on:click="previousContent(modal.indexId)" :style="{'cursor' :`url(${cursorUrlLeft})25 15 ,auto`}" @mouseover="hoverArrow('left')" @mouseleave="leaveArrow('left')" class="left" cols="6">
                        <div class="arrow-text" :style="[modal.displayArrow.left ? {'opacity': '1'} : {'opacity': '0'}]">
                            <!-- <img v-lazy-load  src="~/assets/image/icon/left.png" alt=""> -->
                            <span>previous</span>
                        </div>
    
                    </b-col>
                    <b-col v-on:click="nextContent(modal.indexId)" :style="{'cursor' :`url(${cursorUrl})25 15 ,auto`}" @mouseover="hoverArrow('right')" @mouseleave="leaveArrow('right')" class="right" cols="6">
                        <div class="arrow-text" :style="[modal.displayArrow.right ? {'opacity': '1'} : {'opacity': '0'}]">
                            <span>next</span>
                            <!-- <img v-lazy-load  src="~/assets/image/icon/right.png" alt=""> -->
                        </div>
                    </b-col>
                </b-row>
            </div>
    
            <div class="modal-header-glow" :style="[modal.delay ? {'top': '13%'} : {'top': '100%'},modal.show ? {'display': 'block'} : {'display': 'none'},{'cursor' :`url(${cursorDotUrl}) 25 15 ,auto`}]">
                <b-row>
                    <b-col cols="6">
                        <transition name="content-modal" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                            <div class="date-modal" v-if="modal.content.show">
                                <span v-for="(type, index) in modal.content.type" v-bind:key="index">
                                    {{type.name}} <sli v-if="index +1 != modal.content.type.length">/</sli> 
                                </span> 
                            </div>
                        </transition>
                    </b-col>
                    <b-col class="close-modal" cols="6">
                        <div class="close-icon" v-on:click="hideModal()">
                            <b-icon icon="x" aria-hidden="true"></b-icon>
                        </div>
                    </b-col>
                </b-row>
            </div>
    
            <div class="modal-content" :style="[modal.delay ? {'top': '13%'} : {'top': '100%'},modal.show ? {'display': 'block'} : {'display': 'none'},{'cursor' :`url(${cursorDotUrl})25 15 ,auto`}]">
    
                <div class="header-modal">
                    <transition name="content-modal" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                        <div v-if="modal.content.show">
                            {{modal.content.header}}
                        </div>
                    </transition>
    
                </div>
    
                <div class="image-modal">
                    <transition name="content-modal" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                        <img v-lazy-load class="img-fluid" v-if="modal.content.show" :src="`${modal.content.image}`" alt="">
                    </transition>
                </div>
                <div class="content-modal">
                    <transition name="content-modal" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                        <b-row v-if="modal.content.show" ref="row">
                            <b-col class="content-modal-header" cols="12" sm="3" md="3" lg="3" xl="3">
                                <p>{{modal.content.name}}</p>
                                <p>{{modal.content.date}}</p>
                            </b-col>
                            <b-col cols="12" sm="9" md="9" lg="9" xl="9">
                                <p class="header-1">หัวข้อย่อยที่ 1</p>
                                <div v-html="modal.content.contentinfo"></div>
                            </b-col>
                        </b-row>
                    </transition>
                </div>
                <div class="content-footer">
                    <transition name="content-modal" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                        <b-row v-if="modal.content.show" class="footer-modal">
                            <b-col cols="6" sm="2" md="2" lg="2" xl="2">
                                <span>Sheare</span>
                            </b-col>
                            <b-col cols="6" sm="10" md="10" lg="10" xl="10">
                                <Socia/>
                            </b-col>
                        </b-row>
                    </transition>
                </div>
            </div>
    
    
        </div>
    
        <MenuLeavePage/>
    </div>
</template>

<script>
import Vue from 'vue'
import VueScrollSnap from "vue-scroll-snap";
import vuescroll from 'vue-scroll'
import cursorUrl from '~/assets/image/icon/right.png'
import cursorUrlLeft from '~/assets/image/icon/left.png'
import cursorDotUrl from '~/assets/image/icon/dot.png'
import 'animate.css';

import person1 from '~/assets/image/person/18710.png'
import person2 from '~/assets/image/person/20779.png'
import person3 from '~/assets/image/person/263756-P4T3RU-156.png'
import person4 from '~/assets/image/person/10495.png'
import person5 from '~/assets/image/person/9296.png'
import person6 from '~/assets/image/person/23488.png'



import product1 from '~/assets/image/growup/1.png'
import product2 from '~/assets/image/growup/2.png'
import product3 from '~/assets/image/growup/3.png'
import product4 from '~/assets/image/growup/4.png'
import product5 from '~/assets/image/growup/5.png'
import product6 from '~/assets/image/growup/6.png'
import product7 from '~/assets/image/growup/7.png'
import product8 from '~/assets/image/growup/8.png'
import product9 from '~/assets/image/growup/9.png'
import product10 from '~/assets/image/growup/10.png'
import product11 from '~/assets/image/growup/11.png'
import product12 from '~/assets/image/growup/12.png'




Vue.use(vuescroll)

export default {
    async asyncData({ $axios }) {
        let blogs = await $axios.get("/growup-blogs");
        let categories = await $axios.get("/growup-categories");
        blogs = blogs.data
        categories = categories.data

        var blog = [];
        var categorie = [];
        blogs.data.forEach(person => {

            // loop for type
            var types = [];
            person.types.forEach(element => {
                var el = {
                    name: element.name,
                    id: element.id
                }
                types.push(el)
            });


            var dataPeroson = {
                'id' : person.id,
                'images': person.image.url,
                'name': person.name_write,
                'type': types,
                'date': person.created_at,
                'desc': person.blog_name,
                'longdesc': person.detail,
                'hover': false,
                'style': {
                    width: 0,
                    height: 0
                },
                'col': 3,
                'infoshow': false,
                'infoStyle': {
                    'left': 0,
                    'width': 0,
                    'height': 0,
                    'widthBox': 0
                },
                'cursor': cursorUrl,
                'imgStyle': {
                    'zindex': 0,
                    'left': 0
                },
                'detailShow': false
            }

            blog.push(dataPeroson)
        });

        categories.data.forEach(client => {
            var data = {
                    'name': client.name,
                    'id' : client.id,
                    'filter' : false
                }

            categorie.push(data)
        });

        return { persons: blog,title : categorie }
    },
    data() {
        return {
            position: 30,
            cursorUrl,
            cursorUrlLeft,
            cursorDotUrl,
            eventNext: {
                animateIn: '',
                animateOut: ''
            },
            title: [],
            personsEx : [],
            persons: [],
            modal: {
                show: false,
                delay: false,
                indexId: 0,
                content: {
                    show: true,
                    header: 'test',
                    image: product1,
                    contentinfo: 'กิมจิซิมโฟนี่ดีไซน์ตรวจสอบ เซลส์แมนนายแบบ เอ๋ปาสเตอร์ ไดเอ็ตพีเรียด ออยล์ทับซ้อนแทงโก้ กาญจน์ วาไรตี้ริคเตอร์เฮียแป๋ว แทกติคแช่แข็งกรุ๊ปล้มเหลวคองเกรส แฟนตาซีแดนซ์ โปลิศวิปไนน์หมายปอง ป๊อป บัตเตอร์อุปนายิการายชื่อเบอร์รี﻿กรรมาชน ลามะช็อต มาร์เก็ตพลานุภาพรากหญ้านพมาศ ดีไซน์เนอร์ฮ็อตครัวซองต์ รัมฟอร์มแฟรนไชส์ตาปรือเอฟเฟ็กต์จังโก้แอลมอนด์ไอเดีย รองรับ ซูโม่อพาร์ตเมนต์ แบต คอร์ป ศึกษาศาสตร์สโตน ปาร์ตี้จิ๊กโก๋ธัมโม ซิมเป็นไง ชะโนดเวิร์ลด์ธรรมาพาวเวอร์ แดนเซอร์ยูวี บอยคอตต์ฮอตโกเต็กซ์ ชาร์ปสโรชาปักขคณนาติว ชิฟฟอน ปัจฉิมนิเทศ ชาร์ปรีไซเคิล เนอะอวอร์ดโปรเจกต์เปเปอร์ฮิตแบนเนอร์แชมป์ไฮเอนด์ ถ่ายทำนายพราน นินจา ซูฮกคอนโดล้มเหลวแช่แข็งครัวซอง เพรสสติ๊กเกอร์ เซลส์แมนโฟน รูบิคตุ๊ดโอเพ่นปูอัดแอปพริคอท อินดอร์คัตเอาต์ซิ่ง โพลล์ บัลลาสต์อุปนายกไอซียูเทรดสตรอเบอรี ซูเอี๋ยสต๊อคแซวปูอัด หมวยมายาคติเทปทัวริสต์สตาร์ อุปสงค์วิทย์อิเลียดพริตตี้แพนงเชิญ เครปแฟร์ลอจิสติกส์จีดีพี สแตนดาร์ดกู๋ปอดแหกซีนเรต เพนตากอนซิมโฟนี่จ๊าบอุปทาน หลวงพี่โปรโมชั่นฮาร์ดวาริชศาสตร์ผลไม้ เทควันโดฮอตดอกคอนเฟิร์มภูมิทัศน์ ไฟลท์คอนเฟิร์มวาริชศาสตร์ครัวซองต์สถาปัตย์ ฮอตดอก กรุ๊ป ยังไง อิเหนาเมจิก ซิ่ง นายแบบแคร์คูลเลอร์แคร์พงษ์ วัคค์วิลเลจ แจ็กพอต เทปแรงผลัก กับดักออสซี่เซลส์แมน กับดักลีเมอร์ สงบสุขซิตี้รีดไถซิ้มแมกกาซีน',
                    type: 'Desigh',
                    name: 'adasdsdas',
                    date: '23/10/2020'
                },
                displayArrow: {
                    show: false,
                    left: false,
                    right: false
                }
            },
            scrollPosition: null,
            hover: false,
        }
    },
    components: {
        VueScrollSnap
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {

        mouseOver: function(image, index) {
            this.clients[index].imageActive = image;
        },
        imageActive: function(image, index) {
            if (!this.clients[index].imageActive) {
                return image;
            }

            return this.clients[index].imageActive;
        },
        updateScroll() {
            console.log(window.scrollY);
            this.scrollPosition = window.scrollY
        },
        hoverImage(index) {

            if (!this.persons[index].hover && !this.persons[index].infoshow) {
                this.persons[index].style.width = 98
                this.persons[index].style.height = 100
                this.persons[index].hover = true
            }

        },

        leaveImage(index) {
            if (this.persons[index].hover) {
                this.persons[index].style.width = 0
                this.persons[index].style.height = 0
                this.persons[index].hover = false
            }
        },
        showModal(data, index) {
            if (this.modal.show) {
                document.body.classList.remove("modal-open");
                this.modal.show = false
                this.modal.delay = false
                return
            }

            document.body.classList.add("modal-open");

            this.modal.show = true;
            this.modal.content.header = data.desc
            this.modal.content.image = data.images
            this.modal.content.contentinfo = data.longdesc
            this.modal.content.type = data.type
            this.modal.content.name = data.name
            this.modal.content.date = data.date
            this.modal.indexId = index

            setTimeout(() =>
                this.modal.delay = true, 500);

        },
        hideModal() {
            document.body.classList.remove("modal-open");
            this.modal.show = false
            this.modal.delay = false
        },
        hoverArrow(arrow) {
            console.log('hoverArrow' + arrow);
            this.modal.displayArrow.show = true;

            this.modal.displayArrow.left = false;
            this.modal.displayArrow.right = false;

            if (arrow == 'left') {
                this.modal.displayArrow.left = true;
            } else if (arrow == 'right') {
                this.modal.displayArrow.right = true;
            }

        },
        leaveArrow(arrow) {
            console.log('leaveArrow' + arrow);
            this.modal.displayArrow.show = false;
            this.modal.displayArrow.right = false;
            this.modal.displayArrow.left = false;

        },
        previousContent(index) {
            var number = index - 1

            if (!this.persons[number]) {
                this.hideModal()
                return
            }

            this.eventNext.animateIn = 'animate__animated animate__fadeInRight'
            this.eventNext.animateOut = 'animate__animated animate__fadeOutLeft'
            this.leaveArrow()
            Vue.nextTick(() => {
                this.modal.content.show = false

                this.modal.content.header = this.persons[number].desc
                this.modal.content.image = this.persons[number].images
                this.modal.content.contentinfo = this.persons[number].longdesc
                this.modal.content.type = this.persons[number].type
                this.modal.content.name = this.persons[number].name
                this.modal.content.date = this.persons[number].date

                setTimeout(() =>
                    this.modal.content.show = true, 500);

                this.modal.indexId = number
            });

        },
        nextContent(index) {
            var number = index + 1

            if (!this.persons[number]) {
                this.hideModal()
                return
            }

            this.eventNext.animateIn = 'animate__animated animate__fadeInLeft'
            this.eventNext.animateOut = 'animate__animated animate__fadeOutRight'

            this.leaveArrow()
            Vue.nextTick(() => {

                this.modal.content.show = false

                this.modal.content.header = this.persons[number].desc
                this.modal.content.image = this.persons[number].images
                this.modal.content.contentinfo = this.persons[number].longdesc
                this.modal.content.type = this.persons[number].type
                this.modal.content.name = this.persons[number].name
                this.modal.content.date = this.persons[number].date

                setTimeout(() =>
                    this.modal.content.show = true, 500);

                this.modal.indexId = number
            });


        },
        filterType(index, filter) {
            // console.log(index);
            if(this.personsEx.length > 1) {
                this.persons = this.personsEx
            } else {
                this.personsEx = this.persons
            }

            var data = []
            var dataFilter = []

            this.title.forEach(filterData => {
                if(filterData.filter == true && filterData.id != filter.id) {
                      dataFilter.push(filterData.id)
                }
            });

            if(dataFilter < 1 && this.title[index].filter === false) {
                dataFilter.push(filter.id)
            }

            if(dataFilter < 1) {
                 this.persons = this.personsEx
                 this.title[index].filter = !this.title[index].filter;
                return 
            }

            this.persons.forEach(el => {
                el.type.forEach(type => {
                    if(dataFilter.includes(type.id)) {
                        data.push(el)
                    }
                });
            });

            this.persons = [...new Set(data)]
            this.title[index].filter = !this.title[index].filter;

        }


    },
}
</script>


<style>
/* Enter and leave animations can use different */

/* durations and timing functions.              */

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

    {
    transform: translateX(10px);
    opacity: 0;
}
</style>