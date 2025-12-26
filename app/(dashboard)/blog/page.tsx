import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog - VitalBlink Healthcare Insights',
    description: 'Stay updated with the latest healthcare technology trends, hospital management tips, and VitalBlink updates.',
    keywords: 'healthcare blog, hospital management tips, medical technology, healthcare software updates',
};

export default function BlogPage() {
    const posts = [
        {
            id: 'digital-transformation-healthcare',
            title: 'Digital Transformation in Healthcare: Why Local Solutions Matter',
            excerpt: 'Explore why local hospital management systems provide better security and control compared to cloud-based alternatives.',
            date: '2025-11-20',
            readTime: '5 min read',
            author: 'VitalBlink Team',
            category: 'Technology',
        },
        {
            id: 'patient-data-security',
            title: 'Patient Data Security: Best Practices for Healthcare Facilities',
            excerpt: 'Learn essential strategies to protect sensitive patient information and maintain compliance with healthcare regulations.',
            date: '2025-11-15',
            readTime: '7 min read',
            author: 'Dr. Sarah Johnson',
            category: 'Security',
        },
        {
            id: 'hospital-efficiency-tips',
            title: '10 Tips to Improve Hospital Efficiency with Digital Tools',
            excerpt: 'Practical advice for healthcare administrators looking to streamline operations and reduce administrative burden.',
            date: '2025-11-10',
            readTime: '6 min read',
            author: 'Mike Chen',
            category: 'Management',
        },
        {
            id: 'ai-healthcare-future',
            title: 'The Future of AI in Healthcare Management',
            excerpt: 'How artificial intelligence is revolutionizing hospital operations, from predictive analytics to automated workflows.',
            date: '2025-11-05',
            readTime: '8 min read',
            author: 'Dr. Alex Rivera',
            category: 'Innovation',
        },
        {
            id: 'choosing-hospital-software',
            title: 'How to Choose the Right Hospital Management Software',
            excerpt: 'A comprehensive guide to evaluating and selecting healthcare software that meets your facility\'s unique needs.',
            date: '2025-10-30',
            readTime: '10 min read',
            author: 'VitalBlink Team',
            category: 'Guide',
        },
        {
            id: 'telemedicine-integration',
            title: 'Integrating Telemedicine with Traditional Hospital Systems',
            excerpt: 'Strategies for seamlessly incorporating telemedicine capabilities into existing hospital management workflows.',
            date: '2025-10-25',
            readTime: '6 min read',
            author: 'Dr. Emily Davis',
            category: 'Telemedicine',
        },
    ];

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                    Healthcare Insights
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="text-gray-900">VitalBlink</span> <span className="text-indigo-600">Blog</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Stay informed with the latest trends in healthcare technology, management best practices, and updates from the VitalBlink team.
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post) => (
                    <article key={post.id} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                                {post.category}
                            </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <User className="h-4 w-4 mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                        </div>
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