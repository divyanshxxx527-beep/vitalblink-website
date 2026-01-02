"use client";

import { useState } from "react";
import { updateLeadStatus } from "@/lib/affiliation";

interface Lead {
  leadID: string;
  hospitalName: string;
  address: string;
  status: string;
  paymentMethod: string;
  orderID: string;
  purchaseEmail: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
}

interface LeadStatusModalProps {
  lead: Lead;
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadStatusModal({
  lead,
  isOpen,
  onClose,
}: LeadStatusModalProps) {
  const [status, setStatus] = useState(lead.status);
  const [paymentMethod, setPaymentMethod] = useState(lead.paymentMethod);
  const [orderID, setOrderID] = useState(lead.orderID);
  const [purchaseEmail, setPurchaseEmail] = useState(lead.purchaseEmail);
  const [amount, setAmount] = useState(lead.amount);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    const result = await updateLeadStatus(
      lead.leadID,
      status,
      paymentMethod,
      orderID,
      purchaseEmail,
      amount
    );

    if (result.success) {
      setSuccess("Lead updated successfully!");
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setError(result.error || "Failed to update lead");
    }

    setSaving(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Update Lead</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-4">
          {error && (
            <div className="rounded-md bg-red-50 p-3 mb-4">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-50 p-3 mb-4">
              <p className="text-sm font-medium text-green-800">{success}</p>
            </div>
          )}

          <div className="mb-4 p-3 bg-gray-50 rounded">
            <p className="text-xs text-gray-600 mb-1">Hospital Name</p>
            <p className="text-sm font-medium text-gray-900">
              {lead.hospitalName}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="Payment Done">Payment Done</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="Direct">Direct</option>
                <option value="Through Site">Through Site</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <input
                type="text"
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
                placeholder="e.g., ORD-2025-001"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g., 50000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Email
              </label>
              <input
                type="email"
                value={purchaseEmail}
                onChange={(e) => setPurchaseEmail(e.target.value)}
                placeholder="e.g., admin@hospital.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 font-medium"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
