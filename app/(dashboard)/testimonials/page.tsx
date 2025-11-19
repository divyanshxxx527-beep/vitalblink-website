import { Star, Quote, Heart, Building2, Users, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TestimonialsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-6 py-3 rounded-full mb-6 shadow-md animate-fade-in-up magnetic-hover">
                    <Heart className="h-5 w-5 mr-2" />
                    <span className="text-sm font-bold">Trusted by Healthcare Professionals</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-text-shimmer">Stories</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    See how hospitals and clinics worldwide are transforming their operations with VitalBlink
                </p>
            </div>

            {/* Statistics Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
                <StatCard
                    icon={<Building2 className="h-8 w-8" />}
                    number="500+"
                    label="Healthcare Facilities"
                    color="from-blue-500 to-cyan-600"
                />
                <StatCard
                    icon={<Users className="h-8 w-8" />}
                    number="50,000+"
                    label="Daily Users"
                    color="from-indigo-500 to-purple-600"
                />
                <StatCard
                    icon={<TrendingUp className="h-8 w-8" />}
                    number="95%"
                    label="Customer Satisfaction"
                    color="from-emerald-500 to-green-600"
                />
                <StatCard
                    icon={<Award className="h-8 w-8" />}
                    number="4.9/5"
                    label="Average Rating"
                    color="from-amber-500 to-orange-600"
                />
            </div>

            {/* Featured Case Studies */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    Featured Case Studies
                </h2>
                <div className="space-y-12">
                    <CaseStudy
                        hospitalName="City General Hospital"
                        location="New York, USA"
                        size="250 beds"
                        edition="Pro"
                        challenge="Managing 15 departments with paper-based records was causing delays and errors. Staff spent hours on administrative tasks instead of patient care."
                        solution="Implemented VitalBlink Pro with all 26 departments. Digitized patient records, automated billing, and integrated queue management system."
                        results={[
                            "70% reduction in administrative time",
                            "50% faster patient check-in process",
                            "95% improvement in record accuracy",
                            "Annual savings of $150,000 on paper costs"
                        ]}
                        testimonial="VitalBlink transformed our hospital operations. What used to take hours now takes minutes. Our staff can focus on what matters - patient care."
                        author="Dr. Sarah Mitchell"
                        role="Chief Medical Officer"
                        color="from-blue-500 to-cyan-600"
                    />

                    <CaseStudy
                        hospitalName="SpringVale Medical Center"
                        location="London, UK"
                        size="5 departments"
                        edition="Plus"
                        challenge="Growing facility needed to expand from single to multiple departments but couldn't afford expensive enterprise software."
                        solution="Started with VitalBlink Plus for 5 key departments: Emergency, Surgery, Cardiology, Pediatrics, and Radiology."
                        results={[
                            "Expanded from 1 to 5 departments smoothly",
                            "60% faster appointment scheduling",
                            "Complete patient history tracking",
                            "ROI achieved in 6 months"
                        ]}
                        testimonial="The Plus edition was perfect for our growing clinic. We got enterprise features at a fraction of the cost. Best investment we've made."
                        author="Dr. James Chen"
                        role="Medical Director"
                        color="from-indigo-500 to-purple-600"
                    />

                    <CaseStudy
                        hospitalName="Wellness Dental Clinic"
                        location="Sydney, Australia"
                        size="Small clinic"
                        edition="Clinic"
                        challenge="Small dental practice needed modern patient management but had limited budget and IT resources."
                        solution="Implemented VitalBlink Clinic edition focused on dentistry department with basic billing and appointment features."
                        results={[
                            "Paperless patient records",
                            "Automated appointment reminders",
                            "Professional billing system",
                            "Setup completed in 1 day"
                        ]}
                        testimonial="As a small clinic, VitalBlink Clinic was exactly what we needed. Simple, affordable, and powerful. Our patients love the modern experience."
                        author="Dr. Emily Rodriguez"
                        role="Practice Owner"
                        color="from-emerald-500 to-green-600"
                    />
                </div>
            </div>

            {/* Customer Testimonials Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    What Our Customers Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="The AI-powered diagnosis tools have been a game-changer for our emergency department. Faster, more accurate, and it learns with us."
                        author="Dr. Michael Peterson"
                        role="Emergency Medicine"
                        hospital="Memorial Hospital"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="We switched from a cloud-based system to VitalBlink's local deployment. No more internet dependency or data privacy concerns. Perfect!"
                        author="Lisa Thompson"
                        role="Hospital Administrator"
                        hospital="Riverside Medical"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="The one-time payment model saved us thousands. No monthly fees, no surprises. Just a reliable system that works."
                        author="Dr. Ahmed Hassan"
                        role="Clinic Director"
                        hospital="HealthFirst Clinic"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="Blood bank management and pharmacy integration are seamless. Everything in one place. Our staff loves it."
                        author="Nurse Maria Garcia"
                        role="Head Nurse"
                        hospital="Central Hospital"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="The queue management system reduced patient wait times by half. Patients can see their position in real-time."
                        author="John Williams"
                        role="Operations Manager"
                        hospital="City Care Hospital"
                        rating={5}
                    />
                    <TestimonialCard
                        quote="Audit logging and security features give us peace of mind. HIPAA compliance made easy with VitalBlink."
                        author="Dr. Priya Sharma"
                        role="Compliance Officer"
                        hospital="Metro Medical Center"
                        rating={5}
                    />
                </div>
            </div>

            {/* Before & After Metrics */}
            <div className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border-2 border-indigo-200 animate-fade-in-up interactive-card">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-text-shimmer">
                    Average Results Across All Facilities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <MetricCard
                        label="Administrative Time"
                        before="8 hours/day"
                        after="2.5 hours/day"
                        improvement="69% reduction"
                        color="text-green-600"
                    />
                    <MetricCard
                        label="Patient Wait Time"
                        before="45 minutes"
                        after="15 minutes"
                        improvement="67% faster"
                        color="text-blue-600"
                    />
                    <MetricCard
                        label="Record Accuracy"
                        before="78%"
                        after="99%"
                        improvement="27% increase"
                        color="text-purple-600"
                    />
                    <MetricCard
                        label="Annual Paper Costs"
                        before="$25,000"
                        after="$500"
                        improvement="$24,500 saved"
                        color="text-emerald-600"
                    />
                </div>
            </div>

            {/* Video Testimonials Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    Video Testimonials
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <VideoTestimonialPlaceholder
                        title="Dr. Sarah Mitchell - City General Hospital"
                        description="Learn how City General Hospital improved efficiency by 70%"
                    />
                    <VideoTestimonialPlaceholder
                        title="Dr. James Chen - SpringVale Medical Center"
                        description="See how VitalBlink Plus helped expand from 1 to 5 departments"
                    />
                </div>
                <p className="text-center text-gray-600 mt-6 italic animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Video testimonials coming soon. Contact us to share your VitalBlink success story!
                </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">
                    Ready to Transform Your Healthcare Facility?
                </h3>
                <p className="text-xl mb-8 text-indigo-100">
                    Join hundreds of satisfied healthcare providers using VitalBlink
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/trial">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6">
                            Start Free Trial
                        </Button>
                    </Link>
                    <Link href="/pricing">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-indigo-600">
                            View Pricing
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

function StatCard({
    icon,
    number,
    label,
    color
}: {
    icon: React.ReactNode;
    number: string;
    label: string;
    color: string;
}) {
    return (
        <div className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {icon}
            </div>
            <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{number}</div>
                <div className="text-sm text-gray-600 font-medium">{label}</div>
            </div>
        </div>
    );
}

function CaseStudy({
    hospitalName,
    location,
    size,
    edition,
    challenge,
    solution,
    results,
    testimonial,
    author,
    role,
    color
}: {
    hospitalName: string;
    location: string;
    size: string;
    edition: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: string;
    author: string;
    role: string;
    color: string;
}) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hospitalName}</h3>
                    <p className="text-gray-600">{location} • {size}</p>
                </div>
                <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-bold`}>
                    VitalBlink {edition}
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Challenge
                    </h4>
                    <p className="text-gray-700 pl-4">{challenge}</p>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Solution
                    </h4>
                    <p className="text-gray-700 pl-4">{solution}</p>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Results
                    </h4>
                    <ul className="space-y-2 pl-4">
                        {results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
                    <Quote className="h-8 w-8 text-indigo-600 mb-3" />
                    <p className="text-gray-700 italic mb-4">"{testimonial}"</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                            {author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">{author}</div>
                            <div className="text-sm text-gray-600">{role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({
    quote,
    author,
    role,
    hospital,
    rating
}: {
    quote: string;
    author: string;
    role: string;
    hospital: string;
    rating: number;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex mb-3">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
            </div>
            <Quote className="h-6 w-6 text-indigo-600 mb-3" />
            <p className="text-gray-700 mb-4 italic">"{quote}"</p>
            <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{author}</div>
                <div className="text-sm text-gray-600">{role}</div>
                <div className="text-sm text-indigo-600 font-semibold">{hospital}</div>
            </div>
        </div>
    );
}

function MetricCard({
    label,
    before,
    after,
    improvement,
    color
}: {
    label: string;
    before: string;
    after: string;
    improvement: string;
    color: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-gray-900 mb-4 text-center">{label}</h4>
            <div className="space-y-3">
                <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Before</div>
                    <div className="text-xl font-bold text-red-500 line-through">{before}</div>
                </div>
                <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-600">{after}</div>
                </div>
                <div className={`text-center font-bold ${color} text-lg`}>
                    {improvement}
                </div>
            </div>
        </div>
    );
}

function VideoTestimonialPlaceholder({
    title,
    description
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-center">{title}</h4>
            <p className="text-gray-600 text-center text-sm">{description}</p>
        </div>
    );
}
