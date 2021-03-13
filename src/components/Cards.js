import React from 'react'; 
import Carditem from './Carditem';
import './Cards.css';

const HotelData = [
    {
        hotelId: 6,
        hotelName: 'Gritti Palace',
        star: 10,
        address: 'Campo Santa Maria Del Giglio 2467, 30124 Venezia VE, Italy',
        location: 'Venice, Italy',
        image1: 'images/Gritti_Palace.jpg',
        image2: 'images/hotel1.jpg',
        overView: `The Gritti Palace Venice is a 15th century palazzo located along Italy’s Grand Canal, looking across the water to Santa Maria della Salute, a gorgeous church, and to the Palazzo Venier dei Leoni, home to the Guggenheim Museum.All 61 rooms and 21 suites at the Gritti Palace are surely fit for royalty; with marble-clad bathrooms, stunning paintings, antiques and colorful, rich fabrics peppered throughout. Suites feature chandeliers and French doors. If you’re looking for a truly luxurious experience, book a stay in the Hemingway Presidential Suite, home to Ernest Hemingway’s very own club chair! Hemingway, who considered The Gritti Palace his home in Venice during the late 1940's and early 1950's, composed many passages of his novel "Across the River and Into the Trees," right on the premises.`,
        bookingPrice: 223,
    },
    {
        hotelId: 7,
        hotelName: 'Marataba Safari Lodge',
        star: 9,
        address: 'Marakele National Park, Hartbeestfontein, 2194, South Africa',
        location: 'Hartbeestfontein, South Africa',
        image1: 'images/martaba_safari_lodge.jpg',
        image2: 'images/hotel3.jpg',
        overView: `Visitors from around the globe have trekked to Africa for centuries to experience a genuine safari trip and observe the continent's amazing wildlife in its natural habitat. The Marakele National Park is among the most popular due to its incredible scenery, diverse wildlife, proximity to Johannesburg and because it is malaria-free. While the first visitors had to “rough it”, guests of the Marataba Safari Lodge experience the splendor of the private reserve in the comfort of five star accommodations. Situated only four hours from the capital city, the Marataba Safari Lodge feels far removed from the modern world. Set at the base of the Waterberg mountain range, the lodge blends into the natural environment as a beautiful extension of the landscape with breathtaking views. The open layout of the lodge invites in the sights and sounds of your beautiful surroundings. The lodge consists of 15 suites constructed from canvas and stone, each with its own deck where you can survey the expansive plains and meandering river. The interior décor of each suite is reminiscent of the most exclusive resorts, combining natural elements with contemporary design.`,
        bookingPrice: 337,
    },
    {
        hotelId: 8,
        hotelName: 'Mandarin Oriental San Francisco',
        star: 8,
        address: '222 Sansome St, San Francisco, CA 94104, United States',
        location: 'San Francisco, United States',
        image1: 'images/san-francisco-restaurant-brasserie.jpg',
        image2: 'images/Oia.jpg',
        overView: `This hotel occupies the top 11 floors of the 48-floor 345 California Center building. The twin towers of the building are 45-degree angles relative to the rest of the building which makes for a dazzling – if trippy - stay.

        The vibe is distinctly oriental, borrowing themes from the best hotels of the Far East. The 40th floor features a Sky Deck with lashings of view including the Golden Gate Bridge, Coit Tower, and Alcatraz Island. This being San Francisco, some of the world’s best wines are never far away; you can choose from the hotel’s selection of over 600 wines or take your pick from the classic cocktail menu. Some of the rooms have terraces where you can take your breakfast in the morning. Relax in goose-down bedding and slip-on robes.`,
        bookingPrice: 177,
    },

    {
        hotelId: 9,
        hotelName: 'Alila Jabal Akhdar',
        star: 10,
        address: 'Al Roose, Jabal Al Akhdar Al Jabal Al Akhdar OM, 621, Oman',
        location: 'OM, 621, Oman',
        image1: 'images/Alila_Jabal_Akhdar.jpg',
        image2: 'images/ColchuckLake.jpg',
        overView: `While Oman might not be the first place that pops into peoples' heads when they think about a luxurious vacation, it is soon about to change. The country is home to the magnificent Alila Jabal Akhdar resort in the Al Hajar Mountain range. The name Jabal Akhdar in Arabic stands for “The Green Mountain” in reference to the surrounding scenery.

        The hotel offers stunning views from the 5 star Juniper Restaurant that offers some of the most sumptuous meals you will ever experience. The menu is inspired by the “golden age of Arabic cuisine” and evolved to capture the influence of the Middle Eastern and Mediterranean trading through the ages.`,
        bookingPrice: 350,
    },
];

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
                            path='/hotel'
                            data = {HotelData[0]}
                        />
                        <Carditem 
                            src='images/martaba_safari_lodge.jpg'
                            text='You can fully immerse yourself in the beauty of South African wilderness'
                            label='Martaba Safari Lodge'
                            path='/hotel'
                            data = {HotelData[1]}
                        />
                    </ul>

                    <ul className='cards__items'>
                        <Carditem 
                            src='images/san-francisco-restaurant-brasserie.jpg'
                            text='Discover different world in Mandarin Oriental'
                            label='Mandarin Oriental San-Francisco'
                            path='/hotel'
                            data = {HotelData[2]}
                        />
                        <Carditem 
                            src='images/Alila_Jabal_Akhdar.jpg'
                            text='Those high-elevation hotels, aren’t they just the best?'
                            label='Living on edge in Oman'
                            path='/hotel'
                            data = {HotelData[3]}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;