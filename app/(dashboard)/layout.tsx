'use client';

import Link from 'next/link';
import { use, useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/features"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Features
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
        </Link>
        <Link
          href="/departments"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Departments
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-100"></span>
        </Link>
        <Link
          href="/documentation"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Documentation
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-200"></span>
        </Link>
        <Link
          href="/setup"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Setup Guide
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-300"></span>
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Pricing
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-400"></span>
        </Link>
        <Link
          href="/support"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Support
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-500"></span>
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-550"></span>
        </Link>
        <Link
          href="/vitalsphere"
          className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover"
        >
          VitalSphere Browser
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up animation-delay-600"></span>
        </Link>
        <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
          <Link href="/pricing">Get Started</Link>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-200/30 shadow-lg animate-in slide-in-from-top duration-300 glass-effect-ultra z-60">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/departments"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Departments
            </Link>
            <Link
              href="/documentation"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/setup"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Setup Guide
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-550"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/vitalsphere"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all duration-300 animate-slide-in-up animation-delay-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VitalSphere Browser
            </Link>
            <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 w-full hover-lift ripple-effect">
              <Link href="/pricing">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200/30 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg glass-effect-ultra">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-3 group magnetic-hover">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-glow-pulse">
            <Image
              src="/default_logo.png"
              alt="VitalBlink Logo"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 hover-lift">
            Vital<span className="text-indigo-600 group-hover:text-indigo-700 text-gradient-animated">Blink</span>
          </span>
        </Link>
        <div className="flex items-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      <Header />
      {children}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto relative overflow-hidden glass-effect-ultra">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-pink-900/10 animate-gradient-shift"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-float-fast"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg">
                  <Image
                    src="/default_logo.png"
                    alt="VitalBlink Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-xl font-bold">
                  Vital<span className="text-indigo-500">Blink</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional hospital management system with 26+ medical departments,
                complete patient records, billing, inventory, and advanced security features.
              </p>
              <p className="text-xs text-gray-500 mb-4">
                One blink, full control. ❤️
              </p>
              <p className="text-sm text-gray-500">
                © 2025 VitalBlink. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/screenshots" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Screenshots
                  </Link>
                </li>
                <li>
                  <Link href="/requirements" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Requirements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/documentation" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/setup" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Setup Guide
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Support
                  </Link>
                </li>
                <li>
                  <a href="https://x.com/vitalblink" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCfFuZTlKNywVmA1v8GzuP4Q" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for healthcare professionals</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
