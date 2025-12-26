import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vitalblink.com';
    const currentDate = new Date();

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/features',
        '/pricing',
        '/documentation',
        '/requirements',
        '/setup',
        '/departments',
        '/screenshots',
        '/testimonials',
        '/support',
        '/contact',
        '/blog',
        '/terms',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : route === '/blog' ? 0.9 : 0.8,
    }));

    // Blog posts
    const blogPosts = [
        'digital-transformation-healthcare',
        'patient-data-security',
        'hospital-efficiency-tips',
        'ai-healthcare-future',
        'choosing-hospital-software',
        'telemedicine-integration',
    ].map((id) => ({
        url: `${baseUrl}/blog/${id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPosts];
}
