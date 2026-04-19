"use client";

import { Button } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

import { toast } from "sonner";
import { Enquiry } from "@/types/enquiry";


interface Props {
    enquiry: Enquiry;
    onUpdateStatus: (id: string) => void;
}

export default function EnquiryCard({ enquiry, onUpdateStatus }: Props) {
    const { id, name, initials, email, phone, property, leadDetails, message, timeAgo } = enquiry;

    const handleCall = () => {
        toast.success(`Calling ${name}...`);
    };

    const handleEmail = () => {
        toast.success(`Opening email to ${email}`);
    };

    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-white mb-4 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm flex items-center justify-center flex-shrink-0">
                        {initials}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 text-sm">{name}</p>
                        <p className="text-xs text-gray-500">
                            {email} &nbsp; {phone}
                        </p>
                    </div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{timeAgo}</span>
            </div>

            {/* Property + Lead Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-1">Property</p>
                    <p className="text-sm text-teal-600 font-medium">{property}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-1">Lead Details</p>
                    <p className="text-sm text-gray-700">{leadDetails}</p>
                </div>
            </div>

            {/* Message */}
            <div className="mb-4">
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-1">Message</p>
                <p className="text-sm text-gray-600 italic border-l-2 border-teal-400 pl-3">{message}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                    <Button
                        type="primary"
                        icon={<PhoneOutlined />}
                        onClick={handleCall}
                        className="!bg-teal-600 !border-teal-600 hover:!bg-teal-700"
                    >
                        Call Lead
                    </Button>
                    <Button icon={<MailOutlined />} onClick={handleEmail}>
                        Email Lead
                    </Button>
                </div>
                <Button onClick={() => onUpdateStatus(id)}>Update Status</Button>
            </div>
        </div>
    );
}