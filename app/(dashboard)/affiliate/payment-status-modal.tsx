"use client";

import { useState } from "react";
import { X, CheckCircle, Clock, Loader, AlertCircle, DollarSign } from "lucide-react";
import { getAffiliateManager } from "@/lib/affiliate-manager";

interface Lead {
  id: string;
  leadName: string;
  leadEmail: string;
  status: string;
  purchaseId?: string;
  paymentMethod?: string;
  paymentEmail?: string;
  statusUpdatedDate?: string;
  createdDate?: string;
}

interface PaymentStatusModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

export default function PaymentStatusModal({
  lead,
  isOpen,
  onClose,
  onUpdate,
}: PaymentStatusModalProps) {
  const [purchaseId, setPurchaseId] = useState(lead?.purchaseId || "");
  const [paymentMethod, setPaymentMethod] = useState(lead?.paymentMethod || "");
  const [paymentEmail, setPaymentEmail] = useState(lead?.paymentEmail || "");
  const [status, setStatus] = useState(lead?.status || "pending");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  if (!isOpen || !lead) return null;

  const statusConfig = {
    pending: {
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border-yellow-300 dark:border-yellow-800",
      icon: Clock,
      label: "Pending",
      description: "Awaiting initial review",
    },
    approved: {
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 border-green-300 dark:border-green-800",
      icon: CheckCircle,
      label: "Approved",
      description: "Lead approved for processing",
    },
    processing: {
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 border-blue-300 dark:border-blue-800",
      icon: Loader,
      label: "Processing",
      description: "Payment being processed",
    },
    done: {
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 border-purple-300 dark:border-purple-800",
      icon: DollarSign,
      label: "Done",
      description: "Payment completed successfully",
    },
    rejected: {
      color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 border-red-300 dark:border-red-800",
      icon: AlertCircle,
      label: "Rejected",
      description: "Lead was rejected",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: null, text: "" });

    try {
      const manager = getAffiliateManager();
      const result = await manager.updatePayment(
        lead.id,
        purchaseId.trim() || undefined,
        paymentMethod.trim() || undefined,
        paymentEmail.trim() || undefined,
        status
      );

      if (result.success) {
        setMessage({
          type: "success",
          text: "Payment information updated successfully!",
        });
        setTimeout(() => {
          onUpdate();
          onClose();
        }, 1500);
      } else {
        setMessage({
          type: "error",
          text: result.error || "Failed to update payment information",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  const CurrentStatusIcon = statusConfig[status as keyof typeof statusConfig]?.icon || Clock;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Payment Information</h2>
              <p className="text-sm text-blue-100">Update payment details and status</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Lead Info */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {lead.leadName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Email:</span>
              <span className="text-gray-900 dark:text-white">{lead.leadEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">Lead ID:</span>
              <span className="text-gray-900 dark:text-white font-mono text-xs">
                {lead.id}
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        {message.type && (
          <div className="px-6 pt-4">
            <div
              className={`p-4 rounded-lg flex gap-3 ${
                message.type === "success"
                  ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
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
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Status Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Payment Status
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(statusConfig).map(([key, config]) => {
                const Icon = config.icon;
                const isSelected = status === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setStatus(key)}
                    disabled={loading}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      isSelected
                        ? config.color + " shadow-md scale-105"
                        : "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected
                            ? ""
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      />
                      <span className="font-semibold">{config.label}</span>
                    </div>
                    <p
                      className={`text-xs ${
                        isSelected
                          ? ""
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {config.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Purchase ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Purchase ID <span className="text-gray-500 font-normal">(Optional)</span>
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
              Payment Method <span className="text-gray-500 font-normal">(Optional)</span>
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
              Payment Email <span className="text-gray-500 font-normal">(Optional)</span>
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

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 py-2.5 px-4 rounded-lg font-semibold bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Update Payment</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
