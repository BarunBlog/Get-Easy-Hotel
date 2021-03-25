import React from 'react';
import { Link } from 'react-router-dom';

function Carditem(props) {
    return (
        <>
            <div className='cards__item'>
                <Link className='cards__item__link' to={
                    {
                        pathname: props.path,
                        aboutProps: {
                            name: props.data
                        },
                    }}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} className='cards__item__img' alt='card'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Carditem;