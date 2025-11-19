import {
    Heart, BrainCircuit, AlertCircle, Bone, Baby, Eye, Microscope, Activity, Stethoscope,
    Syringe, Pill, Users, Waves, Sandwich, Droplet, Wind, Ear, Dna, Gauge,
    TestTube, PersonStanding, UtensilsCrossed, TestTube2, Scan, Sparkles, CheckCircle
} from 'lucide-react';

export default function DepartmentsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-fade-in-up magnetic-hover">
                    Complete Department Coverage
                </span>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-200">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">26+</span> Medical Departments
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                    Comprehensive support for all major medical specialties with department-specific workflows,
                    forms, tests, and documentation systems
                </p>
            </div>

            {/* Critical Care & Emergency */}
            <DepartmentSection
                title="Critical Care & Emergency"
                departments={[
                    {
                        icon: <AlertCircle />,
                        name: "Emergency Medicine",
                        code: "emergency",
                        description: "Critical care with triage system, trauma protocols, and rapid response workflows",
                        features: [
                            "Patient triage and priority assessment",
                            "Trauma and critical care protocols",
                            "Emergency vitals monitoring",
                            "Rapid diagnostic integration",
                            "Ambulance coordination",
                            "Emergency medication tracking"
                        ]
                    }
                ]}
            />

            {/* Cardiovascular & Respiratory */}
            <DepartmentSection
                title="Cardiovascular & Respiratory"
                departments={[
                    {
                        icon: <Heart />,
                        name: "Cardiology",
                        code: "cardiology",
                        description: "Heart and cardiovascular care with ECG, echocardiography, and cardiac assessments",
                        features: [
                            "ECG recording and analysis",
                            "Echocardiography management",
                            "Cardiac history tracking",
                            "Stress test documentation",
                            "Vital signs monitoring (BP, HR)",
                            "Cardiac procedure records"
                        ]
                    },
                    {
                        icon: <Wind />,
                        name: "Pulmonology",
                        code: "pulmonology",
                        description: "Respiratory care including lung function tests and breathing assessments",
                        features: [
                            "Pulmonary function tests",
                            "Respiratory history",
                            "Oxygen therapy tracking",
                            "Chest imaging integration",
                            "Sleep apnea studies",
                            "Ventilator management"
                        ]
                    }
                ]}
            />

            {/* Neurological Sciences */}
            <DepartmentSection
                title="Neurological Sciences"
                departments={[
                    {
                        icon: <BrainCircuit />,
                        name: "Neurology",
                        code: "neurology",
                        description: "Brain and nervous system disorders with neurological assessments",
                        features: [
                            "Neurological examination forms",
                            "EEG and EMG tracking",
                            "Seizure documentation",
                            "Cognitive assessments",
                            "MRI/CT scan integration",
                            "Stroke protocols"
                        ]
                    },
                    {
                        icon: <Users />,
                        name: "Psychiatry",
                        code: "psychiatry",
                        description: "Mental health services with psychiatric evaluations and treatment plans",
                        features: [
                            "Psychiatric assessments",
                            "Mental status examinations",
                            "Treatment plan management",
                            "Medication tracking",
                            "Therapy session notes",
                            "Risk assessments"
                        ]
                    }
                ]}
            />

            {/* Musculoskeletal & Rehabilitation */}
            <DepartmentSection
                title="Musculoskeletal & Rehabilitation"
                departments={[
                    {
                        icon: <Bone />,
                        name: "Orthopedics",
                        code: "orthopedics",
                        description: "Bone and joint care with fracture management and mobility assessments",
                        features: [
                            "Musculoskeletal assessments",
                            "Fracture documentation",
                            "X-ray integration",
                            "Range of motion tracking",
                            "Surgical planning",
                            "Cast and splint records"
                        ]
                    },
                    {
                        icon: <PersonStanding />,
                        name: "Physiotherapy",
                        code: "physiotherapy",
                        description: "Physical rehabilitation with exercise programs and mobility tracking",
                        features: [
                            "Rehabilitation assessments",
                            "Exercise program management",
                            "Progress tracking",
                            "Mobility measurements",
                            "Pain scale documentation",
                            "Treatment session notes"
                        ]
                    },
                    {
                        icon: <Gauge />,
                        name: "Rheumatology",
                        code: "rheumatology",
                        description: "Arthritis and autoimmune disorder management",
                        features: [
                            "Joint assessment forms",
                            "Autoimmune disease tracking",
                            "Inflammation markers",
                            "Biologic therapy management",
                            "Disease activity scores",
                            "Long-term monitoring"
                        ]
                    }
                ]}
            />

            {/* Surgical Specialties */}
            <DepartmentSection
                title="Surgical Specialties"
                departments={[
                    {
                        icon: <Activity />,
                        name: "General Surgery",
                        code: "surgery",
                        description: "Surgical planning, OR management, and post-operative care",
                        features: [
                            "Pre-operative checklists",
                            "Surgical procedure documentation",
                            "OR scheduling and management",
                            "Post-operative care plans",
                            "Sterilization tracking",
                            "Surgical supplies management"
                        ]
                    }
                ]}
            />

            {/* Women's & Children's Health */}
            <DepartmentSection
                title="Women's & Children's Health"
                departments={[
                    {
                        icon: <Baby />,
                        name: "Pediatrics",
                        code: "pediatrics",
                        description: "Child healthcare with growth charts and vaccination tracking",
                        features: [
                            "Growth and development charts",
                            "Vaccination schedules",
                            "Pediatric assessments",
                            "Developmental milestones",
                            "Immunization records",
                            "Child safety assessments"
                        ]
                    },
                    {
                        icon: <Heart />,
                        name: "Obstetrics & Gynecology",
                        code: "obgyn",
                        description: "Women's health including prenatal care and reproductive health",
                        features: [
                            "Prenatal care tracking",
                            "Obstetric history",
                            "Gynecological examinations",
                            "Ultrasound documentation",
                            "Contraception counseling",
                            "Delivery records"
                        ]
                    }
                ]}
            />

            {/* Diagnostic Services */}
            <DepartmentSection
                title="Diagnostic Services"
                departments={[
                    {
                        icon: <Scan />,
                        name: "Radiology",
                        code: "radiology",
                        description: "Medical imaging with DICOM viewer and encrypted storage",
                        features: [
                            "X-ray management",
                            "CT and MRI tracking",
                            "Ultrasound documentation",
                            "DICOM image viewer",
                            "Radiology reports",
                            "Image encryption and security"
                        ]
                    },
                    {
                        icon: <Microscope />,
                        name: "Pathology",
                        code: "pathology",
                        description: "Laboratory services with test management and result tracking",
                        features: [
                            "Lab test ordering",
                            "Specimen tracking",
                            "Biopsy results",
                            "Histopathology reports",
                            "Cytology documentation",
                            "Quality control tracking"
                        ]
                    },
                    {
                        icon: <TestTube />,
                        name: "Hematology",
                        code: "haematology",
                        description: "Blood disorders and transfusion medicine",
                        features: [
                            "Blood count analysis",
                            "Coagulation studies",
                            "Transfusion records",
                            "Blood disorder tracking",
                            "Bone marrow documentation",
                            "Hemoglobin monitoring"
                        ]
                    }
                ]}
            />

            {/* Organ-Specific Specialties */}
            <DepartmentSection
                title="Organ-Specific Specialties"
                departments={[
                    {
                        icon: <Eye />,
                        name: "Ophthalmology",
                        code: "ophthalmology",
                        description: "Eye care and vision services with visual acuity testing",
                        features: [
                            "Visual acuity testing",
                            "Eye examination forms",
                            "Refraction documentation",
                            "Surgical procedures",
                            "Intraocular pressure tracking",
                            "Retinal imaging"
                        ]
                    },
                    {
                        icon: <Ear />,
                        name: "ENT (Otolaryngology)",
                        code: "ent",
                        description: "Ear, nose, and throat care with audiology integration",
                        features: [
                            "ENT examinations",
                            "Hearing tests",
                            "Throat assessments",
                            "Sinus evaluations",
                            "Allergy testing",
                            "Surgical documentation"
                        ]
                    },
                    {
                        icon: <Droplet />,
                        name: "Nephrology",
                        code: "nephrology",
                        description: "Kidney disease management and dialysis services",
                        features: [
                            "Renal function tests",
                            "Dialysis scheduling",
                            "GFR calculations",
                            "Fluid balance tracking",
                            "Transplant coordination",
                            "Chronic kidney disease staging"
                        ]
                    },
                    {
                        icon: <Droplet />,
                        name: "Urology",
                        code: "urology",
                        description: "Urinary system and reproductive health",
                        features: [
                            "Urological assessments",
                            "Prostate examinations",
                            "Urinary function tests",
                            "Stone management",
                            "Incontinence tracking",
                            "Surgical procedures"
                        ]
                    }
                ]}
            />

            {/* Systemic Diseases */}
            <DepartmentSection
                title="Systemic & Metabolic Diseases"
                departments={[
                    {
                        icon: <Dna />,
                        name: "Endocrinology",
                        code: "endocrinology",
                        description: "Diabetes and hormone disorder management",
                        features: [
                            "Diabetes management",
                            "Thyroid function tracking",
                            "Hormone level monitoring",
                            "Insulin therapy documentation",
                            "Metabolic syndrome tracking",
                            "Endocrine disorder assessments"
                        ]
                    },
                    {
                        icon: <Sandwich />,
                        name: "Gastroenterology",
                        code: "gastroenterology",
                        description: "Digestive system care with endoscopy management",
                        features: [
                            "GI assessments",
                            "Endoscopy documentation",
                            "Liver function tracking",
                            "IBD management",
                            "Nutritional assessments",
                            "Colonoscopy records"
                        ]
                    },
                    {
                        icon: <Sparkles />,
                        name: "Infectious Diseases",
                        code: "infectious",
                        description: "Infectious disease management and epidemiology tracking",
                        features: [
                            "Infection tracking",
                            "Antimicrobial therapy",
                            "Isolation protocols",
                            "Outbreak management",
                            "Vaccination records",
                            "Travel medicine"
                        ]
                    }
                ]}
            />

            {/* Oncology & Special Care */}
            <DepartmentSection
                title="Oncology & Special Care"
                departments={[
                    {
                        icon: <Activity />,
                        name: "Oncology",
                        code: "oncology",
                        description: "Cancer care with treatment planning and monitoring",
                        features: [
                            "Cancer staging",
                            "Chemotherapy protocols",
                            "Radiation therapy tracking",
                            "Tumor markers",
                            "Treatment response monitoring",
                            "Palliative care planning"
                        ]
                    }
                ]}
            />

            {/* Dental & Integumentary */}
            <DepartmentSection
                title="Dental & Skin Care"
                departments={[
                    {
                        icon: <TestTube2 />,
                        name: "Dentistry",
                        code: "dentistry",
                        description: "Oral health with dental charting and procedure tracking",
                        features: [
                            "Dental charting",
                            "Oral examinations",
                            "Procedure documentation",
                            "X-ray management",
                            "Treatment planning",
                            "Periodontal assessments"
                        ]
                    },
                    {
                        icon: <Sparkles />,
                        name: "Dermatology",
                        code: "dermatology",
                        description: "Skin condition management with image documentation",
                        features: [
                            "Skin assessments",
                            "Lesion documentation",
                            "Dermatological imaging",
                            "Biopsy tracking",
                            "Treatment protocols",
                            "Cosmetic procedures"
                        ]
                    }
                ]}
            />

            {/* General Medicine & Pharmacy */}
            <DepartmentSection
                title="General Medicine & Pharmacy"
                departments={[
                    {
                        icon: <Stethoscope />,
                        name: "General Medicine",
                        code: "medicine",
                        description: "Primary care with comprehensive patient assessments",
                        features: [
                            "General examinations",
                            "Chronic disease management",
                            "Preventive care",
                            "Health screenings",
                            "Medication management",
                            "Referral coordination"
                        ]
                    },
                    {
                        icon: <Pill />,
                        name: "Pharmacy",
                        code: "pharmacy",
                        description: "Medication dispensing and pharmaceutical care",
                        features: [
                            "Prescription management",
                            "Drug interaction checking",
                            "Medication inventory",
                            "Dispensing records",
                            "Patient counseling documentation",
                            "Expiration tracking"
                        ]
                    }
                ]}
            />

            {/* Veterinary Services */}
            <DepartmentSection
                title="Specialized Services"
                departments={[
                    {
                        icon: <Heart />,
                        name: "Veterinary Services",
                        code: "veterinary",
                        description: "Animal healthcare integrated with hospital systems",
                        features: [
                            "Animal patient records",
                            "Veterinary examinations",
                            "Vaccination tracking",
                            "Surgical procedures",
                            "Laboratory tests",
                            "Treatment plans"
                        ]
                    }
                ]}
            />

            {/* Features Highlight */}
            <section className="mt-16 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Every Department Includes
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureHighlight
                        title="Custom Workflows"
                        description="Department-specific forms, assessments, and documentation tailored to specialty requirements"
                    />
                    <FeatureHighlight
                        title="Test Management"
                        description="Order, track, and document specialty-specific tests and procedures with results integration"
                    />
                    <FeatureHighlight
                        title="Secure Documentation"
                        description="Encrypted storage, audit trails, and role-based access for all patient records and medical data"
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <h2 className="text-4xl font-bold mb-4">
                    Experience Comprehensive Department Management
                </h2>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Get started with VitalBlink and streamline your entire hospital operation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/pricing" className="w-full sm:w-auto group">
                        <button className="w-full bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl ripple-effect interactive-card">
                            View Pricing
                        </button>
                    </a>
                    <a href="/features" className="w-full sm:w-auto group">
                        <button className="w-full bg-indigo-500 hover:bg-indigo-400 hover:scale-105 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-white/20 ripple-effect interactive-card">
                            See All Features
                        </button>
                    </a>
                </div>
            </section>
        </main>
    );
}

