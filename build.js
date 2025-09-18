import fs from 'fs';
import nunjucks from 'nunjucks';

nunjucks.configure('src/templates', { autoescape: true });

const pages = ['home.njk', 'about.njk', 'contact.njk'];

if (!fs.existsSync('dist')) fs.mkdirSync('dist');

pages.forEach(page => {
  const rendered = nunjucks.render(page);
  // Convert home.njk to index.html
  const outputFile = page === 'home.njk' ? 'index.html' : page.replace('.njk', '.html');
  fs.writeFileSync(`dist/${outputFile}`, rendered);
  console.log(`✅ Built ${page}`);
});
