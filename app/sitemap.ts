import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vitalblink.com';
    const currentDate = new Date();

    // Static pages with optimized priorities
    const staticPages = [
        { route: '', priority: 1.0, changeFreq: 'daily' as const },
        { route: '/pricing', priority: 1.0, changeFreq: 'weekly' as const },
        { route: '/trial', priority: 0.9, changeFreq: 'weekly' as const },
        { route: '/features', priority: 0.9, changeFreq: 'weekly' as const },
        { route: '/blog', priority: 0.9, changeFreq: 'daily' as const },
        { route: '/departments', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/documentation', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/setup', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/vitalsphere', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/screenshots', priority: 0.7, changeFreq: 'monthly' as const },
        { route: '/testimonials', priority: 0.7, changeFreq: 'monthly' as const },
        { route: '/support', priority: 0.7, changeFreq: 'monthly' as const },
        { route: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
        { route: '/about', priority: 0.6, changeFreq: 'monthly' as const },
        { route: '/requirements', priority: 0.6, changeFreq: 'monthly' as const },
        { route: '/terms', priority: 0.4, changeFreq: 'yearly' as const },
        { route: '/privacy', priority: 0.4, changeFreq: 'yearly' as const },
    ].map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: currentDate,
        changeFrequency: page.changeFreq,
        priority: page.priority,
    }));

    // Dynamic blog posts from blog.ts
    const blogPosts = getAllBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...blogPosts];
}
