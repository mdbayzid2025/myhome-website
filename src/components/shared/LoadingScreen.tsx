"use client";
import React from "react";
import { Flex, Typography, Spin } from "antd";
import Image from "next/image";

const { Title } = Typography;

const LoadingScreen = () => {
    return (
        <>
            <style>{`
        @keyframes logoGrow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .animate-grow {
          animation: logoGrow 1.2s ease-in-out infinite;
        }
      `}</style>

            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
                <Flex vertical align="center" justify="center">

                    {/* Logo */}
                    <div className="animate-grow flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-xl">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    </div>

                    {/* Brand */}
                    <div className="mt-6 text-center">
                        <Title level={2} className="!m-0 !font-black !tracking-tighter !text-gray-800">
                            MyHome
                        </Title>
                    </div>
                </Flex>
            </div>
        </>
    );
};

export default LoadingScreen;