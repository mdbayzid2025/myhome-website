"use client";

import { Button, Tag } from "antd";
import { CheckOutlined, CloseOutlined, StarOutlined } from "@ant-design/icons";

export interface PlanFeature {
    label: string;
    included: boolean;
}

export interface Plan {
    id: string;
    tier: string;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    listingCount: string;
    features: PlanFeature[];
    popular?: boolean;
    cta: string;
}

interface Props {
    plan: Plan;
    isAnnual: boolean;
}

export default function PricingCard({ plan, isAnnual }: Props) {
    const price = isAnnual
        ? Math.round(plan.annualPrice * 0.8)
        : plan.monthlyPrice;

    const isFree = plan.monthlyPrice === 0;

    return (
        <div
            className={`relative flex flex-col rounded-2xl border-2 p-7 transition-shadow
        ${plan.popular
                    ? "border-[#1a3c6e] shadow-xl shadow-blue-100"
                    : "border-gray-200 shadow-sm hover:shadow-md"
                }`}
        >
            {/* Popular badge */}
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Tag
                        icon={<StarOutlined />}
                        className="!bg-[#1a3c6e] !text-white !border-none !rounded-full !px-4 !py-0.5 !text-xs !font-semibold uppercase tracking-wide"
                    >
                        Most Popular
                    </Tag>
                </div>
            )}

            {/* Tier */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a3c6e] mb-2">
                {plan.tier}
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">
                    £{price === 0 ? "0" : price}
                </span>
                {!isFree && (
                    <span className="text-gray-400 text-sm mb-1.5">/mo</span>
                )}
            </div>

            <p className="text-gray-500 text-xs mb-1">{plan.description}</p>
            <p className="text-[#1a3c6e] text-xs font-semibold mb-6">
                {plan.listingCount}
            </p>

            {/* CTA */}
            <Button
                type={plan.popular ? "primary" : "default"}
                block
                size="large"
                className={`!rounded-xl !font-semibold !mb-7 ${plan.popular
                    ? "!bg-[#1a3c6e] !border-[#1a3c6e] !text-white"
                    : "!border-[#1a3c6e] !text-[#1a3c6e]"
                    }`}
                href={isFree ? "/signup" : `/signup?plan=${plan.id}`}
            >
                {plan.cta}
            </Button>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-6" />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                        {feature.included ? (
                            <CheckOutlined className="text-[#1a3c6e] text-xs shrink-0" />
                        ) : (
                            <CloseOutlined className="text-gray-300 text-xs shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400 line-through"}>
                            {feature.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}