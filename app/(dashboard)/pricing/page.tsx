import { Check, Heart, Zap, Sparkles, Crown, Building2, Stethoscope, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getAllEditions } from '@/lib/config';

export default async function PricingPage() {
  const editions = getAllEditions();
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      {/* Trial Banner */}
      <div className="mb-12">
        <Link href="/trial">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-emerald-400 hover-lift interactive-card animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Gift className="h-8 w-8 animate-pulse" />
              <h3 className="text-3xl font-black">30-Day FREE Trial</h3>
            </div>
            <p className="text-xl text-emerald-50 font-semibold">
              Full Access • No Credit Card • Zero Risk
            </p>
          </div>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
          <span className="text-gray-900">Simple Pricing.</span> <span className="text-indigo-600">Massive Value</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-semibold">
          Pay once. Own forever. No subscriptions.
        </p>
      </div>

      {/* Three Edition Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Clinic Edition */}
        <EditionCard
          name={editions.clinic.name}
          icon={<Building2 className="h-8 w-8" />}
          price={editions.clinic.price}
          originalPrice={editions.clinic.originalPrice}
          tagline="Perfect for Small Clinics"
          description={editions.clinic.description}
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
          gumroadLink={editions.clinic.url}
          highlighted={false}
          color="from-cyan-500 to-teal-600"
        />

        {/* Pro Edition - HIGHLIGHTED */}
        <EditionCard
          name={editions.pro.name}
          icon={<Crown className="h-8 w-8" />}
          price={editions.pro.price}
          originalPrice={editions.pro.originalPrice}
          tagline="Complete Enterprise Solution"
          badge="BEST VALUE"
          description={editions.pro.description}
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
          gumroadLink={editions.pro.url}
          highlighted={true}
          color="from-amber-500 to-orange-600"
        />

        {/* Plus Edition */}
        <EditionCard
          name={editions.plus.name}
          icon={<Stethoscope className="h-8 w-8" />}
          price={editions.plus.price}
          originalPrice={editions.plus.originalPrice}
          tagline="Most Popular Choice"
          description={editions.plus.description}
          imagePath="/edition/vitalblink plus.png"
          features={[
            'Choose 3 Medical Departments',
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
          gumroadLink={editions.plus.url}
          highlighted={false}
          color="from-indigo-500 to-purple-600"
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </div>
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
            <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
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
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-5xl font-black text-gray-900 text-center mb-8 animate-fade-in-up">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Questions</span>
        </h2>
        <div className="space-y-6">
          <FAQItem
            question="Is this a one-time payment or subscription?"
            answer="One payment. Own forever. Zero subscriptions."
          />
          <FAQItem
            question="Do I get lifetime updates?"
            answer="Yes. Every update. Forever. Free."
          />
          <FAQItem
            question="What's the difference between editions?"
            answer="Clinic: 1 department. Plus: 3 departments. Pro: All 26+ departments."
          />
          <FAQItem
            question="Can I upgrade later?"
            answer="Absolutely. Get upgrade credit for your previous purchase."
          />
          <FAQItem
            question="Which departments can I choose in Plus edition?"
            answer="Choose any 3 departments from 26+ available specialties."
          />
          <FAQItem
            question="How many users can I have?"
            answer="Unlimited. Users, patients, records. No caps."
          />
          <FAQItem
            question="What about support?"
            answer="Email support included. Pro gets priority access."
          />
          <FAQItem
            question="Multi-location pricing?"
            answer="One license per facility. Contact us for volume deals."
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
      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer animate-slide-in-up ${highlighted
        ? 'border-4 border-indigo-500 shadow-2xl scale-105 z-10'
        : 'border-2 border-gray-200'
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

      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500`}></div>

      <div className="p-8 relative z-10">
        {/* Large Icon with animation - Replaces the image */}
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br ${color} text-white shadow-2xl transition-all duration-500`}>
            <div className="scale-150">
              {icon}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300">{name}</h3>
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
            <div className="text-5xl font-bold transition-transform duration-300 inline-block">
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

          <div className="text-center mb-4">
            <a href={gumroadLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110">
                Buy {name.split(' ')[1]}
              </Button>
            </a>
          </div>
        </div>

        {/* Features with hover effect */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm transition-transform duration-200">
              <Check className={`h-5 w-5 ${highlighted ? 'text-indigo-600' : 'text-gray-600'} mr-2 mt-0.5 flex-shrink-0 transition-transform duration-200`} />
              <span className="text-gray-700 transition-all duration-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="group bg-white border-2 border-gray-200 rounded-xl p-6 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${Math.abs(question.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 8 * 0.1}s` }}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300">{question}</h3>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
  );
}
