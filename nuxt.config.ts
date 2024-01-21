// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
import BasicAuth from 'nuxt-basic-authentication-module'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  modules: [[BasicAuth, { enabled: true }]],
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    }
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  css: ['@/assets/main.scss', 'vue-toast-notification/dist/theme-default.css'],
  runtimeConfig: {
    basicAuth: {
      productionDomains: [
        // 'example-stage.vercel.app', // 本番環境ドメイン endWithマッチ
      ],
      pairs: {
        // admin: process.env.BASIC_ADMIN_PIN as string, // Passwords
      }
    }
  }
})
