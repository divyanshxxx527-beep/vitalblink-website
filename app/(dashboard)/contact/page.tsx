import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 px-6 py-3 rounded-full mb-6 shadow-md animate-fade-in-up magnetic-hover">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    <span className="text-sm font-bold">We're Here to Help</span>
                </div>
                <h1 className="text-6xl font-black text-gray-900 mb-4 animate-fade-in-up">
                    <span className="text-gray-900">Let's</span> <span className="text-cyan-600">Talk</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-semibold" style={{ animationDelay: '0.2s' }}>
                    Sales. Support. Questions. We're here.
                </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <QuickActionCard
                    icon={<Users className="h-8 w-8" />}
                    title="Sales Inquiries"
                    description="Speak with our sales team about pricing, editions, and licensing"
                    action="Contact Sales"
                    href="#sales-form"
                    color="from-blue-500 to-cyan-600"
                />
                <QuickActionCard
                    icon={<MessageSquare className="h-8 w-8" />}
                    title="Technical Support"
                    description="Get help with installation, configuration, and troubleshooting"
                    action="Get Support"
                    href="#support-form"
                    color="from-indigo-500 to-purple-600"
                />
                <QuickActionCard
                    icon={<Building2 className="h-8 w-8" />}
                    title="Enterprise Inquiries"
                    description="Multi-facility licensing, custom integrations, and volume discounts"
                    action="Enterprise Contact"
                    href="#enterprise-form"
                    color="from-emerald-500 to-green-600"
                />
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Contact Details */}
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg animate-fade-in-up interactive-card">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                    <div className="space-y-6">
                        <ContactDetail
                            icon={<Mail className="h-6 w-6 text-blue-600" />}
                            label="Email Addresses"
                            lines={[
                                { text: 'contact@vitalblink.store', subtext: 'Sales, Support & General Inquiries', bold: true }
                            ]}
                        />

                        <ContactDetail
                            icon={<Phone className="h-6 w-6 text-green-600" />}
                            label="Phone Numbers"
                            lines={[
                                { text: '+1 (555) 123-4567', subtext: 'Sales (North America)', bold: true },
                                { text: '+44 20 1234 5678', subtext: 'Sales (Europe)' },
                                { text: '+1 (555) 987-6543', subtext: 'Technical Support (24/7)' }
                            ]}
                        />

                        <ContactDetail
                            icon={<MapPin className="h-6 w-6 text-red-600" />}
                            label="Office Locations"
                            lines={[
                                { text: 'North America HQ', subtext: '123 Healthcare Blvd, Suite 500\nSan Francisco, CA 94105, USA', bold: true },
                                { text: 'Europe Office', subtext: '45 Medical Park, Floor 3\nLondon EC1A 1BB, United Kingdom' }
                            ]}
                        />

                        <ContactDetail
                            icon={<Clock className="h-6 w-6 text-indigo-600" />}
                            label="Business Hours"
                            lines={[
                                { text: 'Sales Team', subtext: 'Monday - Friday: 9:00 AM - 6:00 PM (Your Timezone)', bold: true },
                                { text: 'Technical Support', subtext: '24/7 availability for critical issues' },
                                { text: 'Response Time', subtext: 'Sales: Within 4 hours • Support: Within 1 hour' }
                            ]}
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200 animate-fade-in-up interactive-card">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                placeholder="john.doe@hospital.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Organization/Hospital Name *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                placeholder="City General Hospital"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Inquiry Type *
                            </label>
                            <select
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                            >
                                <option value="">Select inquiry type...</option>
                                <option value="sales">Sales & Pricing</option>
                                <option value="trial">Free Trial Support</option>
                                <option value="technical">Technical Support</option>
                                <option value="enterprise">Enterprise/Multi-Facility</option>
                                <option value="demo">Request Demo</option>
                                <option value="other">General Question</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Message *
                            </label>
                            <textarea
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
                                placeholder="Tell us how we can help you..."
                            ></textarea>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="consent"
                                required
                                className="mt-1 mr-3 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label htmlFor="consent" className="text-sm text-gray-700">
                                I agree to receive communications from VitalBlink regarding my inquiry. We respect your privacy and will never share your information. *
                            </label>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg py-6 hover:scale-105 transition-all duration-300 ripple-effect interactive-card"
                        >
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                        </Button>

                        <p className="text-xs text-gray-600 text-center">
                            * Required fields. Typical response time: 4 hours for sales, 1 hour for support
                        </p>
                    </form>
                </div>
            </div>

            {/* Support Options */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    Alternative Support Channels
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <SupportChannel
                        icon="📚"
                        title="Documentation"
                        description="Comprehensive guides and tutorials"
                        action="View Docs"
                        href="/docs"
                    />
                    <SupportChannel
                        icon="💬"
                        title="Community Forum"
                        description="Connect with other users"
                        action="Join Forum"
                        href="/forum"
                    />
                    <SupportChannel
                        icon="🎥"
                        title="Video Tutorials"
                        description="Step-by-step video guides"
                        action="Watch Videos"
                        href="/tutorials"
                    />
                    <SupportChannel
                        icon="❓"
                        title="FAQ Center"
                        description="Quick answers to common questions"
                        action="View FAQs"
                        href="/faq"
                    />
                </div>
            </div>

            {/* Enterprise Contact Section */}
            <div id="enterprise-form" className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white mb-16 animate-fade-in-up interactive-card">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-600/90 rounded-3xl backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center animate-text-shimmer">
                        Enterprise & Multi-Facility Solutions
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Managing multiple facilities? We offer special pricing, dedicated support, and custom integrations
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="Volume licensing discounts (10+ locations)"
                        />
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="Dedicated account manager"
                        />
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="Priority 24/7 technical support"
                        />
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="Custom integration services"
                        />
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="On-site training and deployment"
                        />
                        <EnterpriseFeature
                            icon={<CheckCircle className="h-6 w-6" />}
                            text="Flexible payment terms"
                        />
                    </div>

                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 ripple-effect interactive-card">
                            <Mail className="h-5 w-5 mr-2" />
                            Contact Enterprise Sales
                        </Button>
                        <p className="text-blue-100 mt-4 text-sm">
                            Or email us directly at <a href="mailto:contact@vitalblink.store" className="underline font-bold">contact@vitalblink.store</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                <ResponseCard
                    type="Sales Inquiries"
                    time="4 hours"
                    description="Get pricing and licensing information quickly"
                    color="from-blue-500 to-cyan-600"
                />
                <ResponseCard
                    type="Technical Support"
                    time="1 hour"
                    description="Critical issues addressed immediately"
                    color="from-indigo-500 to-purple-600"
                />
                <ResponseCard
                    type="General Questions"
                    time="24 hours"
                    description="Comprehensive answers to all your questions"
                    color="from-emerald-500 to-green-600"
                />
            </div>

            {/* Important Notice */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 flex items-start mb-16 animate-fade-in-up interactive-card">
                <AlertCircle className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-amber-900 mb-2">Current Trial Users</h3>
                    <p className="text-amber-800">
                        If you're currently using the 30-day free trial and need technical assistance, please include your trial license key in your message for faster support. You can find your license key in the software under <strong>Settings → About → License Information</strong>.
                    </p>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 animate-fade-in-up">
                    Visit Our Offices
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <MapPlaceholder
                        location="San Francisco Office"
                        address="123 Healthcare Blvd, Suite 500"
                        city="San Francisco, CA 94105"
                        country="United States"
                    />
                    <MapPlaceholder
                        location="London Office"
                        address="45 Medical Park, Floor 3"
                        city="London EC1A 1BB"
                        country="United Kingdom"
                    />
                </div>
                <p className="text-center text-gray-600 mt-6 text-sm">
                    Office visits by appointment only. Please contact us in advance to schedule a visit.
                </p>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border-2 border-indigo-200 animate-fade-in-up interactive-card">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-text-shimmer">
                    Not Ready to Contact Us Yet?
                </h3>
                <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Start with a free 30-day trial and experience VitalBlink yourself
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <Link href="/trial">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 hover:scale-105 transition-all duration-300 ripple-effect interactive-card">
                            Start Free Trial
                        </Button>
                    </Link>
                    <Link href="/pricing">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-105 transition-all duration-300 ripple-effect interactive-card">
                            View Pricing
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

function QuickActionCard({
    icon,
    title,
    description,
    action,
    href,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    action: string;
    href: string;
    color: string;
}) {
    return (
        <a href={href} className="group block bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up interactive-card hover-lift" style={{ animationDelay: `${color.includes('blue') ? '0.1' : color.includes('indigo') ? '0.2' : '0.3'}s` }}>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>
            <div className="text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                {action} →
            </div>
        </a>
    );
}

function ContactDetail({
    icon,
    label,
    lines
}: {
    icon: React.ReactNode;
    label: string;
    lines: Array<{ text: string; subtext: string; bold?: boolean }>;
}) {
    return (
        <div className="flex items-start">
            <div className="mr-4 mt-1">{icon}</div>
            <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-3">{label}</h3>
                <div className="space-y-2">
                    {lines.map((line, idx) => (
                        <div key={idx}>
                            <div className={`${line.bold ? 'font-bold' : 'font-semibold'} text-gray-900`}>
                                {line.text}
                            </div>
                            <div className="text-sm text-gray-600 whitespace-pre-line">{line.subtext}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SupportChannel({
    icon,
    title,
    description,
    action,
    href
}: {
    icon: string;
    title: string;
    description: string;
    action: string;
    href: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-fade-in-up interactive-card hover-lift" style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 4 * 0.1}s` }}>
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <Link href={href}>
                <Button variant="outline" size="sm" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-105 transition-all duration-300 ripple-effect">
                    {action}
                </Button>
            </Link>
        </div>
    );
}

function EnterpriseFeature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center">
            <div className="text-blue-200 mr-3">{icon}</div>
            <span className="text-white">{text}</span>
        </div>
    );
}

function ResponseCard({
    type,
    time,
    description,
    color
}: {
    type: string;
    time: string;
    description: string;
    color: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-fade-in-up interactive-card hover-lift" style={{ animationDelay: `${color.includes('blue') ? '0.1' : color.includes('indigo') ? '0.2' : '0.3'}s` }}>
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white mx-auto mb-4 animate-float`}>
                <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
            <div className="text-3xl font-bold text-indigo-600 mb-2">{time}</div>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

function MapPlaceholder({
    location,
    address,
    city,
    country
}: {
    location: string;
    address: string;
    city: string;
    country: string;
}) {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-gray-300 hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col items-center justify-center animate-fade-in-up interactive-card hover-lift" style={{ animationDelay: `${location.includes('San Francisco') ? '0.1' : '0.2'}s` }}>
            <MapPin className="h-16 w-16 text-red-500 mb-4 animate-float" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{location}</h3>
            <div className="text-center text-gray-700">
                <p>{address}</p>
                <p>{city}</p>
                <p className="font-semibold mt-2">{country}</p>
            </div>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 ripple-effect interactive-card">
                <MapPin className="h-4 w-4 mr-2" />
                Open in Maps
            </Button>
        </div>
    );
}
