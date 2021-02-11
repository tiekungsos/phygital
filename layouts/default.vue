<template>
    <div :style="{'cursor' :`url(${cursorDotUrl}) 25 15 ,auto`}">
        <Nuxt />
    </div>
</template>


<script>
import cursorDotUrl from '~/assets/image/icon/dot.png'

export default {
    data() {
        return {
            cursorDotUrl
        }
    },
    head() {

        console.log(this.$store.state.setting.meta);

        return {
          title: this.$store.state.setting.meta.title,
          meta: [
            { name: 'twitter:title', content: this.$store.state.setting.meta.title},
            { name: 'twitter:description', content: this.$store.state.setting.meta.description},
            { name: 'twitter:image', content: this.$store.state.setting.meta.logo},
            { name: 'description', content: this.$store.state.setting.meta.description},
            { name: 'description', content: this.$store.state.setting.meta.description},
            { name: 'content', content: this.$store.state.setting.meta.description},

          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: this.$store.state.setting.meta.icon }
          ]
        }
    },
    methods: {

    },

}
</script>

<style>
@font-face {
    font-family: "Axis";
    src: local("font"), url(~assets/font/Axis.woff) format("woff");
}

@font-face {
    font-family: "DB Adman X";
    src: local("font"), url(~assets/font/DBAdmanX.woff) format("woff");
}

@font-face {
    font-family: "Prompt";
    src: local("font"), url(~assets/font/Prompt-Regular.woff) format("woff");
}

@font-face {
    font-family: "Prompt-light";
    src: local("font"), url(~assets/font/Prompt-Light.woff) format("woff");
}

@font-face {
    font-family: "Prompt-MediumItalic";
    src: local("font"), url(~assets/font/Prompt-MediumItalic.woff) format("woff");
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, Axis;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    background-color: #1C2C58;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
