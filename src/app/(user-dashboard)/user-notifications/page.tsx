import UserNotifications from '@/components/UserDashboard/UserNotifications'
import React from 'react'

const page = () => {
    return (
        <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5">
                Alerts & Notifications
            </h2>
            <UserNotifications /> </div>
    )
}

export default page