"use client";

import { useState } from "react";
import { Modal } from "antd";
import { Enquiry } from "@/types/enquiry";
import { myFetch } from "@/helpers/myFetch";
import { toast, Toaster } from "sonner";
import EnquiryCard from "./Enquirycard";

const MOCK_ENQUIRIES: any[] = [
    {
        id: "1",
        name: "Tom Walker",
        initials: "TW",
        email: "tom.w@example.com",
        phone: "+44 7700 900111",
        property: "Stunning Victorian Townhouse",
        leadDetails: "First-time buyer • No property to sell",
        message: "Hi, I saw Stunning Victorian Townhouse and would like to arrange a viewing for this weekend if possible.",
        timeAgo: "2 hours ago",
    },
    {
        id: "2",
        name: "Alice Johnson",
        initials: "AJ",
        email: "alice.j@example.com",
        phone: "+44 7700 900112",
        property: "Stunning Victorian Townhouse",
        leadDetails: "Cash buyer • Property sold STC",
        message: "Hi, I saw Stunning Victorian Townhouse and would like to arrange a viewing for this weekend if possible.",
        timeAgo: "4 hours ago",
    },
    {
        id: "3",
        name: "Mark King",
        initials: "MK",
        email: "mark.k@example.com",
        phone: "+44 7700 900113",
        property: "Stunning Victorian Townhouse",
        leadDetails: "Mortgage in principle • No property",
        message: "Hi, I saw Stunning Victorian Townhouse and would like to arrange a viewing for this weekend if possible.",
        timeAgo: "6 hours ago",
    },
];

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>(MOCK_ENQUIRIES);

    const handleUpdateStatus = (id: string) => {
        Modal.confirm({
            title: "Update Enquiry Status",
            content: "Mark this enquiry as contacted?",
            okText: "Yes, Update",
            okButtonProps: { className: "!bg-teal-600 !border-teal-600" },
            async onOk() {
                try {
                    const response = await myFetch<{ success: boolean; message?: string; error?: { message: string }[] }>(
                        `/api/enquiries/${id}/status`,
                        { method: "PATCH", body: { status: "contacted" } }
                    );

                    if (response?.success) {
                        toast.success(response?.message || "Status updated!");
                        setEnquiries((prev) => prev.filter((e) => e.id !== id));
                    } else {
                        if (response?.error && Array.isArray(response.error)) {
                            response.error.forEach((err) => toast.error(err.message, { id: "enquiries" }));
                        } else {
                            toast.error(response?.message || "Something went wrong!", { id: "enquiries" });
                        }
                    }
                } catch (err) {
                    console.error("EnquiriesPage error:", err);
                    toast.error("Unexpected error occurred", { id: "enquiries" });
                }
            },
        });
    };

    return (
        <>
            <Toaster position="top-right" />
            <div className="">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Enquiries Inbox</h1>

                {enquiries.length === 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
                        No enquiries at the moment.
                    </div>
                ) : (
                    enquiries.map((enquiry) => (
                        <EnquiryCard key={enquiry.id} enquiry={enquiry} onUpdateStatus={handleUpdateStatus} />
                    ))
                )}
            </div>
        </>
    );
}