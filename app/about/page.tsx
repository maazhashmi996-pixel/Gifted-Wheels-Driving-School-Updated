import AboutUs from '@/components/Sections/About/AboutUs'
import TrafficSafety from '@/components/Sections/About/TrafficSafety'
import Hero from '@/components/Sections/hero'
import { TrafficCone } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <TrafficSafety />
        </div>
    )
}

export default page
