"use client";

import { useState, useEffect } from "react";
import { AlertCircle, DollarSign, Edit } from "lucide-react";
import { getAffiliateManager } from "@/lib/affiliate-manager";
import PaymentStatusModal from "./payment-status-modal";

interface Lead {
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
}

export default function LeadsList() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const manager = getAffiliateManager();

  useEffect(() => {
    // Restore token from localStorage if available
    const restored = manager.restoreToken();
    if (!restored) {
      setError("Not authenticated. Please log in first.");
      setLoading(false);
      return;
    }
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    setError("");

    const result = await manager.getLeads();

    if (result.success) {
      setLeads(result.leads || []);
    } else {
      setError(result.error || "Failed to load leads");
    }

    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700";
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 border border-green-300 dark:border-green-700";
      case "processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 border border-blue-300 dark:border-blue-700";
      case "done":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 border border-purple-300 dark:border-purple-700";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 border border-red-300 dark:border-red-700";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200 border border-gray-300 dark:border-gray-700";
    }
  };

  const handleOpenModal = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  const handleUpdate = () => {
    fetchLeads();
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Loading leads...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-red-900 dark:text-red-200">Error</h3>
          <p className="text-red-800 dark:text-red-300 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No Leads Available
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You haven't created any leads yet. Start by creating your first lead to track potential customers.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Your Leads ({leads.length})
      </h2>
      <div className="grid gap-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
          >
            {/* Header with Status */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {lead.leadName}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{lead.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(
                    lead.status
                  )}`}
                >
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
                <button
                  onClick={() => handleOpenModal(lead)}
                  className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors group"
                  title="Update payment status"
                >
                  <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="text-gray-400 mt-1">✉️</div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</p>
                  <p className="text-sm text-gray-900 dark:text-white break-all">
                    {lead.leadEmail}
                  </p>
                </div>
              </div>

              {lead.leadPhone && (
                <div className="flex items-start gap-3">
                  <div className="text-gray-400 mt-1">📞</div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {lead.leadPhone}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="text-gray-400 mt-1">📅</div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Created</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {formatDate(lead.createdDate)}
                  </p>
                </div>
              </div>

              {lead.statusUpdatedDate && lead.statusUpdatedDate !== lead.createdDate && (
                <div className="flex items-start gap-3">
                  <div className="text-gray-400 mt-1">🔄</div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Last Updated</p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {formatDate(lead.statusUpdatedDate)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Information */}
            {(lead.purchaseId || lead.paymentMethod || lead.paymentEmail) && (
              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <p className="text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wide">
                    Payment Information
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {lead.purchaseId && (
                    <div>
                      <p className="text-xs text-purple-700 dark:text-purple-300 font-medium mb-1">
                        Purchase ID
                      </p>
                      <p className="text-sm text-purple-900 dark:text-purple-100 font-mono">
                        {lead.purchaseId}
                      </p>
                    </div>
                  )}
                  {lead.paymentMethod && (
                    <div>
                      <p className="text-xs text-purple-700 dark:text-purple-300 font-medium mb-1">
                        Payment Method
                      </p>
                      <p className="text-sm text-purple-900 dark:text-purple-100">
                        {lead.paymentMethod}
                      </p>
                    </div>
                  )}
                  {lead.paymentEmail && (
                    <div>
                      <p className="text-xs text-purple-700 dark:text-purple-300 font-medium mb-1">
                        Payment Email
                      </p>
                      <p className="text-sm text-purple-900 dark:text-purple-100 break-all">
                        {lead.paymentEmail}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Conversion Value */}
            {lead.conversionValue > 0 && (
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    💰
                  </div>
                  <div>
                    <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                      Conversion Value
                    </p>
                    <p className="text-lg text-green-900 dark:text-green-100 font-bold">
                      ${lead.conversionValue.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Notes */}
            {lead.notes && (
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 font-bold mb-2 uppercase tracking-wide">
                  Notes
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{lead.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Payment Status Modal */}
      {selectedLead && (
        <PaymentStatusModal
          lead={selectedLead}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
