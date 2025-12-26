"use client";

import {
    Heart, Shield, Zap, Users, Database, FileText,
    Activity, Clock, Building2, Smartphone, Lock,
    BarChart3, Pill, Microscope, Syringe, Stethoscope,
    Ambulance, Bone, Eye, Baby, AlertCircle, Check, Calendar,
    Scan, UtensilsCrossed, TrendingUp, Bell, MapPin, Layers, QrCode, ArrowRight, X
} from 'lucide-react';
import { useState, useRef } from 'react';

export default function FeaturesPage() {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);
    const card5Ref = useRef<HTMLDivElement | null>(null);
    const card6Ref = useRef<HTMLDivElement | null>(null);

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

    const handleFeatureClick = (feature: any) => {
        setSelectedFeature(feature);
        setIsModalOpen(true);
    };
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    All Features
                </span>
                <h1 className="text-5xl font-black mb-6 leading-tight animate-fade-in-up animation-delay-200">
                    <span className="text-gray-900">Every Feature</span> <span className="text-indigo-600">You Need</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-semibold">
                    Complete hospital management. Simplified.
                </p>
            </div>

            {/* Core Features */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up magnetic-hover">
                        Essential Features
                    </span>
                    <h2 className="text-5xl font-black text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Essentials</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 font-medium">
                        Everything critical. Nothing extra.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
                    <FeatureCard
                        icon={<Users className="h-8 w-8" />}
                        title="Patient Records"
                        description="Complete EHR with scheduling and secure data."
                        features={[
                            'Patient registration & profiles',
                            'Medical history tracking',
                            'Appointment scheduling',
                            'Visit records & documentation',
                            'Patient portal access',
                            'Family member linkage'
                        ]}
                        cardRef={card1Ref}
                        onMouseMove={(e) => handleMouseMove(e, card1Ref)}
                        onMouseLeave={() => handleMouseLeave(card1Ref)}
                        onClick={() => handleFeatureClick({
                            icon: <Users className="h-8 w-8" />,
                            title: "Patient Management",
                            description: "EHR with patient records, scheduling, and secure storage.",
                            features: [
                                'Patient registration & profiles',
                                'Medical history tracking',
                                'Appointment scheduling',
                                'Visit records & documentation',
                                'Patient portal access',
                                'Family member linkage'
                            ]
                        })}
                    />

                    <FeatureCard
                        icon={<Shield className="h-8 w-8" />}
                        title="Enterprise Security"
                        description="Role-based access. Audit logs. Total compliance."
                        features={[
                            'Secure medical data storage',
                            'Role-based access control (RBAC)',
                            'Audit logging',
                            'Session management',
                            'Data backup & recovery',
                            'Healthcare compliance support'
                        ]}
                        cardRef={card2Ref}
                        onMouseMove={(e) => handleMouseMove(e, card2Ref)}
                        onMouseLeave={() => handleMouseLeave(card2Ref)}
                        onClick={() => handleFeatureClick({
                            icon: <Shield className="h-8 w-8" />,
                            title: "Security & Compliance",
                            description: "Role-based access, audit logging, and secure medical storage.",
                            features: [
                                'Secure medical data storage',
                                'Role-based access control (RBAC)',
                                'Audit logging',
                                'Session management',
                                'Data backup & recovery',
                                'Healthcare compliance support'
                            ]
                        })}
                    />

                    <FeatureCard
                        icon={<FileText className="h-8 w-8" />}
                        title="Smart Billing"
                        description="Automated invoices, claims, and payments."
                        features={[
                            'Automated invoice generation',
                            'Insurance claims processing',
                            'Payment tracking & history',
                            'PDF invoice exports',
                            'Billing reports & analytics',
                            'Multiple payment methods'
                        ]}
                    />

                    <FeatureCard
                        icon={<Database className="h-8 w-8" />}
                        title="Inventory Control"
                        description="Track supplies, pharmacy, and equipment."
                        features={[
                            'Medical supplies tracking',
                            'Pharmacy inventory',
                            'Equipment management',
                            'Supplier management',
                            'Stock alerts & reordering',
                            'Purchase order tracking'
                        ]}
                    />

                    <FeatureCard
                        icon={<Activity className="h-8 w-8" />}
                        title="Clinical Tools"
                        description="Imaging, ECG, and diagnostic support."
                        features={[
                            'Medical imaging viewer',
                            'ECG and diagnostic analysis',
                            'Clinical documentation',
                            'Drug interaction checking',
                            'Clinical decision support tools',
                            'Smart documentation templates'
                        ]}
                    />

                    <FeatureCard
                        icon={<BarChart3 className="h-8 w-8" />}
                        title="Live Analytics"
                        description="Real-time dashboards and custom reports."
                        features={[
                            'Real-time dashboard',
                            'Custom report generation',
                            'Patient analytics',
                            'Financial reports',
                            'Department statistics',
                            'Export to PDF/Excel'
                        ]}
                    />
                </div>
            </section>

            {/* Medical Departments */}
            <section className="mb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 rounded-3xl -z-10"></div>
                <div className="p-10 md:p-12">
                    <div className="text-center mb-10">
                        <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up magnetic-hover">
                            🏥 26+ Departments
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">26+</span> Medical Departments
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                            Support for major specialties with department-specific workflows and reporting.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <DepartmentItem icon={<Heart />} name="Cardiology" description="Heart & cardiovascular care, ECG, Echo" />
                        <DepartmentItem icon={<Activity />} name="Neurology" description="Brain & nervous system, EEG, MRI" />
                        <DepartmentItem icon={<AlertCircle />} name="Emergency" description="Critical care, triage, trauma" />
                        <DepartmentItem icon={<Bone />} name="Orthopedics" description="Bone & joint care, X-rays" />
                        <DepartmentItem icon={<Baby />} name="Pediatrics" description="Child healthcare, growth tracking" />
                        <DepartmentItem icon={<Eye />} name="Ophthalmology" description="Eye care, vision services" />
                        <DepartmentItem icon={<Microscope />} name="Pathology" description="Lab tests, diagnostics" />
                        <DepartmentItem icon={<Activity />} name="Radiology" description="Medical imaging, DICOM" />
                        <DepartmentItem icon={<Stethoscope />} name="General Medicine" description="Primary care, consultations" />
                        <DepartmentItem icon={<Pill />} name="Pharmacy" description="Medication management" />
                        <DepartmentItem icon={<Syringe />} name="Blood Bank" description="Donor tracking, inventory" />
                        <DepartmentItem icon={<Building2 />} name="Surgery" description="OR management, procedures" />
                    </div>
                    <div className="text-center mt-8">
                        <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-2xl px-6 py-4 shadow-lg">
                            <p className="text-gray-800 font-bold text-sm">
                                + Dermatology, Psychiatry, Oncology, Pulmonology, Gastroenterology, ENT,
                                Urology, Endocrinology, Nephrology, Rheumatology, Gynecology, and more!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up magnetic-hover">
                        🚑 Hospital Services
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                        Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Hospital Services</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                        Service management for non-clinical hospital operations.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <ServiceCard
                        title="Blood Bank Management"
                        description="Blood bank operations with donor registration, tracking, and transfusion records."
                        features={[
                            'Donor registration & tracking',
                            'Blood type inventory',
                            'Transfusion records',
                            'Expiration tracking',
                            'Emergency blood requests',
                            'Donor screening & history'
                        ]}
                    />

                    <ServiceCard
                        title="Ambulance Services"
                        description="Emergency transport coordination with ambulance tracking, driver management, and trip logging."
                        features={[
                            'Ambulance fleet management',
                            'Driver scheduling',
                            'Trip logging & tracking',
                            'Emergency requests',
                            'GPS integration ready',
                            'Equipment tracking'
                        ]}
                    />

                    <ServiceCard
                        title="Morgue Management"
                        description="Respectful morgue operations with body tracking, autopsy records, and chain of custody documentation."
                        features={[
                            'Body tracking & storage',
                            'Autopsy records',
                            'Chain of custody',
                            'Family notification',
                            'Refrigeration monitoring',
                            'Release documentation'
                        ]}
                    />

                    <ServiceCard
                        title="Vaccination Center"
                        description="Immunization program management with vaccine tracking, scheduling, and certificate generation."
                        features={[
                            'Vaccine inventory',
                            'Immunization scheduling',
                            'Certificate generation',
                            'Adverse event tracking',
                            'Vaccination history',
                            'Reminder notifications'
                        ]}
                    />

                    <ServiceCard
                        title="Café Management"
                        description="Hospital food service management with menu planning, order tracking, and nutrition management."
                        features={[
                            'Menu management',
                            'Order tracking',
                            'Dietary requirements',
                            'Inventory control',
                            'Analytics & reporting',
                            'Staff meal planning'
                        ]}
                    />

                    <ServiceCard
                        title="Veterinary Services"
                        description="Animal healthcare management integrated with hospital systems."
                        features={[
                            'Animal patient records',
                            'Veterinary examinations',
                            'Vaccination tracking',
                            'Surgical procedures',
                            'Laboratory tests',
                            'Treatment plans'
                        ]}
                    />

                    <ServiceCard
                        title="Queue Management System"
                        description="Real-time patient queue with Socket.IO integration, announcements, and lobby display."
                        features={[
                            'Real-time queue tracking',
                            'Patient calling system',
                            'Lobby display board',
                            'Department-specific queues',
                            'Wait time estimation',
                            'Socket.IO real-time updates'
                        ]}
                    />

                    <ServiceCard
                        title="OT Control & Pre-Op"
                        description="Operating theater management with scheduling, supplies, sterilization tracking, and pre-operative checklists."
                        features={[
                            'OR scheduling',
                            'Pre-op checklists',
                            'Surgical supplies tracking',
                            'Sterilization management',
                            'Post-op documentation',
                            'Equipment availability'
                        ]}
                    />

                    <ServiceCard
                        title="Parking Management"
                        description="Hospital parking allocation, vehicle tracking, and access control system."
                        features={[
                            'Parking space allocation',
                            'Vehicle registration',
                            'Entry/exit tracking',
                            'Fee management',
                            'Staff parking privileges',
                            'Visitor parking'
                        ]}
                    />

                    <ServiceCard
                        title="Floor Plan Management"
                        description="Interactive hospital floor plans with room allocation, bed management, and navigation."
                        features={[
                            'Interactive floor maps',
                            'Room allocation',
                            'Bed management',
                            'Department locations',
                            'Facility navigation',
                            'Space utilization tracking'
                        ]}
                    />

                    <ServiceCard
                        title="Patient Scanner System"
                        description="Barcode/QR code scanning for patient identification, workflow management, and tracking."
                        features={[
                            'Patient ID scanning',
                            'Quick check-in',
                            'Department assignment',
                            'Workflow automation',
                            'Visit tracking',
                            'Mobile scanner support'
                        ]}
                    />

                    <ServiceCard
                        title="Medical Image Viewer"
                        description="Medical imaging viewer for radiology with secure storage and multi-format support."
                        features={[
                            'Medical image viewing',
                            'Multi-format support',
                            'Image annotation',
                            'Comparison tools',
                            'Secure storage',
                            'Report integration'
                        ]}
                    />
                </div>
            </section>

            {/* Technical Features */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4 animate-fade-in-up magnetic-hover">
                        ⚡ Technical Power
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Excellence</span>
                    </h2>
                </div>

                {/* User Roles & Authentication Section */}
                <div className="mb-12 relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-indigo-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3 animate-fade-in-up magnetic-hover">
                                🔐 Security First
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3 animate-fade-in-up animation-delay-200">
                                Role-Based Access Control & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Authentication</span>
                            </h3>
                            <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                                VitalBlink includes user management with role-based access control.
                                Each user role has specific permissions and access levels to ensure secure operations.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                            <div className="group bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 rounded-xl p-5 border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                                <div className="text-2xl mb-2">👑</div>
                                <h4 className="font-bold text-gray-900 mb-2 text-base">Admin</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">Full system access, user management, settings, and configuration</p>
                            </div>
                            <div className="group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="text-2xl mb-2">⚕️</div>
                                <h4 className="font-bold text-gray-900 mb-2 text-base">Doctor</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">Patient records, diagnoses, prescriptions, and medical documentation</p>
                            </div>
                            <div className="group bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                                <div className="text-2xl mb-2">💉</div>
                                <h4 className="font-bold text-gray-900 mb-2 text-base">Nurse</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">Patient care, vitals, medication administration, and nursing notes</p>
                            </div>
                            <div className="group bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-violet-50 rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="text-2xl mb-2">📋</div>
                                <h4 className="font-bold text-gray-900 mb-2 text-base">Receptionist</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">Patient registration, appointments, queue management, and billing</p>
                            </div>
                            <div className="group bg-white hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-xl p-5 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                                <div className="text-2xl mb-2">👥</div>
                                <h4 className="font-bold text-gray-900 mb-2 text-base">Staff</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">Department-specific access for lab, pharmacy, radiology, and other services</p>
                            </div>
                        </div>
                        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-7 border-2 border-indigo-200 shadow-lg">
                            <h4 className="font-bold text-gray-900 mb-5 text-lg flex items-center gap-2">
                                <span className="text-2xl">🔐</span> Authentication Features
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Secure login with username/password</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Session management and timeout</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Permission-based feature access</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Login/logout audit trail</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Password change and security</span>
                                </div>
                                <div className="flex items-start">
                                    <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Multi-user concurrent access</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Localhost Deployment Section */}
                <div className="mb-12 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-green-200 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3 animate-fade-in-up magnetic-hover">
                                🏠 Offline First
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3 animate-fade-in-up animation-delay-200">
                                Local deployment — <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">No internet required</span>
                            </h3>
                            <p className="text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                                Runs entirely on your hospital's local server—keeps patient data on-premise with no cloud dependency.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-bold text-gray-900 mb-3">Local Server Deployment</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Runs on your hospital's server</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Access via localhost or local network</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>No external internet dependency</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-bold text-gray-900 mb-3">Data Privacy & Control</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>All data stays on your premises</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Full control over infrastructure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>No cloud dependency or external access</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-6">
                                <h4 className="font-bold text-gray-900 mb-3">Network Access</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Access from any device on local network</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Multiple users can login simultaneously</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>Works offline without interruption</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <TechFeature
                        icon={<Lock />}
                        title="Secure Data Export"
                        points={[
                            'Secure file encryption',
                            'Controlled data sharing',
                            'Time-limited access',
                            'Digital signatures',
                            'Universal compatibility',
                            'Version control'
                        ]}
                    />

                    <TechFeature
                        icon={<Database />}
                        title="Localhost Deployment"
                        points={[
                            'Runs on your local server',
                            'No internet required',
                            'Your data stays with you',
                            'Full control',
                            'Data privacy',
                            'Optimized performance'
                        ]}
                    />

                    <TechFeature
                        icon={<Smartphone />}
                        title="User-Friendly Interface"
                        points={[
                            'Responsive design',
                            'Multi-language ready',
                            'Intuitive navigation',
                            'Fast loading times',
                            'Accessibility features',
                            'Easy to use'
                        ]}
                    />

                    <TechFeature
                        icon={<Activity />}
                        title="Real-time Features"
                        points={[
                            'Socket.IO integration',
                            'Live queue updates',
                            'Real-time notifications',
                            'Instant status changes',
                            'Multi-user collaboration',
                            'Live dashboards'
                        ]}
                    />

                    <TechFeature
                        icon={<Clock />}
                        title="Appointment System"
                        points={[
                            'Calendar integration',
                            'Recurring appointments',
                            'SMS/Email reminders',
                            'Multi-provider scheduling',
                            'Waiting list management',
                            'No-show tracking'
                        ]}
                    />

                    <TechFeature
                        icon={<FileText />}
                        title="Document Management"
                        points={[
                            'Medical record uploads',
                            'PDF report generation',
                            'Secure document storage',
                            'Version control',
                            'Template management',
                            'Digital signatures'
                        ]}
                    />

                    <TechFeature
                        icon={<Bell />}
                        title="Notification System"
                        points={[
                            'Real-time alerts',
                            'Telegram bot integration',
                            'Email notifications',
                            'SMS reminders',
                            'Custom alert rules',
                            'Priority notifications'
                        ]}
                    />

                    <TechFeature
                        icon={<Layers />}
                        title="Hospital Data Management"
                        points={[
                            'Secure data management',
                            'Inter-hospital sharing',
                            'Access control',
                            'Trusted connections',
                            'Version tracking',
                            'Automated processes'
                        ]}
                    />

                    <TechFeature
                        icon={<Pill />}
                        title="Medication Database"
                        points={[
                            'ICD code injector',
                            'Drug information database',
                            'Interaction checking',
                            'Dosage guidelines',
                            'Active medication tracking',
                            'Prescription history'
                        ]}
                    />

                    <TechFeature
                        icon={<TrendingUp />}
                        title="Master Reports"
                        points={[
                            'Analytics',
                            'Custom report builder',
                            'PDF/Excel exports',
                            'Financial reports',
                            'Department statistics',
                            'Trend analysis'
                        ]}
                    />

                    <TechFeature
                        icon={<Users />}
                        title="User Management"
                        points={[
                            'Role-based access control',
                            'Department assignments',
                            'Attendance tracking',
                            'Performance monitoring',
                            'Shift scheduling',
                            'User permissions system'
                        ]}
                    />

                    <TechFeature
                        icon={<Shield />}
                        title="Audit & Backup"
                        points={[
                            'Audit logging',
                            'Activity tracking',
                            'Automated backups',
                            'Backup management system',
                            'Data recovery',
                            'Compliance reporting'
                        ]}
                    />
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">
                        Ready to streamline your facility?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                        Get started with VitalBlink — One-time purchase — lifetime updates included.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/pricing" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl text-center inline-flex items-center justify-center gap-2 ripple-effect interactive-card">
                            View Pricing
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="/departments" className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center inline-flex items-center justify-center gap-2 border-2 border-white/20 ripple-effect interactive-card">
                            View All Departments
                            <Activity className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureCard({
    icon,
    title,
    description,
    features,
    onClick,
    cardRef,
    onMouseMove,
    onMouseLeave
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    onClick?: () => void;
    cardRef?: React.RefObject<HTMLDivElement | null>;
    onMouseMove?: (e: React.MouseEvent) => void;
    onMouseLeave?: () => void;
}) {
    // Define color schemes for different cards
    const colorSchemes = [
        { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-100', checkmark: 'text-blue-600', glow: 'group-hover:shadow-blue-500/20' },
        { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', icon: 'text-violet-600', accent: 'bg-violet-100', checkmark: 'text-violet-600', glow: 'group-hover:shadow-violet-500/20' },
        { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'text-cyan-600', accent: 'bg-cyan-100', checkmark: 'text-cyan-600', glow: 'group-hover:shadow-cyan-500/20' },
        { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'text-emerald-600', accent: 'bg-emerald-100', checkmark: 'text-emerald-600', glow: 'group-hover:shadow-emerald-500/20' },
        { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'text-amber-600', accent: 'bg-amber-100', checkmark: 'text-amber-600', glow: 'group-hover:shadow-amber-500/20' },
        { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'text-rose-600', accent: 'bg-rose-100', checkmark: 'text-rose-600', glow: 'group-hover:shadow-rose-500/20' },
    ];

    const colorIndex = Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colorSchemes.length;
    const colors = colorSchemes[colorIndex];

    return (
        <div ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 overflow-hidden hover-lift interactive-card animate-slide-in-up cursor-pointer`} onClick={onClick} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 6 * 0.1}s` }}>
            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.accent} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

            {/* Icon with animated background */}
            <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative ${colors.icon} bg-white/80 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm group/item">
                        <div className={`${colors.checkmark} bg-white rounded-full p-1 mr-3 mt-0.5 flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform`}>
                            <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DepartmentItem({
    icon,
    name,
    description
}: {
    icon: React.ReactNode;
    name: string;
    description: string;
}) {
    const departmentColors = [
        'from-red-500 to-pink-600',
        'from-blue-500 to-cyan-600',
        'from-green-500 to-emerald-600',
        'from-purple-500 to-indigo-600',
        'from-orange-500 to-amber-600',
        'from-teal-500 to-cyan-600',
    ];

    const colorIndex = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % departmentColors.length;
    const gradient = departmentColors[colorIndex];

    return (
        <div className="group bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: `${Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 12 * 0.1}s` }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            <div className={`relative text-white bg-gradient-to-br ${gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h4 className="relative font-bold text-gray-900 mb-2 text-base">{name}</h4>
            <p className="relative text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function ServiceCard({
    title,
    description,
    features
}: {
    title: string;
    description: string;
    features: string[];
}) {
    const serviceColors = [
        { border: 'border-blue-300', bg: 'bg-gradient-to-br from-blue-50 to-indigo-50', icon: 'bg-gradient-to-br from-blue-500 to-indigo-600', check: 'text-blue-600' },
        { border: 'border-purple-300', bg: 'bg-gradient-to-br from-purple-50 to-pink-50', icon: 'bg-gradient-to-br from-purple-500 to-pink-600', check: 'text-purple-600' },
        { border: 'border-green-300', bg: 'bg-gradient-to-br from-green-50 to-emerald-50', icon: 'bg-gradient-to-br from-green-500 to-emerald-600', check: 'text-green-600' },
        { border: 'border-orange-300', bg: 'bg-gradient-to-br from-orange-50 to-red-50', icon: 'bg-gradient-to-br from-orange-500 to-red-600', check: 'text-orange-600' },
        { border: 'border-teal-300', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', icon: 'bg-gradient-to-br from-teal-500 to-cyan-600', check: 'text-teal-600' },
    ];

    const colorIndex = Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % serviceColors.length;
    const colors = serviceColors[colorIndex];

    return (
        <div className={`group ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 12 * 0.1}s` }}>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative">
                <div className={`inline-block ${colors.icon} text-white px-4 py-2 rounded-lg text-sm font-bold mb-4 shadow-lg`}>
                    {title.split(' ')[0]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>

                <ul className="space-y-2.5">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm group/item">
                            <div className={`${colors.check} bg-white rounded-full p-1 mr-2.5 mt-0.5 flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform`}>
                                <Check className="h-3 w-3" />
                            </div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function TechFeature({
    icon,
    title,
    points
}: {
    icon: React.ReactNode;
    title: string;
    points: string[];
}) {
    const techColors = [
        { gradient: 'from-indigo-500 to-purple-600', bg: 'bg-indigo-50', border: 'border-indigo-200', check: 'text-indigo-600' },
        { gradient: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', border: 'border-cyan-200', check: 'text-cyan-600' },
        { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', check: 'text-emerald-600' },
        { gradient: 'from-orange-500 to-red-600', bg: 'bg-orange-50', border: 'border-orange-200', check: 'text-orange-600' },
        { gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-50', border: 'border-pink-200', check: 'text-pink-600' },
        { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', check: 'text-violet-600' },
    ];

    const colorIndex = Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % techColors.length;
    const colors = techColors[colorIndex];

    return (
        <div className={`group relative ${colors.bg} border-2 ${colors.border} rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 12 * 0.1}s` }}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colors.gradient} text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{title}</h3>

                <ul className="space-y-2.5">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start text-sm group/item">
                            <div className={`${colors.check} bg-white rounded-md p-1 mr-2.5 mt-0.5 flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform`}>
                                <Check className="h-3 w-3" />
                            </div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

