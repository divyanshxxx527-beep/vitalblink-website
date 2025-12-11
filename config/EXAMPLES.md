/**
 * Examples: How to use the centralized config file
 * 
 * This file demonstrates practical examples of using the config/links.json
 * with the utility functions from lib/config.ts
 */

// ============================================================================
// Example 1: Using in a Download Button Component
// ============================================================================

// File: components/ui/download-button.tsx
import { getDownloadLink } from '@/lib/config';

export function DownloadButton() {
  const installer = getDownloadLink('installer');

  return (
    <a 
      href={installer.url}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      <span>↓ {installer.name}</span>
      <span className="text-sm">({installer.fileSize})</span>
    </a>
  );
}


// ============================================================================
// Example 2: Using in Pricing Page Component
// ============================================================================

// File: app/(dashboard)/pricing/editions.tsx
import { getAllEditions } from '@/lib/config';

export function EditionsGrid() {
  const editions = getAllEditions();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(editions).map(([key, edition]) => (
        <div key={key} className="border rounded-lg p-6">
          <h3>{edition.name}</h3>
          <p className="text-2xl font-bold">${edition.price}</p>
          {edition.originalPrice && (
            <p className="line-through text-gray-500">${edition.originalPrice}</p>
          )}
          <p>{edition.description}</p>
          <a 
            href={edition.url}
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Purchase Now
          </a>
        </div>
      ))}
    </div>
  );
}


// ============================================================================
// Example 3: Using Credentials in Login Section
// ============================================================================

// File: app/(dashboard)/setup/credentials-display.tsx
import { getCredentials } from '@/lib/config';

export function CredentialsDisplay() {
  const { appPassword, adminUsername, adminPassword } = getCredentials();

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <h3 className="font-bold text-red-900 mb-4">Default Credentials</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-semibold text-red-800">App Password:</label>
          <code className="block mt-1 px-3 py-2 bg-white border border-red-300 rounded font-mono">
            {appPassword}
          </code>
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-800">Admin Username:</label>
          <code className="block mt-1 px-3 py-2 bg-white border border-red-300 rounded font-mono">
            {adminUsername}
          </code>
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-800">Admin Password:</label>
          <code className="block mt-1 px-3 py-2 bg-white border border-red-300 rounded font-mono">
            {adminPassword}
          </code>
        </div>
      </div>

      <p className="mt-4 text-xs text-red-700 font-bold">
        ⚠️ Change all passwords immediately after first login!
      </p>
    </div>
  );
}


// ============================================================================
// Example 4: Using Contact Email Throughout App
// ============================================================================

// File: components/common/support-link.tsx
import { getContactEmail } from '@/lib/config';

export function SupportLink() {
  const email = getContactEmail();

  return (
    <a 
      href={`mailto:${email}`}
      className="text-blue-600 hover:text-blue-800 underline"
    >
      Contact Support ({email})
    </a>
  );
}


// ============================================================================
// Example 5: Using Social Links in Footer
// ============================================================================

// File: components/layout/footer.tsx
import { getSocialLinks } from '@/lib/config';
import { Twitter, Youtube, Github } from 'lucide-react';

export function FooterSocialLinks() {
  const socials = getSocialLinks();

  return (
    <div className="flex gap-4">
      <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6" />
      </a>
      <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
        <Youtube className="w-6 h-6" />
      </a>
      <a href={socials.github} target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
}


// ============================================================================
// Example 6: Using Documentation Links in Navigation
// ============================================================================

// File: components/navigation/doc-links.tsx
import { getDocumentationLinks } from '@/lib/config';

export function DocumentationNav() {
  const docs = getDocumentationLinks();

  return (
    <nav className="space-y-2">
      <a href={docs.setup} className="block text-blue-600 hover:text-blue-800">
        Setup Guide
      </a>
      <a href={docs.features} className="block text-blue-600 hover:text-blue-800">
        Features
      </a>
      <a href={docs.pricing} className="block text-blue-600 hover:text-blue-800">
        Pricing
      </a>
      <a href={docs.support} className="block text-blue-600 hover:text-blue-800">
        Support
      </a>
    </nav>
  );
}


// ============================================================================
// Example 7: Direct Config Import (Type-Safe)
// ============================================================================

// File: lib/pricing-utils.ts
import { config } from '@/lib/config';

export function getEditionPrice(edition: 'clinic' | 'plus' | 'pro') {
  return config.app.downloads[edition].price;
}

export function getEditionDiscountPercent(edition: 'clinic' | 'plus' | 'pro') {
  const download = config.app.downloads[edition];
  if (!download.originalPrice) return 0;
  
  const savings = download.originalPrice - download.price;
  return Math.round((savings / download.originalPrice) * 100);
}

export function getAppVersion() {
  return config.metadata.appVersion;
}


// ============================================================================
// IMPORTANT NOTES:
// ============================================================================
// 
// 1. Always import from '@/lib/config' - it provides type safety
// 2. To add new data: Edit config/links.json, then export a utility function
// 3. All URLs and credentials are centralized - single source of truth
// 4. No hardcoding of links or credentials in components
// 5. Easy to update across the entire app - just change the JSON file
//
// ============================================================================
