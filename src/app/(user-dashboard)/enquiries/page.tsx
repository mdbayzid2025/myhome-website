
import EnquiryList from "@/components/UserDashboard/Enquiries";
import type { Enquiry } from "@/types/enquiry";

const MOCK_ENQUIRIES: Enquiry[] = [
    {
        id: "1",
        propertyTitle: "Stunning Victorian Townhouse",
        price: "£1.3m",
        address: "42 Kensington Park Road",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80",
        sentTo: "Knight Frank",
        message: "I would like to arrange a viewing for this weekend if possible. Thanks!",
        timeAgo: "2 days ago",
        sentOn: "3/17/2026",
        agent: {
            name: "Sarah Mitchell",
            company: "Knight Frank",
            phone: "+44 20 7861 1111",
            email: "sarah@knightfrank.co.uk",
            avatar: "S",
        },
    },
];

export default function MyEnquiriesPage() {
    return (
        <div className="">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My Enquiries</h1>
            <EnquiryList initialData={MOCK_ENQUIRIES} />
        </div>
    );
}