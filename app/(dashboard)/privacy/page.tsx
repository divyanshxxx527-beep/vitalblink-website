import {
    Shield, Lock, Eye, Database, Server, FileText,
    CheckCircle, AlertCircle, Info, UserCheck, Globe, Mail
} from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    Your Privacy Matters
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    🔒 Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-text-shimmer">Policy</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    VitalBlink is committed to protecting your privacy and securing your data
                </p>
                <p className="text-sm text-gray-500 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Last updated: November 1, 2025</p>
            </div>

            {/* Key Points */}
            <section className="mb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <KeyPoint
                        icon={<Server className="h-6 w-6" />}
                        title="Local Deployment"
                        description="All data stays on your server"
                        color="blue"
                    />
                    <KeyPoint
                        icon={<Lock className="h-6 w-6" />}
                        title="Your Data, Your Control"
                        description="Complete ownership and control"
                        color="emerald"
                    />
                    <KeyPoint
                        icon={<Shield className="h-6 w-6" />}
                        title="No Cloud Storage"
                        description="We don't store your data"
                        color="purple"
                    />
                </div>
            </section>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
                <PolicySection
                    icon={<Info className="h-8 w-8" />}
                    title="Introduction"
                    color="indigo"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        VitalBlink ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how VitalBlink Hospital Management System handles data when you purchase and use our software.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Important:</strong> VitalBlink is a localhost-based application that runs entirely on your own server infrastructure. We do not collect, store, or have access to any patient data or hospital information you enter into the system.
                    </p>
                </PolicySection>

                <PolicySection
                    icon={<Database className="h-8 w-8" />}
                    title="Data Storage and Processing"
                    color="blue"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Local Data Storage</h4>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">All patient records, medical data, and hospital information are stored exclusively on your local server</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">VitalBlink does not transmit any medical or operational data to external servers</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You have complete control over your data backup, storage, and retention policies</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">No internet connection is required for VitalBlink to function</span>
                        </li>
                    </ul>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">What We Don't Collect</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Patient medical records or personal health information</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Hospital operational data or financial information</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Usage analytics or telemetry data</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Any personally identifiable information from your system</span>
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection
                    icon={<UserCheck className="h-8 w-8" />}
                    title="Information We May Collect"
                    color="emerald"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We only collect minimal information necessary for software purchase, licensing, and support:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Purchase Information:</strong> Name, email address, billing address, and payment information (processed securely by our payment processor)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>License Information:</strong> License key and activation details for software validation</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Support Communications:</strong> Information you provide when contacting our support team</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Website Analytics:</strong> Anonymous usage data on our marketing website (not the application)</span>
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection
                    icon={<Shield className="h-8 w-8" />}
                    title="Data Security"
                    color="red"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Since VitalBlink operates on your local infrastructure, you are responsible for implementing appropriate security measures:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Implement strong passwords and user authentication</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Configure role-based access control (RBAC) appropriately</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Maintain regular backups of your database</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Secure your server and network infrastructure</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Keep VitalBlink updated with the latest security patches</span>
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection
                    icon={<Globe className="h-8 w-8" />}
                    title="Third-Party Services"
                    color="purple"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our website and purchase process may use the following third-party services:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Payment Processors:</strong> Secure payment processing for software purchases</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Email Services:</strong> For order confirmations, license delivery, and support communications</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Analytics:</strong> Anonymous website traffic analysis (marketing site only)</span>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        These services have their own privacy policies and do not have access to data within your VitalBlink installation.
                    </p>
                </PolicySection>

                <PolicySection
                    icon={<Eye className="h-8 w-8" />}
                    title="Your Rights and Responsibilities"
                    color="cyan"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Your Rights</h4>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Access your purchase and license information</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Request correction of any inaccurate information</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Request deletion of your account information (subject to legal requirements)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Opt-out of marketing communications</span>
                        </li>
                    </ul>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">Your Responsibilities</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Comply with applicable healthcare data protection regulations (HIPAA, GDPR, etc.)</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Implement appropriate security measures for your installation</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Obtain necessary consents from patients and staff</span>
                        </li>
                        <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Maintain your own privacy policies as required by law</span>
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection
                    icon={<FileText className="h-8 w-8" />}
                    title="Changes to This Policy"
                    color="amber"
                >
                    <p className="text-gray-700 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </PolicySection>

                <PolicySection
                    icon={<Mail className="h-8 w-8" />}
                    title="Contact Us"
                    color="indigo"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                                <span><strong>Email:</strong> privacy@vitalblink.com</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Globe className="h-5 w-5 text-indigo-600 mr-3" />
                                <span><strong>Website:</strong> www.vitalblink.com/support</span>
                            </li>
                        </ul>
                    </div>
                </PolicySection>
            </div>

            {/* Footer Note */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center animate-fade-in-up interactive-card">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-text-shimmer">Your Privacy is Our Priority</h3>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    VitalBlink's localhost architecture means your data never leaves your facility.
                    You maintain complete control and ownership of all patient and hospital information.
                </p>
            </div>
        </main>
    );
}

function KeyPoint({ icon, title, description, color }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
        blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', glow: 'group-hover:shadow-blue-500/20' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', glow: 'group-hover:shadow-emerald-500/20' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', glow: 'group-hover:shadow-purple-500/20' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 text-center animate-fade-in-up interactive-card hover-lift`} style={{ animationDelay: `${color === 'blue' ? '0.1' : color === 'emerald' ? '0.2' : '0.3'}s` }}>
            <div className="relative mb-4 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.icon} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse`}></div>
                <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto animate-float`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

function PolicySection({ icon, title, color, children }: {
    icon: React.ReactNode;
    title: string;
    color: string;
    children: React.ReactNode;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; iconBg: string }> = {
        indigo: { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-blue-600', iconBg: 'bg-indigo-100' },
        blue: { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', iconBg: 'bg-blue-100' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100' },
        red: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', icon: 'from-red-500 to-rose-600', iconBg: 'bg-red-100' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', iconBg: 'bg-purple-100' },
        cyan: { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', iconBg: 'bg-cyan-100' },
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', iconBg: 'bg-amber-100' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 mb-8 overflow-hidden animate-fade-in-up interactive-card`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 7 * 0.1}s` }}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 animate-float`}></div>

            <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                        <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg animate-float`}>
                            {icon}
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>
                <div className="space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
