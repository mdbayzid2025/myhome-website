
import EnquiryList from "@/components/UserDashboard/Enquiries";

const MOCK_ENQUIRIES: any[] = [
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
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
                My Enquiries
            </h2>
            <EnquiryList initialData={MOCK_ENQUIRIES} />
        </div>
    );
}