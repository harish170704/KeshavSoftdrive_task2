import { defineConfig } from 'vite';
import fs from 'fs';
import nunjucks from 'nunjucks';

export default defineConfig({
  build: {
    outDir: 'dist', // compiled HTML goes here
    rollupOptions: {
      input: 'src/templates/index.njk',
      output: {
        entryFileNames: 'index.html'
      }
    }
  },
  plugins: [{
    name: 'nunjucks-render',
    buildStart() {
      // read template
      const template = fs.readFileSync('src/templates/index.njk', 'utf-8');
      // render with values
      const rendered = nunjucks.renderString(template, { engine: 'Nunjucks', bundler: 'Vite' });
      // save to dist folder
      fs.writeFileSync('dist/index.html', rendered);
    }
  }]
});
