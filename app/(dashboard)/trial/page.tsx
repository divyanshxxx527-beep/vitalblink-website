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
                    <span className="text-lg font-bold">Zero Risk • Full Power • 30 Days</span>
                </div>
                <h1 className="text-6xl font-black mb-6 animate-fade-in-up leading-tight">
                    <span className="text-gray-900">Try Everything.</span> <span className="text-emerald-600">Pay Nothing.</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-semibold" style={{ animationDelay: '0.2s' }}>
                    30 days • All features • No credit card • No limits
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

                        <h2 className="text-5xl font-black text-center mb-4">Full Hospital System</h2>
                        <p className="text-2xl text-indigo-100 text-center mb-8 font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            26+ Departments • AI Tools • Zero Restrictions
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="All 26+ Departments" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Unlimited Users" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="AI-Powered Tools" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Complete EHR" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Smart Billing" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Full Inventory" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="No Credit Card" />
                            <TrialFeature icon={<CheckCircle className="h-6 w-6" />} text="Zero Limitations" />
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
                                    Get Started Free
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="mb-16">
                <h2 className="text-5xl font-black text-gray-900 text-center mb-4 animate-fade-in-up">
                    Everything. <span className="text-emerald-600">Unlocked.</span>
                </h2>
                <p className="text-xl text-gray-600 text-center mb-10 font-medium">No restrictions. No limitations. Full power.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <IncludedCard
                        icon={<Heart className="h-8 w-8" />}
                        title="All Departments"
                        description="26+ medical specialties. Every tool. Every feature."
                        color="from-rose-500 to-pink-600"
                    />
                    <IncludedCard
                        icon={<Shield className="h-8 w-8" />}
                        title="Enterprise Security"
                        description="Bank-level protection. Role-based access. Total control."
                        color="from-emerald-500 to-green-600"
                    />
                    <IncludedCard
                        icon={<Zap className="h-8 w-8" />}
                        title="Full Suite"
                        description="EHR, billing, inventory, AI tools. All included."
                        color="from-indigo-500 to-purple-600"
                    />
                </div>
            </div>

            {/* How It Works */}
            <div className="max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-black text-gray-900 text-center mb-10 animate-fade-in-up">
                    Three Steps. <span className="text-indigo-600">Zero Risk.</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <StepCard
                        number="1"
                        title="Download"
                        description="Click and download. Takes 2 minutes."
                        color="bg-blue-500"
                    />
                    <StepCard
                        number="2"
                        title="Install"
                        description="Quick setup. Your server. Your data."
                        color="bg-purple-500"
                    />
                    <StepCard
                        number="3"
                        title="Explore"
                        description="30 days. Full access. No limits."
                        color="bg-emerald-500"
                    />
                </div>
            </div>

            {/* Trial Benefits */}
            <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-10 animate-fade-in-up interactive-card">
                <div className="text-center mb-8">
                    <Star className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                        Why Start Free?
                    </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <BenefitItem text="Test with real patient data" />
                    <BenefitItem text="Train your entire team" />
                    <BenefitItem text="Verify system compatibility" />
                    <BenefitItem text="Experience full power" />
                    <BenefitItem text="Evaluate all departments" />
                    <BenefitItem text="Import and test workflows" />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-gray-900 text-center mb-10 animate-fade-in-up">
                    Quick <span className="text-indigo-600">Answers</span>
                </h2>
                <div className="space-y-6">
                    <FAQItem
                        question="Need a credit card?"
                        answer="No. Completely free. Zero payment info required."
                    />
                    <FAQItem
                        question="After 30 days?"
                        answer="Choose to buy or stop. Your data stays safe either way."
                    />
                    <FAQItem
                        question="Any limitations?"
                        answer="None. Every feature. Every department. Full access."
                    />
                    <FAQItem
                        question="Convert to paid?"
                        answer="One click. All data preserved. Instant upgrade."
                    />
                    <FAQItem
                        question="Is it secure?"
                        answer="Same enterprise security as the full version. Bank-level."
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-12 animate-fade-in-up interactive-card">
                <h3 className="text-5xl font-black text-gray-900 mb-4">
                    Ready? <span className="text-indigo-600">Start Now.</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Download. Install. Explore. All in 5 minutes.
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
                        Start Free Trial
                    </Button>
                </a>
                <p className="text-sm text-gray-500 mt-4 animate-fade-in-up font-medium" style={{ animationDelay: '0.4s' }}>
                    30 days • All features • No card • No risk
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
