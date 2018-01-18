import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ExperienceItem from './Experience/ExperienceItem';
import {experience} from '../personalData';

class ExperienceSection extends Component {
    render() {
        const experienceItems = experience.map((item) => {
            return <ExperienceItem item={item} />;
        });
        return (
            <section
                class="resume-section p-3 p-lg-5 d-flex flex-column"
                id="experience"
            >
                <div class="my-auto">
                    <h2 class="mb-5">Experience</h2>
                    {experienceItems}
                </div>
            </section>
        );
    }
}

ExperienceSection.propTypes = {};

export default ExperienceSection;
