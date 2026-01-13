"use client";

import { useEffect, useState } from "react";

interface AffirmationCardProps {
  affirmation: string;
  onNewAffirmation: () => void;
  onShare: () => void;
  animationsEnabled: boolean;
}

export default function AffirmationCard({
  affirmation,
  onNewAffirmation,
  onShare,
  animationsEnabled,
}: AffirmationCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (animationsEnabled) {
      setIsVisible(false);
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }
  }, [affirmation, animationsEnabled]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient-x">
      <div className="max-w-3xl w-full">
        <div
          className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/30 dark:border-slate-700/30 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                Daily Affirmation
              </h2>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 dark:text-gray-100 mb-10 leading-tight tracking-tight">
              {affirmation}
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={onNewAffirmation}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
              >
                New Affirmation
              </button>
              <button
                onClick={onShare}
                className="px-8 py-4 bg-white/90 dark:bg-slate-700/90 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-white dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-600"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}