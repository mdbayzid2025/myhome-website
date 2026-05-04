"use client";

import { useState } from "react";
import { Button } from "antd";

import ProfilePhotoUpload from "@/components/UserDashboard/ProfileInfo/ProfilePhotoUpload";
import PersonalInfoForm from "@/components/UserDashboard/ProfileInfo/PersonalInfoForm";
import AddressForm from "@/components/UserDashboard/ProfileInfo/AddressForm";
import type { ProfileFormData } from "@/types/account";
import { toast } from "sonner";
import { handleApiError } from "@/lib/handleApiError";

const INITIAL: ProfileFormData = {
    fullName: "John Smith",
    email: "sazzad.uiuxdesign@gmail.com",
    phone: "+44 7700 900123",
    addressLine: "123 Example Street",
    city: "London",
    postcode: "SW1A 1AA",
    country: "United Kingdom",
    language: "English (UK)",
};

async function myFetch(url: string, options?: { method?: string; body?: unknown }) {
    await new Promise((r) => setTimeout(r, 600));
    return { success: true, message: "Profile updated successfully" };
}

export default function AccountSettingsPage() {
    const [profile, setProfile] = useState<ProfileFormData>(INITIAL);
    const [loading, setLoading] = useState(false);

    const handleChange = (field: string, value: string) => {
        setProfile((p) => ({ ...p, [field]: value }));
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await myFetch("/api/account/profile", {
                method: "PATCH",
                body: profile,
            });

            if (response?.success) {
                toast.success(response?.message || "Profile updated successfully");
            } else {
                handleApiError(response, "account-settings")
            }
        } catch (err) {
            console.error("AccountSettingsPage error:", err);
            toast.error("Unexpected error occurred", { id: "account-settings" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Account Settings
                </h2>
                <form onSubmit={handleSave} className="w-full">
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-8">
                        {/* Photo */}
                        <ProfilePhotoUpload />


                        {/* Personal Info */}
                        <PersonalInfoForm
                            data={{ fullName: profile.fullName, email: profile.email, phone: profile.phone }}
                            onChange={handleChange}
                        />


                        {/* Address */}
                        <AddressForm
                            data={{
                                addressLine: profile.addressLine,
                                city: profile.city,
                                postcode: profile.postcode,
                                country: profile.country,
                            }}
                            onChange={handleChange}
                        />


                        {/* Language & Support */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">Preferences & Support</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Language</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full h-12 bg-gray-50/50 border border-gray-200 rounded-xl px-4 text-base font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#0f2d5e]/10 focus:border-[#0f2d5e] appearance-none transition-all cursor-pointer hover:border-[#0f2d5e]/50"
                                            value={profile.language}
                                            onChange={(e) => handleChange("language", e.target.value)}
                                        >
                                            <option>English (UK)</option>
                                            <option>English (US)</option>
                                            <option>Bengali</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Need Help?</label>
                                    <div className="flex gap-3">
                                        <Button className="flex-1 h-12 rounded-xl font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 shadow-sm">
                                            Visit FAQ
                                        </Button>
                                        <Button className="flex-1 h-12 rounded-xl font-bold text-[#0f2d5e] bg-[#0f2d5e]/5 border-none hover:bg-[#0f2d5e]/10">
                                            Support
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <Button
                            htmlType="submit"
                            loading={loading}
                            className="h-12 !rounded-xl !bg-[#0f2d5e] !border-[#0f2d5e] !text-white font-bold px-10 hover:!bg-[#0a1f42] transition-colors shadow-lg shadow-[#0f2d5e]/20 text-base"
                        >
                            Save All Changes
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}