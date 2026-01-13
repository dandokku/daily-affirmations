"use client";

import { useState, useEffect } from "react";
import HistoryList from "../../components/HistoryList";

export default function HistoryPage() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("daily-affirm-history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return <HistoryList history={history} />;
}