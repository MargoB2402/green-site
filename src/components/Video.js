import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/video.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>AUTO ECO24</h1>
                <p>Ми надаємо послугу з відкачування вигрібних ям у всіх районах Києва і київській області</p>
                <div>
                    <Link to='/training' className='btn'>Ціни</Link>
                    <Link to='/contact' className='btn btn-light'>Замовити</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
