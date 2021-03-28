import React from 'react';

import '../../App.css';
import './About.css';

export default function About() {
    return( 
        <>
            <div className="aboutContainer">
                <img className="aboutContainer_img" src="images/about_us.jpg" alt="about us"/>

                <div className="aboutContainer_inner">

                    <div className="aboutContainer_inner1">
                        <h1 className='about'>About Us</h1>
                        <hr/>
                    </div>

                    <div className="aboutContainer_inner2">
                        <p>When it comes to both our product and our organization, we are at the forefront of innovation. We are curious, enthusiastic and driven by the desire to exceed our users’ expectations.</p>
                        <a href="/about-us">Read more about who we are <i className="fas fa-long-arrow-alt-right"></i></a>
                        <br/><br/>
                        <div className="col g-1of1 g2-3of4 g2-offset-1of4 p_cell no-padding-left no-padding-bottom class-facts">
                            <div className="row">
                                <div className="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                    <hr/>
                                    <p>Hotels &amp; Alternative rooms</p>
                                    <span><p className="num-facts_p">5m+</p></span>
                                </div>
                                <div className="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                <hr/>
                                <p>Countries Our Meta Search Covers</p>
                                <span><p className="num-facts_p">190</p></span>
                                </div>
                                <div className="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                <hr/>
                                <p>Localized Websites &amp; Apps</p>
                                <span><p className="num-facts_p">54</p></span>
                            </div>
                        </div>
                        <br/>
                        <h2>Our Culture and Values</h2>
                        <p>At Get Easy Hotel, we’re a little unusual. We are a team of traders, powered by a shared passion to stay ahead of the game. We are a diverse, inquisitive and versatile team of 90 different nationalities, who come together to work towards one common goal.</p>
                        <a href="/about-us">Learn more about our culture and values <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
                    </div>
                </div>
            </div>
        </>

    )
}