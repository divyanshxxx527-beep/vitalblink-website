import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Heart, Activity, Eye, Calculator, Shield, Zap, Download, Star, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getDownloadLink } from '@/lib/config';

export default function VitalSpherePage() {
    const vitalsphereDownload = getDownloadLink('vitalsphere');
    
    return (
        <>
            {/* Header */}
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
                        <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 hover-lift">Vital<span className="text-indigo-600 group-hover:text-indigo-700 text-gradient-animated">Blink</span></span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Features
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/departments" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Departments
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/documentation" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Documentation
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/setup" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Setup Guide
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Pricing
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Support
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            Blog
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Link href="/vitalsphere" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group magnetic-hover">
                            VitalSphere Browser
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-full transition-all duration-300 animate-slide-in-up"></span>
                        </Link>
                        <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                            <Link href="/pricing">Get Started</Link>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
        <main>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                                <Heart className="h-4 w-4 mr-2" />
                                <span className="text-sm font-semibold">Clinical Browser</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl leading-tight">
                                VitalSphere
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">Medical Browser & Toolkit</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
                                Cross-platform desktop app combining a medical browser, DICOM imaging, and 85+ medical calculators. Built with Electron for Windows, macOS, and Linux.
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={vitalsphereDownload.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        Download VitalSphere
                                    </a>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Version {vitalsphereDownload.version} • {(vitalsphereDownload as any).fileSize || 'N/A'} • Windows
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Cross-Platform
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Offline Capable
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Privacy Focused
                                </span>
                            </div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-grid-white/10"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-center p-8 relative z-10">
                                        <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            <div className="relative w-32 h-32">
                                                <Image
                                                    src="/vitalsphere-logo.png"
                                                    alt="VitalSphere Logo"
                                                    width={128}
                                                    height={128}
                                                    className="object-contain drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">VitalSphere</h3>
                                        <p className="text-blue-100 text-lg font-medium">Professional Healthcare Browser</p>
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
            <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-gray-100/50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
                        <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-300">
                            <div className="text-center">
                                <div className="relative inline-block mb-3">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <Shield className="relative w-16 h-16 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-wider">HIPAA Compliant</div>
                            </div>
                        </div>
                        <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-all duration-300">
                            <div className="text-center">
                                <div className="relative inline-block mb-3">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-violet-700 group-hover:scale-110 transition-transform duration-300">DICOM</div>
                                </div>
                                <div className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-wider">Imaging Support</div>
                            </div>
                        </div>
                        <div className="group cursor-pointer bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:border-red-400 transition-all duration-300">
                            <div className="text-center">
                                <div className="relative inline-block mb-3">
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-rose-700 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-16 h-16 inline-block" />
                                    </div>
                                </div>
                                <div className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-wider">Custom Browser</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Powerful Features in One Platform
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Everything you need for modern medical practice - from custom medical browsing to advanced diagnostics
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border-2 border-blue-100 dark:border-gray-700 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Custom Browser
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Purpose-built medical browser with advanced features, bookmarks, history, and download management.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border-2 border-green-100 dark:border-gray-700 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Medical Imaging
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Advanced DICOM viewer with measurements, annotations, filters, and multi-series support.
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border-2 border-purple-100 dark:border-gray-700 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Privacy & Security
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Incognito mode, auto-lock, panic mode (F9), and HIPAA-compliant offline operation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Feature Sections */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {/* Browser Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-6">
                                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    Custom Medical Browser
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                A purpose-built browser designed specifically for healthcare professionals with integrated medical tools and optimized workflow features.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Tab Interface</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Organized browsing with tab management and workspace organization</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Bookmark Management</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Save and organize medical resources, journals, and reference sites</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Download Manager</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Secure file downloads with progress tracking and organization</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">History Tracking</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Complete browsing history with search and filtering capabilities</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Enhanced Security</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Context isolation, secure connections, and privacy protection</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Medical Tools Panel</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Quick access to calculators, references, and clinical tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medical Imaging */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-6">
                                <Eye className="w-8 h-8 text-green-600 dark:text-green-400 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    Advanced Medical Imaging
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                Professional DICOM viewer with comprehensive imaging tools for radiology and diagnostic imaging.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">DICOM Support</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full DICOM format support with metadata display and series management</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Measurement Tools</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Distance, angle, area measurements with calibration and annotations</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Image Filters</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Brightness, contrast, zoom, pan, and advanced image processing filters</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Multi-Series Viewer</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Navigate through image series with thumbnail previews and comparison tools</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Annotation System</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Add text, arrows, shapes, and save annotations for case documentation</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Export Capabilities</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Export images, reports, and measurements in multiple formats</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Privacy & Security */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-6">
                                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    Privacy & Security Features
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                Built with healthcare privacy in mind, featuring HIPAA-compliant offline operation and advanced security controls.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Incognito Mode</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Private browsing with no history tracking (Ctrl+Shift+N)</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Auto-Lock Protection</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Automatic screen lock after 5 minutes of inactivity</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Panic Mode (F9)</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Quick emergency exit for sensitive situations</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">HIPAA Mode</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Enhanced privacy settings for healthcare compliance</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Offline Operation</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Fully functional without external API dependencies</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Clear Browsing Data</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive data clearing options in settings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 mb-16 border border-blue-200 dark:border-gray-700">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            Technical Specifications
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Framework</h3>
                                <p className="text-gray-600 dark:text-gray-300">Electron 28.x with Chromium engine</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Medical Imaging</h3>
                                <p className="text-gray-600 dark:text-gray-300">Cornerstone.js DICOM viewer</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Runtime</h3>
                                <p className="text-gray-600 dark:text-gray-300">Node.js 18.x or higher</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Storage</h3>
                                <p className="text-gray-600 dark:text-gray-300">electron-store (persistent settings)</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
                                <p className="text-gray-600 dark:text-gray-300">Context isolation & sandboxing enabled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Requirements */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            System Requirements
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Minimum Requirements</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        Windows 10 / macOS 10.13 / Ubuntu 18.04
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        2GB RAM (4GB recommended)
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        500MB free disk space
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        Internet connection for initial setup
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Configuration</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                                        Windows 11 / macOS 12+ / Ubuntu 20.04+
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                                        8GB RAM for optimal performance
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                                        SSD storage for faster loading
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                                        Multi-monitor setup supported
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Transform Your Medical Workflow?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join healthcare professionals worldwide who trust VitalSphere for custom medical browsing, medical imaging,
                            and comprehensive clinical tools. Download today and experience the difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={vitalsphereDownload.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download for Windows
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                Back to VitalBlink
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}