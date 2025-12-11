"use client";

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Heart, Shield, Zap, Users, Activity, Database, FileText, TrendingUp,
  Building2, Stethoscope, Microscope, BrainCircuit, Syringe, AlertCircle, Calendar,
  Ambulance, Bone, Eye, Baby, Clock, BarChart3, Lock, CheckCircle, Star, Gift
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/hooks';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date('2025-12-11T11:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsBannerVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsBannerVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main>
      {/* Sleek Auto-Hide Trial Banner */}
      <section className={`bg-gradient-to-r from-emerald-50/80 via-green-50/80 to-emerald-100/80 py-5 md:sticky md:top-0 md:z-50 shadow-lg overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-sm border-b border-white/30 ${isBannerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/trial" className="block group">
            <div className="flex items-center justify-center gap-6 text-gray-900 cursor-pointer hover:scale-102 transition-all duration-300 magnetic-hover interactive-card p-5 rounded-3xl backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-emerald-500/30 hover:border-white/60">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-lg animate-glow-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full blur-md animate-pulse-slow opacity-60"></div>
                <Gift className="relative h-10 w-10 animate-bounce-slow group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span className="text-2xl font-black animate-text-shimmer group-hover:scale-105 transition-transform duration-300 tracking-tight text-emerald-800">
                  🎉 FREE 30-DAY TRIAL
                </span>
                <span className="text-lg font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300 text-gray-700">
                  No Credit Card • Full Access • Instant Download
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-lg animate-glow-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-md animate-pulse-slow opacity-60"></div>
                <ArrowRight className="relative h-8 w-8 animate-bounce-slow group-hover:translate-x-2 group-hover:scale-125 transition-all duration-500 drop-shadow-lg" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <Heart className="h-4 w-4 mr-2 animate-pulse" />
                <span className="text-sm font-semibold">Professional Healthcare Software</span>
              </div>
              {/* Launch Countdown */}
              <div className="mb-6 animate-fade-in-up animation-delay-200">
                <div className="inline-flex flex-col sm:flex-row items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 sm:px-8 py-4 rounded-full shadow-lg border-2 border-orange-200">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                    <Clock className="h-6 w-6 mr-4 animate-pulse" />
                    <span className="text-lg sm:text-xl font-bold">Launch Countdown:</span>
                  </div>
                  <div className="flex gap-2 sm:gap-6 text-center">
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-5xl font-black">{timeLeft.days}</span>
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Days</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-5xl font-black">{timeLeft.hours}</span>
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Hours</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-5xl font-black">{timeLeft.minutes}</span>
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Minutes</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-5xl font-black">{timeLeft.seconds}</span>
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl leading-tight animate-fade-in-up animation-delay-400">
                Complete Hospital Management System
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mt-2 animate-fade-in-up animation-delay-400">One Blink, Full Control</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed animate-fade-in-up animation-delay-600">
                Streamline operations with department-based tools, patient records, billing, inventory, and analytics. Runs locally — offline capable.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 animate-fade-in-up animation-delay-800">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/trial" className="w-full sm:w-auto group">
                    <Button
                      size="lg"
                      className="text-lg rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 w-full transition-all duration-300 font-semibold transform hover:-translate-y-1 ripple-effect interactive-card"
                    >
                      <Gift className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/pricing" className="w-full sm:w-auto group">
                    <Button
                      size="lg"
                      className="text-lg rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 w-full transition-all duration-300 font-semibold transform hover:-translate-y-1 ripple-effect interactive-card"
                    >
                      View Pricing
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link href="/vitalsphere" className="w-full sm:w-auto group">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 w-full transition-all duration-300 font-semibold transform hover:-translate-y-1 ripple-effect interactive-card glass-effect-morphism"
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Get VitalSphere Browser
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 text-center lg:text-left animate-fade-in-up animation-delay-1000">
                  <Link href="/features" className="group inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                    <span>Or explore all features</span>
                    <Activity className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-1200">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  No Subscription
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  One-Time Payment
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Lifetime Updates
                </span>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center animate-fade-in-right animation-delay-400">
              <div className="relative w-full h-96 bg-transparent rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-900 text-center p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-48 h-48 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="relative w-48 h-48">
                        <Image
                          src="/logo.png"
                          alt="VitalBlink Logo"
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">VitalBlink</h3>
                    <p className="text-gray-600 text-lg font-medium">Professional Healthcare Management</p>
                    <div className="mt-6 flex justify-center gap-2">
                      <span className="w-3 h-3 bg-gray-900 rounded-full animate-pulse"></span>
                      <span className="w-3 h-3 bg-gray-900 rounded-full animate-pulse delay-75"></span>
                      <span className="w-3 h-3 bg-gray-900 rounded-full animate-pulse delay-150"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300 interactive-card hover-lift ${statsVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-indigo-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">26+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Medical Departments</div>
              </div>
            </div>
            <div className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300 interactive-card hover-lift ${statsVisible ? 'animate-slide-in-left delay-100' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-cyan-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">15+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Hospital Services</div>
              </div>
            </div>
            <div className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300 interactive-card hover-lift ${statsVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-purple-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">100+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Features & Tools</div>
              </div>
            </div>
            <div className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300 interactive-card hover-lift ${statsVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-emerald-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">24/7</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full mb-6 border-2 border-emerald-300 shadow-lg">
              <Gift className="h-6 w-6 mr-2 animate-pulse" />
              <span className="text-lg font-bold">Try Before You Buy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              30-Day <span className="text-emerald-700">Free Trial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Try VitalBlink free for 30 days with complete access to all features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                No Credit Card Required
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Start your free trial instantly without entering any payment information. Just download and begin exploring.
              </p>
            </div>

            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Full Feature Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access all 26+ departments, AI tools, billing, inventory, and every feature available in VitalBlink Pro.
              </p>
            </div>

            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                30 Full Days
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Take a full month to test VitalBlink with your team, import data, and ensure it meets your hospital's needs.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/trial">
              <Button
                size="lg"
                className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 rounded-full py-8 px-12 font-bold group"
              >
                <Gift className="mr-3 h-7 w-7 group-hover:animate-pulse" />
                Start Your Free Trial Now
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              No credit card • All features • 30-day trial
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">VitalBlink</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete hospital management solution with advanced features for modern healthcare facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-indigo-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                26+ Specialized Departments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cardiology, Neurology, Emergency, Pediatrics, Surgery, Radiology, Pathology, and more with department-specific tools.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-emerald-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Secure & Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Role-based access, audit logging, secure data storage. All data stays on your local server.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Complete Patient Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Electronic health records, appointment scheduling, medical history, and secure patient data management.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Billing & Inventory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated billing, insurance claims, inventory tracking for supplies, pharmacy, and equipment.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-rose-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-rose-600 to-pink-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Live dashboards, patient statistics, department performance, and custom reports for data-driven decisions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                Local Deployment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Runs entirely on your hospital server. No internet required. Your data stays secure and private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VitalSphere Browser Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <span className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-bold mb-6 border-2 border-blue-200">
                VitalSphere Browser
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Your Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                VitalSphere Browser complements VitalBlink with advanced medical imaging, ECG analysis, drug interaction checking, and comprehensive medical tools.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Medical Image Viewer</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">ECG Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Drug Interactions</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Medical References</span>
                </div>
              </div>
              <Link href="/vitalsphere" className="inline-flex items-center group">
                <Button
                  size="lg"
                  className="text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 rounded-full font-semibold"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Learn About VitalSphere Browser
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-600 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="relative w-32 h-32">
                        <Image
                          src="/vitalsphere-logo.png"
                          alt="VitalSphere Logo"
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">VitalSphere</h3>
                    <p className="text-blue-100 text-lg font-medium">Advanced Medical Browser</p>
                    <div className="mt-6 flex justify-center gap-2">
                      <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                      <span className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></span>
                      <span className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Join healthcare facilities worldwide. One-time purchase — lifetime updates included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="text-lg rounded-full bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 w-full font-bold py-6 shadow-xl transition-all duration-300 ripple-effect interactive-card"
              >
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/screenshots" className="w-full sm:w-auto group">
              <Button
                size="lg"
                variant="outline"
                className="text-lg rounded-full bg-indigo-500 hover:bg-indigo-400 border-2 border-white text-white w-full font-bold py-6 transition-all duration-300 hover:scale-105 ripple-effect interactive-card"
              >
                See Screenshots
                <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}

