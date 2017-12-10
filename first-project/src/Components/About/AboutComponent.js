import React ,{Component} from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

//aboutStructure
import MyStory from './AboutComponentFolder/MyStoryComponent';
import TheStart from './AboutComponentFolder/TheStartComponent';
import StartingToThink from './AboutComponentFolder/StartingToThinkComponent';
import TheGame from './AboutComponentFolder/TheGameAndThePlay';
import FoxxyHats from './AboutComponentFolder/FoxxyHatsLLC';
import Monk from './AboutComponentFolder/AttemptingToBeAMonk';
import TryAgain from './AboutComponentFolder/TryingAtLifeComponent';
import FindingPassion from './AboutComponentFolder/FindingPassionandLosingHopeComponent';
import HelpingHand from './AboutComponentFolder/AHelpingHand';
import DevMountain from './AboutComponentFolder/DevMountainComponent';
import CurrentActivities from './AboutComponentFolder/CurrentActivitiesComponent';


export default class AboutComponent extends Component{

    render(){
        return(
            <section>
               <Header />
               <MyStory />
               <TheStart />
               <StartingToThink />
               <TheGame />
               <FoxxyHats />
               <Monk />
               <TryAgain />
               <FindingPassion />
               <HelpingHand />
               <DevMountain />
               <CurrentActivities />
               <Footer />
            </section>
        )
    }
}