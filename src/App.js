import React, {Component} from 'react';
import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import InterestsSection from './components/InterestsSection';
import AwardsSection from './components/AwardsSection';

const social = 'riceboyler';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid p-0">
                    <AboutSection
                        fname="Jason"
                        lname="Clark"
                        address="1943 West Street"
                        city="Wrentham"
                        state="MA"
                        zip="02093"
                        phone="(615) 852-5275"
                        email="riceboyler@gmail.com"
                        facebook={social}
                        twitter={social}
                        github={social}
                        linkedin={social}
                        bitbucket={social}
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
