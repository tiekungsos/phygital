<template>
    <div>
        <b-row class="leave-contact" :style="{'cursor' :`url(${cursorUrl}),auto`}">
            <b-col cols="8" md="10" lg="10" xl="5" class="left-contact animate__animated animate__fadeInUp animate__delay-1000ms">
                <p v-on:click="showLeaveContact()">Leave your contact</p>
            </b-col>
            <b-col cols="4" md="2" lg="2" xl="7" class="social-menu animate__animated animate__fadeInUp animate__delay-1000ms">
                <Socia/>
            </b-col>
        </b-row>
    
    
        <div class="leave-contact-from animate__animated animate__fadeInUpBig" v-if="leaveContactShow" :style="[leaveContactParam ? {'height': '100%'} : {'height': '0'},{'position':'fixed','bottom' : 0}]">
            <div class="box-leave animate__animated animate__fadeInUpBig animate__delay-500ms" v-if="leaveContactParamBoxShow" :style="[leaveContactParamBox ? {'bottom': '6%'} : {'bottom': '-100%'}]">
                <div class="close" v-on:click="hideLeaveContact()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.946" height="14.946" viewBox="0 0 14.946 14.946">
                                            <g id="Group_57" data-name="Group 57" transform="translate(-468.507 -194.759) rotate(-45)">
                                                <line id="Line_33" data-name="Line 33" y2="20.137" transform="translate(193.569 469.5)" fill="none" stroke="#d83959" stroke-width="1"/>
                                                <line id="Line_34" data-name="Line 34" y2="20.137" transform="translate(203.637 479.569) rotate(90)" fill="none" stroke="#d83959" stroke-width="1"/>
                                            </g>
                                        </svg>
                </div>
                <b-row>
                    <b-col class="header" cols="12">
                        We know you need to talk… <br> LEt’s talk about your project
                    </b-col>
                    <b-col class="content" cols="12">
                        Leave your contact information and we will contact you as soon as possible.
                    </b-col>
                    <b-col class="from" cols="12">
                        <b-form @submit="onSubmit">
                            <b-form-input v-model="data.name" type="text" name="name" id="name" placeholder="Your Name"></b-form-input>
                            <b-form-input v-model="data.email" type="email" name="email" id="email" placeholder="Email"></b-form-input>
                            <b-form-input v-model="data.phone_number" type="number" name="phone" id="phone" placeholder="PHOME NUMBER"></b-form-input>
                            <b-button type="submit" :disabled="onload">Submit</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </div>
            <!-- opacity -->
            <div class="box-directily-in-hover" @mouseover="hoverContact"></div>
            <div v-if="directilyShow" class="box-directily" :style="[directily ? {'opacity': '1'} : {'opacity': '0'}]">
                <nuxt-link to="contact">
                    <div :style="{'cursor' :`url(${cursorUrl}),auto`,}" class="box-directily-in" @mouseleave="leaveContact">
                        <div class="header">
                            CAN’t wait ?
                        </div>
                        <div class="content">
                            Contact us directly
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import 'animate.css';
import cursorUrl from '~/assets/image/icon/right.png'
import Toasted from 'vue-toasted';

Vue.use(Toasted)

export default {
    data() {
        return {
            leaveContactShow: false,
            leaveContactParam: false,
            leaveContactParamBoxShow: false,
            leaveContactParamBox: false,
            cursorUrl,
            directilyShow: false,
            directily: false,
            data: {
                name: '',
                email: '',
                phone_number: ''
            },
            onload: false
        }
    },
    methods: {
        showLeaveContact() {
            document.body.classList.add("modal-open");
            this.leaveContactShow = true
            this.leaveContactParamBoxShow = true
            setTimeout(() => {
                this.leaveContactParam = true
                this.leaveContactParamBox = true
            }, 200);
        },
        hideLeaveContact() {
            document.body.classList.remove("modal-open");
            this.leaveContactParamBox = false
            setTimeout(() => {
                this.leaveContactParamBoxShow = false
            }, 500);

            setTimeout(() => {
                this.leaveContactParam = false
            }, 800);

            setTimeout(() => {
                this.leaveContactShow = false
            }, 1500);

        },
        async onSubmit(event) {
            event.preventDefault()
            this.onload = true;

            await this.$axios.$post('/contactuses', this.data).then(function(response) {

                this.data = {
                    name: '',
                    email: '',
                    phone_number: ''
                }
                setTimeout(() => {
                    this.onload = false;
                    this.$toasted.show("Success contact information and we will contact you as soon as possible.", {
                        theme: "bubble",
                        position: "bottom-center",
                        duration: 5000
                    });
                }, 1400);

                setTimeout(() => { this.hideLeaveContact(); }, 500);

                this.hideLeaveContact();
            }.bind(this));
        },
        hoverContact() {
            this.directilyShow = true
            setTimeout(() => {
                this.directily = true
            }, 200);
        },
        leaveContact() {
            this.directily = false
            setTimeout(() => {
                this.directilyShow = false
            }, 500);

        }
    },
}
</script>
