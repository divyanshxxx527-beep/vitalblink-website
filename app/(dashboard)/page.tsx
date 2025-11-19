"use client";

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
      <section className={`bg-gradient-to-r from-emerald-50/80 via-green-50/80 to-emerald-100/80 py-5 sticky top-0 z-50 shadow-lg overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-sm border-b border-white/30 ${isBannerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-10 w-20 h-20 bg-gradient-to-br from-emerald-300/30 to-emerald-400/30 rounded-full blur-xl animate-float-slow opacity-70"></div>
          <div className="absolute top-2 right-20 w-14 h-14 bg-gradient-to-br from-green-400/40 to-emerald-500/40 rounded-full blur-lg animate-float-medium opacity-80"></div>
          <div className="absolute bottom-0 left-1/3 w-10 h-10 bg-gradient-to-br from-emerald-500/35 to-green-600/35 rounded-full blur-xl animate-float-fast opacity-60"></div>
          <div className="absolute top-1 right-1/4 w-8 h-8 bg-gradient-to-br from-green-600/45 to-emerald-700/45 rounded-full blur-lg animate-pulse-slow opacity-90"></div>
          <div className="absolute bottom-2 right-10 w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full blur-2xl animate-float-medium-reverse opacity-75"></div>

          {/* Additional sleek particles */}
          <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-emerald-500/50 rounded-full animate-particle-float opacity-80"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-600/60 rounded-full animate-particle-float opacity-90" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-2/3 w-2.5 h-2.5 bg-green-500/50 rounded-full animate-particle-float opacity-70" style={{ animationDelay: '2s' }}></div>
        </div>

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
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main floating orbs */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-float-slow opacity-80"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-2xl animate-float-medium opacity-70"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-lg animate-float-fast opacity-60"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float-slow-reverse opacity-75"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-emerald-400/15 to-cyan-500/15 rounded-full blur-2xl animate-float-medium-reverse opacity-65"></div>

          {/* Additional morphing shapes */}
          <div className="absolute top-32 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 animate-morph opacity-50"></div>
          <div className="absolute bottom-32 right-1/4 w-8 h-8 bg-gradient-to-br from-cyan-500/25 to-teal-600/25 rounded-full animate-pulse-slow opacity-60"></div>
          <div className="absolute top-1/2 left-20 w-6 h-6 bg-gradient-to-br from-purple-500/40 to-pink-600/40 rounded-full animate-bounce-slow opacity-70"></div>
          <div className="absolute top-3/4 right-1/4 w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-green-600/20 animate-spin-slow opacity-55"></div>

          {/* Particle effects */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-indigo-500/60 rounded-full animate-particle-float opacity-80"></div>
          <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-cyan-500/70 rounded-full animate-particle-float opacity-90" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-2.5 h-2.5 bg-purple-500/50 rounded-full animate-particle-float opacity-75" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <Heart className="h-4 w-4 mr-2 animate-pulse" />
                <span className="text-sm font-semibold">Professional Healthcare Software</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl leading-tight animate-fade-in-up animation-delay-200">
                Complete Hospital Management System
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mt-2 animate-fade-in-up animation-delay-400">One Blink, Full Control</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed animate-fade-in-up animation-delay-600">
                Professional hospital management system with <strong className="text-indigo-600 font-semibold">26+ medical departments</strong>, complete patient records,
                billing, inventory, and advanced features. <span className="text-indigo-700 font-semibold">Runs locally on your server</span> with role-based user access control - <strong className="text-gray-800">no internet required</strong>.
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
              <div className="relative w-full h-96 bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-600 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="relative w-32 h-32">
                        <Image
                          src="/default_logo.png"
                          alt="VitalBlink Logo"
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">VitalBlink</h3>
                    <p className="text-indigo-100 text-lg font-medium">Professional Healthcare Management</p>
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

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50"></div>
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
        <div className="absolute inset-0 bg-grid-white/20"></div>
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
              Experience VitalBlink Pro with full access to all features. No credit card required.
              No limitations. Test it in your hospital environment before making a decision.
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
              No credit card • Full access • 30 days to explore
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-4 border-2 border-indigo-200">
              Why Choose VitalBlink
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">
              Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Complete Hospital Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive hospital management solution trusted by healthcare facilities worldwide
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-indigo-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  Complete Hospital Operations
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Patient management, appointments, queue system, OT control, floor planning, parking management,
                  sterilization tracking, and scanner integration for comprehensive hospital workflow.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-emerald-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Secure & Compliant
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Role-based user access control, complete audit logging, secure medical data storage,
                  and features designed to support healthcare compliance standards. All data stays on your local server.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  26+ Specialized Departments
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Cardiology with ECG, Neurology, Emergency triage, Pediatrics, Surgery OR scheduling,
                  Radiology DICOM viewer, Pathology labs, and 20+ more with department-specific tools.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-cyan-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Database className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Complete Patient Management
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Electronic health records, appointment scheduling, medical history tracking,
                  visit documentation, and secure patient data management with controlled user access.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-rose-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-rose-600 to-pink-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FileText className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  Billing & Inventory
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Automated billing with PDF invoices, insurance claims processing,
                  inventory for medical supplies, pharmacy, equipment with real-time stock alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Services Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">Comprehensive Hospital Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond departments - complete hospital operations management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Syringe className="h-6 w-6" />}
              title="Blood Bank Management"
              description="Donor registration, blood type inventory, transfusion records, and expiration tracking"
            />
            <ServiceCard
              icon={<Ambulance className="h-6 w-6" />}
              title="Ambulance Services"
              description="Fleet management, driver scheduling, trip logging, and emergency coordination"
            />
            <ServiceCard
              icon={<Building2 className="h-6 w-6" />}
              title="Morgue Management"
              description="Body tracking, autopsy records, chain of custody, and respectful documentation"
            />
            <ServiceCard
              icon={<Heart className="h-6 w-6" />}
              title="Vaccination Center"
              description="Vaccine inventory, immunization scheduling, certificate generation, and tracking"
            />
            <ServiceCard
              icon={<Users className="h-6 w-6" />}
              title="Café Management"
              description="Hospital food service with menu planning, order tracking, and nutrition management"
            />
            <ServiceCard
              icon={<Activity className="h-6 w-6" />}
              title="Veterinary Services"
              description="Animal healthcare management integrated with hospital systems"
            />
            <ServiceCard
              icon={<Calendar className="h-6 w-6" />}
              title="Queue Management"
              description="Real-time patient queue system with Socket.IO, announcements, and lobby display"
            />
            <ServiceCard
              icon={<Building2 className="h-6 w-6" />}
              title="OT Control & Pre-Op"
              description="Operating theater scheduling, supplies, sterilization, and surgical planning"
            />
            <ServiceCard
              icon={<Lock className="h-6 w-6" />}
              title="Parking Management"
              description="Hospital parking allocation, vehicle tracking, and access control"
            />
            <ServiceCard
              icon={<Building2 className="h-6 w-6" />}
              title="Floor Plan Management"
              description="Interactive hospital floor plans, room allocation, and navigation"
            />
            <ServiceCard
              icon={<Activity className="h-6 w-6" />}
              title="Patient Scanner System"
              description="Patient identification and workflow management system"
            />
            <ServiceCard
              icon={<Microscope className="h-6 w-6" />}
              title="Medical Image Viewer"
              description="Medical imaging viewer for radiology with secure storage"
            />
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">Powerful Core Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced tools and systems for complete hospital management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Real-time Analytics"
              description="Live dashboards, patient statistics, department performance, and custom reports"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Secure Data Export"
              description="Export patient data securely with file protection and controlled sharing capabilities"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="User Management"
              description="Role-based access with admin, doctor, nurse, receptionist, and staff user roles"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Appointment System"
              description="Multi-provider scheduling, recurring appointments, SMS/email reminders"
            />
            <FeatureCard
              icon={<Database className="h-6 w-6" />}
              title="Medication Database"
              description="ICD code injector, drug information, interaction checking"
            />
            <FeatureCard
              icon={<Lock className="h-6 w-6" />}
              title="Hospital Data Management"
              description="Secure system for managing hospital data with controlled access and permissions"
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Master Reports"
              description="Comprehensive reporting system with PDF/Excel exports and analytics"
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Notification System"
              description="Real-time notifications, Telegram bot integration, alert management"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">Secure & Reliable Platform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Runs locally on your hospital server without requiring internet connection
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TechCard
              title="Deployment"
              items={['Localhost deployment', 'No internet required', 'Your server, your data', 'Multi-user support', 'Cross-platform compatible']}
            />
            <TechCard
              title="Security"
              items={['Role-based access control', 'Secure user authentication', 'Complete audit logging', 'Data backup & recovery', 'Controlled access levels']}
            />
            <TechCard
              title="Features"
              items={['Real-time updates', 'PDF report generation', 'Excel exports', 'Multi-department support', 'Comprehensive analytics']}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-cyan-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Database className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Localhost Deployment
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Runs entirely on your hospital's local server - no internet connection required.
                  Your data stays with you, secure and private. Full control over your infrastructure.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-amber-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Role-Based Access
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Multiple user roles including admin, doctors, nurses, receptionists, and staff.
                  Each role has specific permissions and access levels for secure operation.
                </p>
              </div>
            </div>

            <div className="group mb-8 lg:mb-0 bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 hover:border-violet-400 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  Analytics & Reports
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Real-time dashboards, custom reports, data analytics with insights,
                  and comprehensive audit logging for compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VitalSphere Browser Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <span className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-bold mb-6 border-2 border-blue-200">
                VitalSphere Browser
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">
                Complete Your Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                VitalSphere Browser complements VitalBlink with advanced medical imaging, ECG analysis,
                drug interaction checking, and comprehensive medical tools - all in a secure desktop application.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Medical Image Viewer</span>
                </div>
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">ECG Analysis</span>
                </div>
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Drug Interactions</span>
                </div>
                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
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

      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <span className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-6 border-2 border-indigo-200">
                Get Started Today
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:px-8 hover:py-4 hover:rounded-2xl hover:shadow-2xl transition-all duration-300 inline-block cursor-pointer">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Healthcare Facility?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Join healthcare facilities worldwide that trust VitalBlink for comprehensive
                hospital management. Get started today with our professional software solution.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">One-time purchase, no recurring fees</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Localhost deployment - no internet required</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Role-based user access control</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Unlimited users and departments</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-gray-700 font-medium text-base">Lifetime software updates included</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="flex flex-col gap-5">
                <Link href="/pricing" className="w-full group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
                    <Button
                      size="lg"
                      className="relative text-xl rounded-2xl w-full font-bold py-8 transition-all duration-300 bg-transparent hover:bg-transparent shadow-2xl group-hover:shadow-indigo-500/50"
                    >
                      <span className="flex items-center justify-center">
                        View Pricing Plans
                        <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </Link>
                <Link href="/screenshots" className="w-full group">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl rounded-2xl w-full border-3 border-indigo-300 text-indigo-700 hover:bg-white hover:border-indigo-500 font-bold py-8 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                  >
                    <span className="flex items-center justify-center">
                      See Screenshots
                      <Eye className="ml-3 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const colors = [
    { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', hover: 'hover:border-blue-400', icon: 'text-blue-600', iconBg: 'from-blue-500 to-cyan-600' },
    { bg: 'from-indigo-50 to-purple-50', border: 'border-indigo-200', hover: 'hover:border-indigo-400', icon: 'text-indigo-600', iconBg: 'from-indigo-500 to-purple-600' },
    { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', hover: 'hover:border-emerald-400', icon: 'text-emerald-600', iconBg: 'from-emerald-500 to-green-600' },
    { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', hover: 'hover:border-rose-400', icon: 'text-rose-600', iconBg: 'from-rose-500 to-pink-600' },
    { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', hover: 'hover:border-amber-400', icon: 'text-amber-600', iconBg: 'from-amber-500 to-orange-600' },
    { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', hover: 'hover:border-cyan-400', icon: 'text-cyan-600', iconBg: 'from-cyan-500 to-teal-600' },
  ];
  const colorIndex = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={`group bg-gradient-to-br ${color.bg} border-2 ${color.border} ${color.hover} rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden relative`}>
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color.iconBg} opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500`}></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${color.iconBg} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
            <div className={`relative ${color.icon} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md`}>{icon}</div>
          </div>
          <h3 className="font-bold text-gray-900 text-lg group-hover:scale-105 transition-all duration-300">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const colors = [
    { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', hover: 'hover:border-indigo-400', icon: 'text-indigo-600', iconBg: 'from-indigo-500 to-blue-600' },
    { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', hover: 'hover:border-purple-400', icon: 'text-purple-600', iconBg: 'from-purple-500 to-violet-600' },
    { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', hover: 'hover:border-emerald-400', icon: 'text-emerald-600', iconBg: 'from-emerald-500 to-green-600' },
    { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', hover: 'hover:border-cyan-400', icon: 'text-cyan-600', iconBg: 'from-cyan-500 to-teal-600' },
    { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', hover: 'hover:border-rose-400', icon: 'text-rose-600', iconBg: 'from-rose-500 to-pink-600' },
    { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', hover: 'hover:border-amber-400', icon: 'text-amber-600', iconBg: 'from-amber-500 to-orange-600' },
  ];
  const colorIndex = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={`group relative bg-gradient-to-br ${color.bg} border-2 ${color.border} ${color.hover} rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer`}>
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color.iconBg} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}></div>
      <div className="relative z-10">
        <div className="relative mb-4">
          <div className={`absolute inset-0 bg-gradient-to-br ${color.iconBg} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
          <div className={`relative ${color.icon} w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>{icon}</div>
        </div>
        <h3 className="font-bold text-gray-900 mb-3 text-lg">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TechCard({ title, items }: { title: string; items: string[] }) {
  const colors = [
    { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', hover: 'hover:border-indigo-400', text: 'text-indigo-600', check: 'text-indigo-600', titleHover: 'group-hover:text-indigo-600' },
    { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', hover: 'hover:border-emerald-400', text: 'text-emerald-600', check: 'text-emerald-600', titleHover: 'group-hover:text-emerald-600' },
    { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', hover: 'hover:border-purple-400', text: 'text-purple-600', check: 'text-purple-600', titleHover: 'group-hover:text-purple-600' },
  ];
  const colorIndex = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={`group bg-gradient-to-br ${color.bg} border-2 ${color.border} ${color.hover} rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
      <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${color.titleHover} transition-colors duration-300`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <CheckCircle className={`h-5 w-5 ${color.check} mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
