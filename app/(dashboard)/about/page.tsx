import { Heart, Shield, Users, Zap, Database, Award, Globe, Code, Server, Lock, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 px-6 py-3 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up magnetic-hover">
                    <div className="relative w-8 h-8 mr-3">
                        <Image
                            src="/default_logo.png"
                            alt="VitalBlink Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-sm font-bold">About VitalBlink</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
                    One Blink, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-text-shimmer">Full Control</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Discover the story behind VitalBlink and our commitment to transforming healthcare management.
                </p>
            </div>

            {/* Our Story Section */}
            <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 shadow-sm">
                            The Beginning
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            From Frustration to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Innovation</span>
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                                        The Problem
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        As a medical student, I saw paper records, fragmented data, and outdated software slowing care.
                                    </p>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                                        The Solution
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        VitalBlink was created to fix those issues: modern, intuitive software tailored for hospitals.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl border-2 border-blue-200">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                                        <Heart className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Driven by Experience</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Built from real-world experience, VitalBlink focuses on practical, easy-to-use solutions.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white/90 rounded-lg p-4 shadow-sm">
                                            <div className="text-2xl font-bold text-blue-600">26+</div>
                                            <div className="text-sm text-gray-600">Departments Covered</div>
                                        </div>
                                        <div className="bg-white/90 rounded-lg p-4 shadow-sm">
                                            <div className="text-2xl font-bold text-indigo-600">100+</div>
                                            <div className="text-sm text-gray-600">Powerful Features</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-lg text-gray-600 italic">
                                "Healthcare should empower doctors and nurses to focus on patients, not paperwork.
                                That's why we built VitalBlink - to make healthcare technology work for you."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mb-16 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            To empower healthcare facilities worldwide with a complete, secure, and affordable
                            hospital management solution that puts patient care first while maintaining the
                            highest standards of data security and regulatory compliance.
                        </p>
                        <p className="text-gray-700">
                            VitalBlink eliminates the complexity of managing hospital operations by providing
                            an all-in-one platform that healthcare professionals can trust - from patient
                            registration to specialized department workflows, from billing to inventory management.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard number="26+" label="Medical Departments" />
                        <StatCard number="15+" label="Hospital Services" />
                        <StatCard number="100+" label="Features" />
                        <StatCard number="24/7" label="System Uptime" />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        What Drives Us
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Values</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Shield className="h-8 w-8" />}
                        title="Security First"
                        description="Role-based access control, comprehensive audit logging, and secure data management protect sensitive medical information."
                        color="red"
                    />
                    <ValueCard
                        icon={<Heart className="h-8 w-8" />}
                        title="Patient-Centric"
                        description="Every feature designed with patient care in mind, ensuring healthcare providers can focus on what matters most."
                        color="rose"
                    />
                    <ValueCard
                        icon={<Zap className="h-8 w-8" />}
                        title="Innovation"
                        description="Continuously evolving with modern technology and healthcare best practices to meet emerging needs."
                        color="amber"
                    />
                    <ValueCard
                        icon={<Users className="h-8 w-8" />}
                        title="Accessibility"
                        description="One-time purchase model makes enterprise healthcare software accessible to facilities of all sizes."
                        color="cyan"
                    />
                    <ValueCard
                        icon={<Award className="h-8 w-8" />}
                        title="Quality"
                        description="Built with enterprise-grade technologies and rigorous testing to ensure reliability and performance."
                        color="indigo"
                    />
                    <ValueCard
                        icon={<Globe className="h-8 w-8" />}
                        title="Universal"
                        description="Designed for healthcare facilities worldwide with multi-language support and universal data sharing capabilities."
                        color="emerald"
                    />
                </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-16">
                <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-blue-200 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3 shadow-sm border border-blue-200">
                                <Server className="inline h-3 w-3 mr-1" />
                                Technology Platform
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Secure & Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Platform</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <TechStack
                                icon={<Server className="h-6 w-6" />}
                                title="Deployment"
                                technologies={[
                                    'Localhost deployment',
                                    'No internet required',
                                    'Your server, your data',
                                    'Multi-user support',
                                    'Cross-platform compatible'
                                ]}
                                color="blue"
                            />
                            <TechStack
                                icon={<Lock className="h-6 w-6" />}
                                title="Security & Access"
                                technologies={[
                                    'Role-based access control',
                                    'User authentication',
                                    'Secure password management',
                                    'Session management',
                                    'Complete audit logging'
                                ]}
                                color="purple"
                            />
                            <TechStack
                                icon={<Code className="h-6 w-6" />}
                                title="Features & Integration"
                                technologies={[
                                    'Modern web interface',
                                    'PDF report generation',
                                    'Excel data exports',
                                    'Image processing',
                                    'API documentation'
                                ]}
                                color="indigo"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* System Architecture */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        System Architecture
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Key System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Features</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <ArchitectureCard
                        icon={<Database className="h-8 w-8" />}
                        title="Data Management"
                        items={[
                            'Robust database system',
                            'Automatic data management',
                            'Optimized for performance',
                            'Automated backup and restore',
                            'Scalable architecture'
                        ]}
                        color="blue"
                    />
                    <ArchitectureCard
                        icon={<Server className="h-8 w-8" />}
                        title="Application Features"
                        items={[
                            'Modular system architecture',
                            'User authentication & authorization',
                            'Session management',
                            'Real-time communication',
                            'Performance optimization'
                        ]}
                        color="indigo"
                    />
                    <ArchitectureCard
                        icon={<Lock className="h-8 w-8" />}
                        title="Security Features"
                        items={[
                            'Secure data storage',
                            'Role-based access control (RBAC)',
                            'Complete audit logging',
                            'Protection against common threats',
                            'Secure file upload and storage'
                        ]}
                        color="red"
                    />
                    <ArchitectureCard
                        icon={<Activity className="h-8 w-8" />}
                        title="Integration Capabilities"
                        items={[
                            'RESTful API with documentation',
                            'Event notification system',
                            'Third-party integration ready',
                            'Export to PDF, Excel, CSV',
                            'Notification integrations'
                        ]}
                        color="emerald"
                    />
                </div>
            </section>

            {/* Why Choose VitalBlink */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Competitive Advantages
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">VitalBlink?</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <ReasonCard
                        title="Complete Solution"
                        description="Everything you need in one system - from patient registration to specialized departments, billing, inventory, and advanced analytics. No need for multiple disconnected systems."
                        color="blue"
                    />
                    <ReasonCard
                        title="One-Time Purchase"
                        description="No recurring subscription fees. Pay once and own the software forever with lifetime updates. Perfect for budget-conscious healthcare facilities."
                        color="emerald"
                    />
                    <ReasonCard
                        title="Secure & Private"
                        description="Runs locally on your server - all data stays with you. Role-based access control, complete audit trails, and features designed to support healthcare compliance requirements."
                        color="red"
                    />
                    <ReasonCard
                        title="Open & Flexible"
                        description="Full customization capabilities to meet your exact needs. No vendor lock-in, complete control over your data and infrastructure."
                        color="purple"
                    />
                    <ReasonCard
                        title="Easy Deployment"
                        description="Works on Windows, macOS, and Linux. Simple installation with automatic setup. Installer available for Windows with straightforward deployment."
                        color="cyan"
                    />
                    <ReasonCard
                        title="Continuous Improvement"
                        description="Regular updates with new features, security enhancements, and performance improvements. Active development and responsive to healthcare industry needs."
                        color="amber"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to Experience VitalBlink?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                        Join healthcare facilities worldwide using VitalBlink for complete hospital management.
                        One-time purchase — lifetime updates included.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="w-full sm:w-auto group">
                            <Button
                                size="lg"
                                className="text-lg rounded-full bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 w-full font-bold py-6 shadow-xl transition-all duration-300 ripple-effect interactive-card"
                            >
                                View Pricing
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/features" className="w-full sm:w-auto group">
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg rounded-full bg-indigo-500 hover:bg-indigo-400 border-2 border-white text-white w-full font-bold py-6 transition-all duration-300 hover:scale-105 ripple-effect interactive-card"
                            >
                                Explore Features
                                <Activity className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="group relative bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 text-center border-2 border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden hover-lift interactive-card">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">{number}</div>
                <div className="text-sm text-gray-700 font-semibold uppercase tracking-wide">{label}</div>
            </div>
        </div>
    );
}

function ValueCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; iconBg: string; glow: string }> = {
        red: { bg: 'from-red-50 to-orange-50', border: 'border-red-200', icon: 'from-red-500 to-orange-600', iconBg: 'bg-red-100', glow: 'group-hover:shadow-red-500/20' },
        rose: { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', iconBg: 'bg-rose-100', glow: 'group-hover:shadow-rose-500/20' },
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', iconBg: 'bg-amber-100', glow: 'group-hover:shadow-amber-500/20' },
        cyan: { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', iconBg: 'bg-cyan-100', glow: 'group-hover:shadow-cyan-500/20' },
        indigo: { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-blue-600', iconBg: 'bg-indigo-100', glow: 'group-hover:shadow-indigo-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100', glow: 'group-hover:shadow-emerald-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden hover-lift interactive-card`}>
            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

            <div className="relative">
                {/* Icon with animated background */}
                <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        {icon}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function TechStack({ icon, title, technologies, color }: { icon: React.ReactNode; title: string; technologies: string[]; color: string }) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; accent: string }> = {
        blue: { bg: 'bg-white/80', border: 'border-blue-200', icon: 'text-blue-600', accent: 'text-blue-600' },
        purple: { bg: 'bg-white/80', border: 'border-purple-200', icon: 'text-purple-600', accent: 'text-purple-600' },
        indigo: { bg: 'bg-white/80', border: 'border-indigo-200', icon: 'text-indigo-600', accent: 'text-indigo-600' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`${colors.bg} backdrop-blur-sm rounded-2xl p-6 border-2 ${colors.border} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover-lift interactive-card`}>
            <div className="flex items-center gap-2 mb-4">
                <div className={colors.icon}>{icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <ul className="space-y-2">
                {technologies.map((tech, index) => (
                    <li key={index} className="flex items-start text-sm">
                        <CheckCircle className={`h-4 w-4 ${colors.accent} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{tech}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ArchitectureCard({ icon, title, items, color }: { icon: React.ReactNode; title: string; items: string[]; color: string }) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; iconBg: string; accent: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', iconBg: 'bg-blue-100', accent: 'text-blue-600', glow: 'group-hover:shadow-blue-500/20' },
        indigo: { bg: 'from-indigo-50 to-purple-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-purple-600', iconBg: 'bg-indigo-100', accent: 'text-indigo-600', glow: 'group-hover:shadow-indigo-500/20' },
        red: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', icon: 'from-red-500 to-rose-600', iconBg: 'bg-red-100', accent: 'text-red-600', glow: 'group-hover:shadow-red-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100', accent: 'text-emerald-600', glow: 'group-hover:shadow-emerald-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 overflow-hidden hover-lift interactive-card`}>
            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

            <div className="relative">
                {/* Icon with animated background */}
                <div className="relative mb-4 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {icon}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start text-sm">
                            <div className={`${colors.accent} bg-white rounded-full p-1 mr-2 mt-0.5 flex-shrink-0 shadow-sm`}>
                                <CheckCircle className="h-3 w-3" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ReasonCard({ title, description, color }: { title: string; description: string; color: string }) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; iconBg: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', iconBg: 'bg-blue-100', glow: 'group-hover:shadow-blue-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100', glow: 'group-hover:shadow-emerald-500/20' },
        red: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', icon: 'from-red-500 to-rose-600', iconBg: 'bg-red-100', glow: 'group-hover:shadow-red-500/20' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', iconBg: 'bg-purple-100', glow: 'group-hover:shadow-purple-500/20' },
        cyan: { bg: 'from-cyan-50 to-blue-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-blue-600', iconBg: 'bg-cyan-100', glow: 'group-hover:shadow-cyan-500/20' },
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', iconBg: 'bg-amber-100', glow: 'group-hover:shadow-amber-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden hover-lift interactive-card`}>
            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

            <div className="relative">
                <div className={`w-1 h-12 bg-gradient-to-b ${colors.icon} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
