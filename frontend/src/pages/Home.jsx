import React from 'react'
import Header from '../Components/Header'
import HowToUse from '../Components/HowToUse'
import Description from '../Components/Description'
import Testimonials from '../Components/Testimonial'
import Generate from '../Components/Generate'

const Home = () => {
    return (
        <div>
            <Header />
            <HowToUse />
            <Description />
            <Testimonials />
            <Generate />
        </div>
    )
}

export default Home