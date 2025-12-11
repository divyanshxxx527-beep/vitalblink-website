'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, FileText, HelpCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-indigo-50/50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full animate-pulse"></div>
            <CheckCircle className="h-24 w-24 text-indigo-600 relative z-10" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-slide-in-up">
            Thank You for Downloading!
          </h1>
          <p className="text-lg text-gray-700 mb-4 animate-slide-in-up animation-delay-100">
            We're excited to have you on board. Your download will begin shortly.
          </p>
          <p className="text-gray-600 animate-slide-in-up animation-delay-200">
            Check your downloads folder for the VitalBlink installation package.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {/* Documentation Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-300">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Setup Guide</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Follow our step-by-step installation and configuration guide.
            </p>
            <Button asChild variant="outline" className="w-full border-indigo-200 hover:bg-indigo-50">
              <Link href="/setup">View Setup Guide</Link>
            </Button>
          </div>

          {/* Documentation Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-400">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Documentation</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Explore our comprehensive documentation and API reference.
            </p>
            <Button asChild variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
              <Link href="/documentation">Read Docs</Link>
            </Button>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-500">
            <div className="flex justify-center mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <HelpCircle className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Support</h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              Need help? Contact our support team anytime.
            </p>
            <Button asChild variant="outline" className="w-full border-cyan-200 hover:bg-cyan-50">
              <Link href="/support">Get Support</Link>
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl border border-indigo-200/30 p-8 text-center mb-8 animate-slide-in-up animation-delay-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help. Reach out to us at:
          </p>
          <a
            href="mailto:vitalblink.services@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-lg"
          >
            <Mail className="h-5 w-5" />
            vitalblink.services@gmail.com
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-600 animate-slide-in-up animation-delay-700">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Back to Home
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/pricing" className="hover:text-indigo-600 transition-colors">
            View Pricing
          </Link>
          <span className="hidden sm:block">•</span>
          <Link href="/features" className="hover:text-indigo-600 transition-colors">
            View Features
          </Link>
        </div>
      </div>
    </div>
  );
}
