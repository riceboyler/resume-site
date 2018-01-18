import React, {Component} from 'react';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import InterestsSection from './components/InterestsSection';
import AwardsSection from './components/AwardsSection';
import {userDetails} from './personalData';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid p-0">
                    <AboutSection
                        fname={userDetails.fname}
                        lname={userDetails.lname}
                        address={userDetails.address}
                        city={userDetails.city}
                        state={userDetails.state}
                        zip={userDetails.zip}
                        phone={userDetails.phone}
                        email={userDetails.email}
                        facebook={userDetails.facebook}
                        twitter={userDetails.twitter}
                        github={userDetails.github}
                        linkedin={userDetails.linkedin}
                        bitbucket={userDetails.bitbucket}
                    />
                    <ExperienceSection />
                    <EducationSection />
                    <SkillsSection />
                    <InterestsSection />
                    {/* <AwardsSection /> */}
                </div>
            </div>
        );
    }
}

export default App;
