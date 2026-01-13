"use client";

import SettingsPanel from "../../components/SettingsPanel";

interface Settings {
  animationsEnabled: boolean;
  category: string;
}

export default function SettingsPage() {
  const handleSettingsChange = () => {
    // Settings are saved in the component
  };

  return <SettingsPanel onSettingsChange={handleSettingsChange} />;
}