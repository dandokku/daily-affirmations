"use client";

import { useState, useEffect } from "react";
import AffirmationCard from "../components/AffirmationCard";
import { affirmations } from "../data/affirmations";

interface Settings {
  animationsEnabled: boolean;
  category: string;
}

export default function Home() {
  const [currentAffirmation, setCurrentAffirmation] = useState<string>("");
  const [settings, setSettings] = useState<Settings>({ animationsEnabled: true, category: "all" });
  const [history, setHistory] = useState<string[]>([]);

  const getTodaysAffirmation = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("daily-affirm-date");
    const savedAffirmation = localStorage.getItem("daily-affirm-today");

    if (savedDate === today && savedAffirmation) {
      setCurrentAffirmation(savedAffirmation);
      return;
    }

    // Generate new affirmation
    const filteredAffirmations = settings.category === "all"
      ? affirmations
      : affirmations.filter(a => a.category === settings.category);

    const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
    const newAffirmation = filteredAffirmations[randomIndex].text;

    setCurrentAffirmation(newAffirmation);
    localStorage.setItem("daily-affirm-today", newAffirmation);
    localStorage.setItem("daily-affirm-date", today);

    // Add to history if not already there
    const updatedHistory = [...new Set([newAffirmation, ...history])];
    setHistory(updatedHistory);
    localStorage.setItem("daily-affirm-history", JSON.stringify(updatedHistory));
  };

  useEffect(() => {
    // Load settings
    const loadSettings = () => {
      const savedSettings = localStorage.getItem("daily-affirm-settings");
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      }
    };

    loadSettings();

    // Load history
    const savedHistory = localStorage.getItem("daily-affirm-history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }

    // Get today's affirmation
    getTodaysAffirmation();

    // Listen for settings changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "daily-affirm-settings") {
        loadSettings();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    // If category changed, regenerate today's affirmation
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("daily-affirm-date");
    if (savedDate !== today) {
      getTodaysAffirmation();
    }
  }, [settings.category, getTodaysAffirmation]);

  const handleNewAffirmation = () => {
    const filteredAffirmations = settings.category === "all"
      ? affirmations
      : affirmations.filter(a => a.category === settings.category);

    const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
    const newAffirmation = filteredAffirmations[randomIndex].text;

    setCurrentAffirmation(newAffirmation);

    // Update today's affirmation
    const today = new Date().toDateString();
    localStorage.setItem("daily-affirm-today", newAffirmation);
    localStorage.setItem("daily-affirm-date", today);

    // Add to history
    const updatedHistory = [...new Set([newAffirmation, ...history])];
    setHistory(updatedHistory);
    localStorage.setItem("daily-affirm-history", JSON.stringify(updatedHistory));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Daily Affirm",
          text: currentAffirmation,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(currentAffirmation);
      }
    } else {
      navigator.clipboard.writeText(currentAffirmation);
    }
  };

  const handleSettingsChange = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  if (!currentAffirmation) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading your affirmation...</div>
      </div>
    );
  }

  return (
    <AffirmationCard
      affirmation={currentAffirmation}
      onNewAffirmation={handleNewAffirmation}
      onShare={handleShare}
      animationsEnabled={settings.animationsEnabled}
    />
  );
}
