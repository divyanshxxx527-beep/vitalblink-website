'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, FileText, HelpCircle, Download } from 'lucide-react';

export default function VitalSphereThankYouPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-blue-50/50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
            <CheckCircle className="h-24 w-24 text-blue-600 relative z-10" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-slide-in-up">
            Thank You for Installing VitalSphere!
          </h1>
          <p className="text-lg text-gray-700 mb-4 animate-slide-in-up animation-delay-100">
            Your advanced medical browser and analysis toolkit is ready to use.
          </p>
          <p className="text-gray-600 animate-slide-in-up animation-delay-200">
            Check your applications folder or desktop for the VitalSphere Browser shortcut.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {/* Features Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-300">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Getting Started</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Launch VitalSphere and explore 85+ medical calculators, DICOM imaging, and ECG analysis tools.
            </p>
            <Button asChild variant="outline" className="w-full border-blue-200 hover:bg-blue-50">
              <Link href="/vitalsphere">Explore Features</Link>
            </Button>
          </div>

          {/* Documentation Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-400">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Documentation</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Learn how to use all VitalSphere features with our comprehensive guides.
            </p>
            <Button asChild variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
              <Link href="/documentation">Read Docs</Link>
            </Button>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-500">
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <HelpCircle className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Support</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Need help? Our support team is here to assist you.
            </p>
            <Button asChild variant="outline" className="w-full border-cyan-200 hover:bg-cyan-50">
              <Link href="/support">Get Support</Link>
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl border border-blue-200/30 p-8 mb-8 animate-slide-in-up animation-delay-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">VitalSphere Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">85+ Medical Calculators</p>
                <p className="text-sm text-gray-600">Quick calculations for clinical decision-making</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">DICOM Imaging</p>
                <p className="text-sm text-gray-600">View and analyze medical images</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">ECG Analysis</p>
                <p className="text-sm text-gray-600">Advanced cardiac signal analysis tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Cross-Platform</p>
                <p className="text-sm text-gray-600">Works on Windows, macOS, and Linux</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl border border-blue-200/30 p-8 text-center mb-8 animate-slide-in-up animation-delay-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help. Reach out to us at:
          </p>
          <a
            href="mailto:contact@vitalblink.store"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-lg"
          >
            <Mail className="h-5 w-5" />
            contact@vitalblink.store
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-600 animate-slide-in-up animation-delay-800">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Back to Home
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/vitalsphere" className="hover:text-blue-600 transition-colors">
            VitalSphere Browser
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/support" className="hover:text-blue-600 transition-colors">
            View Support
          </Link>
        </div>
      </div>
    </div>
  );
}
