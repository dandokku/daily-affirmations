"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface Settings {
  animationsEnabled: boolean;
  category: string;
}

interface SettingsPanelProps {
  onSettingsChange: () => void;
}

export default function SettingsPanel({ onSettingsChange }: SettingsPanelProps) {
  const [settings, setSettings] = useState<Settings>({
    animationsEnabled: true,
    category: "all",
  });

  useEffect(() => {
    const saved = localStorage.getItem("daily-affirm-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
    }
  }, []);

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem("daily-affirm-settings", JSON.stringify(updated));
    onSettingsChange();
  };

  const categories = ["all", "confidence", "focus", "success", "peace", "discipline", "self-love"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-gray-800 dark:text-gray-100 mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your affirmation experience
          </p>
        </div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-slate-700/30 space-y-8">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-slate-700/50 rounded-2xl">
            <div>
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Theme</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Switch between light and dark mode</p>
            </div>
            <ThemeToggle />
          </div>

          {/* Animations Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-slate-700/50 rounded-2xl">
            <div>
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Animations</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enable smooth transitions</p>
            </div>
            <button
              onClick={() => updateSettings({ animationsEnabled: !settings.animationsEnabled })}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${
                settings.animationsEnabled ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  settings.animationsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Category Selection */}
          <div className="p-4 bg-gray-50/50 dark:bg-slate-700/50 rounded-2xl">
            <div className="mb-4">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200 block mb-2">Affirmation Category</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred theme</p>
            </div>
            <select
              value={settings.category}
              onChange={(e) => updateSettings({ category: e.target.value })}
              className="w-full p-4 bg-white dark:bg-slate-600 text-gray-800 dark:text-gray-200 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="py-2">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}