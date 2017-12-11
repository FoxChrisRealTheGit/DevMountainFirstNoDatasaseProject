import React from 'react';

import '../../../css/components/Main-Pages/resume.css';

export default function ResumeEducation() {

    return (
        <section className="resumeEducationWhole">
            <section>
                <h2 className="resumeSectionHead">Education</h2>
                <div className="resumeItem">
                    <h3>November 2017-Current <h4 className="resumeItemName">DevMountain Web Development Bootcamp</h4></h3>
                </div>
                <div className="resumeItem">
                    <h3>March 2017-Current <h4 className="resumeItemName">Lynda.com Completed Certificates</h4></h3>
                </div>
                <div className="resumeItem">
                    <h3>August 2017-Current <h4 className="resumeItemName">Southern New Hampshire Universirty</h4></h3>
                    <ul>
                    <li>Working on BA in Graphic Design and Media Arts</li>
                    </ul>
                </div>
                <div className="resumeItem">
                    <h3>August 2012 - December 2013 <h4 className="resumeItemName">Pikes Peak Community College</h4></h3>
                    <ul>
                    <li>Associate Degree</li>
                    </ul>
                </div>
            </section>
            <section className="resumeItem">
                <h2 className="resumeSectionHead">Work Experience</h2>
                <p>Portfolio</p>
                <div className="resumeItem">
                    <h3>August 2017 - November 2017<h4 className="resumeItemName">Amazon</h4></h3>
                    <ul>
                    <li>Worked with Robots</li>
                    </ul>
                </div>
                <div className="resumeItem">
                    <h3>August 2016 - March 2016<h4 className="resumeItemName">Colorado Springs Youth Symphony</h4></h3>
                    <ul>
                    <li>Receptionist</li>
                    </ul>
                </div>
            </section>
        </section>
    )
}