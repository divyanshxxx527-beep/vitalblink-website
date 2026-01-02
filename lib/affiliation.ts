/**
 * Affiliation API Wrapper
 * Calls the Next.js API route which proxies to Google Apps Script
 */

interface ApiResponse<T = any> {
  success: boolean;
  error?: string;
  [key: string]: any;
}

/**
 * Make a POST request to Next.js API route (which forwards to Apps Script)
 */
async function callAppsScript<T = any>(
  action: string,
  payload: Record<string, any>
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch("/api/affiliate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        ...payload,
      }),
    });

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Affiliate API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Request failed",
    };
  }
}

/**
 * Get token from localStorage
 */
function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("affiliateToken");
}

/**
 * Set token in localStorage
 */
function setToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("affiliateToken", token);
}

/**
 * Clear token from localStorage
 */
function clearToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("affiliateToken");
}

/**
 * LOGIN - Authenticate user
 */
export async function login(
  username: string,
  password: string
): Promise<ApiResponse> {
  const response = await callAppsScript("login", {
    username,
    password,
  });

  if (response.success && response.token) {
    setToken(response.token);
  }

  return response;
}

/**
 * LOGOUT - Clear local token
 */
export function logout(): void {
  clearToken();
}

/**
 * GET PROFILE - Fetch user profile with bank details
 */
export async function getProfile(): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("getProfile", { token });
}

/**
 * UPDATE PROFILE - Save bank details
 */
export async function updateProfile(
  bankHolderName: string,
  bankName: string,
  bankAccountNo: string,
  ifsc: string
): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("updateProfile", {
    token,
    bankHolderName,
    bankName,
    bankAccountNo,
    ifsc,
  });
}

/**
 * CREATE LEAD - Add a new hospital lead
 */
export async function createLead(
  hospitalName: string,
  address: string,
  purchaseId?: string,
  paymentMethod?: string,
  paymentEmail?: string
): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("createLead", {
    token,
    hospitalName,
    address,
    purchaseId,
    paymentMethod,
    paymentEmail,
  });
}

/**
 * LIST LEADS - Get all user's leads
 */
export async function listLeads(): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("listLeads", { token });
}

/**
 * UPDATE LEAD STATUS - Update payment info and status
 */
export async function updateLeadStatus(
  leadID: string,
  status: string,
  paymentMethod?: string,
  orderID?: string,
  purchaseEmail?: string,
  amount?: string
): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("updateLeadStatus", {
    token,
    leadID,
    status,
    paymentMethod,
    orderID,
    purchaseEmail,
    amount,
  });
}

/**
 * UPDATE PAYMENT - Update payment information for a lead
 */
export async function updatePayment(
  leadId: string,
  purchaseId?: string,
  paymentMethod?: string,
  paymentEmail?: string,
  status?: string
): Promise<ApiResponse> {
  const token = getToken();
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  return await callAppsScript("updatePayment", {
    token,
    leadId,
    purchaseId,
    paymentMethod,
    paymentEmail,
    status,
  });
}

/**
 * CHECK AUTH - Verify if user is logged in
 */
export function isAuthenticated(): boolean {
  return getToken() !== null;
}
