import { Check, Heart, Zap, Sparkles, Crown, Building2, Stethoscope, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      {/* Trial Banner */}
      <div className="mb-12">
        <Link href="/trial">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-emerald-400 hover-lift interactive-card animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Gift className="h-8 w-8 animate-pulse" />
              <h3 className="text-2xl font-bold">30-Day Free Trial Available!</h3>
            </div>
            <p className="text-lg text-emerald-50">
              Try VitalBlink Pro with all features unlocked. No credit card required.
            </p>
          </div>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          Choose Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 animate-text-shimmer">Edition</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          One-time purchase. No subscriptions. Lifetime updates included.
        </p>
      </div>

      {/* Three Edition Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Clinic Edition */}
        <EditionCard
          name="VitalBlink Clinic"
          icon={<Building2 className="h-8 w-8" />}
          price={299}
          originalPrice={399}
          tagline="Perfect for Small Clinics"
          description="Essential hospital management for single-department clinics"
          imagePath="/edition/vitalblink clinic.png"
          features={[
            'Choose 1 Medical Department',
            'Unlimited Users & Patients',
            'Patient Records (EHR)',
            'Appointment Scheduling',
            'Basic Billing System',
            'Inventory Management',
            'Backup & Recovery',
            'Lifetime Updates',
            'Email Support'
          ]}
          gumroadLink="https://gumroad.com/l/vitalblink-clinic"
          highlighted={false}
          color="from-cyan-500 to-teal-600"
        />

        {/* Plus Edition - HIGHLIGHTED */}
        <EditionCard
          name="VitalBlink Plus"
          icon={<Stethoscope className="h-8 w-8" />}
          price={499}
          originalPrice={619}
          tagline="Most Popular Choice"
          badge="BEST VALUE"
          description="Multi-department management for growing healthcare facilities"
          imagePath="/edition/vitalblink plus.png"
          features={[
            'Choose 5 Medical Departments',
            'Unlimited Users & Patients',
            'Complete Patient Records (EHR)',
            'Appointment Scheduling',
            'Advanced Billing System',
            'Full Inventory Management',
            'Blood Bank & Pharmacy',
            'Medical Image Encryption',
            'Audit Logging & Reports',
            'Backup & Recovery System',
            'Lifetime Software Updates',
            'Priority Email Support'
          ]}
          gumroadLink="https://gumroad.com/l/vitalblink-plus"
          highlighted={true}
          color="from-indigo-500 to-purple-600"
        />

        {/* Pro Edition */}
        <EditionCard
          name="VitalBlink Pro"
          icon={<Crown className="h-8 w-8" />}
          price={699}
          originalPrice={899}
          tagline="Complete Enterprise Solution"
          description="The ultimate hospital management system with everything included"
          imagePath="/edition/vitalblink pro.png"
          features={[
            'All 26+ Medical Departments',
            'Unlimited Users & Patients',
            'AI-Powered Diagnosis Tools',
            'Complete Patient Records (EHR)',
            'Advanced Billing System',
            'Full Inventory Management',
            'Blood Bank & Pharmacy',
            'Appointment Scheduling',
            'Medical Image Encryption',
            'Audit Logging & Reports',
            'Backup & Recovery System',
            'API Access & Integration',
            'Queue Management System',
            'OT & Floor Management',
            'Lifetime Software Updates',
            'Priority Technical Support'
          ]}
          gumroadLink="https://gumroad.com/l/vitalblink-pro"
          highlighted={false}
          color="from-amber-500 to-orange-600"
        />
      </div>

      {/* Comparison Note */}
      <div className="max-w-6xl mx-auto bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            � Edition Comparison
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
              <h4 className="font-bold text-lg text-cyan-700 mb-3">VitalBlink Clinic</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>$299</strong> - Single department</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best for small clinics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Essential features</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </div>
              <h4 className="font-bold text-lg text-indigo-700 mb-3">VitalBlink Plus</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>$499</strong> - Choose 5 departments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best value for growing facilities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced features included</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <h4 className="font-bold text-lg text-amber-700 mb-3">VitalBlink Pro</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>$699</strong> - All 26+ departments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete enterprise solution</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All features + AI tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fade-in-up">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Questions</span>
        </h2>
        <div className="space-y-6">
          <FAQItem
            question="Is this a one-time payment or subscription?"
            answer="All VitalBlink products are one-time purchases. No recurring fees, no subscriptions. Pay once, use forever."
          />
          <FAQItem
            question="Do I get lifetime updates?"
            answer="Yes! All purchases include lifetime software updates at no additional cost."
          />
          <FAQItem
            question="What's the difference between Clinic, Plus, and Pro editions?"
            answer="Clinic edition includes 1 department of your choice. Plus edition includes 5 departments. Pro edition includes all 26+ departments plus advanced features like AI tools and API access."
          />
          <FAQItem
            question="Can I upgrade from Clinic or Plus to Pro later?"
            answer="Yes! Contact our support team and we'll provide you with an upgrade discount based on your previous purchase."
          />
          <FAQItem
            question="Which departments can I choose in Plus edition?"
            answer="With VitalBlink Plus, you can choose any 5 departments from our 26+ available departments including Cardiology, Emergency, Surgery, Radiology, Pediatrics, and more."
          />
          <FAQItem
            question="How many users can I have?"
            answer="All editions support unlimited users, departments, and patients. No restrictions on user count."
          />
          <FAQItem
            question="What about technical support?"
            answer="All purchases include technical support via email. VitalBlink Pro customers get priority support."
          />
          <FAQItem
            question="Can I use this for multiple locations?"
            answer="VitalBlink Pro license is per facility. Contact us for multi-location pricing."
          />
        </div>
      </div>
    </main>
  );
}

