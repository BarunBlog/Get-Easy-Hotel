import React from 'react';

import '../../App.css';
import './About.css';

export default function About() {
    return( 
        <>
            <div className="aboutContainer">
                <img class="aboutContainer_img" src="images/about_us.jpg" alt="about us"/>

                <div className="aboutContainer_inner">

                    <div className="aboutContainer_inner1">
                        <h1 className='about'>About Us</h1>
                        <hr/>
                    </div>

                    <div className="aboutContainer_inner2">
                        <p>When it comes to both our product and our organization, we are at the forefront of innovation. We are curious, enthusiastic and driven by the desire to exceed our users’ expectations.</p>
                        <a href="/about-us">Read more about who we are</a>
                        <br/>
                        <div class="col g-1of1 g2-3of4 g2-offset-1of4 p_cell no-padding-left no-padding-bottom class-facts">
                            <div class="row">
                                <div class="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                    <hr/>
                                    <p>Hotels &amp; Alternative Accommodation</p>
                                    <span><p className="num-facts_p">5m+</p></span>
                                </div>
                                                <div class="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                <hr/>
                                <p>Countries Our Meta Search Covers</p>
                                <span><p className="num-facts_p">190</p></span>
                                </div>
                                <div class="col g-1of2 g1-1of4 g2-1of5 num-facts">
                                <hr/>
                                <p>Localized Websites &amp; Apps</p>
                                <span><p className="num-facts_p">54</p></span>
                            </div>
                        </div>
                        <br/>
                        <h3>Our Culture and Values</h3>
                        <p>At Get Easy Hotel, we’re a little unconventional. We are a team of entrepreneurs, powered by a shared passion to stay ahead of the game. We are a diverse, inquisitive and versatile team of 90 different nationalities, who come together to work towards one common goal.</p>
                        <a href="/about-us">Learn more about our culture and values</a>
            </div>
                    </div>
                </div>
            </div>
        </>

    )
}