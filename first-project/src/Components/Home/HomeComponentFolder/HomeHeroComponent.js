import React, { Component } from 'react';

import '../../../css/components/Main-Pages/home.css';

export default class HomeHeroComponent extends Component {

    render() {

        return (
            <div className="whole-wrapper">
                <div className="HeroImage">
                    <img src="../../../../images/chrisinaspen.jpg" alt="Christopher in Aspen Colorado" width="100%" />
                    <h1 className="welcome-text">Welcome</h1>
                </div>
                <section className="shortDescriptions">
                    <div className="designerDescription">
                        <div><i className="fa fa-columns fa-3x homeIcons" aria-hidden="true"></i></div>
                        <p>Currently, I am working on my BA in Graphic Design. I have taught myself HTML, CSS, and JavaScript. This website was made in Dreamweaver utilizing the Bootstrap framework. I’ve also made logos, Brochures, Branding assets, and various stationary.</p>
                    </div>
                    <div className="writerDescription">
                    <div><i class="fa fa-pencil fa-3x homeIcons" aria-hidden="true"></i></div>
                        <p>Recently, I finished my first novel. There is one other novel being worked on as well. I have well over 200 pages of various scripts, a few plays being worked on, and a collection of short stories near completion. Most days I can average 4k words. The most that I have written in a day is near 10k.</p>
                    </div>
                    <div className = "poetDescription">
                    <div><i class="fa fa-microphone fa-3x homeIcons" aria-hidden="true"></i></div>
                        <p>The largest crowd that I have performed in front of was near 300 people. I have performed at various venues around the front-range of Colorado. My most recent storytelling performance was for the Story Project in Manitou Springs, Co.</p>
                    </div>
                </section>
                <h6 className="home-mini-links">My Story...</h6>

            </div>
        )
    }
}