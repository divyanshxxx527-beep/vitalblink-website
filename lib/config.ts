/**
 * Configuration utility for accessing app links, downloads, and credentials
 * Source: config/links.json
 * Usage: import { useConfig } from '@/lib/config'
 */

import linksConfig from '@/config/links.json';

export function useConfig() {
  return linksConfig;
}

export function getDownloadLink(downloadType: keyof typeof linksConfig.app.downloads) {
  return linksConfig.app.downloads[downloadType];
}

export function getCredentials() {
  return linksConfig.app.credentials;
}

export function getContactEmail() {
  return linksConfig.app.contact.email;
}

export function getSocialLinks() {
  return linksConfig.app.social;
}

export function getDocumentationLinks() {
  return linksConfig.app.documentation;
}

export function getAllEditions() {
  return {
    clinic: linksConfig.app.downloads.clinic,
    plus: linksConfig.app.downloads.plus,
    pro: linksConfig.app.downloads.pro,
  };
}

export function getVitalSphere() {
  return linksConfig.app.downloads.vitalsphere;
}

export const config = linksConfig;
