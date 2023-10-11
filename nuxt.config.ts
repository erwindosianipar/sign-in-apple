// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    type: "text/javascript",
                    src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                    // @ts-ignore
                    body: true,
                },
            ],
        },
    },
    devtools: {
        enabled: false,
    },
    css: [
        "~/assets/css/main.css",
        "~/assets/css/fonts.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            clientID: process.env.CLIENT_ID,
            redirectURI: process.env.REDIRECT_URI,
        },
    },
})
