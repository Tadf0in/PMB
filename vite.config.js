import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs-extra';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
    assetsDir: 'assets',
  },
  plugins: [
    react(),
    {
      name: 'custom-build-end',
      writeBundle: async () => {
        // CNAME
        await fs.writeFile(path.join(__dirname, 'docs', 'CNAME'), 'polytech-montblanc.fr');

        // 404.html
        await fs.copyFile(
          path.join(__dirname, 'docs', 'index.html'),
          path.join(__dirname, 'docs', '404.html')
        );
      }
    }
  ],
  base: './',
});
