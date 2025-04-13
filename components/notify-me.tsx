"use client";

import { useState } from "react";

export default function NotifyMe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    // Simulate API call for notification signup
    try {
      // Replace with actual API call when ready
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Be the first to know when Xenon Notes launches
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1 transition-all duration-300 focus-within:border-white/30 focus-within:shadow-lg hover:border-white/20">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow bg-transparent text-white px-4 py-3 focus:outline-none placeholder:text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            required
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              status === "loading"
                ? "bg-gray-700 text-gray-300"
                : status === "success"
                ? "bg-green-600 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {status === "loading" ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
              </span>
            ) : status === "success" ? (
              <span className="flex items-center">
                <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Notified
              </span>
            ) : (
              "Notify Me"
            )}
          </button>
        </div>
        
        {status === "error" && (
          <p className="mt-2 text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}
        
        {status === "success" && (
          <p className="mt-2 text-green-400 text-sm">Thank you! We'll notify you when we launch.</p>
        )}
      </form>
    </div>
  );
}
