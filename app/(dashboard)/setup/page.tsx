'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Download, Wifi, Lock, User, Settings, CheckCircle, AlertCircle, Info, Monitor, Smartphone, Laptop } from 'lucide-react';
import { getDownloadLink, getCredentials } from '@/lib/config';

// SVG Animation Components
const InstallationSVG = () => (
    <svg className="w-full h-64" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`
        @keyframes download { 0% { transform: translateY(-30px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes install { 0% { width: 0%; } 100% { width: 100%; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .download-box { animation: download 2s ease-in-out infinite; }
        .progress-bar { animation: install 3s ease-in-out infinite; }
        .pulse-elem { animation: pulse 1.5s ease-in-out infinite; }
      `}</style>
        </defs>

        {/* File Box */}
        <rect x="150" y="30" width="100" height="80" fill="url(#blueGradient)" rx="10" className="download-box" />
        <text x="200" y="85" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">Setup.exe</text>

        {/* Arrow */}
        <path d="M 200 120 L 200 150" stroke="#4F46E5" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

        {/* Computer */}
        <rect x="100" y="160" width="200" height="120" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" rx="5" />
        <rect x="120" y="175" width="160" height="90" fill="#1F2937" rx="3" />
        <circle cx="200" cy="270" r="8" fill="#9CA3AF" />

        {/* Progress Bar */}
        <rect x="130" y="210" width="140" height="8" fill="#E5E7EB" rx="4" />
        <rect x="130" y="210" width="140" height="8" fill="#4F46E5" rx="4" className="progress-bar" />

        {/* Gradient Definitions */}
        <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#4F46E5" />
            </marker>
        </defs>

        {/* Status Text */}
        <text x="200" y="295" fontSize="12" fill="#6B7280" textAnchor="middle">Installing VitalBlink...</text>
    </svg>
);

const NetworkDiagramSVG = () => (
    <svg className="w-full h-80" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`
        @keyframes float { 0%, 100% { transform: translateY(-5px); } 50% { transform: translateY(5px); } }
        @keyframes signal { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .float-elem { animation: float 3s ease-in-out infinite; }
        .signal-wave { animation: signal 2s ease-in-out infinite; }
        .spinner { animation: rotate 2s linear infinite; }
      `}</style>
            <linearGradient id="wifiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
        </defs>

        {/* Router/WiFi */}
        <rect x="200" y="20" width="100" height="60" fill="url(#wifiGradient)" rx="8" className="float-elem" />
        <text x="250" y="60" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">WiFi Router</text>

        {/* WiFi Signals */}
        <circle cx="250" cy="100" r="30" fill="none" stroke="#06B6D4" strokeWidth="2" className="signal-wave" />
        <circle cx="250" cy="100" r="45" fill="none" stroke="#06B6D4" strokeWidth="1" className="signal-wave" style={{ animationDelay: '0.3s' }} />

        {/* Server PC */}
        <g className="float-elem">
            <rect x="50" y="150" width="80" height="100" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" rx="5" />
            <rect x="60" y="165" width="60" height="50" fill="#1F2937" rx="2" />
            <rect x="75" y="225" width="30" height="15" fill="#6B7280" rx="2" />
            <text x="90" y="270" fontSize="11" fontWeight="bold" fill="#374151" textAnchor="middle">Server PC</text>
        </g>

        {/* Device 1 - Laptop */}
        <g className="float-elem" style={{ animationDelay: '0.5s' }}>
            <rect x="370" y="160" width="70" height="50" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" rx="3" />
            <rect x="380" y="170" width="50" height="30" fill="#1F2937" rx="2" />
            <rect x="355" y="215" width="120" height="8" fill="#6B7280" rx="2" />
            <text x="405" y="280" fontSize="11" fontWeight="bold" fill="#374151" textAnchor="middle">Laptop</text>
        </g>

        {/* Device 2 - Tablet */}
        <g className="float-elem" style={{ animationDelay: '1s' }}>
            <rect x="320" y="280" width="60" height="40" fill="#DCE5F6" stroke="#4F46E5" strokeWidth="2" rx="3" />
            <text x="350" y="320" fontSize="11" fontWeight="bold" fill="#374151" textAnchor="middle">Tablet</text>
        </g>

        {/* Device 3 - Phone */}
        <g className="float-elem" style={{ animationDelay: '1.5s' }}>
            <rect x="130" y="280" width="50" height="35" fill="#DCE5F6" stroke="#4F46E5" strokeWidth="2" rx="2" />
            <text x="155" y="325" fontSize="11" fontWeight="bold" fill="#374151" textAnchor="middle">Phone</text>
        </g>

        {/* Connection Lines */}
        <line x1="130" y1="200" x2="220" y2="100" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
        <line x1="370" y1="180" x2="300" y2="100" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
        <line x1="350" y1="290" x2="270" y2="120" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
        <line x1="155" y1="290" x2="240" y2="115" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />

        {/* IP Address Labels */}
        <rect x="40" y="285" width="70" height="25" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" rx="3" />
        <text x="75" y="302" fontSize="9" fill="#374151" textAnchor="middle">192.168.1.100</text>
    </svg>
);

