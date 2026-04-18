import PrivacyPolicy from '@/components/InfoPages/PrivacyPolicy'
import PageHeader from '@/components/shared/PageHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageHeader title="Privacy Policy" />
            <PrivacyPolicy />
        </div>
    )
}

export default page