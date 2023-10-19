import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [vue()],
    root: './client',
    publicDir: './static',
    build: {
        outDir: './public'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    }
})