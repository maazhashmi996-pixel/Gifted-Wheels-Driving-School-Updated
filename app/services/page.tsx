import Contacts from '@/components/Sections/Contact'
import Hero from '@/components/Sections/hero'
import DrivingLessons from '@/components/Services/DrivingLessons'
import Pricing from '@/components/Services/Money'
import OnlineCourses from '@/components/Services/online-courses'
import RoadTest from '@/components/Services/testFeatures'
import { Contact } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div>
            <Hero />
            <DrivingLessons />
            <OnlineCourses />
            <RoadTest />
            <Pricing />
            <Contacts />
        </div>
    )
}

export default page;
