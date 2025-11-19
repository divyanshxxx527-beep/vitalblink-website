import {
    FileText, Shield, AlertTriangle, CheckCircle, Scale, Users,
    CreditCard, RefreshCw, Ban, Info, Mail, Globe, Award
} from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    Legal Agreement
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    📄 Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-text-shimmer">Service</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Please read these terms carefully before using VitalBlink
                </p>
                <p className="text-sm text-gray-500 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Last updated: November 1, 2025</p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
                <TermsSection
                    icon={<Info className="h-8 w-8" />}
                    title="1. Agreement to Terms"
                    color="indigo"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        By purchasing, downloading, installing, or using VitalBlink Hospital Management System ("Software", "VitalBlink", "the System"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Software.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        These Terms constitute a legal agreement between you (the "Customer", "User", or "Licensee") and VitalBlink ("we", "us", or "our").
                    </p>
                </TermsSection>

                <TermsSection
                    icon={<Award className="h-8 w-8" />}
                    title="2. License Grant"
                    color="blue"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">2.1 License Type</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Subject to your compliance with these Terms and payment of applicable fees, we grant you a non-exclusive, non-transferable, perpetual license to:
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Install and use VitalBlink on your server infrastructure</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Use the Software for hospital management purposes within your facility</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Create unlimited user accounts for your staff</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Receive software updates and security patches</span>
                        </li>
                    </ul>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">2.2 License Restrictions</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <Ban className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You may not distribute, sell, lease, or sublicense the Software</span>
                        </li>
                        <li className="flex items-start">
                            <Ban className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You may not reverse engineer, decompile, or disassemble the Software</span>
                        </li>
                        <li className="flex items-start">
                            <Ban className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You may not remove or alter any proprietary notices or labels</span>
                        </li>
                        <li className="flex items-start">
                            <Ban className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You may not use the Software to provide services to third parties</span>
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection
                    icon={<CreditCard className="h-8 w-8" />}
                    title="3. Pricing and Payment"
                    color="emerald"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">3.1 One-Time Purchase</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        VitalBlink is sold as a one-time purchase with no recurring subscription fees. The license fee includes:
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Perpetual license to use the Software</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Lifetime software updates and security patches</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Email support for technical issues</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Access to documentation and resources</span>
                        </li>
                    </ul>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">3.2 Refund Policy</h4>
                    <p className="text-gray-700 leading-relaxed">
                        We offer a 30-day money-back guarantee. If you are not satisfied with VitalBlink, contact us within 30 days of purchase for a full refund. Refunds are provided at our discretion and may require explanation of issues encountered.
                    </p>
                </TermsSection>

                <TermsSection
                    icon={<RefreshCw className="h-8 w-8" />}
                    title="4. Updates and Support"
                    color="purple"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">4.1 Software Updates</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We provide free lifetime updates including new features, improvements, and security patches. Updates are optional but recommended for optimal performance and security.
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">4.2 Technical Support</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We provide email-based technical support for installation, configuration, and troubleshooting. Support response times:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Critical issues: 24-48 hours</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">General inquiries: 3-5 business days</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Support available Monday-Friday, 9 AM - 6 PM EST</span>
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection
                    icon={<Users className="h-8 w-8" />}
                    title="5. User Responsibilities"
                    color="cyan"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        As a user of VitalBlink, you are responsible for:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Compliance:</strong> Ensuring your use complies with applicable healthcare regulations (HIPAA, GDPR, local laws)</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Data Security:</strong> Implementing appropriate security measures to protect patient data</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Backups:</strong> Maintaining regular backups of your database and critical files</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>Infrastructure:</strong> Providing adequate server resources and network infrastructure</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>User Training:</strong> Ensuring your staff is properly trained to use the Software</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><strong>License Compliance:</strong> Using the Software only as authorized by these Terms</span>
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection
                    icon={<Shield className="h-8 w-8" />}
                    title="6. Warranties and Disclaimers"
                    color="red"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">6.1 Limited Warranty</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We warrant that the Software will perform substantially in accordance with the documentation for 90 days from the date of purchase. Our sole obligation under this warranty is to use reasonable efforts to correct documented defects.
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">6.2 Disclaimer</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        EXCEPT AS EXPRESSLY PROVIDED ABOVE, THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Warranties of merchantability and fitness for a particular purpose</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Warranties that the Software will be uninterrupted or error-free</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Warranties regarding medical advice or clinical decision-making</span>
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection
                    icon={<Scale className="h-8 w-8" />}
                    title="7. Limitation of Liability"
                    color="amber"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                    </p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Our total liability shall not exceed the amount paid by you for the Software</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">We are not liable for data loss, system downtime, or business interruption</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">We are not liable for medical decisions or patient care outcomes</span>
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed italic">
                        Note: VitalBlink is a management tool only. All medical decisions and patient care remain the responsibility of qualified healthcare professionals.
                    </p>
                </TermsSection>

                <TermsSection
                    icon={<FileText className="h-8 w-8" />}
                    title="8. Termination"
                    color="rose"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This license is effective until terminated. Your rights under this license will terminate automatically if you fail to comply with these Terms. Upon termination:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You must cease all use of the Software</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">You must uninstall all copies of the Software</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Provisions regarding warranties, liability, and proprietary rights survive termination</span>
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection
                    icon={<Globe className="h-8 w-8" />}
                    title="9. General Provisions"
                    color="indigo"
                >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">9.1 Governing Law</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">9.2 Entire Agreement</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        These Terms constitute the entire agreement between you and us regarding the Software and supersede all prior agreements.
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">9.3 Modifications</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We reserve the right to modify these Terms at any time. Continued use of the Software constitutes acceptance of modified Terms.
                    </p>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">9.4 Severability</h4>
                    <p className="text-gray-700 leading-relaxed">
                        If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                    </p>
                </TermsSection>

                <TermsSection
                    icon={<Mail className="h-8 w-8" />}
                    title="10. Contact Information"
                    color="blue"
                >
                    <p className="text-gray-700 leading-relaxed mb-4">
                        For questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6">
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                                <span><strong>Email:</strong> legal@vitalblink.com</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Globe className="h-5 w-5 text-blue-600 mr-3" />
                                <span><strong>Website:</strong> www.vitalblink.com/terms</span>
                            </li>
                        </ul>
                    </div>
                </TermsSection>
            </div>

            {/* Footer Note */}
            <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8 text-center animate-fade-in-up interactive-card">
                <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-text-shimmer">Thank You for Choosing VitalBlink</h3>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    By using VitalBlink, you agree to these Terms of Service. We're committed to providing
                    you with reliable hospital management software and excellent support.
                </p>
            </div>
        </main>
    );
}