function EditionCard({
  name,
  icon,
  price,
  originalPrice,
  tagline,
  badge,
  description,
  imagePath,
  features,
  gumroadLink,
  highlighted,
  color
}: {
  name: string;
  icon: React.ReactNode;
  price: number;
  originalPrice?: number;
  tagline: string;
  badge?: string;
  description: string;
  imagePath: string;
  features: string[];
  gumroadLink: string;
  highlighted: boolean;
  color: string;
}) {
  const savings = originalPrice ? originalPrice - price : 0;
  const discountPercent = originalPrice ? Math.round((savings / originalPrice) * 100) : 0;

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer hover-lift interactive-card animate-slide-in-up ${highlighted
        ? 'border-4 border-indigo-500 shadow-2xl scale-105 z-10 hover:scale-110'
        : 'border-2 border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:scale-110'
        }`}
      style={{ animationDelay: `${highlighted ? '0.2' : '0.1'}s` }}
    >
      {badge && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 animate-pulse">
          {badge}
        </div>
      )}

      {/* Discount Badge - shown when originalPrice exists */}
      {originalPrice && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-20 animate-bounce">
          SAVE ${savings}
        </div>
      )}

      {/* Animated background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      <div className="p-8 relative z-10">
        {/* Large Icon with animation - Replaces the image */}
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br ${color} text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <div className="scale-150">
              {icon}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{name}</h3>
          <p className="text-sm text-indigo-600 font-semibold mb-3 uppercase tracking-wide">{tagline}</p>

          {/* Pricing with strikethrough original price */}
          <div className="mb-3">
            {originalPrice && (
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl text-gray-400 line-through font-bold">
                  ${originalPrice}
                </span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  -{discountPercent}%
                </span>
              </div>
            )}
            <div className="text-5xl font-bold group-hover:scale-110 transition-transform duration-300 inline-block">
              <span className={`${highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' : 'text-green-600'}`}>
                ${price}
              </span>
              <span className="text-lg text-gray-500 font-normal ml-2">one-time</span>
            </div>
            {originalPrice && (
              <p className="text-sm text-green-600 font-semibold mt-2">
                💰 You save ${savings}!
              </p>
            )}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Features with hover effect */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm group/item hover:translate-x-2 transition-transform duration-200">
              <Check className={`h-5 w-5 ${highlighted ? 'text-indigo-600' : 'text-gray-600'} mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`} />
              <span className="text-gray-700 group-hover/item:text-gray-900 group-hover/item:font-medium transition-all duration-200">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button with enhanced interaction */}
        <a
          href={gumroadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            size="lg"
            className={`w-full rounded-full font-bold transition-all duration-500 group-hover:scale-105 ripple-effect ${highlighted
              ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-xl hover:shadow-2xl'
              : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white hover:shadow-2xl'
              }`}
          >
            <span className="flex items-center justify-center">
              Purchase {name.split(' ')[1]}
              <Sparkles className="ml-2 h-5 w-5 group-hover:animate-spin" />
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: `${Math.abs(question.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 8 * 0.1}s` }}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{question}</h3>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
  );
}
