import { Download, CheckCircle, Clock, Shield, Zap, Heart, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getDownloadLink } from '@/lib/config';

export default function TrialPage() {
    const trialDownload = getDownloadLink('vitalblink_trial');
    
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full mb-6 border-2 border-emerald-300 shadow-lg animate-fade-in-up magnetic-hover">
                    <Gift className="h-6 w-6 mr-2 animate-pulse" />
                    <span className="text-lg font-bold">30-Day Free Trial Available</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Try VitalBlink <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-text-shimmer">Free for 30 Days</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Full 30-day trial — access all features and departments. No credit card.
                </p>
            </div>

            {/* Main Trial Card */}
            <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up interactive-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-indigo-700/90 rounded-3xl backdrop-blur-sm"></div>
                    <div className="relative p-12 text-white">
                        <div className="flex items-center justify-center mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 animate-pulse"></div>
                                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6 border-2 border-white/40 animate-float">
                                    <Clock className="h-16 w-16" />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold text-center mb-4 animate-text-shimmer">30-Day Free Trial</h2>
                        <p className="text-xl text-indigo-100 text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Full access to all features and departments
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="All departments" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Unlimited Users & Patients" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="All features" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="AI-Powered Tools" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Complete EHR System" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Advanced Billing & Inventory" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="No credit card" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="No Feature Limitations" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <a
                                href={trialDownload.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none"
                            >
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-xl bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-full py-8 px-10 font-bold group ripple-effect interactive-card"
                                >
                                    <Download className="mr-3 h-7 w-7 group-hover:animate-bounce" />
                                    Download Free Trial
                                </Button>
                            </a>
                            <Link href="/pricing" className="flex-1 sm:flex-none">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto text-xl border-3 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 rounded-full py-8 px-10 font-bold transition-all duration-300 ripple-effect interactive-card"
                                >
                                    View Full Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    What's Included in Your Trial
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <IncludedCard
                        icon={<Heart className="h-8 w-8" />}
                        title="Complete Hospital System"
                        description="Access all departments and their specialty tools."
                        color="from-rose-500 to-pink-600"
                    />
                    <IncludedCard
                        icon={<Shield className="h-8 w-8" />}
                        title="Advanced Security"
                        description="Secure, role-based access with encrypted storage."
                        color="from-emerald-500 to-green-600"
                    />
                    <IncludedCard
                        icon={<Zap className="h-8 w-8" />}
                        title="Full Features"
                        description="Patient records, billing, inventory, and scheduling tools."
                        color="from-indigo-500 to-purple-600"
                    />
                </div>
            </div>

            {/* How It Works */}
            <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    How the Trial Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <StepCard
                        number="1"
                        title="Download"
                        description="Click the download button to get VitalBlink trial version"
                        color="bg-blue-500"
                    />
                    <StepCard
                        number="2"
                        title="Install & Setup"
                        description="Install on your local server and configure your hospital settings"
                        color="bg-purple-500"
                    />
                    <StepCard
                        number="3"
                        title="Explore for 30 Days"
                        description="Use all features with no limitations for a full month"
                        color="bg-emerald-500"
                    />
                </div>
            </div>

            {/* Trial Benefits */}
            <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-10 animate-fade-in-up interactive-card">
                <div className="text-center mb-8">
                    <Star className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-text-shimmer">
                        Why Start with a Trial?
                    </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <BenefitItem text="Test all features in your actual hospital environment" />
                    <BenefitItem text="Train your staff before making a purchase decision" />
                    <BenefitItem text="Verify compatibility with your existing systems" />
                    <BenefitItem text="Experience the full power of VitalBlink risk-free" />
                    <BenefitItem text="Evaluate department-specific tools thoroughly" />
                    <BenefitItem text="Import your data and test real workflows" />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    Trial FAQs
                </h2>
                <div className="space-y-6">
                    <FAQItem
                        question="Do I need a credit card to start the trial?"
                        answer="No — the trial is free; no credit card required."
                    />
                    <FAQItem
                        question="What happens after 30 days?"
                        answer="After 30 days, you'll need to purchase a license to continue using VitalBlink. Your data and settings will be preserved when you activate your license."
                    />
                    <FAQItem
                        question="Are there any limitations during the trial?"
                        answer="No — the trial includes all features and departments, plus AI tools and reporting."
                    />
                    <FAQItem
                        question="Can I convert my trial to a paid license?"
                        answer="Yes! When you purchase any VitalBlink edition, your trial installation will be automatically upgraded. All your data and settings are preserved."
                    />
                    <FAQItem
                        question="Can I extend the trial period?"
                        answer="The trial is limited to 30 days per installation. However, our support team can help evaluate special circumstances on a case-by-case basis."
                    />
                    <FAQItem
                        question="Is my trial data secure?"
                        answer="Absolutely! The trial version uses the same security features as the full version, including role-based access, encryption, and audit logging."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-12 animate-fade-in-up interactive-card">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-text-shimmer">
                    Ready to Experience VitalBlink?
                </h3>
                <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Start your 30-day free trial today and discover why healthcare facilities trust VitalBlink
                </p>
                <a
                    href={trialDownload.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        size="lg"
                        className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-full py-8 px-12 font-bold group ripple-effect interactive-card"
                    >
                        <Download className="mr-3 h-7 w-7 group-hover:animate-bounce" />
                        Download Free Trial Now
                    </Button>
                </a>
                <p className="text-sm text-gray-500 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    No credit card • All features • 30-day trial
                </p>
            </div>
        </main>
    );
}

function TrialFeature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">{icon}</div>
            <span className="text-lg">{text}</span>
        </div>
    );
}

function IncludedCard({
    icon,
    title,
    description,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}) {
    return (
        <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-indigo-300 transition-all duration-300 animate-fade-in-up interactive-card hover-lift" style={{ animationDelay: `${color.includes('rose') ? '0.1' : color.includes('emerald') ? '0.2' : '0.3'}s` }}>
            <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function StepCard({
    number,
    title,
    description,
    color
}: {
    number: string;
    title: string;
    description: string;
    color: string;
}) {
    return (
        <div className="relative animate-fade-in-up" style={{ animationDelay: `${number === '1' ? '0.1' : number === '2' ? '0.2' : '0.3'}s` }}>
            <div className="flex flex-col items-center text-center">
                <div
                    className={`${color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 animate-float interactive-card`}
                >
                    {number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 font-medium">{text}</span>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 animate-fade-in-up interactive-card hover-lift">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
            <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
    );
}
