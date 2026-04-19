"use client";

import Image from "next/image";
import { Listing, ListingStatus } from "@/types/listing";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Eye } from "lucide-react";

interface ListingsTableProps {
  listings: Listing[];
  onDelete: (id: string) => void;
  onDetails: (id: string) => void;
  onEdit: (id: string) => void;
}

const STATUS_CONFIG: Record<ListingStatus, { label: string; classes: string }> = {
  active: { label: "active", classes: "bg-green-50 text-green-600 border border-green-200" },
  draft: { label: "draft", classes: "bg-gray-100 text-gray-500 border border-gray-200" },
  "let agreed": { label: "let agreed", classes: "bg-orange-50 text-orange-500 border border-orange-200" },
};

export function StatusBadge({ status }: { status: ListingStatus }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.draft;
  return (
    <span className={`px-3 py-1 rounded text-xs font-medium ${config.classes}`}>
      {config.label}
    </span>
  );
}

export default function ListingsTable({ listings, onDelete, onDetails, onEdit }: ListingsTableProps) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg">No listings found</p>
        <p className="text-sm mt-1">Add your first listing to get started</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_80px_80px_110px_180px] gap-4 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-500">
        <span>Property</span>
        <span className="text-right">Price</span>
        <span className="text-right">Views</span>
        <span className="text-center">Status</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="grid grid-cols-[1fr_80px_80px_110px_180px] gap-4 px-4 py-4 items-center hover:bg-gray-50 transition-colors"
          >
            {/* Property */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-16 h-11 rounded overflow-hidden flex-shrink-0">
                <Image src={listing.image} alt={listing.title} fill className="object-cover" unoptimized />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">{listing.title}</p>
                <p className="text-xs text-gray-500 truncate">{listing.address}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <span className="text-[#1e3a5f] font-semibold text-sm">{listing.price}</span>
            </div>

            {/* Views */}
            <div className="text-right text-sm text-gray-600">{listing.views.toLocaleString()}</div>

            {/* Status */}
            <div className="flex justify-center">
              <StatusBadge status={listing.status} />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 text-sm">
              <button
                onClick={() => onDetails(listing.id)}
                className="text-gray-700 font-medium hover:text-[#1e3a5f] transition-colors"
              >
                <Eye />
              </button>
              <button
                onClick={() => onEdit(listing.id)}
                className="text-[#0d9488] font-medium hover:text-teal-700 transition-colors flex items-center gap-1"
              >
                <EditOutlined className="text-xs" />
                Edit
              </button>
              <button
                onClick={() => onDelete(listing.id)}
                className="text-red-500 font-medium hover:text-red-700 transition-colors flex items-center gap-1"
              >
                <DeleteOutlined className="text-xs" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}