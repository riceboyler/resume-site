import React from 'react';
import ExperienceItem from './Experience/ExperienceItem';
import {experience} from '../personalData';

const ExperienceSection: React.FC = () => {
    const experienceItems = experience.map((item) => {
        return <ExperienceItem item={item} />;
    });
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
        >
            <div className="my-auto">
                <h2 className="mb-5">Experience</h2>
                {experienceItems}
                <div className="subheading mb-3">
                    There's more, but it's so long ago, it's not really relevant
                    anymore. But hey, if you want it,{' '}
                    <a href="mailto:riceboyler@gmail.com">ask for it!</a>
                </div>
            </div>
        </section>
    );
};

ExperienceSection.propTypes = {};

export default ExperienceSection;
