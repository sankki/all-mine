import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ command, mode }) => {
    return defineConfig({
        plugins: [vue()],
        resolve: {
            conditions: [],
            extensions:['.js','.json', '.vue']  
        },
        build: {
            lib: {
                entry: path.resolve(__dirname, './index.js'),
                name: 'allmine',
            },
            target: 'modules',
            outDir: path.resolve(__dirname, '../lib'),
            assetsInlineLimit: 0,
            cssCodeSplit: true,
            minify: 'terser',
            write: true,
            emptyOutDir: true,
            brotliSize: true,
            chunkSizeWarningLimit: 500
        },
        server: {
            host: 'localhost',
            cors: true,
            open: true,
            port: '9000',
            strictPort: false,
            force: true,
        },
    })
}