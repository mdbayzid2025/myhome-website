'use client'
import { myFetch } from '@/helpers/myFetch';
import { ArrowLeftOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

const ForgetPasswordForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter()


    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
        payload: { email: string }
    ) => {
        e.preventDefault();
        setLoading(true);

        try {

            router.push(`/auth/verify-otp?email=${encodeURIComponent(payload?.email ?? "")}`);

            const response = await myFetch("/forgetpassword", {
                method: "POST",
                body: payload,
            });

            if (response?.success) {
                toast.success(response?.message || "Reset link sent!");
            } else {
                if (response?.error && Array.isArray(response.error)) {
                    response.error.forEach((err: { message: string }) =>
                        toast.error(err.message, { id: "forgot-password" })
                    );
                } else {
                    toast.error(response?.message || "Something went wrong!", {
                        id: "forgot-password",
                    });
                }
            }
        } catch (err) {
            console.error("ForgotPasswordForm error:", err);
            toast.error("Unexpected error occurred", { id: "forgot-password" });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            {/* Form */}
            <div className="border border-blue-100 rounded-2xl p-7 shadow-sm">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={(values) =>
                        handleSubmit(
                            new Event("submit") as unknown as React.FormEvent<HTMLFormElement>,
                            values
                        )
                    }
                    requiredMark={false}
                >
                    <Form.Item
                        name="email"
                        label={
                            <span className="text-sm font-medium text-gray-700">Email Address</span>
                        }
                        rules={[
                            { required: true, message: "Email is required" },
                            { type: "email", message: "Enter a valid email" },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="text-gray-400" />}
                            placeholder="your.email@example.com"
                            size="large"
                            className="!rounded-lg !border-gray-200 hover:!border-[#1a3c6e] focus:!border-[#1a3c6e]"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        loading={loading}
                        className="!bg-[#1a3c6e] !border-[#1a3c6e] !rounded-lg !font-semibold !mt-1"
                    >
                        Send Reset Link
                    </Button>
                </Form>

                <Link
                    href="/auth/login"
                    className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#1a3c6e] transition-colors font-medium mt-5"
                >
                    <ArrowLeftOutlined className="text-xs" />
                    Back to Sign In
                </Link>
            </div>
        </div>
    )
}

export default ForgetPasswordForm