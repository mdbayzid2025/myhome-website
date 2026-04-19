"use client";

import { ListingFormData } from "@/types/listing";
import { Input, Select } from "antd";

export const PROPERTY_TYPES = ["Detached", "Semi-Detached", "Terraced", "Flat", "Bungalow", "Cottage", "Penthouse"];
export const TENURE_OPTIONS = ["Freehold", "Leasehold", "Shared Ownership"];
export const COUNCIL_TAX_BANDS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const EPC_RATINGS = ["A", "B", "C", "D", "E", "F", "G"];
const { Option } = Select;

interface Step3Props {
    data: ListingFormData;
    onChange: (updates: Partial<ListingFormData>) => void;
}

export default function Step3Details({ data, onChange }: Step3Props) {
    return (
        <div className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <Select
                    size="large"
                    className="w-full"
                    value={data.propertyType || undefined}
                    placeholder="Select property type"
                    onChange={(val) => onChange({ propertyType: val })}
                >
                    {PROPERTY_TYPES.map((t:any) => <Option key={t} value={t}>{t}</Option>)}
                </Select>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Beds</label>
                    <Input
                        size="large"
                        type="number"
                        min={0}
                        value={data.beds}
                        onChange={(e) => onChange({ beds: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Baths</label>
                    <Input
                        size="large"
                        type="number"
                        min={0}
                        value={data.baths}
                        onChange={(e) => onChange({ baths: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sq Ft</label>
                    <Input
                        size="large"
                        type="number"
                        min={0}
                        value={data.sqFt}
                        onChange={(e) => onChange({ sqFt: e.target.value })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tenure</label>
                    <Select
                        size="large"
                        className="w-full"
                        value={data.tenure || undefined}
                        placeholder="Select"
                        onChange={(val) => onChange({ tenure: val })}
                    >
                        {TENURE_OPTIONS.map((t) => <Option key={t} value={t}>{t}</Option>)}
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Council Tax Band</label>
                    <Select
                        size="large"
                        className="w-full"
                        value={data.councilTaxBand || undefined}
                        placeholder="Select"
                        onChange={(val) => onChange({ councilTaxBand: val })}
                    >
                        {COUNCIL_TAX_BANDS.map((b) => <Option key={b} value={b}>{b}</Option>)}
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">EPC</label>
                    <Select
                        size="large"
                        className="w-full"
                        value={data.epc || undefined}
                        placeholder="Select"
                        onChange={(val) => onChange({ epc: val })}
                    >
                        {EPC_RATINGS.map((r) => <Option key={r} value={r}>{r}</Option>)}
                    </Select>
                </div>
            </div>
        </div>
    );
}