function DepartmentSection({ title, departments }: { title: string; departments: any[] }) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gradient-to-r from-indigo-300 to-purple-300">
                {title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {departments.map((dept, index) => (
                    <DepartmentCard key={index} {...dept} />
                ))}
            </div>
        </section>
    );
}

function DepartmentCard({ icon, name, code, description, features }: any) {
    // Define color schemes for different departments
    const colorSchemes = [
        { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'from-blue-500 to-indigo-600', iconBg: 'bg-blue-100', accent: 'text-blue-600', glow: 'group-hover:shadow-blue-500/20' },
        { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', icon: 'from-violet-500 to-purple-600', iconBg: 'bg-violet-100', accent: 'text-violet-600', glow: 'group-hover:shadow-violet-500/20' },
        { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', icon: 'from-cyan-500 to-teal-600', iconBg: 'bg-cyan-100', accent: 'text-cyan-600', glow: 'group-hover:shadow-cyan-500/20' },
        { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-green-600', iconBg: 'bg-emerald-100', accent: 'text-emerald-600', glow: 'group-hover:shadow-emerald-500/20' },
        { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', icon: 'from-amber-500 to-orange-600', iconBg: 'bg-amber-100', accent: 'text-amber-600', glow: 'group-hover:shadow-amber-500/20' },
        { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', icon: 'from-rose-500 to-pink-600', iconBg: 'bg-rose-100', accent: 'text-rose-600', glow: 'group-hover:shadow-rose-500/20' },
        { bg: 'from-red-50 to-orange-50', border: 'border-red-200', icon: 'from-red-500 to-orange-600', iconBg: 'bg-red-100', accent: 'text-red-600', glow: 'group-hover:shadow-red-500/20' },
        { bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200', icon: 'from-purple-500 to-fuchsia-600', iconBg: 'bg-purple-100', accent: 'text-purple-600', glow: 'group-hover:shadow-purple-500/20' },
    ];

    const colorIndex = Math.abs(name.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % colorSchemes.length;
    const colors = colorSchemes[colorIndex];

    return (
        <div className={`group relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-7 hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden hover-lift interactive-card animate-slide-in-up`} style={{ animationDelay: `${Math.abs(name.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 12 * 0.1}s` }}>
            {/* Decorative corner gradient */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.iconBg} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>

            <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                    {/* Icon with animated background */}
                    <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.iconBg} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className={`relative text-white bg-gradient-to-br ${colors.icon} p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            {icon}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">{name}</h3>
                        <p className={`text-xs ${colors.accent} font-mono ${colors.iconBg} px-2 py-1 rounded inline-block font-semibold`}>#{code}</p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed mt-2">{description}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <h4 className={`font-bold text-gray-900 text-sm mb-3 flex items-center gap-2`}>
                        <span className={`w-1 h-4 bg-gradient-to-b ${colors.icon} rounded`}></span>
                        Key Features:
                    </h4>
                    <ul className="space-y-2">
                        {features.slice(0, 4).map((feature: string, index: number) => (
                            <li key={index} className="flex items-start text-sm group/item">
                                <div className={`${colors.accent} bg-white rounded-full p-1 mr-2 mt-0.5 flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform`}>
                                    <CheckCircle className="h-3 w-3" />
                                </div>
                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    {features.length > 4 && (
                        <p className={`text-xs ${colors.accent} font-semibold italic mt-3 flex items-center gap-1`}>
                            <span className={`inline-block w-1 h-1 bg-gradient-to-r ${colors.icon} rounded-full animate-pulse`}></span>
                            + {features.length - 4} more features available
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

function FeatureHighlight({ title, description }: { title: string; description: string }) {
    return (
        <div className="group bg-white rounded-2xl p-7 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: `${Math.abs(title.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)) % 3 * 0.2}s` }}>
            <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-indigo-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
