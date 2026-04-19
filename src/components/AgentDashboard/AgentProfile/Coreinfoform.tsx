"use client";

import { AgencyProfile } from "@/types/enquiry";
import { Form, Input } from "antd";

interface Props {
    data: Pick<AgencyProfile, "agencyName" | "contactPerson" | "email" | "phone">;
    onChange: (key: keyof AgencyProfile, value: string) => void;
}

export default function CoreInfoForm({ data, onChange }: Props) {
    return (
        <div className="mb-6">
            <h2 className="text-base font-semibold text-gray-800 mb-4">Core Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Agency Name</label>
                    <Input
                        value={data.agencyName}
                        onChange={(e) => onChange("agencyName", e.target.value)}
                        size="large"
                    />
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Contact Person</label>
                    <Input
                        value={data.contactPerson}
                        onChange={(e) => onChange("contactPerson", e.target.value)}
                        size="large"
                    />
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Email Address</label>
                    <Input
                        value={data.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        size="large"
                    />
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
                    <Input
                        value={data.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        size="large"
                    />
                </div>
            </div>
        </div>
    );
}