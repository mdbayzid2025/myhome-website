import PropertyCard from '@/components/web-pages/HomePage/PropertyCard';
import React from 'react'

const SaveProperties = () => {
    const properties = [
        {
            id: "1",
            images: ["/cardImg.png", "/cardImg.png", "/cardImg.png"],
            price: 875000,
            featured: true,
            title: "4 bed House",
            address: "42 Morning Lane, London",
            agentLogo: "/images/customer.png",
            addedOn: "01/03/2026",
        },
        // Add more properties as needed (duplicate for demo)
    ].flatMap((p) => Array(6).fill(p)); // Creates 6 identical cards for demo

    return (
        <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-5">
                6 Properties Found
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </div>
    )
}

export default SaveProperties