import React from 'react';
import EducationItem, {EdItem} from './Education/EducationItem';
import {education} from '../personalData';

const EducationSection: React.FC = () => {
    const mappedEducationItems = education.map((item: EdItem) => {
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
};

export default EducationSection;
