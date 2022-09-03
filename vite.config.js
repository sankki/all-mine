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
            lib: 
                mode === 'mini' ? 
                {
                    entry: path.resolve(__dirname, './package/mini-index.js'),
                    name: 'AllMine',
                } : 
                {
                    entry: path.resolve(__dirname, './package/index.js'),
                    name: 'AllMine',
                },
            outDir:  
                mode === 'mini' ? 
                path.resolve(__dirname, './mini-lib') : 
                path.resolve(__dirname, './lib'),
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