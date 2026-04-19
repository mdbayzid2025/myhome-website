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
        <div className="">
            <div className="">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
                    Personal Information
                </h2>
                <form onSubmit={handleSave} className="w-full md:max-w-4/5">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-7">
                        {/* Photo */}
                        <ProfilePhotoUpload />

                        <hr className="border-gray-100" />

                        {/* Personal Info */}
                        <PersonalInfoForm
                            data={{ fullName: profile.fullName, email: profile.email, phone: profile.phone }}
                            onChange={handleChange}
                        />

                        <hr className="border-gray-100" />

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
                    </div>

                    <Button
                        htmlType="submit"
                        loading={loading}
                        className="mt-5 !h-11 !rounded-xl !bg-[#0f2d5e] !border-[#0f2d5e] !text-white font-semibold px-8 hover:!bg-[#0a1f42] transition-colors"
                    >
                        Save All Changes
                    </Button>
                </form>
            </div>
        </div>
    );
}