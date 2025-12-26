'use client';

import { Activity, Heart, Shield, Users, Database, Calendar, FileText, BarChart3, Utensils, Syringe, Hospital, Settings, X, Maximize2, ZoomIn, Camera, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ScreenshotsPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-indigo-50">
            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-xl"
                        aria-label="Close fullscreen"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative max-w-7xl max-h-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                width={1920}
                                height={1080}
                                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-center mt-4 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                                {selectedImage.title}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-bold mb-6 shadow-md">
                        <Camera className="h-4 w-4 mr-2" />
                        Visual Tour
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="text-gray-900">VitalBlink</span> <span className="text-indigo-600">Screenshots</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore the interface and key features of VitalBlink. <span className="block mt-2 text-indigo-600 font-semibold">Click a screenshot to view fullscreen</span>
                    </p>
                </div>

                {/* Feature Categories Tabs */}
                <div className="mb-12 flex flex-wrap gap-3 justify-center">
                    <span className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg">
                        All Screenshots
                    </span>
                    <span className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-indigo-400 transition-colors cursor-pointer">
                        Core System
                    </span>
                    <span className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-indigo-400 transition-colors cursor-pointer">
                        Departments
                    </span>
                    <span className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-indigo-400 transition-colors cursor-pointer">
                        Management
                    </span>
                </div>

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        Live Interface Gallery
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Screenshots</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real screenshots showcasing the user interface and features.
                    </p>
                </div>

                {/* Screenshot Sections */}
                <div className="space-y-8">{/* Login */}
                    <ScreenshotSection
                        title="Secure Login & Authentication"
                        description="Professional login interface with role-based access control, secure authentication, and multi-user support for hospital staff."
                        icon={<Shield className="h-8 w-8" />}
                        features={[
                            'Secure login system',
                            'Role-based authentication',
                            'Password protection',
                            'Session management',
                            'Multi-user support',
                            'Access control'
                        ]}
                        screenshotPath="/screenshots/login.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Master Dashboard */}
                    <ScreenshotSection
                        title="Master Dashboard & Analytics"
                        description="Master dashboard with live metrics, patient stats, and admin controls."
                        icon={<BarChart3 className="h-8 w-8" />}
                        features={[
                            'Hospital-wide analytics',
                            'Real-time statistics',
                            'Department overview',
                            'Patient census',
                            'Revenue tracking',
                            'Administrative controls'
                        ]}
                        screenshotPath="/screenshots/master-dashboard.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Dashboard */}
                    <ScreenshotSection
                        title="Department Dashboard"
                        description="Department dashboard with live metrics, appointments, and quick actions."
                        icon={<Activity className="h-8 w-8" />}
                        features={[
                            'Live patient statistics',
                            'Department metrics',
                            'Recent appointments',
                            'Quick action menu',
                            'Notification center',
                            'Task management'
                        ]}
                        screenshotPath="/screenshots/dashboard.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Patient Management */}
                    <ScreenshotSection
                        title="Patient Management System"
                        description="Patient records, appointments, prescriptions, and treatment history."
                        icon={<Users className="h-8 w-8" />}
                        features={[
                            'Patient registration',
                            'Medical history tracking',
                            'Visit records',
                            'Prescription management',
                            'Document uploads',
                            'Search & filters'
                        ]}
                        screenshotPath="/screenshots/patient manager.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Appointment Manager */}
                    <ScreenshotSection
                        title="Appointment Scheduling"
                        description="Advanced appointment management system with calendar view, multi-provider scheduling, and automated reminders."
                        icon={<Calendar className="h-8 w-8" />}
                        features={[
                            'Calendar interface',
                            'Appointment booking',
                            'Doctor scheduling',
                            'Patient reminders',
                            'Appointment history',
                            'Status tracking'
                        ]}
                        screenshotPath="/screenshots/appointment manager.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Cardiology */}
                    <ScreenshotSection
                        title="Cardiology Department"
                        description="Specialized cardiology interface with ECG management, cardiac test results, patient vitals monitoring, and specialized assessment forms."
                        icon={<Heart className="h-8 w-8" />}
                        features={[
                            'ECG report management',
                            'Cardiac test tracking',
                            'Vitals monitoring',
                            'Heart rate analysis',
                            'Treatment plans',
                            'Patient consultations'
                        ]}
                        screenshotPath="/screenshots/cardiology.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Neurology */}
                    <ScreenshotSection
                        title="Neurology Department"
                        description="Comprehensive neurology interface for neurological assessments, brain imaging reports, and specialized neurological care management."
                        icon={<Activity className="h-8 w-8" />}
                        features={[
                            'Neurological assessments',
                            'Brain imaging reports',
                            'Treatment protocols',
                            'Patient monitoring',
                            'Consultation records',
                            'Follow-up scheduling'
                        ]}
                        screenshotPath="/screenshots/neurology.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Billing Dashboard */}
                    <ScreenshotSection
                        title="Billing Dashboard"
                        description="Comprehensive billing system with real-time revenue tracking, payment management, invoice generation, and financial analytics."
                        icon={<FileText className="h-8 w-8" />}
                        features={[
                            'Revenue dashboard',
                            'Payment tracking',
                            'Invoice management',
                            'Financial analytics',
                            'Outstanding bills',
                            'Payment history'
                        ]}
                        screenshotPath="/screenshots/billing-dashboard.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Billing Settings */}
                    <ScreenshotSection
                        title="Billing Configuration"
                        description="Advanced billing settings with rate management, insurance configuration, tax settings, and billing preferences customization."
                        icon={<Settings className="h-8 w-8" />}
                        features={[
                            'Rate configuration',
                            'Insurance setup',
                            'Tax management',
                            'Payment methods',
                            'Billing templates',
                            'Discount rules'
                        ]}
                        screenshotPath="/screenshots/billing-settings.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Inventory Management */}
                    <ScreenshotSection
                        title="Inventory Management"
                        description="Complete inventory control for medical supplies, pharmacy, equipment tracking, with stock alerts and automated reordering capabilities."
                        icon={<Database className="h-8 w-8" />}
                        features={[
                            'Stock level monitoring',
                            'Low stock alerts',
                            'Supplier management',
                            'Purchase tracking',
                            'Expiration monitoring',
                            'Usage analytics'
                        ]}
                        screenshotPath="/screenshots/inventory.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Blood Bank */}
                    <ScreenshotSection
                        title="Blood Bank Management"
                        description="Specialized blood bank system for donor management, blood inventory, compatibility tracking, and emergency blood request handling."
                        icon={<Activity className="h-8 w-8" />}
                        features={[
                            'Donor database',
                            'Blood inventory',
                            'Blood type tracking',
                            'Compatibility checking',
                            'Request management',
                            'Expiration alerts'
                        ]}
                        screenshotPath="/screenshots/blood bank.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* OT Control */}
                    <ScreenshotSection
                        title="Operating Theater Control"
                        description="Advanced OR management system with surgery scheduling, theater allocation, equipment tracking, and surgical staff coordination."
                        icon={<Hospital className="h-8 w-8" />}
                        features={[
                            'Surgery scheduling',
                            'Theater allocation',
                            'Equipment tracking',
                            'Staff coordination',
                            'Pre-op checklists',
                            'Post-op records'
                        ]}
                        screenshotPath="/screenshots/ot control.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Chef Dashboard */}
                    <ScreenshotSection
                        title="Kitchen Dashboard"
                        description="Comprehensive kitchen management interface for meal planning, order tracking, dietary requirements, and food service coordination."
                        icon={<Utensils className="h-8 w-8" />}
                        features={[
                            'Meal order tracking',
                            'Menu management',
                            'Dietary requirements',
                            'Kitchen inventory',
                            'Order scheduling',
                            'Service tracking'
                        ]}
                        screenshotPath="/screenshots/chef-dashbaord.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Pre-defined Food Items */}
                    <ScreenshotSection
                        title="Menu & Food Management"
                        description="Pre-defined food item database with nutritional information, dietary categories, meal planning, and customizable menu options."
                        icon={<Utensils className="h-8 w-8" />}
                        features={[
                            'Food item database',
                            'Nutritional information',
                            'Dietary categories',
                            'Meal combinations',
                            'Price management',
                            'Allergen tracking'
                        ]}
                        screenshotPath="/screenshots/pre define food items.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Vaccination Dashboard */}
                    <ScreenshotSection
                        title="Vaccination Management"
                        description="Complete vaccination tracking system with immunization schedules, vaccine inventory, patient vaccination records, and reminder notifications."
                        icon={<Syringe className="h-8 w-8" />}
                        features={[
                            'Vaccination records',
                            'Immunization schedules',
                            'Vaccine inventory',
                            'Batch tracking',
                            'Reminder system',
                            'Certificate generation'
                        ]}
                        screenshotPath="/screenshots/vaccination_dashbaord.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Floor Management */}
                    <ScreenshotSection
                        title="Floor & Bed Management"
                        description="Hospital floor and bed allocation system with real-time bed availability, patient assignment, and ward management capabilities."
                        icon={<Hospital className="h-8 w-8" />}
                        features={[
                            'Bed availability tracking',
                            'Patient assignment',
                            'Ward management',
                            'Floor navigation',
                            'Occupancy reports',
                            'Cleaning schedules'
                        ]}
                        screenshotPath="/screenshots/floor managment.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* User Manager */}
                    <ScreenshotSection
                        title="User Management"
                        description="Comprehensive user administration with role assignment, permission control, staff management, and access monitoring."
                        icon={<Users className="h-8 w-8" />}
                        features={[
                            'User creation',
                            'Role assignment',
                            'Permission management',
                            'Staff profiles',
                            'Access control',
                            'Activity logs'
                        ]}
                        screenshotPath="/screenshots/user-manager.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* User Settings */}
                    <ScreenshotSection
                        title="User Settings & Preferences"
                        description="Individual user settings with profile customization, notification preferences, security options, and personalized configurations."
                        icon={<Settings className="h-8 w-8" />}
                        features={[
                            'Profile management',
                            'Password settings',
                            'Notification preferences',
                            'Theme customization',
                            'Language options',
                            'Privacy controls'
                        ]}
                        screenshotPath="/screenshots/user-settings.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Reports Settings */}
                    <ScreenshotSection
                        title="Reports & Analytics Configuration"
                        description="Advanced reporting configuration with customizable report templates, scheduled reports, export options, and analytics dashboards."
                        icon={<BarChart3 className="h-8 w-8" />}
                        features={[
                            'Report templates',
                            'Scheduled reports',
                            'Export formats',
                            'Analytics dashboards',
                            'Custom queries',
                            'Data visualization'
                        ]}
                        screenshotPath="/screenshots/reports-settings.png"
                        onImageClick={setSelectedImage}
                    />

                    {/* Medical Tools */}
                    <ScreenshotSection
                        title="Medical Tools & Utilities"
                        description="Comprehensive suite of medical calculators, drug databases, clinical guidelines, and diagnostic tools for healthcare professionals."
                        icon={<Activity className="h-8 w-8" />}
                        features={[
                            'Medical calculators',
                            'Drug database',
                            'Clinical guidelines',
                            'Diagnostic tools',
                            'Reference materials',
                            'Protocol templates'
                        ]}
                        screenshotPath="/screenshots/tools.png"
                        onImageClick={setSelectedImage}
                    />
                </div>

                {/* Statistics Banner */}
                <section className="mt-20 mb-16">
                    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/10"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-3">
                                    Complete Hospital Solution
                                </h2>
                                <p className="text-indigo-100 text-lg">
                                    Everything you need in one powerful system
                                </p>
                            </div>
                            <div className="grid md:grid-cols-4 gap-6 text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className="text-4xl font-bold text-white mb-2">26+</div>
                                    <div className="text-indigo-100 font-medium">Medical Departments</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className="text-4xl font-bold text-white mb-2">20+</div>
                                    <div className="text-indigo-100 font-medium">Core Features</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                                    <div className="text-indigo-100 font-medium">Local Control</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <div className="text-4xl font-bold text-white mb-2">∞</div>
                                    <div className="text-indigo-100 font-medium">Lifetime Updates</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Note */}
                <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                        <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        ✓ Production-Ready System
                    </h3>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        VitalBlink is a fully operational hospital management system <strong className="text-green-700">trusted by healthcare facilities</strong>.
                        All screenshots above are from the <strong className="text-green-700">actual production software</strong>.
                    </p>
                </div>

                {/* Call to Action */}
                <section className="mt-16 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/10"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
                            <Heart className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">
                            Experience VitalBlink Today
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Transform your healthcare facility with comprehensive hospital management.
                            <span className="block mt-2 font-semibold">One-time purchase — lifetime access.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/pricing">
                                <Button
                                    size="lg"
                                    className="text-lg rounded-full bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-8"
                                >
                                    View Pricing
                                    <BarChart3 className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/features">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg rounded-full bg-indigo-500 hover:bg-indigo-400 border-2 border-white text-white hover:scale-105 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-8"
                                >
                                    View All Features
                                    <Activity className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function ScreenshotSection({
    title,
    description,
    icon,
    features,
    screenshotPath,
    onImageClick
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    screenshotPath?: string;
    onImageClick?: (image: { src: string; title: string }) => void;
}) {
    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12 group">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                <div className="space-y-2">
                    <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-3">
                        KEY FEATURES
                    </div>
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className="relative bg-white border-2 border-indigo-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                onClick={() => screenshotPath && onImageClick && onImageClick({ src: screenshotPath, title })}
            >
                {screenshotPath ? (
                    <>
                        <div className="relative w-full aspect-video">
                            <Image
                                src={screenshotPath}
                                alt={title}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                                <ZoomIn className="h-5 w-5 text-indigo-600" />
                                <span className="text-gray-900 font-semibold">Click to view fullscreen</span>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg opacity-90">
                            <Maximize2 className="h-4 w-4 inline mr-1" />
                            LIVE SCREENSHOT
                        </div>
                    </>
                ) : (
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 min-h-[300px] flex items-center justify-center">
                        <div className="text-center">
                            <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-sm text-gray-600 italic">Screenshot coming soon</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ScreenshotCard({ title }: { title: string }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Activity className="h-12 w-12 text-gray-400" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-900">{title}</h3>
            </div>
        </div>
    );
}
