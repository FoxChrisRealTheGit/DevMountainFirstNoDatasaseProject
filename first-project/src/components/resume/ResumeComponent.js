import React , { Component } from 'react';

import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

//resume components
import ResumeHead from './ResumeComponentFolder/ResumeHead';
import ResumeEducation from './ResumeComponentFolder/ResumeEducation';

export default class ResumeComponent extends Component {

    render() {
        return (
            <div>
            <Header />
            <ResumeHead />
            <ResumeEducation />
            <Footer />
            </div>
        )
    }
}