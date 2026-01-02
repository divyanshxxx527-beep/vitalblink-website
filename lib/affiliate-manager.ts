/**
 * Spreadsheet Management Module for Affiliate System
 * 
 * This module provides utilities for managing affiliate data in Google Sheets
 * It integrates with the Apps Script and provides a clean interface for CRUD operations
 */

interface AffiliateData {
  username: string;
  password: string;
  email: string;
  joinedDate?: string;
  commissionRate?: number;
  totalEarnings?: number;
  totalLeads?: number;
  status?: 'active' | 'inactive';
  phone?: string;
  company?: string;
  bankAccount?: string;
  bankAccountHolder?: string;
  bankName?: string;
  ifscCode?: string;
}

interface AffiliateResponse {
  success: boolean;
  error?: string;
  code?: string;
  data?: any;
  token?: string;
  expiryTime?: string;
  affiliate?: {
    username?: string;
    email?: string;
    joinedDate?: string;
    commissionRate?: number;
    totalEarnings?: number;
    totalLeads?: number;
    status?: string;
    phone?: string;
    company?: string;
    bankAccount?: string;
    bankAccountHolder?: string;
    bankName?: string;
    ifscCode?: string;
  };
  leads?: Array<{
    id: string;
    affiliateUsername: string;
    leadName: string;
    leadEmail: string;
    leadPhone: string;
    status: string;
    createdDate: string;
    conversionValue: number;
    notes: string;
    purchaseId?: string;
    paymentMethod?: string;
    paymentEmail?: string;
    statusUpdatedDate?: string;
  }>;
  count?: number;
  message?: string;
  lead?: any;
}

/**
 * Affiliate API Client
 * Handles all communication with the Apps Script backend
 */
export class AffiliateManager {
  private appsScriptUrl: string;
  private adminToken: string | null = null;
  private affiliateToken: string | null = null;

  constructor(appsScriptUrl: string, adminToken?: string) {
    this.appsScriptUrl = appsScriptUrl;
    this.adminToken = adminToken || null;
  }

  /**
   * Set admin token for administrative operations
   */
  setAdminToken(token: string): void {
    this.adminToken = token;
  }

  /**
   * Set affiliate token for user operations
   */
  setAffiliateToken(token: string): void {
    this.affiliateToken = token;
  }

