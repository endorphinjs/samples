import { defineConfig } from 'vite';
import { endorphin } from '@endorphinjs/vite-plugin';

export default defineConfig({
    plugins: [
        endorphin({ exclude: './index.html' })
    ],

    server: {
        port: 3200
    }
})