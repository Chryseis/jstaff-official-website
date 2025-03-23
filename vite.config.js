import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // 允许使用 JS 变量
            },
        },
    },
});
