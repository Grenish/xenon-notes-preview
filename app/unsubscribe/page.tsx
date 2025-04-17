"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("Processing...");
  const [statusType, setStatusType] = useState("processing"); // 'processing', 'success', 'error'

  useEffect(() => {
    if (!token) {
      setStatus("Invalid token");
      setStatusType("error");
      return;
    }

    fetch("/api/waitlist/unsubscribe", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setStatus("Unsubscribe failed.");
          setStatusType("error");
        } else {
          setStatus("You've been unsubscribed successfully.");
          setStatusType("success");
        }
      })
      .catch(() => {
        setStatus("An error occurred. Please try again later.");
        setStatusType("error");
      });
  }, [token]);

  const getStatusIcon = () => {
    switch (statusType) {
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-emerald-400 mx-auto mb-4 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-rose-400 mx-auto mb-4 drop-shadow-[0_0_8px_rgba(251,113,133,0.3)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-400 mx-auto mb-4 animate-spin drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
    }
  };

  const getEmotionalMessage = () => {
    if (statusType === "success") {
      return "We're sad to see you go...";
    } else if (statusType === "error") {
      return "Something went wrong...";
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-goodbye py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-gray-950/40 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-gray-700">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
            Farewell
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {getEmotionalMessage()}
          </p>
        </div>

        <div className="mt-8">
          {getStatusIcon()}
          <div
            className={`mt-2 text-center text-lg ${
              statusType === "success"
                ? "text-emerald-300"
                : statusType === "error"
                  ? "text-rose-300"
                  : "text-sky-300"
            }`}
          >
            {status}
          </div>

          {statusType === "success" && (
            <p className="mt-4 text-center text-sm text-gray-400 italic">
              "Every goodbye makes the next hello more meaningful."
              <br />
              You can always come back when you're ready.
            </p>
          )}

          {statusType === "error" && (
            <p className="mt-4 text-center text-sm text-gray-400">
              There was an issue processing your request. Let us try to make it
              right.
            </p>
          )}
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="text-center w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-gray-700 hover:shadow-[0_0_15px_rgba(129,140,248,0.5)] transition-all duration-300 focus:outline-none"
          >
            Return home
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Xenon Notes. All journeys have their end.
      </div>
    </div>
  );
}
