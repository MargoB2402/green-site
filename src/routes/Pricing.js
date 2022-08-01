import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='ЦІНИ.' text='Наші ціни Вас приємно здивують.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
