# Configuration Guide

This directory contains centralized configuration files for the VitalBlink application.

## Files

### `links.json`
Central configuration file for managing all app links, downloads, credentials, and metadata.

**Structure:**
- `app.downloads` - All download links and versions
- `app.credentials` - Default app credentials
- `app.contact` - Contact information
- `app.social` - Social media links
- `app.documentation` - Documentation page links
- `metadata` - App metadata and version info

## Usage

### Option 1: Direct Import
```typescript
import { config } from '@/lib/config';

const clinicDownload = config.app.downloads.clinic;
const email = config.app.contact.email;
```

### Option 2: Using Utility Functions
```typescript
import { 
  getDownloadLink, 
  getCredentials, 
  getContactEmail, 
  getAllEditions 
} from '@/lib/config';

// Get specific download
const installer = getDownloadLink('installer');

// Get credentials
const { appPassword, adminUsername, adminPassword } = getCredentials();

// Get contact email
const supportEmail = getContactEmail();

// Get all editions
const editions = getAllEditions();
```

## Examples

### Using in a React Component
```typescript
'use client';

import { getDownloadLink, getContactEmail } from '@/lib/config';

export default function DownloadButton() {
  const installer = getDownloadLink('installer');
  const email = getContactEmail();

  return (
    <div>
      <a href={installer.url} download={installer.fileName}>
        Download {installer.name}
      </a>
      <p>Need help? Contact us at {email}</p>
    </div>
  );
}
```

### Using in Pricing Page
```typescript
import { getAllEditions } from '@/lib/config';

const editions = getAllEditions();

// Now you can map through editions and display them
Object.entries(editions).map(([key, edition]) => (
  <div key={key}>
    <h3>{edition.name}</h3>
    <p>${edition.price}</p>
    <a href={edition.url}>Purchase</a>
  </div>
))
```

## Maintaining the Configuration

To update downloads, credentials, or links:

1. Edit `config/links.json`
2. All components using the configuration will automatically reflect the changes
3. No need to update multiple files - single source of truth

## Best Practices

1. Always use the utility functions for better type safety
2. Keep all URLs and credentials in this file only
3. Update `lastModified` timestamp when making changes
4. Use descriptive names for new entries
5. Comment complex structures

## Adding New Configuration

To add new configuration sections:

1. Open `config/links.json`
2. Add your new section under the appropriate parent object
3. Export a new utility function in `lib/config.ts` if needed
4. Update this README with usage examples
