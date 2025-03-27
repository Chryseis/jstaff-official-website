import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: './dist/stats.html', // 输出可视化报告的文件路径
            open: true, // 构建完成后自动在浏览器中打开报告
        }),
        terser(),
    ],
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
