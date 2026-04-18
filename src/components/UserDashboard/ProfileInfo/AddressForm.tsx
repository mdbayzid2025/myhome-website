"use client";

import { Input } from "antd";

interface Props {
  data: { addressLine: string; city: string; postcode: string; country: string };
  onChange: (field: string, value: string) => void;
}

export default function AddressForm({ data, onChange }: Props) {
  return (
    <div>
      <p className="text-sm font-bold text-gray-900 mb-4">Address</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Address Line</label>
          <Input
            value={data.addressLine}
            onChange={(e) => onChange("addressLine", e.target.value)}
            className="rounded-lg h-10"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1.5">City / Town</label>
          <Input
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
            className="rounded-lg h-10"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Postcode</label>
          <Input
            value={data.postcode}
            onChange={(e) => onChange("postcode", e.target.value)}
            className="rounded-lg h-10"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1.5">Country</label>
          <Input
            value={data.country}
            onChange={(e) => onChange("country", e.target.value)}
            className="rounded-lg h-10"
          />
        </div>
      </div>
    </div>
  );
}