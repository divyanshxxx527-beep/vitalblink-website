import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getBlogPostById, getRelatedPosts, generateBlogStructuredData } from '@/lib/blog';
import { ShareButton } from '@/components/share-button';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getBlogPostById(resolvedParams.id);

    if (!post) {
        return {
            title: 'Blog Post Not Found - VitalBlink',
            description: 'The requested blog post could not be found.',
        };
    }

    return {
        title: `${post.title} | VitalBlink Healthcare Blog`,
        description: post.excerpt,
        keywords: `${post.tags.join(', ')}, ${post.category}, healthcare, hospital management, VitalBlink`,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            url: `https://vitalblink.com/blog/${post.id}`,
            siteName: 'VitalBlink',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://vitalblink.com/blog/${post.id}`,
        },
    };
}

export function generateStaticParams() {
    return [
        { id: 'digital-transformation-healthcare' },
        { id: 'patient-data-security' },
        { id: 'hospital-efficiency-tips' },
        { id: 'ai-healthcare-future' },
        { id: 'choosing-hospital-software' },
        { id: 'telemedicine-integration' },
    ];
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const post = getBlogPostById(resolvedParams.id);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.id, 2);
    const structuredData = generateBlogStructuredData(post);

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div className="mb-8">
                <Link href="/blog">
                    <Button variant="outline" className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Button>
                </Link>
            </div>
            <header className="mb-8" itemScope itemType="https://schema.org/BlogPosting">
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="dateModified" content={post.date} />
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                        {post.category}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight" itemProp="headline">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                    <div className="flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        <span itemProp="author">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                    <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6" itemProp="description">
                    {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>
            <article className="prose prose-lg prose-indigo max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-gray-700 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-semibold prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            <section className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600 font-medium">Share this article:</span>
                        <ShareButton title={post.title} excerpt={post.excerpt} />
                    </div>
                    <Link href="/blog">
                        <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
                            Read More Articles
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
            {relatedPosts.length > 0 && (
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {relatedPosts.map((relatedPost) => (
                            <article key={relatedPost.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
                                <div className="mb-3">
                                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded">
                                        {relatedPost.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    <Link href={`/blog/${relatedPost.id}`} className="hover:text-indigo-600 transition-colors">
                                        {relatedPost.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {relatedPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <span className="text-indigo-600 font-medium">Read →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
