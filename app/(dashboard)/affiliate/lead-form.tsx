"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Loader, Plus } from "lucide-react";
import { getAffiliateManager } from "@/lib/affiliate-manager";

interface LeadFormProps {
  onLeadCreated: () => void;
}

type MessageType = "success" | "error" | null;

export default function LeadForm({ onLeadCreated }: LeadFormProps) {
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [purchaseId, setPurchaseId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentEmail, setPaymentEmail] = useState("");
  const [message, setMessage] = useState<{ type: MessageType; text: string }>({
    type: null,
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Restore token from localStorage if available
    const manager = getAffiliateManager();
    const restored = manager.restoreToken();
    if (!restored) {
      setIsAuthenticated(false);
      setMessage({
        type: "error",
        text: "Not authenticated. Please log in first.",
      });
    }
  }, []);

  const handleFieldBlur = (field: string) => {
    setTouchedFields((prev) => new Set([...prev, field]));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateFields = (): boolean => {
    if (!leadName.trim()) {
      setMessage({ type: "error", text: "Lead name is required" });
      return false;
    }
    if (!leadEmail.trim()) {
      setMessage({ type: "error", text: "Lead email is required" });
      return false;
    }
    if (!validateEmail(leadEmail)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return false;
    }
    if (leadName.trim().length < 2) {
      setMessage({ type: "error", text: "Lead name must be at least 2 characters" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });

    if (!isAuthenticated) {
      setMessage({
        type: "error",
        text: "Not authenticated. Please log in first.",
      });
      return;
    }

    if (!validateFields()) {
      return;
    }

    setLoading(true);

    try {
      const manager = getAffiliateManager();
      const result = await manager.createLead(
        leadName.trim(),
        leadEmail.trim(),
        leadPhone.trim() || undefined,
        notes.trim() || undefined,
        purchaseId.trim() || undefined,
        paymentMethod.trim() || undefined,
        paymentEmail.trim() || undefined
      );

      if (result.success) {
        setMessage({
          type: "success",
          text: `Lead "${leadName}" created successfully!`,
        });
        // Reset form
        setLeadName("");
        setLeadEmail("");
        setLeadPhone("");
        setNotes("");
        setPurchaseId("");
        setPaymentMethod("");
        setPaymentEmail("");
        setTouchedFields(new Set());

        // Refresh leads after 1.5 seconds
        setTimeout(() => {
          onLeadCreated();
        }, 1500);
      } else {
        const errorMap: { [key: string]: string } = {
          MISSING_FIELDS: "Lead name and email are required",
          NOT_AUTHENTICATED: "Your session has expired. Please log in again.",
          NETWORK_ERROR: "Network error. Please check your connection.",
        };

        const errorMessage =
          errorMap[result.code || ""] ||
          result.error ||
          "Failed to create lead. Please try again.";
        setMessage({ type: "error", text: errorMessage });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-slate-800 p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Plus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Lead</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Add a new lead to track potential customers
        </p>
      </div>

      {/* Message Indicator */}
      {message.type && (
        <div
          className={`mb-6 p-4 rounded-lg flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
            message.type === "success"
              ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm font-medium ${
              message.type === "success"
                ? "text-green-800 dark:text-green-200"
                : "text-red-800 dark:text-red-200"
            }`}
          >
            {message.text}
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Lead Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Lead Name *
          </label>
          <input
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            onBlur={() => handleFieldBlur("leadName")}
            disabled={loading}
            placeholder="e.g., John Smith or ABC Hospital"
            className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 ${
              touchedFields.has("leadName") && !leadName.trim()
                ? "border-red-300 dark:border-red-600"
                : "border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
            } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800`}
          />
          {touchedFields.has("leadName") && !leadName.trim() && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">Lead name is required</p>
          )}
        </div>

        {/* Lead Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Lead Email *
          </label>
          <input
            type="email"
            value={leadEmail}
            onChange={(e) => setLeadEmail(e.target.value)}
            onBlur={() => handleFieldBlur("leadEmail")}
            disabled={loading}
            placeholder="e.g., contact@example.com"
            className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 ${
              touchedFields.has("leadEmail") && leadEmail && !validateEmail(leadEmail)
                ? "border-red-300 dark:border-red-600"
                : touchedFields.has("leadEmail") && !leadEmail.trim()
                ? "border-red-300 dark:border-red-600"
                : "border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
            } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800`}
          />
          {touchedFields.has("leadEmail") && !leadEmail.trim() && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">Email is required</p>
          )}
          {touchedFields.has("leadEmail") && leadEmail && !validateEmail(leadEmail) && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">Please enter a valid email</p>
          )}
        </div>

        {/* Lead Phone (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Phone Number <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            value={leadPhone}
            onChange={(e) => setLeadPhone(e.target.value)}
            disabled={loading}
            placeholder="e.g., +1 (555) 123-4567"
            className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800"
          />
        </div>

        {/* Payment Information Section */}
        <div className="border-t-2 border-gray-200 dark:border-slate-700 pt-5 mt-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-purple-600 dark:text-purple-400">💳</span>
            Payment Information (Optional)
          </h3>
          <div className="space-y-4">
            {/* Purchase ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Purchase ID <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={purchaseId}
                onChange={(e) => setPurchaseId(e.target.value)}
                disabled={loading}
                placeholder="e.g., ORD-2025-12345"
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Payment Method <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800"
              >
                <option value="">Select payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Stripe">Stripe</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="UPI">UPI</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Payment Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Payment Email <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                value={paymentEmail}
                onChange={(e) => setPaymentEmail(e.target.value)}
                disabled={loading}
                placeholder="e.g., payments@example.com"
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Notes (Optional) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Notes <span className="text-gray-500 dark:text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            disabled={loading}
            placeholder="Add any additional information about this lead..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !leadName.trim() || !leadEmail.trim()}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            loading || !leadName.trim() || !leadEmail.trim()
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed opacity-60"
              : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl active:shadow-md active:scale-95"
          }`}
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Creating Lead...</span>
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span>Create Lead</span>
            </>
          )}
        </button>
      </form>

      {/* Required Fields Note */}
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-6 pt-6 border-t border-gray-200 dark:border-slate-800">
        * Lead name and email are required fields
      </p>
    </div>
  );
}
