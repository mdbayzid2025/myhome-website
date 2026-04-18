"use client";

import { useState } from "react";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { toast } from "sonner";


export default function DeleteAccountSection() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            const response = await myFetch("/api/account/delete", { method: "DELETE" });
            if (response?.success) {
                toast.success("Account deleted successfully");
                setOpen(false);
            } else {
                toast.error(response?.message || "Failed to delete account", { id: "delete-account" });
            }
        } catch (err) {
            console.error("DeleteAccountSection error:", err);
            toast.error("Unexpected error occurred", { id: "delete-account" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-5 sm:p-6">
            <h3 className="text-base font-bold text-red-500 mb-1">Delete Account</h3>
            <p className="text-gray-500 text-sm mb-4">
                Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button
                danger
                onClick={() => setOpen(true)}
                className="!rounded-lg !border-red-400 !text-red-500 hover:!bg-red-50 font-medium"
            >
                Delete My Account
            </Button>

            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                className="!rounded-2xl"
            >
                <div className="text-center py-4">
                    <ExclamationCircleOutlined className="text-5xl text-red-400 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Your Account?</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        This action is permanent and cannot be undone. All your data, saved searches, and enquiries will be removed.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Button onClick={() => setOpen(false)} className="!rounded-lg px-6">Cancel</Button>
                        <Button
                            danger
                            loading={loading}
                            onClick={handleDelete}
                            className="!rounded-lg px-6 !bg-red-500 !text-white !border-red-500"
                        >
                            Yes, Delete
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

async function myFetch(url: string, options?: { method?: string }) {
    await new Promise((r) => setTimeout(r, 600));
    return { success: true, message: "Account deleted" };
}