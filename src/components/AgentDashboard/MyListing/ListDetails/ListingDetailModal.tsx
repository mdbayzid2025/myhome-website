"use client";

import { ListingDetail } from "@/types/listing";
import {
  BankOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  HomeOutlined,
  TagOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Modal, Skeleton, Tag } from "antd";
import { useState } from "react";
import { MOCK_LISTING_DETAILS } from "..";
import { StatusBadge } from "../ListingsTable";
import ImageGallery from "./Imagegallery";


interface ListingDetailModalProps {
  listingId: string | null;
  open: boolean;
  onClose: () => void;
}

// ─── Section wrapper ───────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{title}</h4>
      {children}
    </div>
  );
}

// ─── Info row ──────────────────────────────────────────────────────────────────
function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
      <span className="text-[#0d9488] mt-0.5 flex-shrink-0">{icon}</span>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-sm font-medium text-gray-900 text-right">{value}</span>
      </div>
    </div>
  );
}

// ─── Skeleton loader ───────────────────────────────────────────────────────────
function DetailSkeleton() {
  return (
    <div className="space-y-5 p-1">
      <Skeleton.Image active className="!w-full !h-56 !rounded-xl" />
      <Skeleton active paragraph={{ rows: 2 }} />
      <div className="grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => <Skeleton.Button key={i} active block className="!h-16 !rounded-xl" />)}
      </div>
      <Skeleton active paragraph={{ rows: 4 }} />
    </div>
  );
}

function StatTile({ icon, label, value }: any) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-3 px-2 text-center border border-gray-100">
      <span className="text-[#0d9488] text-xl mb-1">{icon}</span>
      <span className="text-base font-bold text-gray-900">{value}</span>
      <span className="text-[11px] text-gray-400 mt-0.5">{label}</span>
    </div>
  );
}

// ─── Main Modal ────────────────────────────────────────────────────────────────
export default function ListingDetailModal({ listingId, open, onClose }: ListingDetailModalProps) {
  const [detail, setDetail] = useState<ListingDetail | null>(MOCK_LISTING_DETAILS[0]);
  const [loading, setLoading] = useState(false);


  console.log('detail', MOCK_LISTING_DETAILS[0]);

  // useEffect(() => {
  //   if (!open || !listingId) return;

  //   const fetchDetail = async () => {
  //     setLoading(true);
  //     setDetail(null);

  //     try {
  //       const response = await myFetch("/api/listings/1");

  //       if (response?.success) {
  //         // setDetail(response.data);
  //         setDetail(MOCK_LISTING_DETAILS[0]);
  //       } else {
  //         if (response?.error && Array.isArray(response.error)) {
  //           response.error.forEach((err: { message: string }) =>
  //             toast.error(err.message, { id: "listing-detail" })
  //           );
  //         } else {
  //           toast.error(response?.message || "Failed to load listing details", {
  //             id: "listing-detail",
  //           });
  //         }
  //         onClose();
  //       }
  //     } catch (err) {
  //       console.error("ListingDetailModal fetchDetail error:", err);
  //       toast.error("Unexpected error occurred", { id: "listing-detail" });
  //       onClose();
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDetail();
  // }, [open, listingId]);

  const handleClose = () => {
    setDetail(null);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      width={680}
      centered
      destroyOnClose
      title={
        !loading && detail ? (
          <div className="flex items-center justify-between pr-8">
            <span className="text-lg font-bold text-gray-900 truncate">{detail?.title}</span>
            <StatusBadge status={detail?.status} />
          </div>
        ) : (
          <Skeleton.Input active size="small" className="!w-48" />
        )
      }
      styles={{ body: { padding: "16px 24px 24px", maxHeight: "78vh", overflowY: "auto" } }}
    >
      {loading && < DetailSkeleton />}

      {!loading && detail && (
        <div className="space-y-6">
          {/* Image Gallery */}
          <ImageGallery images={detail.images} title={detail.title} />

          {/* Price + Address */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-2xl font-bold text-[#1e3a5f]">{detail.price}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                <EnvironmentOutlined className="text-[#0d9488]" />
                {detail.address}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <EyeOutlined />
                {detail.views.toLocaleString()} views
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs border border-gray-200 bg-gray-50 capitalize">
                {detail.listingType === "for-sale" ? "For Sale" : "To Rent"}
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <Section title="Property Stats">
            <div className="grid grid-cols-4 gap-2">
              <StatTile icon={<HomeOutlined />} label="Bedrooms" value={detail.beds} />
              <StatTile icon="🛁" label="Bathrooms" value={detail.baths} />
              <StatTile icon="📐" label="Sq Ft" value={detail.sqFt.toLocaleString()} />
              <StatTile icon="🏷️" label="EPC" value={detail.epc} />
            </div>
          </Section>

          {/* Property Info */}
          <Section title="Property Information">
            <div className="bg-gray-50 rounded-xl px-4 py-1">
              <InfoRow icon={<HomeOutlined />} label="Property Type" value={detail.propertyType} />
              <InfoRow icon={<TagOutlined />} label="Tenure" value={detail.tenure} />
              <InfoRow icon={<BankOutlined />} label="Council Tax Band" value={detail.councilTaxBand} />
              <InfoRow icon={<ThunderboltOutlined />} label="EPC Rating" value={detail.epc} />
              <InfoRow icon={<CalendarOutlined />} label="Listed Date" value={detail.listedDate} />
              <InfoRow icon={<UserOutlined />} label="Agent" value={detail.agent} />
            </div>
          </Section>

          {/* Features */}
          {detail.features?.length > 0 && (
            <Section title="Features">
              <div className="flex flex-wrap gap-2">
                {detail.features.map((f) => (
                  <Tag
                    key={f}
                    className="!bg-teal-50 !text-teal-700 !border-teal-200 !rounded-full !px-3 !py-0.5 !text-xs !font-medium"
                  >
                    {f}
                  </Tag>
                ))}
              </div>
            </Section>
          )}

          {/* Description */}
          {detail.description && (
            <Section title="Description">
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {detail.description}
              </p>
            </Section>
          )}
        </div>
      )}
    </Modal>
  );
}