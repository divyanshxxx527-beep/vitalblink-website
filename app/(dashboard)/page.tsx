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
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();
  const { ref: trialRef, isIntersecting: trialVisible } = useIntersectionObserver();
  const { ref: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [heroScrollY, setHeroScrollY] = useState(0);

  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);
  const card5Ref = useRef<HTMLDivElement | null>(null);
  const card6Ref = useRef<HTMLDivElement | null>(null);
  const card7Ref = useRef<HTMLDivElement | null>(null);
  const card8Ref = useRef<HTMLDivElement | null>(null);
  const card9Ref = useRef<HTMLDivElement | null>(null);
  const card10Ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent, cardRef: React.RefObject<HTMLDivElement | null>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };



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
      setHeroScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main>
      {/* Sleek Auto-Hide Trial Banner */}
      <section className="bg-gradient-to-r from-emerald-50/80 via-green-50/80 to-emerald-100/80 py-5 md:sticky md:top-0 md:z-50 shadow-lg overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-sm border-b border-white/30 translate-y-0 opacity-100">
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30" style={{ transform: `translateY(${heroScrollY * 0.5}px)` }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="sm:text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full mb-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
                <Heart className="h-5 w-5 mr-2 animate-pulse" />
                <span className="text-base font-bold">Enterprise Software at Startup Prices</span>
              </div>
              <h1 className="text-5xl font-black text-gray-900 tracking-tight sm:text-6xl md:text-7xl leading-tight animate-fade-in-up animation-delay-400" style={{ transform: `translateY(${heroScrollY * 0.3}px)` }}>
                <span className="block text-gray-900 mt-2">Complete Hospital System</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mt-2 animate-fade-in-up animation-delay-400">Starting at Just $299</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 sm:mt-5 sm:text-2xl font-semibold leading-relaxed animate-fade-in-up animation-delay-600">
                🏆 Why pay $10,000+/year? Get 26+ Departments • One-Time Payment • Lifetime Updates
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center items-center animate-fade-in-up animation-delay-700">
                <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 shadow-lg">
                  <span className="text-lg font-black text-amber-800">💰 Save 90% vs Competitors</span>
                </div>
                <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-400 shadow-lg">
                  <span className="text-lg font-black text-blue-800">🚀 No Monthly Fees</span>
                </div>
              </div>
                <div className="mt-8 max-w-lg mx-auto animate-fade-in-up animation-delay-800" style={{ transform: `translateY(${heroScrollY * 0.1}px)` }}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/trial" className="w-full sm:w-auto group">
                    <Button
                      size="lg"
                      className="text-lg rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 w-full transition-all duration-300 font-semibold transform hover:-translate-y-1 ripple-effect interactive-card"
                    >
                      <Gift className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Download Free Trial
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
                  <div className="mt-4 animate-fade-in-up animation-delay-1000">
                  <Link href="/features" className="group inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                    <span>Or explore all features</span>
                    <Activity className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-1200" style={{ transform: `translateY(${heroScrollY * 0.2}px)` }}>
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
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8" style={{ perspective: '1000px' }}>
            <div ref={card1Ref} onMouseMove={(e) => handleMouseMove(e, card1Ref)} onMouseLeave={() => handleMouseLeave(card1Ref)} className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:border-white/30 transition-all duration-300 interactive-card hover-lift transition-transform duration-300 ${statsVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-indigo-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">26+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Medical Departments</div>
              </div>
            </div>
            <div ref={card2Ref} onMouseMove={(e) => handleMouseMove(e, card2Ref)} onMouseLeave={() => handleMouseLeave(card2Ref)} className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:border-white/30 transition-all duration-300 interactive-card hover-lift transition-transform duration-300 ${statsVisible ? 'animate-slide-in-left delay-100' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-cyan-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">15+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Hospital Services</div>
              </div>
            </div>
            <div ref={card3Ref} onMouseMove={(e) => handleMouseMove(e, card3Ref)} onMouseLeave={() => handleMouseLeave(card3Ref)} className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:border-white/30 transition-all duration-300 interactive-card hover-lift transition-transform duration-300 ${statsVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-glow-pulse"></div>
                  <div className="relative text-5xl md:text-6xl font-black text-purple-700 group-hover:scale-110 transition-transform duration-300 animate-text-shimmer">100+</div>
                </div>
                <div className="text-xs md:text-sm text-gray-800 font-bold uppercase tracking-wider">Features & Tools</div>
              </div>
            </div>
            <div ref={card4Ref} onMouseMove={(e) => handleMouseMove(e, card4Ref)} onMouseLeave={() => handleMouseLeave(card4Ref)} className={`group cursor-pointer glass-effect-ultra border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:border-white/30 transition-all duration-300 interactive-card hover-lift transition-transform duration-300 ${statsVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
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
      <section ref={trialRef} className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-6 py-3 rounded-full mb-6 border-2 border-emerald-300 shadow-lg">
              <Gift className="h-6 w-6 mr-2 animate-pulse" />
              <span className="text-lg font-bold">Try Before You Buy</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Try <span className="text-emerald-700">Free</span> for 30 Days
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
              Full Access • No Credit Card • No Commitment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Instant Access
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Download and start in minutes. Zero payment info needed.
              </p>
            </div>

            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Everything Unlocked
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                All 26+ departments. Every Pro feature. Zero restrictions.
              </p>
            </div>

            <div className="group glass-effect-ultra border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                Full Month
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Test with your team. Import real data. Make the right decision.
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
      <section ref={featuresRef} className="py-20 bg-white" style={{ transform: `translateY(${heroScrollY * 0.02}px)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">VitalBlink</span>?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
              Everything your hospital needs. Nothing it doesn't.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <div ref={card5Ref} onMouseMove={(e) => handleMouseMove(e, card5Ref)} onMouseLeave={() => handleMouseLeave(card5Ref)} className="group bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                26+ Departments
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                From Cardiology to Emergency. Every specialty covered.
              </p>
            </div>

            <div ref={card6Ref} onMouseMove={(e) => handleMouseMove(e, card6Ref)} onMouseLeave={() => handleMouseLeave(card6Ref)} className="group bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Bank-Level Security
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                Your data. Your server. Complete control.
              </p>
            </div>

            <div ref={card7Ref} onMouseMove={(e) => handleMouseMove(e, card7Ref)} onMouseLeave={() => handleMouseLeave(card7Ref)} className="group bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Smart EHR System
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                Records, scheduling, history. All in one place.
              </p>
            </div>

            <div ref={card8Ref} onMouseMove={(e) => handleMouseMove(e, card8Ref)} onMouseLeave={() => handleMouseLeave(card8Ref)} className="group bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:border-cyan-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Automated Billing
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                Bills, claims, inventory. Fully automated.
              </p>
            </div>

            <div ref={card9Ref} onMouseMove={(e) => handleMouseMove(e, card9Ref)} onMouseLeave={() => handleMouseLeave(card9Ref)} className="group bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 hover:shadow-2xl hover:border-rose-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-rose-600 to-pink-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Live Insights
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                Real-time data. Instant decisions. Better outcomes.
              </p>
            </div>

            <div ref={card10Ref} onMouseMove={(e) => handleMouseMove(e, card10Ref)} onMouseLeave={() => handleMouseLeave(card10Ref)} className="group bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transition-transform duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 text-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                Works Offline
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                No cloud. No subscriptions. Total independence.
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
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">VitalSphere</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
                Medical imaging. ECG analysis. Drug interactions. All in one browser.
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
                    <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 transition-all duration-500">
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
          <h2 className="text-5xl font-black mb-4">
            Ready to Transform Your Hospital?
          </h2>
          <p className="text-2xl text-indigo-100 mb-8 leading-relaxed font-semibold">
            One Payment • Lifetime Access • Forever Yours
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

