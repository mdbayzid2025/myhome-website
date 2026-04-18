"use client";

import { useState, useEffect } from "react";
import { Segmented, Skeleton, Alert } from "antd";


import { myFetch } from "@/helpers/myFetch";
import PricingCard, { Plan } from "./PricingCard";

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlans = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await myFetch("/package/id", { method: "GET" });
                if (response?.success && Array.isArray(response.data)) {
                    setPlans(response.data);
                } else {
                    // Fallback static plans if API not ready
                    setPlans(staticPlans);
                }
            } catch (err) {
                console.error("PricingSection error:", err);
                setError("Failed to load pricing plans.");
                setPlans(staticPlans);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-base mb-8">
                    No hidden fees. No setup costs. Cancel anytime.
                </p>

                {/* Toggle */}
                <Segmented
                    value={isAnnual ? "Annual" : "Monthly"}
                    onChange={(val) => setIsAnnual(val === "Annual")}
                    options={[
                        { label: "Monthly", value: "Monthly" },
                        {
                            label: (
                                <span className="flex items-center gap-1.5">
                                    Annual
                                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                                        Save 20%
                                    </span>
                                </span>
                            ),
                            value: "Annual",
                        },
                    ]}
                    className="!bg-gray-100 !rounded-xl !p-1 [&_.ant-segmented-item-selected]:!bg-[#1a3c6e] [&_.ant-segmented-item-selected]:!text-white [&_.ant-segmented-item-selected]:!rounded-lg"
                />
            </div>

            {/* Error */}
            {error && (
                <Alert
                    type="warning"
                    message={error}
                    className="max-w-md mx-auto mb-8"
                    showIcon
                />
            )}

            {/* Cards */}
            {loading ? (
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} active paragraph={{ rows: 10 }} className="p-6 border border-gray-100 rounded-2xl" />
                    ))}
                </div>
            ) : (
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
                    ))}
                </div>
            )}
        </section>
    );
}

/* ── Static fallback (replace with real API data) ── */
const staticPlans: Plan[] = [
    {
        id: "free",
        tier: "Free",
        monthlyPrice: 0,
        annualPrice: 0,
        description: "Perfect for getting started.",
        listingCount: "5 listings",
        cta: "Start Free",
        popular: false,
        features: [
            { label: "Up to 5 active listings", included: true },
            { label: "Standard search placement", included: true },
            { label: "Basic enquiry management", included: true },
            { label: "Email support", included: true },
            { label: "MyHome branding on listings", included: true },
            { label: "Featured listing boost", included: false },
            { label: "Priority placement", included: false },
            { label: "Analytics dashboard", included: false },
            { label: "BLM/XML feed", included: false },
            { label: "API access", included: false },
        ],
    },
    {
        id: "pro",
        tier: "Pro",
        monthlyPrice: 79,
        annualPrice: 79,
        description: "For growing agencies.",
        listingCount: "25 listings",
        cta: "Get Started",
        popular: true,
        features: [
            { label: "Up to 25 active listings", included: true },
            { label: "Priority search placement", included: true },
            { label: "Full enquiry dashboard", included: true },
            { label: "Featured boost (3/month)", included: true },
            { label: "Analytics & performance", included: true },
            { label: "BLM/XML feed integration", included: true },
            { label: "Phone & email support", included: true },
            { label: "Remove MyHome branding", included: true },
            { label: "Unlimited listings", included: false },
            { label: "Dedicated account manager", included: false },
            { label: "Custom API access", included: false },
        ],
    },
    {
        id: "premium",
        tier: "Premium",
        monthlyPrice: 149,
        annualPrice: 149,
        description: "For established agencies.",
        listingCount: "Unlimited listings",
        cta: "Get Started",
        popular: false,
        features: [
            { label: "Unlimited active listings", included: true },
            { label: "Premium search placement", included: true },
            { label: "Advanced enquiry management", included: true },
            { label: "Featured boost (unlimited)", included: true },
            { label: "Full analytics suite", included: true },
            { label: "BLM/XML + API feed", included: true },
            { label: "Dedicated account manager", included: true },
            { label: "Custom reporting", included: true },
            { label: "White-label options", included: true },
            { label: "Priority phone support", included: true },
        ],
    },
];