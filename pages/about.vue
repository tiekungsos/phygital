<template>
    <div class="agency" ref="infoBox">
        <Menu/>
        <div class="header-blog">
    
        </div>
        <div class="right-scroll">
            <div class="right-scroll-in animate__animated animate__slideInDown animate__delay-1s">
                <div class="active animate__animated animate__slideInDown animate__delay-1500ms" :style="{'height':position + '%'}">
                </div>
            </div>
        </div>
    
        <div class="blog" ref="infoBox">
            <div class="header">
                <div class="header-text">
                    <div class="text-before animate__animated animate__fadeInUp">PHYGITAL</div>
                    <div class="text-after animate__animated animate__fadeInUp animate__delay-200ms">AGENCY</div>
                </div>
                <div class="header-content ">
                    <div class="header-content-in animate__animated animate__fadeInUp animate__delay-300ms">
                        เป็นดิจิทัล เอเจนซี ที่รับทำการตลาดเชิงดิจิทัล เพื่อสนองต่อลูกค้า ที่ต้องการทำสื่อโฆษณาทางออนไลน์ และออฟไลน์
                    </div>
                </div>
                <div class="line">
                    <div class="line-in animate__animated animate__slideInDown animate__delay-800ms">
    
                    </div>
                </div>
                <div class="header-buttom animate__animated animate__fadeInDown animate__delay-800ms">
                    โดยชื่อบริษัทมาจากคำว่า <span>PHYGITAL</span> ซึ่งมาจากคำว่า <br>
                    <span>Physical</span> (การตลาดแบบมีหน้าร้าน) บวกกับคำว่า <span>Digital</span> (การตลาดออนไลน์) <br>
                    <span>PHYGITAL</span> จึงเป็นการผสมผสานการตลาดระหว่างโลกแห่งความเป็นจริง <br> และโลกของดิจิทัลเข้าด้วยกัน
                </div>
            </div>
            <div class="team">
    
                <div class="team-text animate__animated animate__fadeInUp  animate__delay-1800ms">OUR TEAM</div>
                <div class="team-line animate__animated animate__slideInLeft  animate__delay-1800ms"></div>
            </div>
            <div class="theme">
                <b-container class="bv-example-row">
                    <b-row ref="row">
                        <b-col class="person-img" v-for="(person, index) in persons" v-bind:key="index" :style="{'cursor':`url(${persons[index].cursor}),auto`}" :ref="`${index}`" cols="6" md="6" lg="4" xl="4">
    
                            <div class="person-img-in" v-on:click="sideLeaveShow($event,index)" @mouseover="hoverImage(index)" @mouseleave="leaveImage(index)">
                                <div class="cover" :style="{'width' :`${persons[index].style.width}%`,'height' :`${persons[index].style.height}%`}">
                                </div>
                                <img v-lazy-load class="img-fluid" :src="`${person.images}`" alt="person" :style="{'left' :`${persons[index].imgStyle.left}px`,'z-index' :`${persons[index].imgStyle.zindex}`}">
    
                                <!-- transition: visibility 0s, opacity 0s linear; -->
                                <div class="mini-info" :style="[persons[index].hover ? {'opacity': '1'} : {'opacity': '0'}]">
                                    <div class="person-name">
                                        {{person.name}}
                                    </div>
                                    <div class="person-about">
                                        {{person.desc}}
                                    </div>
                                </div>
    
    
                            </div>
                            <div class="information" v-on:click="sideLeaveShow($event,index)" :style="{'left' :`${persons[index].infoStyle.left}px`,'width' :`${persons[index].infoStyle.width}px`,'height' :`${persons[index].infoStyle.height}px`}" v-if="persons[index].infoshow">
                                <!-- {{person.desc}} -->
                                <b-row style="height:100%">
                                    <b-col cols="12">
                                        <div class="bg-peson" :style="{'width' :`${persons[index].infoStyle.widthBox}px`}">
    
    
                                            <b-row style="height:100%">
                                                <b-col cols="12" md="12" lg="5" xl="6">
                                                    <div class="mini-info" :style="[persons[index].detailShow ? {'opacity': '1'} : {'opacity': '0'}]">
                                                        <div class="person-name">
                                                            {{person.name}}
                                                        </div>
                                                        <div class="person-about">
                                                            {{person.desc}}
                                                        </div>
                                                    </div>
                                                </b-col>
                                                <b-col cols="12" md="12" lg="7" xl="6">
                                                    <div class="long-desc" v-html="person.longdesc" :style="[persons[index].detailShow ? {'opacity': '1'} : {'opacity': '0'}]">
    
                                                    </div>
                                                </b-col>
                                            </b-row>
    
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
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
                        <b-col class="clients" cols="6" md="6" lg="3" xl="3" v-for="(client, index) in clients" v-bind:key="index">
                            <img v-lazy-load :src="`${imageActive(client.imageOver, index)}`" alt="clients" @mouseover="mouseOver(client.image , index)" @mouseleave="mouseOver(client.imageOver , index)">
                        </b-col>
                    </b-row>
                </b-container>
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
import 'animate.css';

