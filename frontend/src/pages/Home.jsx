import React from 'react'
import Header from '../Components/Header'
import HowToUse from '../Components/HowToUse'
import Description from '../Components/Description'
import Testimonials from '../Components/Testimonial'

const Home = () => {
    return (
        <div>
            <Header />
            <HowToUse />
            <Description />
            <Testimonials />
        </div>
    )
}

export default Home