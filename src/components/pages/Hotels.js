import React, { useState } from 'react';

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
}));




const  Hotels = () => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const hotel_list = [
        {
            name: 'Hotel radison',
            location: 'Dhaka, Bangladesh',
            ratings: '5',
            review: 'its awesome',
            objectID: 0,
        },
        {
            name: 'Hotel roseView',
            location: 'Sylhet, Bangladesh',
            ratings: '4',
            review: 'Very good',
            objectID: 1,
        },
    ]

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const searchedHotels = hotel_list.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className='hotels_container'>
            <SearchComponent onSearch={handleChange}/>


            <List hotel_list={searchedHotels}/>
        </div>
    )
}
    


const List = (props) => 
    props.hotel_list.map(item => (

          <div key={item.objectID}>
            
            <span>{ item.name }</span>
            <span>{ item.location }</span>
            <span>{ item.ratings }</span>
            <span>{ item.review }</span>
          </div>

      )
      
    )



const SearchComponent = props => {

    const classes = useStyles();
    
    return (

        <div className='hotel_search_container'>
            <div className='hotel_search_container_inner'>
                <h1 >Find and book a great experience</h1>
                <p>Discover more of your destination and make the most of your trip</p>
                <CssBaseline />

                <div className={classes.paper}>
                    
                    <form className={classes.form} noValidate>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={10}>

                            
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="destination"
                                    label="Enter a hotel name or destination"
                                    name="destination"
                                    autoFocus
                                    className={classes.text_field}
                                    onChange={props.onSearch}
                                />
                            </Grid>
                            
                            <Grid item xs={12} sm={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </div>

            </div>
        </div>
    
    );
}



export default Hotels;