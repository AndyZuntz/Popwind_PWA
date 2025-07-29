import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';  // ✅ Needed for absolute path resolution

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: path.resolve('/Users/andrewzuntz/Documents/GitHub/PWA-Distro'),  // ✅ Custom output folder
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: path.resolve('/Users/andrewzuntz/Documents/GitHub/PWA-Distro/sw.js'),  // ✅ SW output
        globDirectory: path.resolve('/Users/andrewzuntz/Documents/GitHub/PWA-Distro'),  // ✅ SW glob root
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
        globIgnores: ['**/staticwebapp.config.json']  // ✅ Keep your ignore rule
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
});