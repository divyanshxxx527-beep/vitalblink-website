"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle, Eye, EyeOff, LogIn, Loader } from "lucide-react";
import { login } from "@/lib/affiliation";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

type MessageType = "success" | "error" | "info" | null;

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ type: MessageType; text: string }>({
    type: null,
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const handleFieldBlur = (field: string) => {
    setTouchedFields((prev) => new Set([...prev, field]));
  };

  const validateFields = () => {
    if (!username.trim()) {
      setMessage({ type: "error", text: "Username is required" });
      return false;
    }
    if (!password) {
      setMessage({ type: "error", text: "Password is required" });
      return false;
    }
    if (username.trim().length < 3) {
      setMessage({ type: "error", text: "Username must be at least 3 characters" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });

    if (!validateFields()) {
      return;
    }

    setLoading(true);

    try {
      const result = await login(username, password);

      if (result.success) {
        setMessage({
          type: "success",
          text: `Welcome back, ${result.affiliate?.username}! Redirecting...`,
        });
        // Small delay to show success message, then reload
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        const errorMap: { [key: string]: string } = {
          USER_NOT_FOUND: "Username not found. Please check and try again.",
          INVALID_PASSWORD: "Incorrect password. Please try again.",
          MISSING_CREDENTIALS: "Username and password are required.",
          TOKEN_EXPIRED: "Your session has expired. Please log in again.",
          NETWORK_ERROR: "Network error. Please check your connection.",
        };

        const errorMessage =
          errorMap[result.code || ""] || result.error || "Login failed. Please try again.";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Affiliate Portal
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Sign in to access your dashboard and manage leads
          </p>
        </div>

        {/* Message Indicator */}
        {message.type && (
          <div
            className={`mb-6 p-4 rounded-lg flex gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
              message.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                : message.type === "error"
                ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            ) : message.type === "error" ? (
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            )}
            <p
              className={`text-sm font-medium ${
                message.type === "success"
                  ? "text-green-800 dark:text-green-200"
                  : message.type === "error"
                  ? "text-red-800 dark:text-red-200"
                  : "text-blue-800 dark:text-blue-200"
              }`}
            >
              {message.text}
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-800">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
              >
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => handleFieldBlur("username")}
                  disabled={loading}
                  className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 ${
                    touchedFields.has("username") && !username.trim()
                      ? "border-red-300 dark:border-red-600"
                      : "border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                  } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800`}
                  placeholder="Enter your username"
                />
              </div>
              {touchedFields.has("username") && !username.trim() && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <span>Username cannot be empty</span>
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleFieldBlur("password")}
                  disabled={loading}
                  className={`w-full px-4 py-2.5 rounded-lg border-2 transition-colors duration-200 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-slate-800 ${
                    touchedFields.has("password") && !password
                      ? "border-red-300 dark:border-red-600"
                      : "border-gray-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                  } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-slate-800 pr-10`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {touchedFields.has("password") && !password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  Password cannot be empty
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !username.trim() || !password}
              className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                loading || !username.trim() || !password
                  ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed opacity-60"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl active:shadow-md active:scale-95"
              }`}
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
