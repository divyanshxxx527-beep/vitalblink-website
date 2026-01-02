"use client";

import { useState, useEffect } from "react";
import { LogOut, BarChart3, Plus, User } from "lucide-react";
import LoginForm from "./login";
import ProfileForm from "./profile";
import LeadForm from "./lead-form";
import LeadsList from "./leads-list";
import { useAffiliateAuth } from "@/lib/affiliate-manager";

export default function AffiliatePage() {
  const { login, logout, isAuthenticated, profile, loading } = useAffiliateAuth();
  const [activeTab, setActiveTab] = useState("leads");
  const [refreshLeads, setRefreshLeads] = useState(0);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Mark auth as checked once loading is complete
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading, isAuthenticated]);

  const handleLogout = () => {
    logout();
    setActiveTab("leads");
  };

  const handleLoginSuccess = () => {
    setActiveTab("leads");
  };

  const handleLeadCreated = () => {
    setRefreshLeads((prev) => prev + 1);
    setActiveTab("leads");
  };

  if (loading || !authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Affiliate Dashboard
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Welcome, {profile?.username || "Affiliate"}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {profile && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Total Leads
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {profile.totalLeads || 0}
                  </p>
                </div>
                <BarChart3 className="w-10 h-10 text-blue-500" />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Total Earnings
                  </p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    ${(profile.totalEarnings || 0).toFixed(2)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-lg">
                  💰
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Commission Rate
                  </p>
                  <p className="text-3xl font-bold text-purple-600 mt-2">
                    {((profile.commissionRate || 0) * 100).toFixed(0)}%
                  </p>
                </div>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-lg">
                  📊
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex flex-wrap gap-0 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("leads")}
              className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "leads"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              My Leads
            </button>
            <button
              onClick={() => setActiveTab("create-lead")}
              className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "create-lead"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Plus className="w-5 h-5" />
              Create Lead
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "profile"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <User className="w-5 h-5" />
              Profile
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "leads" && (
              <div key={refreshLeads}>
                <LeadsList />
              </div>
            )}
            {activeTab === "create-lead" && (
              <LeadForm onLeadCreated={handleLeadCreated} />
            )}
            {activeTab === "profile" && <ProfileForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