  /**
   * Authenticate affiliate
   */
  async login(
    username: string,
    password: string
  ): Promise<AffiliateResponse> {
    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success && data.token) {
        this.affiliateToken = data.token;
        // Save to localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('affiliateToken', data.token);
        }
      }

      return data;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Logout affiliate
   */
  logout(): void {
    this.affiliateToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('affiliateToken');
    }
  }

  /**
   * Verify current affiliate token
   */
  async verifyToken(token?: string): Promise<AffiliateResponse> {
    const tokenToVerify = token || this.affiliateToken;

    if (!tokenToVerify) {
      return {
        success: false,
        error: 'No token provided',
        code: 'NO_TOKEN',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'verify',
          token: tokenToVerify,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Verification failed',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Get current affiliate profile
   */
  async getProfile(): Promise<AffiliateResponse> {
    if (!this.affiliateToken) {
      return {
        success: false,
        error: 'Not authenticated',
        code: 'NOT_AUTHENTICATED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getAffiliate',
          token: this.affiliateToken,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch profile',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * List all affiliates (admin only)
   */
  async listAffiliates(): Promise<AffiliateResponse> {
    if (!this.adminToken) {
      return {
        success: false,
        error: 'Admin token required',
        code: 'UNAUTHORIZED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'listAffiliates',
          adminToken: this.adminToken,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to list affiliates',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Create new affiliate (admin only)
   */
  async createAffiliate(data: AffiliateData): Promise<AffiliateResponse> {
    if (!this.adminToken) {
      return {
        success: false,
        error: 'Admin token required',
        code: 'UNAUTHORIZED',
      };
    }

    // Validate required fields
    if (!data.username || !data.password || !data.email) {
      return {
        success: false,
        error: 'Username, password, and email are required',
        code: 'MISSING_FIELDS',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createAffiliate',
          adminToken: this.adminToken,
          username: data.username,
          password: data.password,
          email: data.email,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create affiliate',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Get affiliate leads
   */
  async getLeads(): Promise<AffiliateResponse> {
    if (!this.affiliateToken) {
      return {
        success: false,
        error: 'Not authenticated',
        code: 'NOT_AUTHENTICATED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getLeads',
          token: this.affiliateToken,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch leads',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Create a new lead
   */
  async createLead(
    leadName: string,
    leadEmail: string,
    leadPhone?: string,
    notes?: string,
    purchaseId?: string,
    paymentMethod?: string,
    paymentEmail?: string
  ): Promise<AffiliateResponse> {
    if (!this.affiliateToken) {
      return {
        success: false,
        error: 'Not authenticated',
        code: 'NOT_AUTHENTICATED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createLead',
          token: this.affiliateToken,
          leadName,
          leadEmail,
          leadPhone: leadPhone || '',
          notes: notes || '',
          purchaseId: purchaseId || '',
          paymentMethod: paymentMethod || '',
          paymentEmail: paymentEmail || '',
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create lead',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Update affiliate profile and bank details
   */
  async updateProfile(profileData: Partial<AffiliateData>): Promise<AffiliateResponse> {
    if (!this.affiliateToken) {
      return {
        success: false,
        error: 'Not authenticated',
        code: 'NOT_AUTHENTICATED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'updateProfile',
          token: this.affiliateToken,
          ...profileData,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update profile',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Update payment information for a lead
   */
  async updatePayment(
    leadId: string,
    purchaseId?: string,
    paymentMethod?: string,
    paymentEmail?: string,
    status?: string
  ): Promise<AffiliateResponse> {
    if (!this.affiliateToken) {
      return {
        success: false,
        error: 'Not authenticated',
        code: 'NOT_AUTHENTICATED',
      };
    }

    try {
      const response = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'updatePayment',
          token: this.affiliateToken,
          leadId,
          purchaseId,
          paymentMethod,
          paymentEmail,
          status,
        }),
      });

      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update payment',
        code: 'NETWORK_ERROR',
      };
    }
  }

  /**
   * Get stored token
   */
  getToken(): string | null {
    return this.affiliateToken || (typeof window !== 'undefined' ? localStorage.getItem('affiliateToken') : null);
  }

  /**
   * Restore token from storage
   */
  restoreToken(): boolean {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('affiliateToken');
      if (stored) {
        this.affiliateToken = stored;
        return true;
      }
    }
    return false;
  }
}

/**
 * React Hook for Affiliate Authentication
 * 
 * Usage:
 * const { 
 *   login, 
 *   logout, 
 *   isAuthenticated, 
 *   profile, 
 *   loading, 
 *   error 
 * } = useAffiliateAuth();
 */
import { useState, useEffect } from 'react';

export function useAffiliateAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [manager, setManager] = useState<AffiliateManager | null>(null);

  useEffect(() => {
    // Initialize manager
    const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
    if (url) {
      const m = new AffiliateManager(url);
      setManager(m);

      // Restore token from storage
      if (m.restoreToken()) {
        setIsAuthenticated(true);
        // Verify token is still valid
        m.verifyToken().then((res) => {
          if (res.success) {
            // Fetch profile
            m.getProfile().then((profileRes) => {
              if (profileRes.success) {
                setProfile(profileRes.affiliate);
              }
            });
          } else {
            // Token invalid, clear it
            m.logout();
            setIsAuthenticated(false);
          }
        });
      }
    }
  }, []);

  const login = async (username: string, password: string) => {
    if (!manager) return;

    setLoading(true);
    setError(null);

    const result = await manager.login(username, password);

    if (result.success) {
      setIsAuthenticated(true);
      setProfile(result.affiliate);
    } else {
      setError(result.error || 'Login failed');
    }

    setLoading(false);
    return result.success;
  };

  const logout = () => {
    if (manager) {
      manager.logout();
    }
    setIsAuthenticated(false);
    setProfile(null);
    setError(null);
  };

  return {
    login,
    logout,
    isAuthenticated,
    profile,
    loading,
    error,
    manager,
  };
}

/**
 * Create a singleton instance for use throughout the app
 */
let affiliateManager: AffiliateManager | null = null;

export function getAffiliateManager(): AffiliateManager {
  if (!affiliateManager) {
    const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';
    affiliateManager = new AffiliateManager(url);
  }
  return affiliateManager;
}