const IPAddressSVG = () => (
    <svg className="w-full h-64" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`
        @keyframes highlight { 0%, 100% { fill: #DBEAFE; } 50% { fill: #93C5FD; } }
        @keyframes typewrite { 0% { width: 0; } 100% { width: 100%; } }
        .highlight-box { animation: highlight 2s ease-in-out infinite; }
        .command-text { animation: typewrite 3s steps(20, end) infinite; }
      `}</style>
        </defs>

        {/* Command Prompt Window */}
        <rect x="30" y="20" width="440" height="200" fill="#1F2937" stroke="#4B5563" strokeWidth="2" rx="5" />
        <rect x="30" y="20" width="440" height="25" fill="#374151" rx="5" />

        {/* Title Bar */}
        <circle cx="45" cy="32" r="3" fill="#DC2626" />
        <circle cx="60" cy="32" r="3" fill="#F59E0B" />
        <circle cx="75" cy="32" r="3" fill="#10B981" />
        <text x="250" y="38" fontSize="12" fill="#E5E7EB" textAnchor="middle" fontFamily="monospace">Command Prompt</text>

        {/* Command Line */}
        <text x="50" y="70" fontSize="14" fill="#10B981" fontFamily="monospace">C:\&gt;</text>
        <text x="90" y="70" fontSize="14" fill="#E5E7EB" fontFamily="monospace">ipconfig</text>

        {/* Output Lines */}
        <text x="50" y="100" fontSize="12" fill="#9CA3AF" fontFamily="monospace">Wireless LAN adapter WiFi:</text>
        <text x="50" y="125" fontSize="12" fill="#9CA3AF" fontFamily="monospace">Connection-specific DNS Suffix:</text>

        {/* Highlighted IP */}
        <rect x="50" y="140" width="300" height="30" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="2" rx="3" className="highlight-box" />
        <text x="60" y="152" fontSize="12" fill="#1E40AF" fontFamily="monospace" fontWeight="bold">IPv4 Address: 192.168.1.100</text>
        <text x="60" y="168" fontSize="11" fill="#3B82F6" fontFamily="monospace">Subnet Mask: 255.255.255.0</text>

        {/* Copy Icon */}
        <rect x="370" y="145" width="50" height="25" fill="#3B82F6" rx="3" className="highlight-box" />
        <text x="395" y="163" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">COPY</text>
    </svg>
);

const AdminLoginSVG = () => (
    <svg className="w-full h-80" viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`
        @keyframes loginSlide { 0% { transform: translateX(-50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes success { 0% { opacity: 0; transform: scale(0); } 100% { opacity: 1; transform: scale(1); } }
        .login-form { animation: loginSlide 0.8s ease-out; }
        .success-check { animation: success 0.6s ease-out; }
      `}</style>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
        </defs>

        {/* Login Form */}
        <rect x="50" y="20" width="300" height="280" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" rx="10" className="login-form" />
        <text x="200" y="50" fontSize="18" fontWeight="bold" fill="#1F2937" textAnchor="middle">VitalBlink Admin Login</text>

        {/* Username Field */}
        <text x="70" y="80" fontSize="12" fill="#6B7280">Username</text>
        <rect x="70" y="90" width="260" height="40" fill="white" stroke="#D1D5DB" strokeWidth="1" rx="5" />
        <text x="80" y="117" fontSize="14" fill="#1F2937" fontFamily="monospace">admin</text>

        {/* Password Field */}
        <text x="70" y="155" fontSize="12" fill="#6B7280">Password</text>
        <rect x="70" y="165" width="260" height="40" fill="white" stroke="#D1D5DB" strokeWidth="1" rx="5" />
        <circle cx="85" cy="190" r="4" fill="#1F2937" />
        <circle cx="100" cy="190" r="4" fill="#1F2937" />
        <circle cx="115" cy="190" r="4" fill="#1F2937" />
        <circle cx="130" cy="190" r="4" fill="#1F2937" />
        <circle cx="145" cy="190" r="4" fill="#1F2937" />
        <circle cx="160" cy="190" r="4" fill="#1F2937" />
        <circle cx="175" cy="190" r="4" fill="#1F2937" />
        <circle cx="190" cy="190" r="4" fill="#1F2937" />
        <circle cx="205" cy="190" r="4" fill="#1F2937" />
        <circle cx="220" cy="190" r="4" fill="#1F2937" />
        <circle cx="235" cy="190" r="4" fill="#1F2937" />
        <circle cx="250" cy="190" r="4" fill="#1F2937" />
        <circle cx="265" cy="190" r="4" fill="#1F2937" />

        {/* Warning */}
        <rect x="70" y="220" width="260" height="35" fill="#FEE2E2" stroke="#FECACA" strokeWidth="1" rx="5" />
        <text x="80" y="238" fontSize="11" fill="#DC2626">⚠ Default: superadmin123 - Change immediately!</text>
        <text x="80" y="252" fontSize="10" fill="#991B1B">App Password: admin123 | Use strong passwords!</text>

        {/* Login Button */}
        <rect x="70" y="270" width="260" height="20" fill="url(#greenGradient)" rx="3" />
        <text x="200" y="283" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">LOGIN</text>
    </svg>
);

