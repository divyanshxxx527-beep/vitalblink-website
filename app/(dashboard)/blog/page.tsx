import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Healthcare Blog | VitalBlink Insights & Best Practices',
    description: 'Expert insights on hospital management, healthcare technology, patient data security, and digital transformation. Stay updated with the latest healthcare IT trends and best practices.',
    keywords: 'healthcare blog, hospital management software, medical technology, patient data security, healthcare IT, digital transformation, telemedicine, AI healthcare, hospital efficiency, healthcare compliance',
    openGraph: {
        title: 'VitalBlink Healthcare Blog - Expert Insights & Industry Trends',
        description: 'Stay informed with expert articles on healthcare technology, hospital management, and digital transformation.',
        type: 'website',
        url: 'https://vitalblink.com/blog',
        siteName: 'VitalBlink',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VitalBlink Healthcare Blog',
        description: 'Expert insights on healthcare technology and hospital management',
    },
    alternates: {
        canonical: 'https://vitalblink.com/blog',
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        name: 'VitalBlink Healthcare Blog',
                        description: 'Expert insights on hospital management, healthcare technology, and digital transformation',
                        url: 'https://vitalblink.com/blog',
                        publisher: {
                            '@type': 'Organization',
                            name: 'VitalBlink',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://vitalblink.com/logo.png',
                            },
                        },
                    }),
                }}
            />

            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                    Healthcare Insights
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="text-gray-900">VitalBlink</span> <span className="text-indigo-600">Blog</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Expert insights on healthcare technology, hospital management, patient data security, and digital transformation. Stay informed with the latest industry trends and best practices.
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post) => (
                    <article 
                        key={post.id} 
                        className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
                        itemScope
                        itemType="https://schema.org/BlogPosting"
                    >
                        <meta itemProp="datePublished" content={post.date} />
                        <meta itemProp="author" content={post.author} />
                        
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                                {post.category}
                            </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2" itemProp="headline">
                            <Link href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <User className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="inline-flex items-center text-xs text-gray-500">
                                        <Tag className="h-3 w-3 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <Link href={`/blog/${post.id}`}>
                            <Button variant="outline" size="sm" className="w-full group-hover:bg-indigo-50 group-hover:border-indigo-300">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </article>
                ))}
            </div>

            {/* Newsletter Signup */}
            <section className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Stay Updated
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for the latest healthcare technology insights, product updates, and industry best practices.
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
                        Subscribe
                    </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    No spam, unsubscribe at any time.
                </p>
            </section>
        </main>
    );
}