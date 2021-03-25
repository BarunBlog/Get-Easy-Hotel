import React from 'react';

import './Hotel.css';
import '../../App.css';

const Hotel = props => {
    if(props.location.aboutProps){
      let hotel = props.location.aboutProps.name;
      

      let arr = ["foo"];
      return (
          <>

            <div className="hotel_container">
                <div className="hotel_container_inner">
                  <h3>{hotel.hotelName}</h3>

                  {Array.prototype.push.apply(arr,  Array.from(Array(hotel.star-1).keys()) )}
                  {arr.map((item, i) => 
                      <p key={i} className="rating_p">{item.star} <i className="fas fa-star"></i></p>
                  )}
                  <br/>

                  <hr/>

                  <p className="address_p"><i className="fas fa-map-marker-alt map_icon"/> { hotel.address }</p>

                  <div className="hotel_image_container">
                    <div className="hotel_image_container1">
                      <img className="hotel_image1" src={hotel.image1} alt="hotel chobi"/>
                    </div>

                    <div className="hotel_image_container2">
                      <img className="hotel_image2" src={hotel.image2} alt="hotel chobi"/>
                    </div>

                    <div className="price">

                      <div className="booking_price">
                        <p className="price_p">${hotel.bookingPrice}</p>
                      </div>
                      
                      <div className='booking_btn'>
                        <button type="button" className="btn btn-success btn-lg">Book now</button>
                      </div>
                    </div>

                  </div>
                  <div className="overView">

                    <p className='overview_p'>{hotel.overView}.</p>
                  </div>

                 
                </div>
            </div>
          </>
      )
    }
    else{
      return (
        <>
          <div className="hotel_container">
          <div className="hotel_container_inner">
            <h2>Looks like you directly entered here</h2>
          </div>
          </div>
        </>
      )
    }
    
}

export default Hotel;