export default function SetupPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});
    const [showVisual, setShowVisual] = useState<{ [key: number]: boolean }>({ 0: true, 1: true, 2: true, 3: true, 4: true, 5: true });

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev < 5 ? prev + 1 : 0));
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const toggleDetails = (step: number) => {
        setShowDetails((prev) => ({
            ...prev,
            [step]: !prev[step],
        }));
    };

    const markComplete = (step: number) => {
        if (!completedSteps.includes(step)) {
            setCompletedSteps([...completedSteps, step]);
        }
    };

    const steps = [
        {
            number: 1,
            title: 'Download & Install VitalBlink',
            icon: Download,
            color: 'from-blue-600 to-blue-700',
            description: 'Download the VitalBlink installer and install it on your main computer',
            details: [
                'Download VitalBlink_Setup.exe from the official website',
                'Run the installer with administrator privileges',
                'Choose installation location (default: C:\\Program Files\\VitalBlink)',
                'Select your edition (Pro, Plus, or Clinic)',
                'Configure database settings (PostgreSQL)',
                'Complete the installation wizard',
                'Installation takes approximately 5-10 minutes',
            ],
            subsections: [
                {
                    title: 'System Requirements',
                    content:
                        'Windows 10/11, 4GB RAM minimum, 5GB disk space, .NET Framework 4.8+',
                },
                {
                    title: 'After Installation',
                    content:
                        'The application will create shortcuts on your desktop and start menu',
                },
            ],
        },
        {
            number: 2,
            title: 'Start VitalBlink Server',
            icon: Settings,
            color: 'from-purple-600 to-purple-700',
            description: 'Launch the server on your main computer',
            details: [
                'Double-click the VitalBlink shortcut on your desktop',
                'Wait for the server to fully load (you\'ll see the control panel)',
                'Click the "Start Server" button in the control panel',
                'Wait 30-60 seconds for the server to initialize',
                'You should see a green status indicator showing "Running"',
                'The server is now ready to accept connections',
            ],
            subsections: [
                {
                    title: 'Port Information',
                    content: 'Main Server: Port 3000 (configurable), Control Panel: Port 5000 (localhost only)',
                },
                {
                    title: 'Firewall Notice',
                    content:
                        'Windows may ask for firewall permission - click "Allow" to enable network access',
                },
            ],
        },
        {
            number: 3,
            title: 'Connect to Same WiFi Network',
            icon: Wifi,
            color: 'from-cyan-600 to-cyan-700',
            description: 'Ensure all devices are on the same WiFi network',
            details: [
                'Connect your main server PC to WiFi router',
                'Note down your WiFi network name (SSID)',
                'On other devices (laptops, tablets, phones), open WiFi settings',
                'Select the same WiFi network as your server',
                'Enter the WiFi password (if required)',
                'All devices should now be on the same network',
            ],
            subsections: [
                {
                    title: 'No Password Setup',
                    content:
                        'For initial setup, you can use a guest network or create an open network (password optional)',
                },
                {
                    title: 'Network Verification',
                    content:
                        'You can test connection by pinging the server PC from another device on the same network',
                },
            ],
        },
        {
            number: 4,
            title: 'Find Server IP Address',
            icon: Info,
            color: 'from-green-600 to-green-700',
            description: 'Locate your server\'s IP address to connect from other devices',
            details: [
                'Open VitalBlink Control Panel on your server PC',
                'Look for "Server Information" section',
                'Find the "Local IP" or "Network URL" value',
                'It will look something like: 192.168.1.100 or 192.168.0.50',
                'Alternative: Open Command Prompt and type "ipconfig"',
                'Look for "IPv4 Address" under your WiFi adapter',
            ],
            subsections: [
                {
                    title: 'Example IP Address',
                    content: 'Typical format: 192.168.X.X or 10.0.0.X',
                },
                {
                    title: 'Important',
                    content:
                        'Remember this IP address - you\'ll need it to connect other devices to VitalBlink',
                },
            ],
        },
        {
            number: 5,
            title: 'Connect Other Devices',
            icon: Wifi,
            color: 'from-orange-600 to-orange-700',
            description: 'Access VitalBlink from other devices on the network',
            details: [
                'On any device connected to the same WiFi network',
                'Open a web browser (Chrome, Edge, Firefox, Safari)',
                'Type the server IP address in the address bar',
                'Example: http://192.168.1.100:3000',
                'Press Enter and wait for VitalBlink to load',
                'You should see the login page',
                'Bookmark this URL for quick access in the future',
            ],
            subsections: [
                {
                    title: 'Supported Devices',
                    content: 'Windows PC, Mac, Linux, iPad, Android tablets, smartphones',
                },
                {
                    title: 'Browser Compatibility',
                    content:
                        'Works best with Chrome, Edge, Firefox, or Safari (latest versions recommended)',
                },
            ],
        },
        {
            number: 6,
            title: 'Admin Login & Setup',
            icon: User,
            color: 'from-red-600 to-red-700',
            description: 'Login as admin and configure your system',
            details: [
                '⚠️ Default Application Password (Required First):',
                'App Password: admin123 (enter this when prompted)',
                '',
                'On the login page, enter default admin credentials:',
                'Username: admin',
                'Password: superadmin123 (change this immediately!)',
                'Click "Login" button',
                'You\'ll be directed to the Admin Dashboard',
                'Go to Settings → Change Password',
                'Enter a strong new password (minimum 8 characters)',
                'Confirm the new password and save',
            ],
            subsections: [
                {
                    title: 'Default Credentials Summary',
                    content:
                        'App Password: admin123 | Admin Username: admin | Admin Password: superadmin123 (Change all passwords immediately after first login for security)',
                },
                {
                    title: 'Creating Additional Users',
                    content:
                        'After login, navigate to "Users & Roles" to add doctors, nurses, and staff members',
                },
                {
                    title: 'Security Recommendations',
                    content:
                        'Use a strong password with uppercase, lowercase, numbers, and special characters. Enable two-factor authentication if available.',
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
                        VitalBlink <span className="animate-text-shimmer">Setup Guide</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 animate-fade-in-up animation-delay-200">
                        Step-by-step installation and network configuration
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 animate-fade-in-up animation-delay-400">
                        Follow these animated steps to get VitalBlink running on your network
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Overall Progress</h2>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {completedSteps.length} of {steps.length} completed
                        </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                            style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Steps Container */}
                <div className="space-y-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;
                        const isCompleted = completedSteps.includes(index);
                        const isExpanded = showDetails[index];

                        return (
                            <div
                                key={index}
                                className={`group transition-all duration-500 ${isActive ? 'scale-100' : 'scale-95 opacity-75'
                                    }`}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div
                                    className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ${isActive
                                        ? 'border-blue-500 shadow-2xl'
                                        : isCompleted
                                            ? 'border-green-500 shadow-lg'
                                            : 'border-gray-200 dark:border-gray-700 shadow-md'
                                        }`}
                                >
                                    {/* Step Header */}
                                    <button
                                        onClick={() => toggleDetails(index)}
                                        className={`w-full p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover-lift interactive-card ${isActive
                                            ? `bg-gradient-to-r ${step.color} text-white`
                                            : isCompleted
                                                ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                                                : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:from-gray-100 hover:to-gray-200'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                                    ? 'bg-white/20 text-white shadow-lg'
                                                    : isCompleted
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                                                    }`}
                                            >
                                                {isCompleted ? (
                                                    <CheckCircle className="w-8 h-8" />
                                                ) : (
                                                    <>
                                                        <Icon className="w-6 h-6" />
                                                        {isActive && (
                                                            <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse" />
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                            <div className="text-left">
                                                <h3
                                                    className={`text-xl font-bold transition-colors duration-300 ${isActive || isCompleted ? 'text-current' : 'text-gray-900 dark:text-white'
                                                        }`}
                                                >
                                                    Step {step.number}: {step.title}
                                                </h3>
                                                <p
                                                    className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                                                        }`}
                                                >
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronDown
                                            className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                                } ${isActive ? 'text-white' : ''}`}
                                        />
                                    </button>

                                    {/* Step Details */}
                                    {isExpanded && (
                                        <div
                                            className={`p-6 border-t-2 transition-all duration-300 ${isActive
                                                ? 'border-t-white/30 bg-white dark:bg-gray-950'
                                                : isCompleted
                                                    ? 'border-t-green-200 bg-gradient-to-b from-green-50/50 to-white dark:from-green-900/10 dark:to-gray-950'
                                                    : 'border-t-gray-200 dark:border-t-gray-700 bg-gray-50 dark:bg-gray-900'
                                                }`}
                                        >
                                            {/* Detailed Steps */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                    Detailed Steps:
                                                </h4>
                                                <ol className="space-y-3">
                                                    {step.details.map((detail, detailIndex) => (
                                                        <li
                                                            key={detailIndex}
                                                            className="flex gap-3 group/item"
                                                        >
                                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs font-bold flex items-center justify-center group-hover/item:shadow-lg transition-all duration-300">
                                                                {detailIndex + 1}
                                                            </span>
                                                            <span className="text-gray-700 dark:text-gray-300 pt-0.5">
                                                                {detail}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>

                                            {/* Subsections */}
                                            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                {step.subsections.map((subsection, subIndex) => (
                                                    <div key={subIndex}>
                                                        <div className="flex items-start gap-3 mb-2">
                                                            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <h5 className="font-semibold text-gray-900 dark:text-white">
                                                                    {subsection.title}
                                                                </h5>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                                    {subsection.content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Mark Complete Button */}
                                            <button
                                                onClick={() => markComplete(index)}
                                                className={`mt-6 w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${isCompleted
                                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                                                    }`}
                                            >
                                                {isCompleted ? '✓ Step Completed' : 'Mark as Completed'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Tips Section */}
                <div className="mt-16 grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 hover-lift interactive-card animate-slide-in-up">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            Quick Tips
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li>✓ Use strong passwords for admin and user accounts</li>
                            <li>✓ Keep your WiFi network secure with a password</li>
                            <li>✓ Keep all software updated for security</li>
                            <li>✓ Regular backups are recommended</li>
                            <li>✓ Test connections from multiple devices</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            Default Credentials
                        </h3>
                        <div className="space-y-3 text-red-800 dark:text-red-200 text-sm">
                            <div className="bg-white dark:bg-red-950 p-3 rounded-lg border border-red-300 dark:border-red-700">
                                <p className="font-semibold">App Password:</p>
                                <p className="font-mono text-base">admin123</p>
                            </div>
                            <div className="bg-white dark:bg-red-950 p-3 rounded-lg border border-red-300 dark:border-red-700">
                                <p className="font-semibold">Admin Username:</p>
                                <p className="font-mono text-base">admin</p>
                            </div>
                            <div className="bg-white dark:bg-red-950 p-3 rounded-lg border border-red-300 dark:border-red-700">
                                <p className="font-semibold">Admin Password:</p>
                                <p className="font-mono text-base">superadmin123</p>
                            </div>
                            <p className="text-xs font-bold text-red-700 dark:text-red-300 mt-2">⚠️ Change all passwords immediately after first login!</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 hover-lift interactive-card animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Important Notes
                        </h3>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
                            <li>• Server PC must stay powered on for network access</li>
                            <li>• All devices should be within WiFi range</li>
                            <li>• Network speed affects application performance</li>
                            <li>• Firewall may block initial connections</li>
                            <li>• Contact support for advanced networking setup</li>
                        </ul>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="mb-6 text-lg opacity-90">
                            Download VitalBlink and follow this setup guide to launch your hospital management system
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const installer = getDownloadLink('installer');
                                    const link = document.createElement('a');
                                    link.href = installer.url;
                                    link.download = (installer as any).fileName || 'download';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 ripple-effect interactive-card"
                            >
                                ↓ Download VitalBlink Setup
                            </button>
                            <a
                                href="/support"
                                className="bg-white/20 text-white font-bold py-3 px-8 rounded-lg border-2 border-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105 ripple-effect interactive-card"
                            >
                                Need Help? Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes slideIn {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 1000px;
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}
