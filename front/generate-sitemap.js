const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const baseUrl = 'https://alquevavontade.com'; // Remplacez par l'URL de votre application
const pages = [
  '/',
  '/about',
  '/gallery',
  '/boat',
  '/tour',
  '/eat',
  '/activities',
  '/sleep',
  '/contact',
  '/cancellation_policy',
];

(async () => {
  const stream = new SitemapStream({ hostname: baseUrl });

  pages.forEach((page) => {
    stream.write({ url: page, changefreq: 'weekly', priority: 0.7 });
  });

  stream.end();

  const sitemap = (await streamToPromise(stream)).toString();
  
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
})();