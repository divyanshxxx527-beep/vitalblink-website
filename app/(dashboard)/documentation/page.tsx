import {
    Book, FileText, Users, Shield, Database, Activity, Settings,
    Zap, Cloud, Lock, CheckCircle, AlertCircle, Info, Code,
    Terminal, Stethoscope, Heart, Building2, Pill, ArrowRight
} from 'lucide-react';

export default function DocumentationPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    Complete Guide
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                    📚 VitalBlink <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-text-shimmer">Documentation</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Comprehensive guide to installing, configuring, and using the VitalBlink Hospital Management System
                </p>
            </div>

            {/* Quick Start Guide */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up magnetic-hover">
                        Getting Started
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                        Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Start Guide</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <QuickStartCard
                        icon={<Cloud className="h-8 w-8" />}
                        step="1"
                        title="Download & Install"
                        description="Download the installer and run the setup wizard on your Windows server"
                        color="blue"
                    />
                    <QuickStartCard
                        icon={<Settings className="h-8 w-8" />}
                        step="2"
                        title="Initial Configuration"
                        description="Set up hospital name, admin credentials, and basic settings"
                        color="purple"
                    />
                    <QuickStartCard
                        icon={<Users className="h-8 w-8" />}
                        step="3"
                        title="Add Users & Departments"
                        description="Create user accounts with roles and configure departments"
                        color="cyan"
                    />
                    <QuickStartCard
                        icon={<Heart className="h-8 w-8" />}
                        step="4"
                        title="Start Using"
                        description="Begin managing patients, appointments, and hospital operations"
                        color="rose"
                    />
                </div>
            </section>

            {/* Main Documentation Sections */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Sections</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <DocSection
                        icon={<Building2 className="h-8 w-8" />}
                        title="System Requirements"
                        description="Hardware and software requirements for running VitalBlink"
                        topics={[
                            'Windows Server 2016 or later / Windows 10/11',
                            'Minimum 4GB RAM (8GB recommended)',
                            'Node.js runtime (included in installer)',
                            'Network connectivity for multi-user access',
                            'Web browser (Chrome, Firefox, Edge)'
                        ]}
                        color="indigo"
                    />

                    <DocSection
                        icon={<Zap className="h-8 w-8" />}
                        title="Installation Guide"
                        description="Step-by-step installation and setup instructions"
                        topics={[
                            'Download installer from official website',
                            'Run installer as Administrator',
                            'Follow setup wizard prompts',
                            'Configure port and network settings',
                            'Launch VitalBlink from Start Menu'
                        ]}
                        color="purple"
                    />

                    <DocSection
                        icon={<Users className="h-8 w-8" />}
                        title="User Management"
                        description="Managing users, roles, and permissions"
                        topics={[
                            'Create user accounts with email and password',
                            'Assign roles: Admin, Doctor, Nurse, Staff, Receptionist',
                            'Set department assignments',
                            'Configure role-based permissions',
                            'Manage user access and sessions'
                        ]}
                        color="cyan"
                    />

                    <DocSection
                        icon={<Stethoscope className="h-8 w-8" />}
                        title="Patient Management"
                        description="Managing patient records and information"
                        topics={[
                            'Register new patients with personal details',
                            'Search and view patient records',
                            'Record medical history and visits',
                            'Schedule appointments',
                            'Track patient visits across departments'
                        ]}
                        color="emerald"
                    />

                    <DocSection
                        icon={<Activity className="h-8 w-8" />}
                        title="Department Operations"
                        description="Using department-specific features"
                        topics={[
                            'Access department dashboards',
                            'Record department-specific examinations',
                            'Use specialized medical tools (ECG, imaging)',
                            'Manage department inventory',
                            'Generate department reports'
                        ]}
                        color="amber"
                    />

                    <DocSection
                        icon={<FileText className="h-8 w-8" />}
                        title="Billing & Invoicing"
                        description="Financial management and billing"
                        topics={[
                            'Create invoices for services',
                            'Process insurance claims',
                            'Track payments and payment history',
                            'Generate financial reports',
                            'Export invoices as PDF'
                        ]}
                        color="rose"
                    />

                    <DocSection
                        icon={<Database className="h-8 w-8" />}
                        title="Inventory Management"
                        description="Managing hospital supplies and equipment"
                        topics={[
                            'Track medical supplies and medications',
                            'Monitor stock levels and expiry dates',
                            'Create purchase orders',
                            'Manage suppliers and vendors',
                            'Generate inventory reports'
                        ]}
                        color="violet"
                    />

                    <DocSection
                        icon={<Shield className="h-8 w-8" />}
                        title="Security & Backup"
                        description="Data security and backup procedures"
                        topics={[
                            'Role-based access control (RBAC)',
                            'Audit logging of all actions',
                            'Automated daily backups',
                            'Manual backup and restore',
                            'Data encryption and security'
                        ]}
                        color="red"
                    />
                </div>
            </section>

            {/* Technical Information */}
            <section className="mb-16">
                <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-purple-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3 shadow-sm border border-purple-200">
                                <Terminal className="inline h-3 w-3 mr-1" />
                                Technical Specifications
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Architecture</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <TechCard
                                title="Backend Technology"
                                items={[
                                    'Node.js with Express.js framework',
                                    'SQLite database for local storage',
                                    'RESTful API architecture',
                                    'Socket.IO for real-time updates',
                                    'Secure session management'
                                ]}
                            />
                            <TechCard
                                title="Frontend Technology"
                                items={[
                                    'EJS templating engine',
                                    'Responsive Bootstrap UI',
                                    'Modern JavaScript (ES6+)',
                                    'AJAX for dynamic updates',
                                    'Progressive Web App features'
                                ]}
                            />
                            <TechCard
                                title="Security Features"
                                items={[
                                    'bcrypt password hashing',
                                    'Session-based authentication',
                                    'CSRF protection',
                                    'Input sanitization',
                                    'Complete audit logging'
                                ]}
                            />
                            <TechCard
                                title="Deployment"
                                items={[
                                    'Standalone Windows application',
                                    'No internet required',
                                    'Local network access',
                                    'Multi-user support',
                                    'Automatic startup option'
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Questions</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    <FAQCard
                        question="Do I need internet to use VitalBlink?"
                        answer="No! VitalBlink runs completely on your local server without requiring internet. It's perfect for hospitals that want to keep their data secure and private."
                    />
                    <FAQCard
                        question="How many users can access the system simultaneously?"
                        answer="VitalBlink supports unlimited concurrent users. The actual number depends on your server hardware. A typical server can easily handle 50-100+ simultaneous users."
                    />
                    <FAQCard
                        question="Is my patient data secure?"
                        answer="Yes! All data is stored locally on your server with role-based access control, password encryption, and complete audit logging. No data is sent to external servers."
                    />
                    <FAQCard
                        question="Can I customize the system for my hospital?"
                        answer="VitalBlink includes extensive customization options including hospital name, logo, departments, user roles, and forms. Advanced customization requires technical knowledge."
                    />
                    <FAQCard
                        question="What happens if my server crashes?"
                        answer="VitalBlink includes automated daily backups. You can restore your data from these backups. We recommend keeping backup files on separate storage for extra safety."
                    />
                    <FAQCard
                        question="How do I update VitalBlink?"
                        answer="Updates are included with your purchase. Download the latest installer from our website and run it. Your data and settings will be preserved during updates."
                    />
                </div>
            </section>

            {/* Support CTA */}
            <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                <h2 className="text-4xl font-bold mb-4">Need More Help?</h2>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                    Can't find what you're looking for? Our support team is here to help you get the most out of VitalBlink.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/support" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl text-center inline-flex items-center justify-center gap-2 ripple-effect interactive-card">
                        Contact Support
                        <ArrowRight className="h-5 w-5" />
                    </a>
                    <a href="/pricing" className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center inline-flex items-center justify-center gap-2 border-2 border-white/20 ripple-effect interactive-card">
                        View Pricing
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </section>
        </main>
    );
}

function QuickStartCard({ icon, step, title, description, color }: {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; badge: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-700', glow: 'group-hover:shadow-blue-500/20' },
        purple: { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', icon: 'from-violet-500 to-purple-600', badge: 'bg-violet-100 text-violet-700', glow: 'group-hover:shadow-violet-500/20' },
        cyan: { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', badge: 'bg-cyan-100 text-cyan-700', glow: 'group-hover:shadow-cyan-500/20' },
        rose: { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', badge: 'bg-rose-100 text-rose-700', glow: 'group-hover:shadow-rose-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${parseInt(step) * 0.1}s` }}>
            <div className={`absolute -top-4 -right-4 ${colors.badge} font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}>
                {step}
            </div>

            <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function DocSection({ icon, title, description, topics, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    topics: string[];
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; accent: string; glow: string }> = {
        indigo: { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-blue-600', accent: 'text-indigo-600', glow: 'group-hover:shadow-indigo-500/20' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', accent: 'text-purple-600', glow: 'group-hover:shadow-purple-500/20' },
        cyan: { bg: 'from-cyan-50 to-blue-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-blue-600', accent: 'text-cyan-600', glow: 'group-hover:shadow-cyan-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', accent: 'text-emerald-600', glow: 'group-hover:shadow-emerald-500/20' },
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', accent: 'text-amber-600', glow: 'group-hover:shadow-amber-500/20' },
        rose: { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', accent: 'text-rose-600', glow: 'group-hover:shadow-rose-500/20' },
        violet: { bg: 'from-violet-50 to-fuchsia-50', border: 'border-violet-200', icon: 'from-violet-500 to-fuchsia-600', accent: 'text-violet-600', glow: 'group-hover:shadow-violet-500/20' },
        red: { bg: 'from-red-50 to-orange-50', border: 'border-red-200', icon: 'from-red-500 to-orange-600', accent: 'text-red-600', glow: 'group-hover:shadow-red-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 8 * 0.1}s` }}>
            <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

            <ul className="space-y-3">
                {topics.map((topic, index) => (
                    <li key={index} className="flex items-start text-sm group/item">
                        <div className={`${colors.accent} bg-white rounded-full p-1 mr-3 mt-0.5 flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{topic}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function TechCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 4 * 0.2}s` }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FAQCard({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-indigo-300 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: `${Math.abs(question.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 6 * 0.1}s` }}>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Info className="h-6 w-6" />
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{question}</h3>
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}
