<template>
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
</template>
