import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(fileURLToPath(new URL('./src', import.meta.url))),
            '@components': path.resolve(fileURLToPath(new URL('./src/components', import.meta.url))),
            '@assets': path.resolve(fileURLToPath(new URL('./src/assets', import.meta.url))),
            '@store': path.resolve(fileURLToPath(new URL('./src/store', import.meta.url))),
            '@views': path.resolve(fileURLToPath(new URL('./src/views', import.meta.url))),
            '@router': path.resolve(fileURLToPath(new URL('./src/router', import.meta.url)))
        }
    }
});
