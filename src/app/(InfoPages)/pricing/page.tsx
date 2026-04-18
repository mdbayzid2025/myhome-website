import PricingSection from '@/components/InfoPages/Pricing/PricingSection'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageHeader title="Pricing" />
            <PricingSection />
        </div>
    )
}

export default page