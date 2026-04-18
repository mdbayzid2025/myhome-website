"use client";

import { useState } from "react";

import { Empty } from "antd";
import SavedSearchItem, { SavedSearch } from "./SavedSearchItem";

import { toast } from "sonner";

interface Props {
  initialData: SavedSearch[];
}

export default function SavedSearchList({ initialData }: Props) {
  const [searches, setSearches] = useState<SavedSearch[]>(initialData);

  const handleToggleAlert = async (id: string) => {
    const prev = searches.find((s) => s.id === id);
    setSearches((s) => s.map((item) => item.id === id ? { ...item, alertOn: !item.alertOn } : item));
    try {
      const response = await myFetch(`/api/saved-searches/${id}/toggle-alert`, { method: "PATCH" });
      if (!response?.success) {
        setSearches((s) => s.map((item) => item.id === id ? { ...item, alertOn: prev!.alertOn } : item));
        toast.error(response?.message || "Failed to update alert");
      }
    } catch (err) {
      console.error("SavedSearchList toggle error:", err);
      setSearches((s) => s.map((item) => item.id === id ? { ...item, alertOn: prev!.alertOn } : item));
      toast.error("Unexpected error occurred");
    }
  };

  const handleRemove = async (id: string) => {
    const prev = searches;
    setSearches((s) => s.filter((item) => item.id !== id));
    try {
      const response = await myFetch(`/api/saved-searches/${id}`, { method: "DELETE" });
      if (!response?.success) {
        setSearches(prev);
        toast.error(response?.message || "Failed to remove search");
      } else {
        toast.success("Search removed");
      }
    } catch (err) {
      console.error("SavedSearchList remove error:", err);
      setSearches(prev);
      toast.error("Unexpected error occurred");
    }
  };

  if (searches.length === 0) {
    return <Empty description="No saved searches yet" className="py-10" />;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-6">
      {searches.map((item, idx) => (
        <SavedSearchItem
          key={item.id}
          item={item}
          onToggleAlert={handleToggleAlert}
          onRemove={handleRemove}
          isLast={idx === searches.length - 1}
        />
      ))}
    </div>
  );
}

// Placeholder until real myFetch is available
async function myFetch(url: string, options?: RequestInit) {
  await new Promise((r) => setTimeout(r, 400));
  return { success: true, message: "Done" };
}