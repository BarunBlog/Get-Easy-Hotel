import React from 'react'; 
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic hotels.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem 
                            src='images/Gritti_Palace.jpg'
                            text='The Gritti Palace is a sight to behold in itself'
                            label='Gritti Palace'
                            path='/services'
                        />
                        <Carditem 
                            src='images/martaba_safari_lodge.jpg'
                            text='You can fully immerse yourself in the beauty of South African wilderness'
                            label='Martaba Safari Lodge'
                            path='/services'
                        />
                    </ul>

                    <ul className='cards__items'>
                        <Carditem 
                            src='images/san-francisco-restaurant-brasserie.jpg'
                            text='Discover different world in Mandarin Oriental'
                            label='Mandarin Oriental San-Francisco'
                            path='/services'
                        />
                        <Carditem 
                            src='images/Alila_Jabal_Akhdar.jpg'
                            text='Those high-elevation hotels, aren’t they just the best?'
                            label='Living on edge in Oman'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;