import TermsCondition from '@/components/InfoPages/TermsCondition'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageHeader title="Terms & Conditions" />
            <TermsCondition />
        </div>
    )
}

export default page