function TermsSection({ icon, title, color, children }: {
    icon: React.ReactNode;
    title: string;
    color: string;
    children: React.ReactNode;
}) {
    const colorSchemes: Record<string, { bg: string; border: string; icon: string; iconBg: string }> = {
        indigo: { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', icon: 'from-indigo-500 to-blue-600', iconBg: 'bg-indigo-100' },
        blue: { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', iconBg: 'bg-blue-100' },
        emerald: { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100' },
        purple: { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', icon: 'from-purple-500 to-violet-600', iconBg: 'bg-purple-100' },
        cyan: { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', iconBg: 'bg-cyan-100' },
        red: { bg: 'from-red-50 to-rose-50', border: 'border-red-200', icon: 'from-red-500 to-rose-600', iconBg: 'bg-red-100' },
        amber: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', iconBg: 'bg-amber-100' },
        rose: { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', iconBg: 'bg-rose-100' },
    };

    const colors = colorSchemes[color];

    return (
        <div className={`relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 mb-8 overflow-hidden animate-fade-in-up interactive-card`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 10 * 0.1}s` }}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 animate-float`}></div>

            <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-lg opacity-50 animate-pulse`}></div>
                        <div className={`relative text-white bg-gradient-to-br ${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center shadow-lg animate-float`}>
                            {icon}
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                </div>
                <div className="space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
