import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Hotels.css';


import {CssBaseline, TextField, Grid, Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
   
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    text_field: {
        borderRadius: '0px',
    },
    submit: {
        margin: theme.spacing(2, 0, 0),
        height: '56px',
    },
    '@media (min-width: 780px)' : {
    
        
    },
}));


const  Hotels = () => {

    const HotelData = [
        {
            hotelId: 1,
            hotelName: 'Richmond Hotel And Apartments',
            star: 6,
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
            star: 8,
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
            star: 7,
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
            star: 9,
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
            star: 9,
            address: 'G, 1 Minto Rd, Dhaka 1000',
            location: 'Dhaka, Bangladesh',
            image1: 'images/intercontinental.jpg',
            image2: 'images/hotel8.jpg',
            overView: 'Located in the prestigious downtown business district, InterContinental Dhaka is the foremost name of luxury. The hotel is beautifully designed boasted with Millennium modern outlook with a touch of local culture. Featuring 226 luxury rooms and suites, a selection of restaurants offering exquisite cuisines.',
            bookingPrice: 102,
        },
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

    const [searchTerm, setSearchTerm] = useState(
        localStorage.getItem('search') || 'Sylhet'
    );


    useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm]);



    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = event => {

        event.preventDefault();
    }


    const searchedHotels = HotelData.filter(hotel =>
        hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className='hotels_container'>
            
            <SearchComponent search={searchTerm} onSearch={handleChange} onSearchSubmit={handleSearchSubmit}/>
            
            <List hotel_list={searchedHotels}/>
        </div>
    )
}
    


const List = ({ hotel_list }) => {

    return (
        
        <div className="hotel_list_outer">
            {hotel_list.map(item => (
            <Link className='hotel_list_link' to={
                {
                    pathname: '/hotel',
                    aboutProps: {
                        name: item
                    },
                }}
                key={item.hotelId}>
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <div className='hotel_list'>

                        <div className='hotel_list_inner1'>
                            <img className="hotel_list_inner1_img" src={item.image1} alt="hotel list"/>
                        </div>

                        <div className='hotel_list_inner2'>
                            <h3 className="hotel_name">{ item.hotelName }</h3>
                            <br/>
                            
                            <p className="rating_p">{item.star} <i className="fas fa-star"></i></p>
                            <br/><br/>
                            <hr/>
                            
                            <p className="address_p"><i className="fas fa-map-marker-alt map_icon"/> { item.address }</p>
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </Link>

            ))}
        </div>
        )
}


const SearchComponent = ({ search, onSearch, onSearchSubmit }) => {

    const classes = useStyles();


    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    let xsTextField, smTextField;
    let xsButton, smButton;
    let textFieldLabel;

    if(size[0] >= 475){
        textFieldLabel = "Enter a hotel name or destination"
    }else{
        textFieldLabel = "hotel or location"
    }

    if(size[0] >= 600) {
        xsTextField = 12;
        smTextField = 10;
        xsButton = 12;
        smButton = 2;
    }
    else if(size[0] < 600 && size[0] > 300){
        xsTextField = 8;
        smTextField = 6;
        xsButton = 4;
        smButton = 2;
    }
    else{
        xsTextField = 12;
        smTextField = 12;
    }
    
    return (

        <div className='hotel_search_container'>
            <div className='hotel_search_container_inner'>
                <h1 >Find and book a great experience</h1>
                <p>Discover more of your destination and make the most of your trip</p>
                <CssBaseline />

                <div className={classes.paper}>
                    
                    <form onSubmit={onSearchSubmit} className={classes.form} noValidate>
                        <Grid container spacing={1}>
                            <Grid item xs={xsTextField} sm={smTextField}>

                            
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="destination"
                                    label={textFieldLabel}
                                    name="destination"
                                    autoFocus
                                    value={search}
                                    className={classes.text_field}
                                    onChange={onSearch}
                                />
                            </Grid>
                            { size[0] > 300 &&
                            <Grid item xs={xsButton} sm={smButton}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={!search}
                                >
                                    Search
                                </Button>
                            </Grid>}
                        </Grid>
                        <br/>

                    </form>
                </div>

            </div>
        </div>
    
    );
}



export default Hotels;