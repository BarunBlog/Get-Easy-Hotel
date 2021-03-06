import React from 'react';

import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Hotel_Elevators1.mp4" autoPlay loop/>
            <h4>Find the best out there</h4>
            <p>What are you waiting for?</p>

            <div className="hero-btns">
                <Button
                    to='hotels'
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                <Button 
                    to='sign-up'
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Join us <i className='fa fa-sign-in' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;