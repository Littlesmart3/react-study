import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';
import setAppEnv from './script/env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: +process.env.PORT,
    // 是否开启 https
    https: false
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 支持内联 JavaScript
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src/render/') // src/render 路径
    }
  },
  define: {
    __APP_ENV__: setAppEnv(process.env)
  }
});
