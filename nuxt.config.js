export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'phygital',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/custom.scss',
        '~/assets/scss/agency.scss',
        '~/assets/scss/contact.scss',
        '~/assets/scss/works.scss',

    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/transition.js', '~/plugins/axios'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    axios: {
        baseURL: `https://api.example.com/`,
        proxyHeaders: false,
        credentials: false
    },
    sitemap: {
        hostname: "http://phygital-test.surge.sh/",
        gzip: true
    },
    googleAnalytics: {
        id: "UA-12301-2"
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        "@nuxtjs/google-analytics",
        '@nuxtjs/axios',
        "@nuxtjs/pwa",
        "@nuxtjs/sitemap",
        '@nuxtjs/style-resources', ['nuxt-lazy-load', {
            // These are the default values
            images: false,
            videos: true,
            audios: true,
            iframes: true,
            native: false,
            polyfill: true,
            directiveOnly: false,

            // Default image must be in the static folder


            // To remove class set value to false
            // loadingClass: 'isLoading',
            // loadedClass: 'isLoaded',
            // appendClass: 'lazyLoad',

            observerConfig: {
                // See IntersectionObserver documentation
            }
        }],
        [
            "nuxt-imagemin",
            {
                optipng: { optimizationLevel: 5 },
                gifsicle: { optimizationLevel: 2 }
            }
        ]
    ],

    bootstrapVue: {
        // Add the icon plugin to the `componentsPlugins` array
        icons: true
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        analyze: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '.',
            name: undefined,
            cacheGroups: {}
        }
    },

    styleResources: {
        scss: [
            './assets/scss/*.scss',
        ]
    },
    pageTransition: {
        name: 'index',
        mode: 'out-in'
    },
    optimizedImages: {
        inlineImageLimit: 1000,
        imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
        responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'img-loader',
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    },
    axios: {
        // proxy: true
        baseURL: 'http://127.0.0.1/api/v1',
    }
}