import React from 'react';

import '../../../css/components/Main-Pages/resume.css';


// <img className="codeWars" src="https://www.codewars.com/users/FoxChrisRealThe/badges/large" alt="" height="500px" width="300px" />

//  <img className="ACE" src="../../../images/Resume_about/Certified_Expert_Illustrator_CC_badge.png" alt="Adobe Certified Expert Badge" />

export default function ResumeHead() {

    return (
        <section className="resumeMainHead">
            <div className="photodiv">
                <img className="resumePhoto" src="../images/Resume_About/PhotoOfChris.JPG" alt="Christopher Fox" />
                <h2>christopher fox</h2>
            </div>
            <div className="thatDiv">
<h6 className="words">Designer, Writer, Poet</h6>
                   
                
            </div>
        </section>
    )
}