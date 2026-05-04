"use client";

import { useState } from "react";
import { Form, Button, Input } from "antd";
import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { toast } from "sonner";
import { myFetch } from "@/helpers/myFetch";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./ForgetPasswordForm"), { ssr: false });

export default function ForgotPasswordForm() {


  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-2xl  flex items-center justify-center mx-auto mb-4">
          <Image height={100} width={100} src="/logo.png" alt="logo" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#1a3c6e]">Forgot Password?</h2>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed max-w-xs mx-auto">
          No worries! Enter your email and we&apos;ll send you a reset link.
        </p>
      </div>

      <HeroSection />
    </div>
  );
}