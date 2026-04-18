"use client";

import { Input } from "antd";

interface Props {
    data: { fullName: string; email: string; phone: string };
    onChange: (field: string, value: string) => void;
}

export default function PersonalInfoForm({ data, onChange }: Props) {
    return (
        <div>
            <p className="text-sm font-bold text-gray-900 mb-4">Personal Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Full Name</label>
                    <Input
                        value={data.fullName}
                        onChange={(e) => onChange("fullName", e.target.value)}
                        className="rounded-lg h-10"
                    />
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Email Address</label>
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        className="rounded-lg h-10"
                    />
                </div>
                <div className="sm:col-span-1">
                    <label className="block text-xs text-gray-500 mb-1.5">Phone Number</label>
                    <Input
                        value={data.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        className="rounded-lg h-10"
                    />
                </div>
            </div>
        </div>
    );
}