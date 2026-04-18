"use client";

import { useState } from "react";
import { Empty } from "antd";
import EnquiryItem from "./EnquiryItem";
import EnquiryDetailModal from "./EnquiryDetailModal";
import type { Enquiry } from "@/types/enquiry";

interface Props {
    initialData: Enquiry[];
}

export default function EnquiryList({ initialData }: Props) {
    const [selected, setSelected] = useState<Enquiry | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = (enquiry: Enquiry) => {
        setSelected(enquiry);
        setDrawerOpen(true);
    };

    if (initialData.length === 0) {
        return <Empty description="No enquiries yet" className="py-10" />;
    }

    return (
        <>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-6">
                {initialData.map((item, idx) => (
                    <EnquiryItem
                        key={item.id}
                        enquiry={item}
                        onClick={handleClick}
                        isLast={idx === initialData.length - 1}
                    />
                ))}
            </div>

            <EnquiryDetailModal
                enquiry={selected}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    );
}