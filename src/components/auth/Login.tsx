"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { toast } from "sonner";


export default function LoginForm() {
  const [form] = Form.useForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, payload: Record<string, string>) => {
    e.preventDefault();
    // try {
    //   // Replace with RTK Query or myFetch
    //   const response = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });
    //   const data = await response.json();
    //   if (data?.success) {
    //     toast.success(data?.message || "Signed in successfully");
    //   } else {
    //     if (Array.isArray(data?.error)) {
    //       data.error.forEach((err: { message: string }) => toast.error(err.message, { id: "login" }));
    //     } else {
    //       toast.error(data?.message || "Something went wrong!", { id: "login" });
    //     }
    //   }
    // } catch (err) {
    //   console.error("LoginForm error:", err);
    //   toast.error("Unexpected error occurred", { id: "login" });
    // }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-[#1a3c6e]">Welcome Back</h2>
        <p className="text-gray-500 mt-1 text-sm">Sign in to continue your property search</p>
      </div>

      <div className="border border-blue-100 rounded-2xl p-7 shadow-sm">
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) =>
            handleSubmit(new Event("submit") as unknown as React.FormEvent<HTMLFormElement>, values)
          }
          requiredMark={false}
        >

          <Form.Item name="email" label={<span className="text-sm font-medium text-gray-700">Email</span>} rules={[{ required: true, message: "Email is required" }]}>
            <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Enter your email" size="large" className="!rounded-lg !border-gray-200 hover:!border-[#1a3c6e] focus:!border-[#1a3c6e]" />
          </Form.Item>

          <Form.Item name="password" label={<span className="text-sm font-medium text-gray-700">Password</span>} rules={[{ required: true, message: "Password is required" }]}>
            <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Enter your password" size="large" className="!rounded-lg !border-gray-200 hover:!border-[#1a3c6e] focus:!border-[#1a3c6e]" />
          </Form.Item>

          <div className="relative mb-10">
            <Link
              href="/auth/forget-password"
              className="absolute top-0 right-0 text-sm text-[#1a3c6e] hover:underline font-medium"
            >
              Forget password?
            </Link>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className="!bg-[#1a3c6e] !border-[#1a3c6e] !rounded-lg !font-semibold !mt-5"
          >
            Sign In
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <Button
          size="large"
          block
          className="!rounded-lg !border-gray-200 !text-gray-700 !font-medium hover:!border-gray-400 flex items-center justify-center gap-2"
          icon={
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          }
        >
          Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-[#1a3c6e] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}