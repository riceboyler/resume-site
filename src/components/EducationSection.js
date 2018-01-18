import React, {Component} from 'react';
import EducationItem from './Education/EducationItem';
import {education} from '../personalData';

class EducationSection extends Component {
    render() {
        const mappedEducationItems = education.map((item) => {
            return <EducationItem key={item.school} item={item} />;
        });
        return (
            <div>
                <section
                    className="resume-section p-3 p-lg-5 d-flex flex-column"
                    id="education"
                >
                    <div className="my-auto">
                        <h2 className="mb-5">Education</h2>
                        {mappedEducationItems}
                    </div>
                </section>
            </div>
        );
    }
}

export default EducationSection;
