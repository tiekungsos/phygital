<template>
    <div class="works">
        <Menu/>
        <div class="works-in" ref="workIn" v-if="active">
            <div class="team">
                <div class="team-text animate__animated animate__fadeInUp  animate__delay-300ms">WE CREATE</div>
                <div class="team-line animate__animated animate__slideInLeft  animate__delay-500ms"></div>
            </div>
            <div class="header">
                <b-container fluid>
                    <b-row>
                        <div :class="`growup animate__animated animate__fadeIn animate__delay-${(100 * index) + 500}ms`" v-for="(titleIn, index) in title" v-bind:key="index" v-on:click="filterType(index,titleIn)" :style="[titleIn.filter ? {'color': '#E91E56'} : {'color': '#ffffff'}]">
                            <span class="tital-growup" v-if="index != 0">/</span> {{titleIn.name}}
                        </div>
                    </b-row>
                </b-container>
            </div>
            <div class="search animate__animated animate__fadeIn animate__delay-1s">
                <div class="search-from">
                    <b-form-input v-model="search"></b-form-input>
                    <div class="icon-serach">
                        <div class="serch-result" v-on:click="searchData()">
                            <svg id="searching" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                                <g id="Group_56" data-name="Group 56" transform="translate(0)">
                                                                    <path id="Path_3" data-name="Path 3" d="M2.264,2.264A7.728,7.728,0,0,1,15.457,7.728a7.671,7.671,0,0,1-1.9,5.079L17.846,17.1a.528.528,0,1,1-.747.747l-4.292-4.292A7.728,7.728,0,0,1,0,7.728,7.678,7.678,0,0,1,2.264,2.264Zm.747,10.183a6.669,6.669,0,1,0,0-9.436A6.68,6.68,0,0,0,3.011,12.446Z" transform="translate(-0.001 0)" fill="#fff"/>
                                                                </g>
                                                            </svg>
                        </div>
                        <div class="icon-plus icon-serach-in">
                            <v-burger type="spin" :active="isActive" @updated="isActive = $event" />
                        </div>
                    </div>
                </div>
                <b-container fluid class="serchTag" v-if="isActive">
                    <b-row>
                        <div class="seachTage-block" cols="6" sm="6" md="4" lg="3" xl="2" v-for="(tag, index) in serchTag" :key="index" v-on:click="disableType(index,tag)">
    
                            <div class="tagname" :style="[tag.filter ? {'color': '#E91E56'} : {'color': '#ffffff'}]">
                                {{tag.name}}
                            </div>
                            <div class="icon-plus">
                                <v-burger type="spin" :active="tag.filter" @updated="tag.filter = $event" />
                            </div>
                        </div>
                    </b-row>
                </b-container>
            </div>
    
    
    
            <div class="imageGrid animate__animated animate__fadeInUp  animate__delay-1300ms">
                <b-container fluid>
                    <b-row>
                        <b-col class="imageGrid-in" cols="12" sm="4" md="4" lg="3" xl="3" v-for="(group, index) in images" :key="index" :class="`item-imageGrid item${index}`">
                            <div class="imageBlock" v-for="(data, index2) in group.group" :key="index2" @mouseover="hoverImage(index,index2)" @mouseleave="leaveImage(index,index2)" v-on:click="showDetailBlock(index,index2)">
                                <div class="cover-image">
                                    <div class="cover" :style="{'width' :`${data.style.width}%`,'height' :`${data.style.height}%`}"></div>
                                    <img v-lazy-load class="img-fluid" :src="data.pathLong" alt="">
                                </div>
                                <div class="infomation" :style="[data.hover ? {'opacity': '1'} : {'opacity': '0'}]">
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
        </div>
    
    
        <div class="work-detail" :style="[workDetail.parent ? {'height': '100vh'} : {'height': '0vh'},active ? {'padding-top': '0px'} : {'padding-top': '150px'}]">
    
            <div class="team">
                <transition name="work-detail" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                    <div v-if="workDetail.active" class="team-text" v-bind:class="[workDetail.animate.team.class]" workDetail>{{workDetail.name}}</div>
                </transition>
                <div v-if="workDetail.active" class="team-line" v-bind:class="[workDetail.animate.team.class2]"></div>
            </div>
    
            <div class="work-detailrow">
    
                <transition name="work-detail" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                    <div class="card-work-detail" v-if="workDetail.active">
                        <div class="img-work-detail"> <img v-lazy-load class="img-fluid" v-bind:class="[workDetail.animate.team.class3]" :src="`${workDetail.workDetailImage}`" alt=""></div>
                        <div class="work-detail-overview" v-bind:class="[workDetail.animate.team.class4]">
                            <div class="overview">
                                <div>Overview</div>
                                <div class="line-parent">
                                    <div class="line animate__animated animate__slideInLeft animate__delay-1s"></div>
                                </div>
                            </div>
                            <div v-html="workDetail.overview.detail" class="detail">
    
                            </div>
                            <div class="capability-el">
                                <div class="capability">
                                    Capability
                                    <div class="line-parent">
                                        <div class="line animate__animated animate__slideInLeft animate__delay-1s"></div>
                                    </div>
                                </div>
    
                                <div class="capability-type">
                                    <div class="el" v-for="(capability, index) in workDetail.overview.capability" v-bind:key="index">
                                        <div class="line" v-if="index > 0"> / </div> {{capability}}
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </transition>
    
                <transition name="work-detail" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                    <div v-if="workDetail.active" class="arrow animate__animated animate__fadeIn animate__delay-1500ms">
                        <div class="left-arrow" v-on:click="preventProject(workDetail.groupId,workDetail.projectId)">
                            <span>Previous Project</span>
                            <br><br>
                            <img v-lazy-load :src="`${cursorUrlLeft}`" alt="">
                        </div>
    
                        <div class="right-arrow" v-on:click="nextProject(workDetail.groupId,workDetail.projectId)">
                            <span>Next Project</span>
                            <br><br>
                            <img v-lazy-load :src="`${cursorUrl}`" alt="">
                        </div>
                    </div>
                </transition>
    
            </div>
            <div class="gallery-list animate__animated animate__fadeInUp animate__delay-500ms" v-if="workDetail.active">
                <div class="imageGrid">
                    <b-container fluid>
                        <b-row>
                            <b-col class="imageGrid-in" cols="6" sm="6" md="4" lg="3" xl="3" v-for="(group, index) in workDetail.gallery" :key="index" :class="`item-imageGrid item${index}`" :enter-active-class="eventNext.animateIn" :leave-active-class="eventNext.animateOut">
                                <div class="imageBlock" v-for="(data, index2) in group.group" :key="index2">
                                    <div class="cover-image">
                                        <img v-lazy-load class="img-fluid" :src="data" alt="">
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </div>
            <div class="team related-work-text animate__animated animate__fadeInUp animate__delay-500ms" v-if="workDetail.active">
                <div class="team-text animate__animated animate__fadeInUp  animate__delay-500ms">Related Work</div>
                <div class="team-line animate__animated animate__slideInLeft  animate__delay-500ms"></div>
            </div>
            <div class="related-work animate__animated animate__fadeInUp animate__delay-500ms" v-if="workDetail.active">
                <div class="related-current" @mouseover="hoverImageDetail()" @mouseleave="leaveImageDetail()" v-on:click="showDetailBlock(workDetail.related.group,workDetail.related.index)">
                    <div class="arrow-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36.792" height="11.777" viewBox="0 0 36.792 11.777">
                                                            <path id="right-arrow-3" d="M36.792,167.781,30.9,173.67V168.94H0v-2.318H30.9v-4.729Z" transform="translate(36.792 173.67) rotate(180)" fill="#f9f9f9"/>
                                                        </svg>
                    </div>
                    <div class="cover-image">
                        <div class="cover" :style="{'width' :`${workDetail.related.style.width}%`,'height' :`${workDetail.related.style.height}%`}"></div>
                        <img v-lazy-load class="img-fluid" :src="workDetail.related.current" alt="">
                    </div>
                    <div class="infomation" :style="[workDetail.related.hover ? {'opacity': '1'} : {'opacity': '0'}]">
                        <div class="name">
                            {{workDetail.related.name}}
                        </div>
                        <div class="capability">
                            <div class="in" v-for="(capability, index) in workDetail.related.capability" v-bind:key="index">
                                <div class="line" v-if="index > 0"> / </div> {{capability.name}}
                            </div>
                        </div>
    
                    </div>
    
                </div>
                <div class="related-next" v-on:click="nextRealated(workDetail.related.indexinListData)">
                    <div class="arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36.792" height="11.777" viewBox="0 0 36.792 11.777">
                                                            <path id="right-arrow-3" d="M36.792,5.888,30.9,0V4.729H0V7.047H30.9v4.729Z" fill="#f9f9f9"/>
                                                        </svg>
                    </div>
                    <img v-lazy-load class="img-fluid" :src="workDetail.related.next" alt="">
                </div>
            </div>
    
            <MenuLeavePage v-if="workDetail.active" />
        </div>
    
        <MenuLeavePage v-if="workDetail.parent == false" />
    </div>
