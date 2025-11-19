import {
    Mail, MessageCircle, Phone, MapPin, Clock, Send,
    HelpCircle, Book, Shield, Zap, ArrowRight, CheckCircle,
    HeadphonesIcon, Globe, FileQuestion, ExternalLink
} from 'lucide-react';

export default function SupportPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    We're Here to Help
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                    💬 Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-text-shimmer">Support</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Need assistance with VitalBlink? Our support team is ready to help you with any questions or issues.
                </p>
            </div>

            {/* Contact Methods */}
            <section className="mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <ContactCard
                        icon={<Mail className="h-8 w-8" />}
                        title="Email Support"
                        description="Send us an email and we'll respond within 24 hours"
                        contact="support@vitalblink.com"
                        action="Send Email"
                        color="blue"
                    />
                    <ContactCard
                        icon={<MessageCircle className="h-8 w-8" />}
                        title="Live Chat"
                        description="Chat with our support team in real-time"
                        contact="Available Mon-Fri, 9AM-6PM"
                        action="Start Chat"
                        color="green"
                    />
                    <ContactCard
                        icon={<Book className="h-8 w-8" />}
                        title="Documentation"
                        description="Browse our comprehensive documentation"
                        contact="Guides, tutorials, and FAQs"
                        action="View Docs"
                        color="purple"
                    />
                </div>
            </section>

            {/* Support Categories */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Help You?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Choose a category to get help with specific topics
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SupportCategory
                        icon={<Zap className="h-6 w-6" />}
                        title="Installation & Setup"
                        description="Help with installing and configuring VitalBlink"
                        topics={['Installation issues', 'Initial setup', 'Configuration', 'Network setup']}
                        color="amber"
                    />
                    <SupportCategory
                        icon={<Shield className="h-6 w-6" />}
                        title="Account & Security"
                        description="User accounts, permissions, and security"
                        topics={['User management', 'Password reset', 'Permissions', 'Security settings']}
                        color="red"
                    />
                    <SupportCategory
                        icon={<FileQuestion className="h-6 w-6" />}
                        title="Features & Usage"
                        description="Learn how to use specific features"
                        topics={['Patient management', 'Departments', 'Billing', 'Reports']}
                        color="indigo"
                    />
                    <SupportCategory
                        icon={<Globe className="h-6 w-6" />}
                        title="Technical Issues"
                        description="Troubleshooting and bug reports"
                        topics={['Error messages', 'Performance', 'Data issues', 'Bugs']}
                        color="rose"
                    />
                    <SupportCategory
                        icon={<HeadphonesIcon className="h-6 w-6" />}
                        title="Training & Tutorials"
                        description="Learn how to use VitalBlink effectively"
                        topics={['Video tutorials', 'Training materials', 'Best practices', 'Tips & tricks']}
                        color="cyan"
                    />
                    <SupportCategory
                        icon={<CheckCircle className="h-6 w-6" />}
                        title="Updates & Licensing"
                        description="Software updates and license management"
                        topics={['Update installation', 'License activation', 'Version info', 'Changelog']}
                        color="emerald"
                    />
                </div>
            </section>

            {/* Contact Form */}
            <section className="mb-16">
                <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-indigo-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3 animate-fade-in-up magnetic-hover">
                                <Send className="inline h-3 w-3 mr-1" />
                                Get in Touch
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                                Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Message</span>
                            </h2>
                            <p className="text-gray-600 animate-fade-in-up animation-delay-400">
                                Fill out the form below and we'll get back to you as soon as possible
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                                    placeholder="Brief description of your inquiry"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>
                                <select className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none">
                                    <option>General Inquiry</option>
                                    <option>Installation & Setup</option>
                                    <option>Technical Support</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                    <option>Bug Report</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none"
                                    placeholder="Please describe your issue or question in detail..."
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    required
                                />
                                <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                                    I agree to the privacy policy and consent to VitalBlink using my information to respond to my inquiry. *
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ripple-effect interactive-card"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Links</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <QuickLink
                        icon={<Book className="h-6 w-6" />}
                        title="Documentation"
                        description="Browse our complete documentation"
                        link="/documentation"
                        color="blue"
                    />
                    <QuickLink
                        icon={<HelpCircle className="h-6 w-6" />}
                        title="FAQs"
                        description="Common questions and answers"
                        link="/documentation#faqs"
                        color="purple"
                    />
                    <QuickLink
                        icon={<FileQuestion className="h-6 w-6" />}
                        title="Feature Requests"
                        description="Suggest new features"
                        link="/features"
                        color="green"
                    />
                    <QuickLink
                        icon={<ExternalLink className="h-6 w-6" />}
                        title="Community Forum"
                        description="Join our community discussions"
                        link="#"
                        color="orange"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-indigo-700/90 to-cyan-600/90 rounded-3xl backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-4 animate-text-shimmer">
                        Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Started?</span>
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Experience the power of VitalBlink Hospital Management System
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="/pricing" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl text-center inline-flex items-center justify-center gap-2 ripple-effect interactive-card">
                            View Pricing
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="/documentation" className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center inline-flex items-center justify-center gap-2 border-2 border-white/20 ripple-effect interactive-card">
                            Read Documentation
                            <Book className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactCard({ icon, title, description, contact, action, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    contact: string;
    action: string;
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; button: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700', glow: 'group-hover:shadow-blue-500/20' },
        green: { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', icon: 'from-green-500 to-emerald-600', button: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700', glow: 'group-hover:shadow-green-500/20' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', button: 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700', glow: 'group-hover:shadow-purple-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 text-center hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${color === 'blue' ? '0.1' : color === 'green' ? '0.2' : '0.3'}s` }}>
            <div className="relative mb-6 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            <p className="text-sm font-semibold text-gray-700 mb-6">{contact}</p>

            <button className={`${colors.button} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full ripple-effect`}>
                {action}
            </button>
        </div>
    );
}

function SupportCategory({ icon, title, description, topics, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    topics: string[];
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; accent: string; glow: string }> = {
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', accent: 'text-amber-600', glow: 'group-hover:shadow-amber-500/20' },
        red: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', icon: 'from-red-500 to-rose-600', accent: 'text-red-600', glow: 'group-hover:shadow-red-500/20' },
        indigo: { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-blue-600', accent: 'text-indigo-600', glow: 'group-hover:shadow-indigo-500/20' },
        rose: { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', accent: 'text-rose-600', glow: 'group-hover:shadow-rose-500/20' },
        cyan: { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', accent: 'text-cyan-600', glow: 'group-hover:shadow-cyan-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', accent: 'text-emerald-600', glow: 'group-hover:shadow-emerald-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 cursor-pointer hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 6 * 0.1}s` }}>
            <div className="relative mb-4 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>

            <ul className="space-y-2">
                {topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-700">
                        <div className={`${colors.accent} bg-white rounded-full p-0.5 mr-2 flex-shrink-0 shadow-sm`}>
                            <CheckCircle className="h-3 w-3" />
                        </div>
                        <span>{topic}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function QuickLink({ icon, title, description, link, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', glow: 'group-hover:shadow-blue-500/20' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', glow: 'group-hover:shadow-purple-500/20' },
        green: { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', icon: 'from-green-500 to-emerald-600', glow: 'group-hover:shadow-green-500/20' },
        orange: { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'from-orange-500 to-amber-600', glow: 'group-hover:shadow-orange-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <a href={link} className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 block`}>
            <div className="relative mb-4 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

            <div className="mt-4 flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        </a>
    );
}
