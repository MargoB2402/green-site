import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='+380-123-1234' text='Зателефонуйте нам, щоб замовити послугу, або напишіть.' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
