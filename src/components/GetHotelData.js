import React from 'react';

const GetHotelData = ({ getData }) => {
    console.log('data');

    const HotelData = [
        {
            hotelId: 1,
            hotelName: 'Richmond Hotel And Apartments',
            star: 6.4,
            address: '10th Floor, Al Hamra Shopping City, Hazrat Shahjalal Road, Zindabazar, Sylhet',
            location: 'Sylhet, Bangladesh',
            image1: 'images/richmond1.jpg',
            image2: 'images/richmond2.jpg',
            overView: 'Conveniently located in Sylhet, Richmond Hotel and Apartments is a great base from which to explore this vibrant city. The hotel is not too far from the city center.',
            bookingPrice: 23,
        },
        {
            hotelId: 2,
            hotelName: 'Noorjahan Hotel',
            star: 9.0,
            address: 'Waves 1, Dargah Gate, Sylhet 3100',
            location: 'Sylhet, Bangladesh',
            image1: 'images/Noorjahan.jpg',
            image2: 'images/noorjahan1.jpg',
            overView: 'Noorjahan Hotel aims to offer you comfortable surroundings, great food and excellent service to make your stay truly enjoyable.Please take a look through our web site where you will find most of the information you need. Call us to discuss your hotel reservation. We welcome you to our hotel as you enlighten our abode with your warmth and smiley nature. We are truly grateful to you for your visit here and hope to have memorable moments throughout your visit. May we take this opportunity to reassure you that our hotel’s team will continue to not just provide the highest standards of service and comfort you have been so accustomed to, bur exceeding your expectations will be our constant mission. Last but not least, while the entire our team remains at your disposal for any assistance or service you may need. Thanking you in anticipation of your patronage.',
            bookingPrice: 37,
        },
        {
            hotelId: 3,
            hotelName: 'Rose View',
            star: 7.1,
            address: 'Shahjalal Uposhohor Sylhet, 3100',
            location: 'Sylhet, Bangladesh',
            image1: 'images/hotel4.jpg',
            image2: 'images/hotel5.jpg',
            overView: 'Offering an indoor swimming pool, 3 dining options and a fitness center, Rose View Hotel is located in Sylhet. Activities like table tennis can be enjoyed.',
            bookingPrice: 77,
        },

        {
            hotelId: 4,
            hotelName: 'Pan Pacific Sonargaon Dhaka Hotel',
            star: 9.3,
            address: '107 Kazi Nazrul Islam Ave, Dhaka 1215',
            location: 'Dhaka, Bangladesh',
            image1: 'images/Sonargaon.jpg',
            image2: 'images/hotel6.jpg',
            overView: 'At Pan Pacific Sonargaon Dhaka you will find a health club, spa, swimming pool and spa bath, along with a lobby lounge and cafe',
            bookingPrice: 150,
        },
        {
            hotelId: 5,
            hotelName: 'Intercontinental dhaka',
            star: 8.6,
            address: 'G, 1 Minto Rd, Dhaka 1000',
            location: 'Dhaka, Bangladesh',
            image1: 'images/intercontinental.jpg',
            image2: 'images/hotel8.jpg',
            overView: 'Located in the prestigious downtown business district, InterContinental Dhaka is the foremost name of luxury. The hotel is beautifully designed boasted with Millennium modern outlook with a touch of local culture. Featuring 226 luxury rooms and suites, a selection of restaurants offering exquisite cuisines.',
            bookingPrice: 102,
        },
    ];
    
    getData(HotelData);

    return (
        <>
        </>
    )
}

export default GetHotelData;