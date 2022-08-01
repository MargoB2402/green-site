import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Green1 from '../assets/green1.jpeg'
import Green2 from '../assets/green2.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Послуги</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Замовити</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Green1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Green2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