</template>

<script>
import Vue from 'vue'
import cursorUrl from '~/assets/image/icon/right.png'
import 'animate.css';
import ImageComponent from '../components/Image.vue';
import { VBurger } from 'vue-burger';
import workDetailImage from '~/assets/image/works/work-detail/1.png'

import workDetailImage1 from '~/assets/image/works/work-detail/2.png'
import workDetailImage2 from '~/assets/image/works/work-detail/3.png'
import workDetailImage3 from '~/assets/image/works/work-detail/4.png'
import workDetailImage4 from '~/assets/image/works/work-detail/5.png'
import workDetailImage5 from '~/assets/image/works/work-detail/6.png'
import workDetailImage6 from '~/assets/image/works/work-detail/7.png'
import workDetailImage7 from '~/assets/image/works/work-detail/8.png'
import workDetailImage8 from '~/assets/image/works/work-detail/9.png'

import related1 from '~/assets/image/works/work-detail/related1.png'
import related2 from '~/assets/image/works/work-detail/related2.png'

import cursorUrlLeft from '~/assets/image/icon/left.png'

export default {
    transition: 'page', // set our transition with nuxt.js
    async asyncData({ $axios }) {
        let works = await $axios.get("/works");
        let categories = await $axios.get("/work-categories");
        let serchTag = await $axios.get("/serch-tags");

        works = works.data
        categories = categories.data
        serchTag = serchTag.data

        var listDataitem = [],
            categorie = [],
            serach = [];

        //import image 
        var count = 1,
            group = 0,
            indexData = 0,
            groupGallery = 0,
            imagesData = [
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
            ],
            limitImage = 20;

        works.data.forEach((person, index) => {
            var numbercheck = 3,
                numbercheckGallery = 3;
            var gallery = [
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
            ];

            if (window.innerWidth <= '950' && window.innerWidth > '574') {
                numbercheck = 2
                numbercheckGallery = 2
                imagesData = [
                    { 'group': [] },
                    { 'group': [] },
                    { 'group': [] }
                ]

                gallery = [
                    { 'group': [] },
                    { 'group': [] },
                    { 'group': [] }
                ]

            } else if (window.innerWidth <= '574') {
                numbercheck = 0
                numbercheckGallery = 1
                imagesData = [
                    { 'group': [] }
                ]

                gallery = [
                    { 'group': [] },
                    { 'group': [] }
                ]

            }

            // loop for type
            var types = [],
                typesList = [],
                releateWork = [];
            person.type_of_works.forEach(element => {
                var el = {
                    name: element.type_name,
                    id: element.id
                }

                categories.data.forEach(cat => {
                    if (cat.id == element.id) {
                        cat.type_of_work_works.forEach(work_work => {
                            if (work_work.id != person.id) {
                                releateWork.push(work_work.id)
                            }

                        });
                    }
                });


                types.push(el)
                typesList.push(el.name)
            });

            //loop for serch tag
            var searchTag = [];
            person.serch_tags.forEach(element => {
                var el = {
                    name: element.name,
                    id: element.id
                }
                searchTag.push(el)
            });

            //groupGallery
            var imageAll = [];
            person.all_work_image.forEach(element => {

                if (groupGallery > numbercheckGallery) {
                    groupGallery = 0
                }
                var groupData = groupGallery;
                gallery[groupData].group.push(element.url)

                groupGallery++
            });



            if (count <= limitImage) {

                if (group > numbercheck) {
                    group = 0
                    indexData = indexData + 1
                }

                count = count + 1;

                var height = 0,
                    width = 0,
                    groupData = group,
                    companyname = ''

                if (person.clients != null) {
                    companyname = person.clients.name
                }

                imagesData[groupData].group.push({
                    'pathLong': person.header_image.url,
                    // pathShort: key,
                    // height: this.imageData.height,
                    // width: this.imageData.width,
                    'id': person.id,
                    'index': indexData,
                    'group': groupData,
                    'name': person.name_work,
                    'company': companyname,
                    'type': types,
                    'serchTag': searchTag,
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'infoshow': false,
                    'cursor': cursorUrl,
                    'imgStyle': {
                        'zindex': 0,
                        'left': 0
                    },
                    'detailShow': false,
                    'overview': {
                        detail: person.work_detail,
                        capability: typesList
                    },
                    'gallery': gallery,
                    'releateWork': [...new Set(releateWork)]
                })

                listDataitem.push({
                    'pathLong': person.header_image.url,
                    // pathShort: key,
                    // height: this.imageData.height,
                    // width: this.imageData.width,
                    'id': person.id,
                    'index': indexData,
                    'group': groupData,
                    'name': person.name_work,
                    'company': companyname,
                    'type': types,
                    'serchTag': searchTag,
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'infoshow': false,
                    'cursor': cursorUrl,
                    'imgStyle': {
                        'zindex': 0,
                        'left': 0
                    },
                    'detailShow': false,
                    'overview': {
                        detail: person.work_detail,
                        capability: typesList
                    },
                    'gallery': gallery,
                    'releateWork': [...new Set(releateWork)]
                })

                group += 1
            }
        });

        categories.data.forEach(client => {
            var data = {
                'name': client.type_name,
                'id': client.id,
                'filter': false
            }

            categorie.push(data)
        });


        serchTag.data.forEach(client => {
            var data = {
                'name': client.name,
                'id': client.id,
                'filter': false
            }

            serach.push(data)
        });

        console.log(listDataitem);

        return { title: categorie, images: imagesData, serchTag: serach, listData: listDataitem }
    },
    data() {
        return {
            active: true,
            title: [],
            serchTag: [],
            search: '',
            listDataEx: [],
            listData: [],
            imagesEx: [],
            images: [
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
                { 'group': [] },
            ],

            limitImage: 20,
            list: [],
            imageData: [],
            isActive: false,
            eventNext: {
                animateIn: '',
                animateOut: ''
            },
            workDetail: {
                name: '',
                animate: {
                    team: {
                        class: 'animate__animated animate__fadeInUp  animate__delay-300ms',
                        class2: 'animate__animated animate__slideInLeft  animate__delay-500ms',
                        class3: 'animate__animated animate__fadeInUp animate__delay-300ms',
                        class4: 'animate__animated animate__fadeInUp animate__delay-500ms'
                    }
                },
                animateOld: null,
                active: false,
                parent: false,
                workDetailImage,
                projectId: null,
                groupId: null,
                overview: {
                    detail: 'ภารตะเคลียร์ สันทนาการน้องใหม่วินนายแบบ สปิริตสไตล์ไฮบริดศึกษาศาสตร์ เวิร์ลด์ม็อบทัวริสต์ ริกเตอร์บ๊วยโปรเจ็กต์สตาร์ท โฮสเตส แอดมิชชั่นฉลุยล้มเหลวอุด้ง เอนทรานซ์แคร์บูติก โฮสเตส ไทม์ปัจเจกชน เบลอดิกชันนารีรามาธิบดีน้องใหม่กรุ๊ป เซอร์แอปเปิลมายองเนส แฟรนไชส์สไตรค์ท็อปบู๊ทนพมาศ ปักขคณนาโปรโมทพาสปอร์ต เอนทรานซ์ไฮบริดเรซิ่นคอมเมนท์ มาร์ก ไฟลท์โฮปติ่มซำมาร์เก็ตติ้งเธค หลวงปู่ ปาสคาลเบญจมบพิตรโปรโมเตอร์ยูโรเชอร์รี่ ไทม์ทริปสโตร์ เลคเชอร์มั้ง แฮมเบอร์เกอร์ เอนทรานซ์ พูลนางแบบระโงก เซฟตี้﻿กรรมาชนเซ็กซ์ แบรนด์เด้อฮ่องเต้บ๊อกซ์สติ๊กเกอร์ รอยัลตี้เกย์วอลซ์สะเด่า วอเตอร์สโตนป๋อหลอสไปเดอร์ ซีอีโอ โทรโข่งวอร์รูมสคริปต์ โอเปร่าหงวนทอล์คฮากกาช็อค พริตตี้อวอร์ดสมิติเวชเซ็กซี่ทัวริสต์',
                    capability: [
                        'Advertising',
                        'Packaging',
                        'Digital PR'
                    ]
                },
                gallery: [{
                        'group': [
                            workDetailImage1,
                            workDetailImage2
                        ]
                    },
                    {
                        'group': [
                            workDetailImage3,
                            workDetailImage4
                        ]
                    },
                    {
                        'group': [
                            workDetailImage5,
                            workDetailImage6
                        ]
                    },
                    {
                        'group': [
                            workDetailImage7,
                            workDetailImage8
                        ]
                    },
                ],
                related: {
                    current: related1,
                    next: related2,
                    style: {
                        width: 0,
                        height: 0
                    },
                    hover: false,
                    name: 'DOT Circle',
                    capability: [
                        'Advertising',
                        'Packaging',
                        'Digital PR'
                    ]
                },

            },
            cursorUrlLeft,
            cursorUrl,
            window: {
                width: 0,
                height: 0
            },
        }
    },
    components: {
        VBurger

    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        hoverImage(group, index) {

            if (!this.images[group].group[index].hover) {
                this.images[group].group[index].style.width = 100
                this.images[group].group[index].style.height = 100
                this.images[group].group[index].hover = true

                setTimeout(() => {
                    this.images[group].group[index].infoshow = true
                }, 500);

            }

        },

        leaveImage(group, index) {
            if (this.images[group].group[index].hover) {
                this.images[group].group[index].style.width = 0
                this.images[group].group[index].style.height = 0
                this.images[group].group[index].hover = false
                this.images[group].group[index].infoshow = false
            }
        },
        hoverImageDetail() {

            if (!this.workDetail.related.hover) {
                this.workDetail.related.style.width = 100
                this.workDetail.related.style.height = 100
                this.workDetail.related.hover = true
            }

        },

        leaveImageDetail() {
            if (this.workDetail.related.hover) {
                this.workDetail.related.style.width = 0
                this.workDetail.related.style.height = 0
                this.workDetail.related.hover = false
                // this.images[group].group[index].infoshow = false
            }
        },
        buildData() {
            var dataImg = [],
                group = 0,
                gallery = [
                    { 'group': [] },
                    { 'group': [] },
                    { 'group': [] },
                    { 'group': [] }
                ]



            var numbercheck = 3

            if (this.window.width <= '950' && this.window.width > '574') {
                numbercheck = 2
                gallery = [
                    { 'group': [] },
                    { 'group': [] },
                    { 'group': [] }
                ]
            } else if (this.window.width <= '574') {
                numbercheck = 0
                gallery = [
                    { 'group': [] }
                ]
            }
            this.images = gallery
            this.listData.forEach(imgData => {

                if (group > numbercheck) {
                    group = 0
                }
                var groupData = group;


                this.images[groupData].group.push(imgData);

                group++
            });

        },
        removeItem: function(val) {
            const index = this.layout.map(item => item.i).indexOf(val);
            this.layout.splice(index, 1);
        },
        getHeightEl() {
            return this.$refs.workIn.clientHeight
        },
        showDetailBlock(group, index) {
            window.scrollTo(0, 0);
            this.workDetail.parent = true

            console.log(group);
            console.log(index);
            var item = this.images[group].group[index];

            console.log(item);
            this.workDetail.workDetailImage = item.pathLong
            this.workDetail.gallery = item.gallery
            this.workDetail.overview = item.overview
            this.workDetail.projectId = index
            this.workDetail.groupId = group
            this.workDetail.name = item.name

            var releateItem = item.releateWork,
                itemWork = [],
                listData = this.listData

            listData = this.shuffle(listData)

            console.log(listData);
            listData.forEach(el => {
                if (releateItem.includes(el.id)) {
                    itemWork.push(el)
                }
            });

            console.log(itemWork);

            this.workDetail.list = itemWork;
            this.workDetail.related = {
                group: itemWork[0].group,
                id: itemWork[0].id,
                index: itemWork[0].index,
                current: itemWork[0].pathLong,
                next: itemWork[1].pathLong,
                style: {
                    width: 0,
                    height: 0
                },
                hover: false,
                name: itemWork[0].name,
                capability: itemWork[0].type,
                indexinListData: 0
            };

            setTimeout(() => {
                this.workDetail.active = true
                this.active = false
            }, 1000);
        },
        shuffle(arra1) {
            var ctr = arra1.length,
                temp, index;

            // While there are elements in the array
            while (ctr > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * ctr);
                // Decrease ctr by 1
                ctr--;
                // And swap the last element with it
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1;
        },
        nextRealated(indexId) {
            var itemWork = this.workDetail.list;

            var next = indexId + 1

            if (!itemWork[next] || !itemWork[next + 1]) {
                next = 0
            }

            this.workDetail.related = {
                group: itemWork[next].group,
                id: itemWork[next].id,
                index: itemWork[next].index,
                current: itemWork[next].pathLong,
                next: itemWork[next + 1].pathLong,
                style: {
                    width: 0,
                    height: 0
                },
                hover: false,
                name: itemWork[next].name,
                capability: itemWork[next + 1].type,
                indexinListData: next
            };

        },
        preventProject(group, index) {
            this.clearClass()
            this.eventNext.animateIn = 'animate__animated animate__fadeInLeft'
            this.eventNext.animateOut = 'animate__animated animate__fadeOutRight '

            group = group - 1
            index = index

            if (group < 0) {
                group = (this.images.length - 1)
                index = index - 1
            }

            var item = this.images[group].group[index];

            if (!item) {
                var item = this.images[this.images.length - 1].group[0];
            }

            Vue.nextTick(() => {
                this.workDetail.active = false
            });

            setTimeout(() => {
                this.workDetail.workDetailImage = item.pathLong
                this.workDetail.gallery = item.gallery
                this.workDetail.overview = item.overview
                this.workDetail.projectId = index
                this.workDetail.groupId = group
                this.workDetail.active = true
                this.workDetail.name = item.name
            }, 500);
        },
        nextProject(group, index) {
            this.clearClass()
            this.eventNext.animateIn = 'animate__animated animate__fadeInRight'
            this.eventNext.animateOut = 'animate__animated animate__fadeOutLeft'
            group = group + 1
            index = index

            if (group > (this.images.length - 1)) {
                group = 0
                index = index + 1
            }

            var item = this.images[group].group[index];

            if (!item) {
                var item = this.images[0].group[0];
            }

            Vue.nextTick(() => {
                this.workDetail.active = false
            });

            setTimeout(() => {
                this.workDetail.workDetailImage = item.pathLong
                this.workDetail.gallery = item.gallery
                this.workDetail.overview = item.overview
                this.workDetail.projectId = index
                this.workDetail.groupId = group
                this.workDetail.active = true
                this.workDetail.name = item.name
            }, 500);

        },
        clearClass() {
            this.workDetail.animateOld = this.workDetail.animate;
            this.workDetail.animate.team.class1 = ''
            this.workDetail.animate.team.class2 = ''
            this.workDetail.animate.team.class3 = ''
            this.workDetail.animate.team.class4 = ''
        },
        filterType(index, filter) {

            if (this.listDataEx.length > 1) {
                this.listData = this.listDataEx
            } else {
                this.listDataEx = this.listData
            }

            var data = []
            var dataFilter = []

            this.title.forEach(filterData => {
                if (filterData.filter == true && filterData.id != filter.id) {
                    dataFilter.push(filterData.id)
                }
            });

            if (dataFilter < 1 && this.title[index].filter === false) {
                dataFilter.push(filter.id)
            }

            if (dataFilter < 1) {
                this.listData = this.listDataEx
                this.title[index].filter = !this.title[index].filter;
                Vue.nextTick(() => {
                    this.buildData();
                });
                return
            }

            this.listData.forEach(el => {
                el.type.forEach(type => {
                    if (dataFilter.includes(type.id)) {
                        data.push(el)
                    }
                });
            });

            this.listData = [...new Set(data)]
            this.title[index].filter = !this.title[index].filter;
            Vue.nextTick(() => {
                this.buildData();
            });
        },
        disableType: function(index, filter) {
            console.log(index);
            if (this.listDataEx.length > 1) {
                this.listData = this.listDataEx
            } else {
                this.listDataEx = this.listData
            }

            var data = []
            var dataFilter = []
            console.log(this.serchTag);

            this.serchTag.forEach(filterData => {
                if (filterData.filter == true && filterData.id != filter.id) {
                    dataFilter.push(filterData.id)
                }
            });

            if (dataFilter < 1 && this.serchTag[index].filter === false) {
                dataFilter.push(filter.id)
            }

            if (dataFilter < 1) {
                this.listData = this.listDataEx
                this.serchTag[index].filter = !this.serchTag[index].filter;
                Vue.nextTick(() => {
                    this.buildData();
                });
                return
            }

            this.listData.forEach(el => {
                el.serchTag.forEach(type => {
                    if (dataFilter.includes(type.id)) {
                        data.push(el)
                    }
                });
            });

            this.listData = [...new Set(data)]
            this.serchTag[index].filter = !this.serchTag[index].filter

            Vue.nextTick(() => {
                this.buildData();
            });

        },
        searchData() {
            var filtered = [];

            if (this.listDataEx.length > 1) {
                this.listData = this.listDataEx
            } else {
                this.listDataEx = this.listData
            }


            if (this.search) {
                this.listData = this.listData.filter(
                    m => m.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                );
            } else {
                this.listData = this.listDataEx
            }


            Vue.nextTick(() => {
                this.buildData();
            });
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
    top: 110%;
}

/* entering end */

.page-enter-to {
    top: 0;
}
</style>