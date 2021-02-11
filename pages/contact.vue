<template>
    <div class="contact">
        <Menu/>
    
        <div class="contact-content">
            <div class="contact-content-in">
                <b-row>
                    <b-col cols="12" md="12" lg="6" xl="6">
                        <b-row>
                            <b-col cols="12">
                                <div class="business animate__animated animate__fadeInUp  animate__delay-500ms">New business ?</div>
                            </b-col>
                            <b-col cols="12">
                                <div class="name">
                                    <div class="name-in animate__animated animate__fadeInUp  animate__delay-600ms">{{dataContact.businessName}}</div>
                                    <div class="tel-in animate__animated animate__fadeInUp  animate__delay-700ms">{{dataContact.businessTel}}</div>
                                    <div class="email-in animate__animated animate__fadeInUp  animate__delay-800ms">{{dataContact.businessEmail}}</div>
                                </div>
                                <div class="media animate__animated animate__fadeInUp  animate__delay-900ms">Media Inquiries</div>
                            </b-col>
                            <b-col cols="12">
                                <div class="account animate__animated animate__fadeInUp  animate__delay-1s">Account Executive</div>
                                <div class="account-email animate__animated animate__fadeInUp  animate__delay-1s">{{dataContact.executiveEmail}}</div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" md="12" lg="6" xl="6">
                        <b-row>
                            <b-col cols="12">
                                <div class="business animate__animated animate__fadeInUp  animate__delay-500ms">SOME problem about your project</div>
                            </b-col>
                            <b-col cols="12">
                                <div class="name">
                                    <div class="name-in animate__animated animate__fadeInUp  animate__delay-600ms">Project manager</div>
                                    <div class="email-in animate__animated animate__fadeInUp  animate__delay-700ms">{{dataContact.projectEmail}}</div>
                                </div>
                                <div class="media animate__animated animate__fadeInUp  animate__delay-800ms">บริษัท ฟิจิทัล เอเจนซี จำกัด</div>
                            </b-col>
                            <b-col cols="12">
                                <div class="account animate__animated animate__fadeInUp  animate__delay-1s">{{dataContact.address}}</div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12">
                        <div class="map account animate__animated animate__fadeInUp  animate__delay-1s">
                            <iframe class="map-show" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.3462856816661!2d98.97508059859682!3d18.765701241741787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da31d972a07eeb%3A0x89faf4831b3841dc!2sPHYGITAL%20AGENCY!5e0!3m2!1sen!2sth!4v1610553401313!5m2!1sen!2sth"
                                width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    
        <MenuLeavePage/>
    </div>
</template>

<script>
import Vue from 'vue'
import cursorUrl from '~/assets/image/icon/right.png'
import 'animate.css';


export default {
    transition: 'page', // set our transition with nuxt.js

    async asyncData({store}) {
        if(store.state.setting.length === 0){
            await store.dispatch('fetchSetting')
        }
    },
    data() {
        return {

        }
    },
    computed: {
        dataContact() {
            return this.$store.state.setting.contact
        }
    },
    components: {

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

/* Enter and leave animations can use different */

/* durations and timing functions.              */

.slide-right-enter-active {
    transition: all .3s;
}

/* .slide-right-leave-active {
  transition: all .3s;
} */

.slide-right-enter,
.slide-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

    {
    transform: translateX(10vw);
    opacity: 0;
}
</style>

