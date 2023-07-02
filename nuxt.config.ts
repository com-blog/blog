// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'
import {ViteConfig} from "@nuxt/schema";

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    // @ts-ignore
    ssr: false,
    app: {
        baseURL: "/blog",
        head: {
            title: "erin-blog",
            htmlAttrs: {
                lang: "en"
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    hooks: {
        'vite:extendConfig': (config: ViteConfig) => {
            // @ts-ignore
            config.plugins.push(
                vuetify({
                    styles: { configFile: resolve('./assets/scss/font.scss') },
                })
            )
        },
    },
    // Prevent warning message: points to missing source files
    sourcemap: { server: true, client: false },
    routeRules: {
        '/': { redirect: '/home/' },
    },
})
