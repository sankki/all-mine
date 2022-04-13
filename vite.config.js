import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ command, mode }) => {
    return defineConfig({
        plugins: [
            vue()
        ],
        resolve: {
            extensions:['.js','.json', '.vue']  
        },
        build: {
            resolve: {
                extensions:['.js','.json', '.vue']  
            },
            lib: {
                entry: path.resolve(__dirname, './package/index.js'),
                name: 'AllMine',
            },
            outDir: path.resolve(__dirname, './lib'),
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue'
                    },
                },
            },
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
    })
}