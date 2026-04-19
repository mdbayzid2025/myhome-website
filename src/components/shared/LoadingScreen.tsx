"use client";
import React from 'react';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;

const LoadingScreen = () => {
    return (
        <>
            <style>{`
        @keyframes customBounce {
          0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(-40px); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(1); opacity: 0.2; }
          50% { transform: scaleX(1.6); opacity: 0.05; }
        }
        .animate-bounce-custom { animation: customBounce 0.8s infinite; }
        .animate-shadow-custom { animation: shadowPulse 0.8s infinite; }
      `}</style>

            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
                <Flex vertical align="center" justify="center">

                    {/* Logo Wrapper */}
                    <div className="relative flex flex-col items-center">
                        {/* The Bouncing Logo */}
                        <div className="animate-bounce-custom">
                            <div className="flex relat   h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 shadow-xl">
                                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                            </div>
                        </div>

                        {/* The Dynamic Shadow */}
                        <div className="animate-shadow-custom mt-2 h-2 w-12 rounded-[100%] bg-gray-400 blur-sm" />
                    </div>

                    {/* Brand Name using Ant Design Typography */}
                    <div className="mt-8">
                        <Title level={2} className="!m-0 !font-black !tracking-tighter !text-gray-800">
                            MyHome
                        </Title>

                        {/* Simple Antd-styled loading indicator */}
                        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-24 bg-blue-500 animate-[pulse_1s_infinite]" />
                        </div>
                    </div>

                </Flex>
            </div>
        </>
    );
};

export default LoadingScreen;