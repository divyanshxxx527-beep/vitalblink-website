/**
 * Type definitions for config/links.json
 * Provides full IDE support and type safety
 */

export type DownloadType = 'installer' | 'clinic' | 'plus' | 'pro' | 'vitalsphere' | 'vitalblink_trial';

export interface Download {
  name: string;
  url: string;
  description: string;
  version: string;
  price?: number;
  originalPrice?: number;
  fileName?: string;
  fileSize?: string;
  lastUpdated?: string;
}

export interface Credentials {
  appPassword: string;
  adminUsername: string;
  adminPassword: string;
  note: string;
}

export interface Contact {
  email: string;
  support: string;
  sales: string;
}

export interface Social {
  twitter: string;
  youtube: string;
  github: string;
}

export interface Documentation {
  setup: string;
  features: string;
  departments: string;
  pricing: string;
  support: string;
  documentation: string;
}

export interface Metadata {
  appName: string;
  appVersion: string;
  company: string;
  description: string;
  lastModified: string;
  author: string;
}

export interface AppConfig {
  app: {
    downloads: {
      installer: Download;
      clinic: Download;
      plus: Download;
      pro: Download;
      vitalsphere: Download;
      vitalblink_trial: Download;
    };
    credentials: Credentials;
    contact: Contact;
    social: Social;
    documentation: Documentation;
  };
  metadata: Metadata;
}

// Export types for use in components