import person1 from '~/assets/image/person/18710.png'
import person2 from '~/assets/image/person/20779.png'
import person3 from '~/assets/image/person/263756-P4T3RU-156.png'
import person4 from '~/assets/image/person/10495.png'
import person5 from '~/assets/image/person/9296.png'
import person6 from '~/assets/image/person/23488.png'



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
    transition: "intro",
    async asyncData({ store, $axios }) {

        if(store.state.setting.length === 0){
            await store.dispatch('fetchSetting')
        }
   
        let  teams  = store.state.teams;
        let  clients = store.state.clients;
        var team = [];
        var clientsdata = [];

        teams.data.forEach(person => {
            var dataPeroson = {
                'images': person.image.url,
                'name': person.name,
                'desc': person.position,
                'longdesc': person.detail_person,
                'hover': false,
                'style': {
                    width: 0,
                    height: 0
                },
                'col': 4,
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

            team.push(dataPeroson)
        });


        clients.data.forEach(client => {
            var data = {
                    'image': client.logo_company.url,
                    'imageOver': client.logl_bw.url,
                    'name': client.name,
                    'url': 'test',
                    'imageActive': ''
            }

            clientsdata.push(data)
        });

        return { persons: team ,clients: clientsdata}
    },
    data() {
        return {
            position: 30,
            cursorUrl,
            window: {
                width: 0,
                height: 0
            },
            clients: [{
                    'image': clients1,
                    'imageOver': clientsbw1,
                    'name': 'test1',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients2,
                    'imageOver': clientsbw2,
                    'name': 'test2',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients3,
                    'imageOver': clientsbw3,
                    'name': 'test3',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients4,
                    'imageOver': clientsbw4,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients5,
                    'imageOver': clientsbw5,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients6,
                    'imageOver': clientsbw6,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients7,
                    'imageOver': clientsbw7,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients8,
                    'imageOver': clientsbw8,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients9,
                    'imageOver': clientsbw9,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients10,
                    'imageOver': clientsbw10,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients12,
                    'imageOver': clientsbw12,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients13,
                    'imageOver': clientsbw13,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients14,
                    'imageOver': clientsbw14,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients15,
                    'imageOver': clientsbw15,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients16,
                    'imageOver': clientsbw16,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients17,
                    'imageOver': clientsbw17,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients18,
                    'imageOver': clientsbw18,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },
                {
                    'image': clients19,
                    'imageOver': clientsbw19,
                    'name': 'test4',
                    'url': 'test',
                    'imageActive': ''
                },

            ],
            persons: [{
                    'images': person1,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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
                },
                {
                    'images': person2,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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

                },
                {
                    'images': person3,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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
                },
                {
                    'images': person4,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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
                },
                {
                    'images': person5,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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
                },
                {
                    'images': person6,
                    'name': 'Anna Hoppins',
                    'desc': 'Executive Partner, Managing Director, Phygital Consulting',
                    'longdesc': 'เซอร์สปาแชมพู เฮียแบล็คจิ๊กภควัทคีตาเกย์ ความหมายไดเอ็ตบลอนด์ซีเรียส เมจิกรามาธิบดีซีนีเพล็กซ์สแควร์ ฮาราคีรีป่าไม้แทคติคไฮแจ็ค สเตอริโอต่อยอดแฟ็กซ์ เทรนด์ช็อป ไงครัวซอง โหงวเฮ้ง ไวอากร้าราสเบอร์รีภควัมบดี สหัสวรรษปัจฉิมนิเทศแฟรี แม็กกาซีน เนิร์สเซอรี โซลาร์รีสอร์ท จุ๊ยโทรไฮแจ็คสโตนแอ็คชั่น จ๊อกกี้แอ๊บแบ๊วโบตั๋นฟอยล์ ฮัลโหลเมจิคอุปสงค์วาริชศาสตร์ความหมาย ภควัมบดี ดีพาร์ทเมนต์เรซินฮ็อตอินดอร์ หลวงปู่ เต๊ะตัวตนแกรนด์สังโฆไบโอ ฟอยล์อาว์บริกรม็อบคอนเซ็ปต์ เตี๊ยม ก๊วน บลูเบอร์รีไมเกรนแอดมิสชัน ชนะเลิศหลวงปู่ โดนัท อิสรชนโอ้ย แป๋วอุปสงค์กับดัก จีดีพีฟลุคซัมเมอร์รีโมตนางแบบ พรีเมียมพาร์ตเนอร์พงษ์ ไฮเวย์ตุ๋ยหลวงพี่เตี๊ยม หลินจือ ปิกอัพแฟรนไชส์เกรด ฮ็อตเทคโนแครตแพนด้าเบญจมบพิตรโปรเจกต์ ดั๊มพ์หยวนดอกเตอร์ โบรชัวร์แอปเปิ้ลสแควร์อีโรติกคอนโด สโรชารีวิวผู้นำไฮเวย์ บริกรล้มเหลว แผดเผาพุดดิ้งขั้นตอน ว้อยวอลนัทออดิทอเรียมยิวโปสเตอร์ บอร์ดสะบึมส์ฮอตดอกล็อบบี้ รีโมตวอล์ก นางแบบแพ็คโคโยตี้ลิสต์ สต๊อกลาตินคลับ ชัวร์จตุคามโทรโข่งวิดีโอดาวน์ แซนด์วิชฟาสต์ฟู้ด โฮปพฤหัสแกสโซฮอล์แอสเตอร์แชเชือนน็อคเทรนด์อวอร์ด ไง คีตปฏิภาณผลักดันเบนโลชีส เบญจมบพิตรทำงาน ชะโนดสปอร์ต ตุ๊ดวอล์กดีพาร์ตเมนท์ เฮียแดนเซอร์พูลคอร์ส เซอร์วิสแจ็กพอต รีเสิร์ช ไมเกรน เก๊ะ เบนโตะครูเสด โอยัวะรันเวย์ธัมโม แอสเตอร์สถาปัตย์ แรงผลักเกจิวันเวย์ด็อกเตอร์เซลส์แมน ดยุค',
                    'hover': false,
                    'style': {
                        width: 0,
                        height: 0
                    },
                    'col': 4,
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
            ],
            scrollPosition: null,
            hover: false,
        }
    },
    components: {
        VueScrollSnap
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        onScroll: function() {
            var positionCal = 30
            
            if(typeof(this.$refs.infoBox.clientHeight) != "undefined") {
                positionCal = (((window.scrollY) * 100) * 2) / this.$refs.infoBox.clientHeight
            }
           

            if (positionCal <= 30) {
                this.position = 30;
            } else if (positionCal >= 100) {
                this.position = 100;
            } else {
                this.position = positionCal;
            }
        },
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
                this.persons[index].style.width = 100
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
        sideLeaveShow(e, index) {

            var parent = e.target.parentElement.parentElement.parentElement.parentElement
            var parent2 = e.target.parentElement.parentElement;
            var parentPosition = parent2.getBoundingClientRect();

            var left = parent.getBoundingClientRect().left - parentPosition.left

            console.log(e.target.parentElement);
            console.log(parentPosition);
            console.log(this.window);



            if (this.persons[index].infoshow) {
                this.persons[index].col = 4;
                this.persons[index].cursor = cursorUrl
                this.persons[index].infoStyle.left = 0
                this.persons[index].infoStyle.width = 0
                this.persons[index].infoStyle.height = 0
                this.persons[index].imgStyle.zindex = 0
                this.persons[index].imgStyle.left = 0
                this.persons[index].infoStyle.widthBox = 0
                this.persons[index].detailShow = false

            } else {
                this.leaveImage(index)
                this.persons[index].col = 4;
                this.persons[index].cursor = ''
                this.persons[index].infoStyle.left = (left + parentPosition.width)
                this.persons[index].infoStyle.width = parent.getBoundingClientRect().width - parentPosition.width - 10
                this.persons[index].infoStyle.height = e.target.parentElement.getBoundingClientRect().height
                this.persons[index].imgStyle.zindex = '9999'
                this.persons[index].imgStyle.left = left

                if (this.window.width <= 992) {
                    this.persons[index].infoStyle.left = left
                    this.persons[index].infoStyle.width = parent.getBoundingClientRect().width
                    this.persons[index].imgStyle.left = 0
                    this.persons[index].imgStyle.zindex = 0
                    this.persons[index].infoStyle.height = (parentPosition.height - 5) * 2

                }

                if (this.window.width <= 520) {
                    this.persons[index].infoStyle.left = 0
                    this.persons[index].infoStyle.width = this.window.width
                    this.persons[index].imgStyle.left = 0
                    this.persons[index].imgStyle.zindex = 0
                    this.persons[index].infoStyle.height = parentPosition.height
                }



                setTimeout(() =>
                    this.persons[index].infoStyle.widthBox = this.persons[index].infoStyle.width, 200);


                setTimeout(() =>
                    this.persons[index].detailShow = true, 600);


            }

            this.persons[index].infoshow = !this.persons[index].infoshow
        }





    },
}
</script>
