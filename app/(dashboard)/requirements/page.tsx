import { Cpu, HardDrive, Monitor, Wifi, Server, Database, Shield, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RequirementsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-3 rounded-full mb-6 shadow-md">
                    <Cpu className="h-5 w-5 mr-2" />
                    <span className="text-sm font-bold">Technical Specifications</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    <span className="text-gray-900">System</span> <span className="text-blue-600">Requirements</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Runs on modern hardware with minimal requirements.
                </p>
            </div>

            {/* Quick Check Banner */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200 mb-12 flex items-start">
                <Info className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Not Sure If Your System Meets Requirements?</h3>
                    <p className="text-gray-700 mb-3">
                        Download our <strong>free system checker tool</strong> that automatically analyzes your hardware and provides compatibility report.
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Download System Checker
                    </Button>
                </div>
            </div>

            {/* Operating System Requirements */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Monitor className="h-8 w-8 mr-3 text-blue-600" />
                    Operating System
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <OSCard
                        platform="Windows"
                        versions={['Windows 10 (64-bit)', 'Windows 11', 'Windows Server 2016+', 'Windows Server 2019/2022']}
                        recommended="Windows 11 Pro or Windows Server 2022"
                        icon="🪟"
                    />
                    <OSCard
                        platform="Linux"
                        versions={['Ubuntu 20.04 LTS+', 'Debian 10+', 'CentOS 8+', 'RHEL 8+', 'Fedora 35+']}
                        recommended="Ubuntu 22.04 LTS or Debian 11"
                        icon="🐧"
                    />
                    <OSCard
                        platform="macOS"
                        versions={['macOS Big Sur (11.0)', 'macOS Monterey (12.0)', 'macOS Ventura (13.0)', 'macOS Sonoma (14.0)+']}
                        recommended="macOS Ventura 13.0 or later"
                        icon="🍎"
                    />
                </div>
            </div>

            {/* Hardware Requirements Tables */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Cpu className="h-8 w-8 mr-3 text-indigo-600" />
                    Hardware Specifications
                </h2>

                {/* Small Facility (Clinic Edition) */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-t-2xl">
                        <h3 className="text-xl font-bold">Small Facility (Clinic Edition)</h3>
                        <p className="text-emerald-100 text-sm">1-25 concurrent users • Single department</p>
                    </div>
                    <div className="bg-white rounded-b-2xl border-2 border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Component</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Minimum</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Recommended</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <SpecRow
                                    component="Processor"
                                    minimum="Intel i3 / AMD Ryzen 3 (4 cores)"
                                    recommended="Intel i5 / AMD Ryzen 5 (6 cores)"
                                />
                                <SpecRow
                                    component="RAM"
                                    minimum="8 GB"
                                    recommended="16 GB"
                                />
                                <SpecRow
                                    component="Storage"
                                    minimum="256 GB SSD"
                                    recommended="512 GB NVMe SSD"
                                />
                                <SpecRow
                                    component="Display"
                                    minimum="1366x768 resolution"
                                    recommended="1920x1080 (Full HD)"
                                />
                                <SpecRow
                                    component="Network"
                                    minimum="100 Mbps Ethernet"
                                    recommended="1 Gbps Ethernet"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Medium Facility (Plus Edition) */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-t-2xl">
                        <h3 className="text-xl font-bold">Medium Facility (Plus Edition)</h3>
                        <p className="text-indigo-100 text-sm">25-100 concurrent users • Up to 5 departments</p>
                    </div>
                    <div className="bg-white rounded-b-2xl border-2 border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Component</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Minimum</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Recommended</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <SpecRow
                                    component="Processor"
                                    minimum="Intel i5 / AMD Ryzen 5 (6 cores)"
                                    recommended="Intel i7 / AMD Ryzen 7 (8 cores)"
                                />
                                <SpecRow
                                    component="RAM"
                                    minimum="16 GB"
                                    recommended="32 GB"
                                />
                                <SpecRow
                                    component="Storage"
                                    minimum="512 GB SSD"
                                    recommended="1 TB NVMe SSD + 2 TB HDD"
                                />
                                <SpecRow
                                    component="Display"
                                    minimum="1920x1080 (Full HD)"
                                    recommended="2560x1440 (2K)"
                                />
                                <SpecRow
                                    component="Network"
                                    minimum="1 Gbps Ethernet"
                                    recommended="10 Gbps Ethernet (server)"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Large Facility (Pro Edition) */}
                <div className="mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-t-2xl">
                        <h3 className="text-xl font-bold">Large Facility (Pro Edition)</h3>
                        <p className="text-blue-100 text-sm">100+ concurrent users • All 26 departments</p>
                    </div>
                    <div className="bg-white rounded-b-2xl border-2 border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Component</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Minimum</th>
                                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">Recommended</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <SpecRow
                                    component="Processor"
                                    minimum="Intel Xeon / AMD EPYC (12 cores)"
                                    recommended="Intel Xeon / AMD EPYC (24+ cores)"
                                />
                                <SpecRow
                                    component="RAM"
                                    minimum="32 GB"
                                    recommended="64 GB or higher"
                                />
                                <SpecRow
                                    component="Storage"
                                    minimum="1 TB NVMe SSD + 4 TB HDD"
                                    recommended="2 TB NVMe SSD RAID + 8 TB HDD RAID"
                                />
                                <SpecRow
                                    component="Display"
                                    minimum="1920x1080 (Full HD)"
                                    recommended="3840x2160 (4K)"
                                />
                                <SpecRow
                                    component="Network"
                                    minimum="10 Gbps Ethernet (server)"
                                    recommended="40 Gbps Ethernet or dual 10 Gbps"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Database Requirements */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Database className="h-8 w-8 mr-3 text-purple-600" />
                    Database & Backend
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <RequirementCard
                        title="Supported Databases"
                        items={[
                            'SQLite (built-in, no setup required)',
                            'MySQL 5.7+ / MariaDB 10.3+',
                            'PostgreSQL 12+',
                            'Microsoft SQL Server 2017+'
                        ]}
                        icon={<Database className="h-6 w-6" />}
                        color="from-purple-500 to-pink-600"
                    />
                    <RequirementCard
                        title="Runtime Requirements"
                        items={[
                            'Node.js 18.x LTS or higher',
                            'Python 3.9+ (for AI features)',
                            'OpenSSL 1.1.1+ (for encryption)',
                            'Git (for updates)'
                        ]}
                        icon={<Server className="h-6 w-6" />}
                        color="from-blue-500 to-indigo-600"
                    />
                </div>
            </div>

            {/* Network Requirements */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Wifi className="h-8 w-8 mr-3 text-cyan-600" />
                    Network & Connectivity
                </h2>
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Local Network</h4>
                            <ul className="space-y-3">
                                <NetworkItem
                                    label="Minimum Bandwidth"
                                    value="100 Mbps"
                                    recommended="1 Gbps"
                                />
                                <NetworkItem
                                    label="Latency"
                                    value="<50ms"
                                    recommended="<10ms"
                                />
                                <NetworkItem
                                    label="Network Type"
                                    value="Wired Ethernet (required for server)"
                                    recommended="Gigabit Ethernet with QoS"
                                />
                                <NetworkItem
                                    label="Ports Required"
                                    value="HTTP (80), HTTPS (443), Custom (3000-5000)"
                                    recommended="Firewall configured for local access only"
                                />
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Internet (Optional)</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Not Required for Operation</strong>
                                        <p className="text-sm text-gray-600">VitalBlink works completely offline</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Optional: Software Updates</strong>
                                        <p className="text-sm text-gray-600">5 Mbps for downloading updates</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Optional: Cloud Backup</strong>
                                        <p className="text-sm text-gray-600">10 Mbps+ for automated backups</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">Optional: Email Notifications</strong>
                                        <p className="text-sm text-gray-600">1 Mbps for SMTP services</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security & Compliance */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="h-8 w-8 mr-3 text-red-600" />
                    Security & Compliance
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <SecurityCard
                        title="Data Encryption"
                        items={[
                            'AES-256 encryption at rest',
                            'TLS 1.3 for data in transit',
                            'Encrypted database backups',
                            'Secure key management'
                        ]}
                    />
                    <SecurityCard
                        title="Access Control"
                        items={[
                            'Role-based access control (RBAC)',
                            'Multi-factor authentication (MFA)',
                            'Session management',
                            'Audit logging'
                        ]}
                    />
                    <SecurityCard
                        title="Compliance"
                        items={[
                            'HIPAA compliant',
                            'GDPR ready',
                            'ISO 27001 guidelines',
                            'Local data sovereignty'
                        ]}
                    />
                </div>
            </div>

            {/* Client Devices */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Client Device Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <ClientCard
                        type="Desktop/Laptop"
                        specs={[
                            'Windows 10+, macOS 11+, or Linux',
                            'Intel i3 / AMD Ryzen 3 or better',
                            '4 GB RAM minimum (8 GB recommended)',
                            '100 MB free disk space',
                            'Modern web browser (see below)'
                        ]}
                        icon="💻"
                    />
                    <ClientCard
                        type="Tablet/Mobile"
                        specs={[
                            'iOS 14+ or Android 10+',
                            'Minimum 2 GB RAM',
                            '50 MB free storage',
                            'Modern mobile browser',
                            'Touch screen support'
                        ]}
                        icon="📱"
                    />
                </div>
            </div>

            {/* Browser Requirements */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Supported Web Browsers
                </h2>
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                    <div className="grid md:grid-cols-4 gap-6">
                        <BrowserCard name="Chrome" version="100+" recommended icon="🌐" />
                        <BrowserCard name="Edge" version="100+" recommended icon="🔷" />
                        <BrowserCard name="Firefox" version="100+" icon="🦊" />
                        <BrowserCard name="Safari" version="15+" icon="🧭" />
                    </div>
                    <p className="text-center text-gray-600 mt-6">
                        JavaScript must be enabled. Cookies required for authentication.
                    </p>
                </div>
            </div>

            {/* Additional Requirements */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Additional Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <AdditionalCard
                        title="For AI-Powered Features"
                        items={[
                            'GPU: NVIDIA GTX 1660 or better (optional but recommended)',
                            'CUDA 11.0+ support',
                            'Minimum 4 GB VRAM',
                            'TensorFlow Lite runtime'
                        ]}
                        note="AI features work without GPU but will be slower"
                    />
                    <AdditionalCard
                        title="For Backup & Recovery"
                        items={[
                            'External storage: 1 TB+ (for local backups)',
                            'NAS or backup server (recommended)',
                            'Cloud storage account (optional)',
                            'Automated backup software compatible'
                        ]}
                        note="Regular backups are critical for data safety"
                    />
                </div>
            </div>

            {/* Installation Size */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Installation & Storage Requirements
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <StorageCard
                        edition="Clinic"
                        installation="2 GB"
                        dataEstimate="5-10 GB per year"
                        backup="10-20 GB per year"
                    />
                    <StorageCard
                        edition="Plus"
                        installation="2.5 GB"
                        dataEstimate="25-50 GB per year"
                        backup="50-100 GB per year"
                    />
                    <StorageCard
                        edition="Pro"
                        installation="3 GB"
                        dataEstimate="100-500 GB per year"
                        backup="200 GB - 1 TB per year"
                    />
                </div>
                <p className="text-center text-gray-600 mt-6 text-sm">
                    * Data estimates vary based on patient volume, imaging usage, and document uploads
                </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">
                    Ready to Get Started?
                </h3>
                <p className="text-xl mb-8 text-indigo-100">
                    Try VitalBlink — 30-day trial, no credit card.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/trial">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6">
                            Download Free Trial
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-indigo-600">
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

function OSCard({ platform, versions, recommended, icon }: { platform: string; versions: string[]; recommended: string; icon: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{platform}</h3>
            <div className="space-y-2 mb-4">
                {versions.map((version, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span>{version}</span>
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="text-xs font-bold text-blue-800 mb-1">RECOMMENDED</div>
                <div className="text-sm text-blue-900">{recommended}</div>
            </div>
        </div>
    );
}

function SpecRow({ component, minimum, recommended }: { component: string; minimum: string; recommended: string }) {
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-semibold text-gray-900">{component}</td>
            <td className="px-6 py-4 text-gray-700">{minimum}</td>
            <td className="px-6 py-4 text-green-700 font-semibold">{recommended}</td>
        </tr>
    );
}

function RequirementCard({ title, items, icon, color }: { title: string; items: string[]; icon: React.ReactNode; color: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function NetworkItem({ label, value, recommended }: { label: string; value: string; recommended?: string }) {
    return (
        <li className="border-l-4 border-cyan-500 pl-4">
            <div className="font-semibold text-gray-900">{label}</div>
            <div className="text-sm text-gray-700">{value}</div>
            {recommended && <div className="text-sm text-green-700 font-medium">✓ {recommended}</div>}
        </li>
    );
}

function SecurityCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white mb-4">
                <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ClientCard({ type, specs, icon }: { type: string; specs: string[]; icon: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type}</h3>
            <ul className="space-y-2">
                {specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BrowserCard({ name, version, recommended, icon }: { name: string; version: string; recommended?: boolean; icon: string }) {
    return (
        <div className={`bg-white rounded-2xl p-6 border-2 ${recommended ? 'border-green-400 shadow-lg' : 'border-gray-200'} hover:shadow-xl hover:scale-105 transition-all duration-300 text-center`}>
            <div className="text-4xl mb-3">{icon}</div>
            <h4 className="font-bold text-gray-900 mb-1">{name}</h4>
            <div className="text-sm text-gray-600 mb-2">{version}</div>
            {recommended && (
                <div className="bg-green-100 text-green-800 text-xs font-bold py-1 px-3 rounded-full inline-block">
                    RECOMMENDED
                </div>
            )}
        </div>
    );
}

function AdditionalCard({ title, items, note }: { title: string; items: string[]; note: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <ul className="space-y-2 mb-4">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start">
                    <Info className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-amber-800">{note}</div>
                </div>
            </div>
        </div>
    );
}

function StorageCard({ edition, installation, dataEstimate, backup }: { edition: string; installation: string; dataEstimate: string; backup: string }) {
    return (
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{edition} Edition</h4>
            <div className="space-y-3">
                <div>
                    <div className="text-sm text-gray-600 mb-1">Installation Size</div>
                    <div className="text-2xl font-bold text-indigo-600">{installation}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 mb-1">Data Growth</div>
                    <div className="text-lg font-semibold text-gray-900">{dataEstimate}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 mb-1">Backup Storage</div>
                    <div className="text-lg font-semibold text-gray-900">{backup}</div>
                </div>
            </div>
        </div>
    );
}
