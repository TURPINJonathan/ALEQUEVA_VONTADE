const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const baseUrl = 'https://alquevavontade.com'; // Remplacez par l'URL de votre application
const languages = ['pt', 'fr', 'en']; // Liste des langues disponibles
const pages = [
  '/',
  '/about',
  '/gallery',
  '/boat',
  '/tour',
  '/activities',
  '/contact',
  '/cancellation_policy',
];

(async () => {
  const stream = new SitemapStream({ hostname: baseUrl });

  pages.forEach((page) => {
    languages.forEach((language) => {
      stream.write({ url: `/${language}${page}`, changefreq: 'weekly', priority: 0.7 });
    })
  });

  stream.end();

  const sitemap = (await streamToPromise(stream)).toString();
  
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
})();