import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const hostname = 'https://www.limpiezaslican.es'; 
const outputDir = 'dist'; 
const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/servicios', changefreq: 'monthly', priority: 0.9 },
    { url: '/servicios/limpieza-y-lavado-de-vehiculos', changefreq: 'monthly', priority: 0.9 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
    { url: '/nosotros', changefreq: 'monthly', priority: 0.7 },
    // { url: '/legal/politica-privacidad', changefreq: 'yearly', priority: 0.5 },
    // { url: '/legal/aviso-legal', changefreq: 'yearly', priority: 0.5 },
    // { url: '/legal/politica-cookies', changefreq: 'yearly', priority: 0.5 },
];

const generateSitemap = async () => {
    try {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const sitemapPath = join(__dirname, outputDir, 'sitemap.xml');
        
        const sitemapStream = new SitemapStream({ hostname });
        
        links.forEach(link => {
            sitemapStream.write(link);
        });
        sitemapStream.end();

        const sitemapContent = await streamToPromise(sitemapStream);
        
        writeFileSync(sitemapPath, sitemapContent);

        console.log(`✅ Sitemap.xml generado exitosamente en: ${sitemapPath}`);
        
    } catch (error) {
        console.error('❌ Error fatal al generar el sitemap:', error);
        process.exit(1); 
    }
};

generateSitemap();