"use client";

import { useState } from "react";
import { Input, Button } from "antd";
import { toast } from "sonner";

function getStrength(pw: string): number {
    if (pw.length === 0) return 0;
    if (pw.length < 6) return 1;
    if (pw.length < 8) return 2;
    const hasUpper = /[A-Z]/.test(pw);
    const hasNum = /\d/.test(pw);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pw);
    const extras = [hasUpper, hasNum, hasSymbol].filter(Boolean).length;
    return extras >= 2 ? 4 : 3;
}

const strengthConfig = [
    { label: "", color: "bg-gray-200" },
    { label: "Weak", color: "bg-red-400" },
    { label: "Fair", color: "bg-orange-400" },
    { label: "Good", color: "bg-yellow-400" },
    { label: "Strong", color: "bg-[#00c896]" },
];

export default function ChangePasswordForm() {
    const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const strength = getStrength(form.newPassword);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.newPassword.length < 8) {
            toast.error("Password must be at least 8 characters", { id: "change-password" });
            return;
        }
        if (form.newPassword !== form.confirmPassword) {
            toast.error("Passwords do not match", { id: "change-password" });
            return;
        }

        setLoading(true);
        try {
            const response = await myFetch("/api/account/change-password", {
                method: "PATCH",
                body: { currentPassword: form.currentPassword, newPassword: form.newPassword },
            });

            if (response?.success) {
                toast.success(response?.message || "Password updated successfully");
                setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
            } else {
                
                if (response?.error && Array.isArray(response.error)) {
                    response.error.forEach((err: { message: string }) =>
                        toast.error(err.message, { id: "change-password" })
                    );
                } else {
                    toast.error(response?.message || "Something went wrong!", { id: "change-password" });
                }
            }
        } catch (err) {
            console.error("ChangePasswordForm error:", err);
            toast.error("Unexpected error occurred", { id: "change-password" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Password & Security</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                        <Input.Password
                            value={form.currentPassword}
                            onChange={(e) => setForm((f) => ({ ...f, currentPassword: e.target.value }))}
                            placeholder="Enter current password"
                            className="rounded-lg h-10"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                        <Input.Password
                            value={form.newPassword}
                            onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))}
                            placeholder="Enter new password"
                            className="rounded-lg h-10"
                        />
                        {/* Strength bar */}
                        <div className="mt-2 flex gap-1">
                            {[1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className={`flex-1 h-1 rounded-full transition-all duration-300 ${strength >= level ? strengthConfig[strength].color : "bg-gray-200"
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                            {form.newPassword.length === 0
                                ? "Must be at least 8 characters"
                                : `Strength: ${strengthConfig[strength].label}`}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
                        <Input.Password
                            value={form.confirmPassword}
                            onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
                            placeholder="Repeat new password"
                            className="rounded-lg h-10"
                        />
                        {form.confirmPassword && form.newPassword !== form.confirmPassword && (
                            <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                        )}
                    </div>

                    <Button
                        htmlType="submit"
                        loading={loading}
                        className="w-full !h-11 !rounded-lg !bg-[#0f2d5e] !border-[#0f2d5e] !text-white font-semibold hover:!bg-[#0a1f42] transition-colors"
                    >
                        Update Password
                    </Button>
                </form>
            </div>
        </div>
    );
}

async function myFetch(url: string, options?: { method?: string; body?: unknown }) {
    await new Promise((r) => setTimeout(r, 600));
    return { success: true, message: "Password updated successfully" };
}