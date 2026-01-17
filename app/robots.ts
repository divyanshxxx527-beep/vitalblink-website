import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/affiliate/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/affiliate/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/affiliate/'],
            },
        ],
        sitemap: 'https://vitalblink.com/sitemap.xml',
        host: 'https://vitalblink.com',
    };
}
